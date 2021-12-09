// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((res) => {
//     console.log("RESPONSE WAITING TO PARSE....", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("DATA PARSED.....", data);
//   })
//   .catch((e) => {
//     console.log("OH NO! ERROR", e);
//   });

// axios
//   .get("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((res) => {
//     console.log(res.data.ticker.price);
//   })
//   .catch((e) => {
//     console.log("OH NO! ERROR", e);
//   });

// const fetchBitcoin = async () => {
//   try {
//     const res = await axios.get(
//       "https://api.cryptonator.com/api/ticker/btc-usd"
//     );
//     console.log(res.data.ticker.price);
//   } catch (e) {
//     console.log("OH NO! ERROR", e);
//   }
// };

const form = document.querySelector("#searchF");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const inputTerm = form.elements.query.value;
  const conf = { params: { q: inputTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, conf);
  displayImages(res.data);
  form.elements.query.value = "";
});

const displayImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
