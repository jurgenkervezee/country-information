import axios from 'axios';

async function fetchCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all/');

        console.log(result.data[0]);
        const sortedResult = result.data;
        sortedResult.sort((a,b)=> {
            return a.population - b.population
        });

        const countryListBlock = document.getElementById("ListOfCountries");
        countryListBlock.innerHTML = listCountryElements(sortedResult);

    } catch (e) {
        console.error(e);
    }
}

function listCountryElements(countryArr) {
    let newCountryList = "<ul style=\"list-style: none;\" class='wrapper'>";

    for (let i = 0; i < countryArr.length; i++) {
        const { name , population, flags, region } = countryArr[i];

        newCountryList += `
        <li class='box'>
        <div class="countryName" id=${(determineRegionColour(region))}>${name}</div> 
        <img class="flag" src=${flags.png} alt="flag">
        <div class="population">Has a population of ${population} people</div>
        </li>`;
    }
    newCountryList += "</ul>";
    return newCountryList
}

function determineRegionColour(regionName) {

    let regionColour = "";
    switch (regionName) {
        case 'Asia':
            console.log('Asia');
            regionColour = 'Asia';
            break;
        case 'Europe':
            regionColour = 'Europe';
            break;
        case 'Americas':
            regionColour = 'Americas';
            break;
        case 'Africa':
            regionColour = 'Africa';
            break;
        case 'Oceania':
            regionColour = 'Oceania';
            break;
        default:
            regionColour = 'Rest'
    }
    return regionColour;
}

fetchCountries();

