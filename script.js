import { api } from "./api-info.js";

const giveaways = "/giveaways";
const platform = [
  "pc",
  "steam",
  "epic-games-store",
  "ubisoft",
  "gog",
  "itchio",
  "ps4",
  "ps5",
  "xbox-one",
  "xbox-series-xs",
  "switch",
  "android",
  "ios",
  "vr",
  "battlenet",
  "origin",
  "drm-free",
  "xbox-360",
];
const type = ["game", "loot", "beta"];
const sort = ["date", "value", "popularity"];

export async function getInfo() {
  try {
    const response = await api.get(giveaways, {params: {}});
    const result = response.data;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
