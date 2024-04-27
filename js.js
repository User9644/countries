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
    document.getElementById('countryTable').innerHTML = '';

    console.log(countries.sort((a, b) => a.inhabitants - b.inhabitants));

    console.log(countries);
}