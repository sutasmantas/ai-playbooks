/* Where To, Crew? — shared store API (Cloudflare Worker + KV).
   Durable for years, multi-trip. Each person is a separate KV key so concurrent
   edits never clobber each other. Open CORS (friends-only, low-stakes data).

   GET  /?trip=poland           -> { trip, crew: { <key>: {entry}, ... } }
   POST /  { trip, key, entry }  -> upserts one person's entry; returns full crew
*/
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};
const clean = (s, n) => String(s || '').replace(/[^a-z0-9_\- ]/gi, '').trim().slice(0, n);
const json = (o, status = 200) =>
  new Response(JSON.stringify(o), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });
    const url = new URL(req.url);

    if (req.method === 'GET') {
      const trip = clean(url.searchParams.get('trip'), 40) || 'poland';
      const prefix = trip + ':p:';
      const crew = {};
      let cursor;
      do {
        const list = await env.WTC.list({ prefix, cursor });
        for (const k of list.keys) {
          const v = await env.WTC.get(k.name);
          if (v) { try { crew[k.name.slice(prefix.length)] = JSON.parse(v); } catch (e) {} }
        }
        cursor = list.list_complete ? null : list.cursor;
      } while (cursor);
      return json({ trip, crew });
    }

    if (req.method === 'POST') {
      let body;
      try { body = await req.json(); } catch (e) { return json({ error: 'bad json' }, 400); }
      const trip = clean(body.trip, 40) || 'poland';
      const key = clean(body.key, 80).toLowerCase();
      if (!key || !body.entry || typeof body.entry !== 'object') return json({ error: 'need key + entry' }, 400);
      const payload = JSON.stringify(body.entry);
      if (payload.length > 60000) return json({ error: 'entry too big' }, 413);
      await env.WTC.put(trip + ':p:' + key, payload);
      return json({ ok: true, trip, key });
    }

    return json({ error: 'method not allowed' }, 405);
  },
};
