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

  if (searchBoxInput == "") {

    error.innerHTML = "Please enter a country";

  } else {

    error.innerHTML = " ";

    console.log(searchBoxInput);

    var success = false;
    var i = 0;

    try {
      while (success == false) { // For loop to iterate through the country array
        if (countries[i].name == searchBoxInput) { // If the name at the current index is equal to what was in the search box
          var foundCountryCode = countries[i].code // Set a variable to equal the country code at the key of country name

          retrieveInfo(foundCountryCode)
          error.innerHTML = " ";
          break;

        } else {

          error.innerHTML = "Please enter a valid country"
          success = false;
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


  var url = "https://countries-cities.p.rapidapi.com/location/country/" + foundCountryCode; // Set a variable equal to the url plus whatever the country
  // code found was
  fetch(url, options) // Fetch the data from the url
    .then((response) => response.json()) // Send the response into a JSON
    .then(function(info) {
      console.log(info.languages);

      // Create the elements for the information to be displayed on
      var name = createNode("h5");
      var code = createNode("h5");
      var capital = createNode("h5");
      var continent = createNode("h5");
      var currency = createNode("h5");
      var population = createNode("h5");
      var languages = createNode("h5");
      var timezone = createNode("h5");
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
      append(countryContainer, flag);

      // Set the elements equal to the information found
      name.innerHTML = "Name: " + info.name;
      code.innerHTML = "Code: " + info.code;
      capital.innerHTML = "Capital: " + info.capital.name;
      continent.innerHTML = "Continent: " + info.continent.name;
      currency.innerHTML = "Currency: " + info.currency.name + ' (' + info.currency.code + ')';
      population.innerHTML = "Population: " + info.population;


      // Set variables for changing object to string
      var languagesObject = info.languages;
      finalLanguagesString = getLanguagesString(languagesObject);

      // Continue setting elements to information found
      languages.innerHTML = "Languages: " + finalLanguagesString;
      timezone.innerHTML = "Timezone: " + info.timezone.code;
      flag.src = info.flag.file; // Set the flag image
      flag.style.height = 'auto'; // Set defualt size for flag no matter the country
      flag.style.width = '200px';

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

  var languagesStringLength = languagesArrayTwo.length;

  if (languagesStringLength == 2) {

    var finalLanguagesString = languagesArrayTwo[1]; // Establish variable for the eventual full sentence of languages

  } else if (languagesStringLength > 2) {

    var i = 3;

    finalLanguagesString = languagesArrayTwo[1];

    while (i < languagesStringLength) {

      finalLanguagesString = finalLanguagesString + ", " + languagesArrayTwo[i]
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

// Define container
const countryContainer = document.getElementById("country");
