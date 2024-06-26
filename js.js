window.onload = () => {
    displayCountries(0);
};

const countries = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        sizeWiki: 652_230,
        sizeMoreOrLess: 2,
        inhabitants: 41_100_000
    },
    {
        name: 'Ägypten',
        capital: 'Kairo',
        sizeWiki: 1_001_450,
        sizeMoreOrLess: 1,
        inhabitants: 103_500_000
    },
    {
        name: 'Albanien',
        capital: 'Tirana',
        sizeWiki: 28_748,
        sizeMoreOrLess: 1.5,
        inhabitants: 2_800_00
    }
];

function displayCountries(displaySort){

    // delete old table
    document.getElementById('countryTable').innerHTML = '';

    // start new table
    let tableText = `
    <table style="
        margin: 0; 
        border-radius: 0; 
        border-width: 1px; 
        border-color: black; 
        border-style: solid;
    ">
    `;

    // sort array
    if (displaySort === 0){
        countries.sort((a, b) => {if([a.name, b.name].sort()[0] == a.name) return -1; else return 1;})
    } else if(displaySort === 1){
        countries.sort((a, b) => {if([a.capital, b.capital].sort()[0] == a.capital) return -1; else return 1;})
    } else if(displaySort === 2){
        countries.sort((a, b) => b.sizeWiki - a.sizeWiki);
    } else if(displaySort === 3){
        countries.sort((a, b) => b.sizeMoreOrLess - a.sizeMoreOrLess);
    } else if(displaySort === 4){
        countries.sort((a, b) => b.inhabitants - a.inhabitants);
    }

    // table header
    tableText += `
    <tr>
        <td>
            <button onclick="displayCountries(0)">
                Name
            </button>
        </td>
        <td>
            <button onclick="displayCountries(1)">
                Hauptstadt
            </button>
        </td>
        <td>
            <button onclick="displayCountries(2)">
            Größe <a href="https://wikipedia.org">Wikipedia</a>
            </button>
        </td>
        <td>
            <button onclick="displayCountries(3)">
                Größe <a href="https://moreorless.io">More or Less</a>
            </button>
        </td>
        <td>
            <button onclick="displayCountries(4)">
                Einwohner
            </button>
        </td>
    </tr>
    `;

    for (let i = 0; i < countries.length; i ++) {

        // one country
        tableText += `
        <tr>
            <td>${countries[i].name}</td>
            <td>${countries[i].capital}</td>
            <td style="text-align: right;">${countries[i].sizeWiki}</td>
            <td style="text-align: right;">${countries[i].sizeMoreOrLess}</td>
            <td style="text-align: right;">${countries[i].inhabitants}</td>
        </tr>
        `;
    }

    // end table
    tableText += '</table>';

    // add table to html
    document.getElementById('countryTable').innerHTML = tableText;
}