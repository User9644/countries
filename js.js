const countries = [
    {
        name: '',
        capital: '',
        sizeWiki: 0,
        sizeMoreOrLess: 0,
        inhabitants: 1
    },
    {
        name: '',
        capital: '',
        sizeWiki: 0,
        sizeMoreOrLess: 0,
        inhabitants: 2
    }
];

function displayCountries(displaySort){

    // delete old table
    document.getElementById('countryTable').innerHTML = '';

    // start new table
    let tableText = '<table>';

    countries.sort((a, b) => b.inhabitants - a.inhabitants);

    // table header
    tableText += '<tr><td>Name</td><td>Hauptstadt</td><td>Größe <a href="https://wikipedia.org">Wikipedia</a></td><td>Größe <a href="https://moreorless.io">More or Less</a></td></tr>';

    for (let i = 0; i < countries.length; i ++) {

        // one country
        tableText += `
        <tr>
            <td>${countries[i].name}</td>
            <td>${countries[i].capital}</td>
            <td>${countries[i].sizeWiki}</td>
            <td>${countries[i].sizeMoreOrLess}</td>
        </tr>
        `;
    }

    // end table
    tableText += '</table>';
}