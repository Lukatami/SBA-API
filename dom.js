import { getInfo } from "./script.js";

const getBtn = document.getElementById("getBtn")
getBtn.addEventListener("click", userRequest)

async function userRequest() {
    console.log("Click")
    getInfo();
}