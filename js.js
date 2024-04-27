window.onload = () => {
    displayCountries(0);
};

const countries = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        sizeWiki: 652_230,
        sizeMoreOrLess: 0,
        inhabitants: 41_100_000
    },
    {
        name: 'Ägypten',
        capital: 'Kairo',
        sizeWiki: 1_001_450,
        sizeMoreOrLess: 0,
        inhabitants: 103_500_000
    }
];

function displayCountries(displaySort){

    // delete old table
    document.getElementById('countryTable').innerHTML = '';

    // start new table
    let tableText = '<table style="margin: 0; border-radius: 0; border-width: 1px;">';

    // sort array
    if (displaySort === 0){
        countries.sort((a, b) => {if([a.name, b.name].sort()[0] == a.name) return 1; else return -1;})
    } else if(displaySort === 1){
        countries.sort((a, b) => {if([a.capital, b.capital].sort()[0] == a.capital) return 1; else return -1;})
    } else if(displaySort === 2){
        countries.sort((a, b) => b.sizeWiki - a.sizeWiki);
    } else if(displaySort === 3){
        countries.sort((a, b) => b.sizeMoreOrLess - a.sizeMoreOrLess);
    } else if(displaySort === 4){
        countries.sort((a, b) => b.inhabitants - a.inhabitants);
    }

    // table header
    tableText += `<button onclick="displayCountries(0)"></button>
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
            <td>${countries[i].sizeWiki}</td>
            <td>${countries[i].sizeMoreOrLess}</td>
            <td>${countries[i].inhabitants}</td>
        </tr>
        `;
    }

    // end table
    tableText += '</table>';

    // add table to html
    document.getElementById('countryTable').innerHTML = tableText;
}