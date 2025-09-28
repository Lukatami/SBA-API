// Import axios instance
import { api } from "./api-info.js";

// Declare endpoint variable
const giveaways = "/giveaways";

const id = 0;

// Main getData function
export async function getData({ platform, type, sort }) {
  try {
    // Empty request param object
    const params = {};

    // Exclude empty or default filters values from request params
    if (platform && platform !== "default") params.platform = platform;
    if (type && type !== "default") params.type = type;
    if (sort && sort !== "default") params["sort-by"] = sort;

    // Getting response with applied params
    const response = await api.get(giveaways, { params });
    // Returning data
    return response.data;
  } catch (error) {
    console.error(error);
    // Returning empty array
    return [];
  }
}
