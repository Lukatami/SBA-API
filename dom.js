// Import getData function
import { getData } from "./script.js";

// Declare selectors variables
const platformFilter = document.getElementById("platform");
const typeFilter = document.getElementById("type");
const sortFilter = document.getElementById("sort");
const getBtn = document.getElementById("getBtn");
const cards = document.getElementById("cardsGrid");

// Array of platform options
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
// Array of type options
const type = ["game", "loot", "beta"];
// Array of sort options
const sort = ["date", "value", "popularity"];

// Run renderPage function
renderPage();

// Dynamic rendering webpage
async function renderPage() {
  // Creating platformFilter options
  platform.forEach((e) => {
    const option = document.createElement("option");
    option.value = e;
    option.innerText = e;
    platformFilter.appendChild(option);
  });
  // Creating typeFilter options
  type.forEach((e) => {
    const option = document.createElement("option");
    option.value = e;
    option.textContent = e;
    typeFilter.appendChild(option);
  });
  // Creating sortFilter options
  sort.forEach((e) => {
    const option = document.createElement("option");
    option.value = e;
    option.innerText = e;
    sortFilter.appendChild(option);
  });
}

// Add click eventListener to getBtn
getBtn.addEventListener("click", userRequest);

// Event handler for getBTn
async function userRequest() {
  // Gather filter values
  const filters = {
    platform: platformFilter.value,
    type: typeFilter.value,
    sort: sortFilter.value,
  };
  // Call getData function and provide applied filters values
  const response = await getData(filters);
  console.log(response);
}

