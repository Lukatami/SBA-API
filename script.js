import { api } from "./api-info.js";

const giveaways = "/giveaways";
const id = 0;


export async function getInfo() {
  try {
    const response = await api.get(giveaways, {params: {}});
    const result = response.data;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
