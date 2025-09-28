// Content Overview:
// https://www.gamerpower.com/api-read
// CORS Support:
// https://rapidapi.com/digiwalls/api/gamerpower

// Declare variable with provided API_KEY
const API_KEY = "0bc5984a5emsh30a85dda347cc22p172484jsn7cbf808e14cd";

// Create instance of axios with default parameters
export const api = axios.create({
  baseURL: "https://gamerpower.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "gamerpower.p.rapidapi.com",
  },
});


