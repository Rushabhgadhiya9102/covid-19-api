// ------- A P I s ----------

const url = "https://covid-19-statistics.p.rapidapi.com/reports/total";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3667150f90msh746d6dfcd8dc48cp1ddad4jsn5cee1a3f9b72",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

// ------- F E T C H - D A T A ----------


function fetchData(){

  fetch(url, options)
  .then(response => response.json())
  .then(data => display(data.data))
  .catch(error => console.error(error))

}

fetchData()

// --------- D I S P L A Y - D A T A ---------

function display(data){

  let totalConfirmed = document.getElementById("totalConfirmed");
  let totalActive = document.getElementById("totalActive");
  let totalDeaths = document.getElementById("totalDeaths");

  totalActive.textContent = data.active
  totalConfirmed.textContent = data.confirmed
  totalDeaths.textContent = data.deaths

}
