// Opdracht Plan:
// Axios dependency toevoegen
// Importen

// Uitkomst is alle landen in een lijst
// naam, vlag, hoeveelheid inwoners

// Async en try catch block
// API aanroepen met wait

import axios from 'axios';

async function fetchCountries() {

    try {
        const result = await axios.get('https://restcountries.com/v2/all/');
        //console.log(result.data[0]);

        const countryNameList = result.data.map((country) => {
            return country.name;
        });

        //console.log(countryNameList)

        const countryListBlock = document.getElementById("ListOfCountries");
        countryListBlock.innerHTML = listCountryElements(countryNameList);

    } catch(e) {
        console.error(e);
    }
}

function listCountryElements(countryArr){
    let newCountryList = "";
    for(let i = 0; i < countryArr.length; i++){
        newCountryList += "<div class='box'>" + countryArr[i] + "</div>"
    }
    // newCountryList += "</div>";
    return newCountryList
}

fetchCountries();
// End point voor All begruiken https://restcountries.com/v3.1/all
//     response terug in vaiabele
//
// loop over object met map functie per element een aantal velden eruit halen
//
// opbouwen van het element in innerHTML
//
// Tonen

