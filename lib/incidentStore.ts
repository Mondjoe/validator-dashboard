import fs from "fs";
import path from "path";

const FILE = path.join(process.cwd(), "data/incidents.json");

export function loadIncidents() {
  try {
    const raw = fs.readFileSync(FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function addIncident(incident: any) {export function addSessionEvent(event: any) {
  const list = loadIncidents();
  list.unshift({
    type: "session-event",
    time: new Date().toISOString(),
    ...event,
  });
  fs.writeFileSync(FILE, JSON.stringify(list, null, 2));
}
  const list = loadIncidents();
  list.unshift(incident); // newest first
  fs.writeFileSync(FILE, JSON.stringify(list, null, 2));
}