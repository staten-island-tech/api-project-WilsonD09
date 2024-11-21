import "../style.css";

async function getData() {
  try {
    const response = await fetch("https://valorant-api.com/v1/bundles");
    const info = await response.json();
    const data = info.data.slice(0, 125);
    createCards(data);
  } catch (error) {
    console.log(error);
    alert("sorry");
  }
}
function createCards(data) {
  data.forEach((el) =>
    document
      .querySelector(".box")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="card w-[27%] h-[auto] border-[5px] border-black flex flex-col items-center justify-around mb-[5%] text-center"><h2>${el.displayName}</h2><img src="${el.displayIcon}" alt=""></div>`
      )
  );
}
console.log(getData());
