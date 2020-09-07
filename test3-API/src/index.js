import { Header } from "./components/header";
import { ShipList } from "./components/shipList";
import { getAllShips } from "./service";

const drawShips = (ships) => {
  document.querySelector("#app1").innerHTML = "";
  document.querySelector("#app1").append(ShipList(ships));
};

document.querySelector("header").append(Header());

let ships;
getAllShips().then((res) => {
  ships = res.data;
  drawShips(ships);
});

let selectMenu = document.querySelector("#selekt");

selectMenu.addEventListener("change", (e) => {
  e.preventDefault();
  let selectedFilter = selectMenu.value;
  if (selectedFilter == "") {
    drawShips(ships);
  } else {
    selectedFilter = selectedFilter == "true";
    drawShips(ships.filter((el) => el.active == selectedFilter));
  }
});
