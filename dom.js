// Import getData function
import { getData } from "./script.js";

// Declare selectors variables
const platformFilter = document.getElementById("platform");
const typeFilter = document.getElementById("type");
const sortFilter = document.getElementById("sort");
const getBtn = document.getElementById("getBtn");
const cardsGrid = document.querySelector(".cardsGrid");

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
getBtn.addEventListener("click", renderCards);

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
  return response;
}

// Rendering Event handler for webpage
async function renderCards() {
  // Call userRequest to get data with filters
  const data = await userRequest();

  // Clear cardsGrid
  cardsGrid.innerHTML = "";

  // For each recieved data object create card
  data.forEach((e) => {
    // Create card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image container
    const imageBox = document.createElement("a");
    imageBox.classList.add("img");
    // Make image clickable with recieved value
    imageBox.href = e.open_giveaway;
    // Link following opens new tab
    imageBox.target = "_blank";
    // Create image element
    const image = document.createElement("img");
    image.src = e.thumbnail;
    image.alt = e.title;
    // Add image to image container
    imageBox.appendChild(image);

    // Create content container
    const content = document.createElement("div");
    content.classList.add("cardContent");

    // Create text element with recieved title value
    const title = document.createElement("h3");
    title.textContent = e.title;

    // Create text element with recieved worth value
    const worth = document.createElement("p");
    // If it's N/A => return N/A
    if (/N\/A/.test(e.worth)) {
      worth.innerHTML = `${e.worth}`;
    } else {
      // If it's price => strike it
      worth.innerHTML = `<s>${e.worth}</s>`;
    }

    // Add title and worth to content container
    content.appendChild(title);
    content.appendChild(worth);

    // Add image and content containers to card container
    card.appendChild(imageBox);
    card.appendChild(content);

    // Append card to cardsGrid
    cardsGrid.appendChild(card);
  });
}

// Add eventListener to any loading
document.addEventListener("DOMContentLoaded", renderCards);
