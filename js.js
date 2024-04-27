const countries = [
    {
        name: '',
        capital: '',
        sizeWiki: 0,
        sizeMoreOrLess: 0,
        inhabitants: 0
    }
];

function displayCountries(displaySort){
    document.getElementById('countryTable').innerHTML = '';

    console.log(countries.sort((a, b) => a - b));

    console.log(countries);
}