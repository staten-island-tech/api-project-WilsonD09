import "../style.css";

async function getData() {
  try {
    const response = await fetch("https://valorant-api.com/v1/bundles");
    const info = await response.json();
    const data = info.data.slice(1, 125);
    createCards(data);
  } catch (error) {
    console.log(error);
    alert("sorry");
  }
}
function createCards(data) {
  document.querySelector(".box").innerHTML = "";
  data.forEach((el) =>
    document
      .querySelector(".box")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="card w-[27%] h-[auto] border-[5px] border-black flex flex-col items-center justify-around mb-[5%] text-center"><h2>${el.displayName}</h2><img src="${el.displayIcon}" alt=""></div>`
      )
  );
}
function search(data) {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let search = document.querySelector("#search").value;
    let bundles = data.filter((el) => el.displayName.includes(`${search}`));
  });
  createCards(bundles);
}
console.log(getData());
