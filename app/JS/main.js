import "../style.css";

async function getData() {
  try {
    const response = await fetch("https://valorant-api.com/v1/bundles");
    const info = await response.json();
    const data = info.data.slice(0, 125);
    data.forEach((x) => {
      console.log(x.displayName);
    });
    createCards(data);
  } catch (error) {
    console.log(error);
    alert("sorry");
  }
}
function createCards(data) {
  data.forEach((el) =>
    document
      .querySelector(".container")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="card w-[27%] h-[auto] border-[5px] border-black flex flex-col items-center justify-around mb-[5%] text-center"><img src="${el.displayIcon}" alt=""></div>`
      )
  );
}
console.log(getData());
