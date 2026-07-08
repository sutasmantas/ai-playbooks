/**
 * Energylandia Trip Planner — Google Apps Script backend
 *
 * Deploy: see INSTRUCTIONS.txt
 *
 * On first submission a Google Sheet named "Trip Responses" is created
 * in your Drive and every response is appended as a row.
 */

const SHEET_NAME = 'Trip Responses';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Energylandia Trip Planner')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** Called from the client when the form is submitted. */
function submitResponse(payload) {
  const sheet = getOrCreateSheet_();
  const stops = (payload.stops || [])
    .map(s => s.label || (s.lat.toFixed(3) + ',' + s.lng.toFixed(3)))
    .join(' | ');
  sheet.appendRow([
    new Date(),
    payload.name || '',
    payload.going || '',
    (payload.availableDays || []).join(', '),
    stops,
    JSON.stringify(payload.stops || []),
    (payload.vibes || []).join(', '),
    (payload.activities || []).join(' | '),
    payload.tripLength || '',
    payload.budget || '',
    payload.notes || ''
  ]);
  return { ok: true };
}

/** Returns all responses so the form can show everyone's data. */
function getResponses() {
  const sheet = getOrCreateSheet_();
  const last = sheet.getLastRow();
  if (last < 2) return [];
  const rows = sheet.getRange(2, 1, last - 1, 11).getValues();
  return rows.map(r => {
    let stops = [];
    try { stops = JSON.parse(r[5] || '[]'); } catch (e) {}
    return {
      name: r[1],
      going: r[2],
      availableDays: String(r[3] || '').split(',').map(s => s.trim()).filter(Boolean),
      stops: stops,
      vibes: String(r[6] || '').split(',').map(s => s.trim()).filter(Boolean),
      activities: String(r[7] || '').split('|').map(s => s.trim()).filter(Boolean),
      tripLength: String(r[8] || '')
    };
  });
}

function getOrCreateSheet_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('SHEET_ID');
  let ss;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; }
  }
  if (!ss) {
    ss = SpreadsheetApp.create(SHEET_NAME);
    props.setProperty('SHEET_ID', ss.getId());
    const sheet = ss.getActiveSheet();
    sheet.appendRow([
      'Submitted', 'Name', 'Going?', 'Available Days',
      'Suggested Stops', 'Stops (JSON)', 'Vibes', 'Activity Ideas',
      'Trip Length', 'Budget', 'Notes'
    ]);
    sheet.setFrozenRows(1);
  }
  return ss.getActiveSheet();
}
