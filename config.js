// ─────────────────────────────────────────────
//  MOCK ELECTION · SHARED CONFIG
//  Edit this file to update party names, colors,
//  and your JSONBin credentials.
// ─────────────────────────────────────────────

const ELECTION_CONFIG = {

  // ── Party definitions ──────────────────────
  parties: {
    nationalist: {
      name:       "Nationalist",
      shortName:  "NAT",
      color:      "#1A4F8A",   // deep crimson
      colorLight: "#4A82C8",
      colorDim:   "rgba(26,79,138,0.15)",
      // Replace with your actual logo path or URL:
      // logoUrl: "images/nationalist-logo.png",
      logoUrl:    null,
    },
    federalist: {
      name:       "Federalist",
      shortName:  "FED",
      color:      "#B22222",   // presidential navy
      colorLight: "#E8534A",
      colorDim:   "rgba(178,34,34,0.15)",
      // Replace with your actual logo path or URL:
      // logoUrl: "images/federalist-logo.png",
      logoUrl:    null,
    }
  },

  // ── JSONBin config ─────────────────────────
  // 1. Go to https://jsonbin.io and create a free account
  // 2. Create a new Bin with this initial JSON:
  //    { "nationalist": [], "federalist": [] }
  // 3. Copy your Bin ID and API key below
  jsonbin: {
    binId:  "6a13d1006610dd3ae89f488b",       // e.g. "6643abc123def456"
    apiKey: "$2a$10$Nrd5c.OOwQZzpx4Ba5AWrOxsQJHBTsYi18eyT0wC/5yb0R5KRuCRi",       // starts with $2b$10$...
    // Poll interval for display pages (milliseconds)
    pollInterval: 4000,
  },

  // ── Display settings ───────────────────────
  display: {
    // How long each confirmed name stays on screen (ms)
    nameDuration: 30000,
  }
};
