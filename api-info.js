const api = axios.create({
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
});