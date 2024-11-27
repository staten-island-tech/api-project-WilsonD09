import "../style.css";

async function getData() {
  try {
    const response = await fetch("https://valorant-api.com/v1/bundles");
    const info = await response.json();
    const data = info.data;
    createCards(data);
    search(data);
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
    const search = document.querySelector("#search").value.toLowerCase();
    const bundles = data.filter((el) =>
      el.displayName.toLowerCase().includes(`${search}`)
    );
    createCards(bundles);
    document.querySelector("#search").value = "";
  });
}
console.log(getData());
