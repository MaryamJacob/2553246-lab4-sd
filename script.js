//detect when butto is clicked and run the function
document.getElementById("searchButton").addEventListener("click", ()=>
{
    //check country name from input box
    let countryName=document.getElementById("country-input").value;

    //if country name is empty display error message
    if (!countryName){
        alert("please enter country name");
        return;
    }

    const CountrynameResponse =  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const capitalResponse =  fetch(`https://restcountries.com/v3.1/name/${Capital}`)
    const popResponse =  fetch(`https://restcountries.com/v3.1/name/${Population}`)
    const regionResponse =  fetch(`https://restcountries.com/v3.1/name/${Region}`)
    const flagResponse =  fetch(`https://restcountries.com/v3.1/name/${Flag}`)

    

    

    //display the countries information
    let countryInfoSection=document.getElementById("country-info");

    //borders
    let borderSection=document.getElementById("Bordering-countries");

    
    const borderResponse =  fetch(`https://restcountries.com/v3.1/name/${borderCode}`)
});
