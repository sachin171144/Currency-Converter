const populate = async (value, currency) => {
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_j3jVc6O40k1QG4rIE9m1HZhc0huhJCkFzzE9Lzyl&base_currency=" +
    currency;
  let myStr = "";
  let response = await fetch(url);
  let rJson = await response.json();
  
  for (let key of Object.keys(rJson["data"])) {
    myStr += `
    <tr>
    <td>${key}</td>
    <td>${rJson["data"][key]["code"]}</td>
    <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
    </tr>
    `;
  }
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(document.querySelector("input[type='number']").value);
  const currency = document.querySelector("select[name='currency']").value;
  document.querySelector(".output").style.display = "block";
  populate(value, currency);

});
