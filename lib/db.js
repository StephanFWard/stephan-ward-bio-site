/**
 * Stephan Ward bio site — minimal JSON file store for contact messages.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_PATH = path.join(DATA_DIR, 'db.json');

let db = null;

function save() {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

function init() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (fs.existsSync(DB_PATH)) {
    db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    if (!Array.isArray(db.contacts)) db.contacts = [];
  } else {
    db = { contacts: [] };
    save();
  }
}

function newId() {
  return `msg_${crypto.randomBytes(9).toString('hex')}`;
}

function saveContact({ name, email, message }) {
  const entry = {
    id: newId(),
    name: String(name).slice(0, 120),
    email: String(email).slice(0, 160),
    message: String(message).slice(0, 4000),
    createdAt: new Date().toISOString(),
  };
  db.contacts.push(entry);
  save();
  return entry;
}

module.exports = { init, saveContact };
