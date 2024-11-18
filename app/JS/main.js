import "../style.css";

async function getData() {
  try {
    const response = await fetch("https://valorant-api.com/v1/bundles");
    const info = await response.json();
    const data = info.data.slice(0, 125);
    data.forEach((x) => {
      console.log(x.displayName);
    });
  } catch (error) {
    console.log(error);
    alert("sorry");
  }
}

getData();
