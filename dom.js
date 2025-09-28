import { getInfo } from "./script.js";

const platformFilter = document.getElementById("platform");
const typeFilter = document.getElementById("type");
const sortFilter = document.getElementById("sort");
const getBtn = document.getElementById("getBtn");
const cards = document.getElementById("cardsGrid");

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

async function renderPage() {
    
  platform.forEach((e) => {
    const option = document.createElement("option");
    option.value = `${e}`;
    option.innerText = `${e}`;
    platformFilter.appendChild(option);
  });

  type.forEach((e) => {
    const option = document.createElement("option");
    option.value = `${e}`;
    option.innerText = `${e}`;
    typeFilter.appendChild(option);
  });

  sort.forEach((e) => {
    const option = document.createElement("option");
    option.value = `${e}`;
    option.innerText = `${e}`;
    sortFilter.appendChild(option);
  });
}

renderPage();

getBtn.addEventListener("click", userRequest);

async function userRequest() {
  console.log("Click");
  getInfo();
}
