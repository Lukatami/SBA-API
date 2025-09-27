import * as api from "./api-info.js"

// const api = axios.create({
//   baseURL: "https://gamerpower.com/api",
//   params: { id: "525" },
//   headers: {
//     "x-rapidapi-host": "gamerpower.p.rapidapi.com",
//   },
// });

const options = {
  method: "GET",
  url: 'https://gamerpower.p.rapidapi.com/api/filter',
  params: {
    platform: 'epic-games-store.steam.android',
    type: 'game.loot'
  },
  headers: {
    'x-rapidapi-key': '0bc5984a5emsh30a85dda347cc22p172484jsn7cbf808e14cd',
    'x-rapidapi-host': 'gamerpower.p.rapidapi.com'
  }
};



async function getInfo() {
  try {
    const response = await api.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}




