/* Where To, Crew? — mock "crew" so the group-decision layer has real data.
   In production these come from the shared sheet; here we seed two friends
   and merge in whatever the current user has saved locally. */
(function(){
  // two friends besides "you"
  var SEED = [
    {
      name:'Marta', going:'in',
      availableDays:['2026-06-22','2026-06-23','2026-06-24','2026-06-25','2026-06-26'],
      stops:[
        {lat:50.0614,lng:19.9372,label:'Kraków — Old Town & Kazimierz'},
        {lat:49.2992,lng:19.9496,label:'Zakopane'}
      ],
      vibes:['Nature','Food','Chill','Culture'],
      tripLength:'4 days / 3 nights',
      activities:['Sunrise start for Morskie Oko','Oscypek tasting off Krupówki'],
      plan:{ length:'4d', day4:'bochnia', pass:'none', base2:'zakopane', addons:['thermal','dunajec'] }
    },
    {
      name:'Tomas', going:'in',
      availableDays:['2026-06-23','2026-06-24','2026-06-25','2026-06-27'],
      stops:[
        {lat:52.2297,lng:21.0122,label:'Warsaw stopover'},
        {lat:49.9881,lng:19.4569,label:'Energylandia (Zator)'}
      ],
      vibes:['Thrill','Nightlife','Food'],
      tripLength:'4 days / 3 nights',
      activities:['Ride Hyperion first thing','Kazimierz bar crawl'],
      plan:{ length:'4d', day4:'bochnia', pass:'energy', base2:'zakopane', addons:['kasprowy'] }
    }
  ];

  function all(){
    // merge current user's saved signup (if any) as a person named after them
    var me = null;
    try { var s = JSON.parse(localStorage.getItem('wtc-poland-signup')||'null'); if(s && s.name) me = s; } catch(e){}
    var mePlan = null;
    try { var p = JSON.parse(localStorage.getItem('wtc-poland-plan')||'null'); if(p && p.sel) mePlan = p.sel; } catch(e){}
    var people = SEED.slice();
    if(me){
      people.push({
        name: me.name + ' (you)', going: me.going||'in',
        availableDays: (me.dates||[]).map(function(d){ // "Jun 24" -> iso
          var m = /Jun\s+(\d+)/.exec(d); return m ? '2026-06-'+String(+m[1]).padStart(2,'0') : null;
        }).filter(Boolean),
        stops: [], vibes: me.vibes||[], tripLength: me.length||'',
        activities: me.activities||[], plan: mePlan
      });
    }
    return people;
  }

  // count helper -> [[key, n, [names...]], ...] sorted desc
  function tally(people, getList){
    var counts = {}, who = {};
    people.forEach(function(p){
      (getList(p)||[]).forEach(function(k){
        counts[k] = (counts[k]||0)+1;
        (who[k] = who[k]||[]).push(p.name);
      });
    });
    return Object.keys(counts).map(function(k){ return [k, counts[k], who[k]]; })
      .sort(function(a,b){ return b[1]-a[1]; });
  }

  window.CREW = { seed:SEED, all:all, tally:tally };
})();
