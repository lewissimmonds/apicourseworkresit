// Defining a constant to be able to retrieve data from API
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b539818898msh98c832c878335dcp11b2edjsnf3d5057391a5',
    'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
  }
};
// Function that is activated upon clicking search
function searchClick(event) {



  let searchBoxInput = document.getElementById("searchbox").value; // Set a variable equal what's in the search box
  searchBoxInput = searchBoxInput.toLowerCase(); // Set string to lower case

  if (searchBoxInput == "") { // If searchBox is empty

    error.innerHTML = "PLEASE ENTER A COUNTRY"; // Prompt user to enter a country

  } else {

    error.innerHTML = ""; // If error never showed or if user corrected error then clear error message

    // Define variables for loop
    var success = false;
    var i = 0;

    try {
      while (success == false) { // While loop to iterate through the country array (since I couldn't get a for loop to work)
        if (countries[i].name == searchBoxInput) { // If the name at the current index is equal to what was in the search box
          var foundCountryCode = countries[i].code // Set a variable to equal the country code at the key of country name

          retrieveInfo(foundCountryCode) // Call function to retrieve the info the country
          error.innerHTML = "";
          break; // Break from the loop

        } else { // If no country code is found from searchBoxInput

          error.innerHTML = "PLEASE ENTER A VALID COUNTRY" // Prompt user with error
          i++;

        }

      }
    } catch (err) {

    }
  }

}


function randomCountryClick(event) {

  ggg = Math.floor(Math.random() * 196) + 1;

  console.log(ggg);

  foundCountryCode = countries[ggg].code;

  retrieveInfo(foundCountryCode)

  error.innerHTML = " ";

}



function retrieveInfo(foundCountryCode) {

  countryContainer.innerHTML = " ";
  imageGContainer.innerHTML = " ";

  var url = "https://countries-cities.p.rapidapi.com/location/country/" + foundCountryCode; // Set a variable equal to the url plus whatever the country
  // code found was
  fetch(url, options) // Fetch the data from the url
    .then((response) => response.json()) // Send the response into a JSON
    .then(function(info) {

      // Create the elements for the information to be displayed on
      var name = createNode("h5");
      name.style.paddingBottom = "20px";
      var code = createNode("h5");
      code.style.paddingBottom = "20px";
      var capital = createNode("h5");
      capital.style.paddingBottom = "20px";
      var continent = createNode("h5");
      continent.style.paddingBottom = "20px";
      var currency = createNode("h5");
      currency.style.paddingBottom = "20px";
      var population = createNode("h5")
      population.style.paddingBottom = "20px";;
      var languages = createNode("h5");
      languages.style.paddingBottom = "20px";
      var timezone = createNode("h5");
      timezone.style.paddingBottom = "20px";
      var flag = createNode("img");


      // Append these elements to the container
      append(countryContainer, name);
      append(countryContainer, code);
      append(countryContainer, capital);
      append(countryContainer, continent);
      append(countryContainer, currency);
      append(countryContainer, population);
      append(countryContainer, languages);
      append(countryContainer, timezone);
      append(imageGContainer, flag);

      // Set the elements equal to the information found
      name.innerHTML = "Name: " + info.name;
      code.innerHTML = "Code: " + info.code;
      capital.innerHTML = "Capital: " + info.capital.name;
      continent.innerHTML = "Continent: " + info.continent.name;
      currency.innerHTML = "Currency: " + info.currency.name + ' (' + info.currency.code + ')';

      var populationInt = info.population; // Get population for country
      var populationString = populationInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format it with commas

      population.innerHTML = "Population: " + populationString;

      // Set variables for changing object to string
      var languagesObject = info.languages;
      finalLanguagesString = getLanguagesString(languagesObject);

      // Continue setting elements to information found
      languages.innerHTML = "Languages: " + finalLanguagesString;
      timezone.innerHTML = "Timezone: " + info.timezone.code;
      flag.src = info.flag.file; // Set the flag image
      flag.style.height = 'auto'; // Set defualt size for flag no matter the country
      flag.style.width = '400px';
      flag.style.border = '5px solid black';

    })
    .catch(function(error) {
      console.log(error)

    });
}

// Function for retrieving languages for chosen country
function getLanguagesString(languagesObject) {

  var languagesStringOne = "";

  for (let i in languagesObject) {

    languagesStringOne += i + ":" + languagesObject[i] + ", ";

  }

  languagesStringTwo = languagesStringOne.substring(0, languagesStringOne.length - 2);
  var languageArrayOne = languagesStringTwo.split(','); // Split the string by commas
  var lanaguagesStringThree = languageArrayOne.toString(); // Change array back to string
  var languagesArrayTwo = lanaguagesStringThree.split(/,|:/); // Split the string by commas and colons
  var languagesArrayLength = languagesArrayTwo.length;
  if (languagesArrayLength == 2) { // If array length equals two, there is only one language for the country
    var finalLanguagesString = languagesArrayTwo[1]; // Set finalLanguagesString to the only language
  } else if (languagesArrayLength > 2) { //  If the length of the array is greater than two, there is more than one language for the country
    var i = 3; // Set a variable to for loop
    finalLanguagesString = languagesArrayTwo[1]; // Set finalLanguagesString to the first language
    while (i < languagesArrayLength) { // While i is when length of languages array
      finalLanguagesString = finalLanguagesString + ", " + languagesArrayTwo[i] // Append additional languages to the final languagaes string
      i += 2;

    }

  }
  return finalLanguagesString;
}






// Function for creating nodes
function createNode(element) {
  return document.createElement(element);

}

// Function for appending to a container or parent
function append(parent, el) {
  return parent.appendChild(el);
}
