import axios from 'axios';

const country = {};

function handleClick(){
}

function handleInputChange(e){
    country.searchValue = e.target.value
}

function handleSubmit(e){
    e.preventDefault();
    console.log("Handle submit!!!!");
    if (country.searchValue){
        fetchCountry(country.searchValue);

    }else alert("Graag een land invoeren");
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleClick);

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", handleInputChange)

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", handleSubmit);

async function fetchCountry(nameCountry) {

    try {
        const resultInitial = await axios.get('https://restcountries.com/v2/name/' + nameCountry + "?fullText=true");

        const result = resultInitial.data[0];
        country.name = result.name;
        country.currency = result.currencies[0].name;
        country.language = result.languages[0].name;
        country.population = result.population;
        country.capital = result.capital;
        country.subregion = result.subregion;
        country.flag = result.flag;
        console.log(result);
        console.log(country);


        printCountry(country);

    } catch (e) {
        console.error(e);
    }
}

function printCountry() {
    const countryDetailsBlock = document.getElementById("showCountryDetails");
    countryDetailsBlock.innerHTML = `
    <div class="box">
       <span id="topofbox">
                <img src=${country.flag} width="30" height="30" class="flag-image">
                <h3>${country.name}</h3>    
       </span>  
        <div id="country-details">${country.name} is situated in ${country.subregion}. 
        It has a population of ${country.population} people. 
        The capital is ${country.capital} and you can pay with ${country.currency}'s. 
        They speak ${country.language}.</div>
    </div>`
}




