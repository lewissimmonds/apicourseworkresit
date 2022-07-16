const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b539818898msh98c832c878335dcp11b2edjsnf3d5057391a5',
      'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
    }
  };

  function fnClick(event) {
    let searchBoxInput = document.getElementById("searchbox").value;
    console.log(searchBoxInput);

    for (let i = 0; i < countries.length; i++){

      if (countries[i].name == searchBoxInput){

        foundCountryCode = countries[i].code

      }

    }

    var url = "https://countries-cities.p.rapidapi.com/location/country/" + foundCountryCode;
    fetch(url, options)
      .then((response) => response.json())
      .then(function(info) {


        console.log(info);
        console.log(info.name);
        console.log(info.code);
        console.log(info.capital.name);
        console.log(info.currency.name);

        var name = createNode("h5");
        var code = createNode("h5");
        var continent = createNode("h5");
        var capital = createNode("h5");
        var currency = createNode("h5");
        var population = createNode("h5");
        var population = createNode("h5");
        var languages = createNode("h5");
        var timezone = createNode("h5");
        var flag = createNode("img");

        append(countryContainer, name);
        append(countryContainer, code);
        append(countryContainer, continent);
        append(countryContainer, capital);
        append(countryContainer, currency);
        append(countryContainer, population);
        append(countryContainer, languages);
        append(countryContainer, timezone);
        append(countryContainer, flag);

        name.innerHTML = "Name: " + info.name;
        code.innerHTML = "Code: " + info.code;
        continent.innerHTML = "Continent: " + info.continent.name;
        capital.innerHTML = "Capital: " + info.capital.name;
        currency.innerHTML = "Currency: " + info.currency.name + ' (' + info.currency.code + ')';
        population.innerHTML = "Population: " + info.population;

        var languagesObject = info.languages;
        var languagesString = "";

        for (let i in languagesObject) {
          languagesString += i + ":" + languagesObject[i] + ", ";
        }
        languagesString = languagesString.substring(0, languagesString.length - 2);

        var splitString = languagesString.split(',');

        var ggg = splitString.toString();

        var splitString1 = ggg.split(/,|:/);

        var fullWord;

        if (splitString1.length == 4) {

          fullWord = splitString1[1] + ', ' + splitString1[3];

        } else if (splitString1.length == 6) {

          fullWord = splitString1[1] + ', ' + splitString1[3] + ', ' + splitString1[5];

        } else if (splitString1.length == 8) {

          fullWord = splitString1[1] + ', ' + splitString1[3] + ', ' + splitString1[5] + ', ' + splitString1[7];

        } else if (splitString1.length == 10) {

          fullWord = splitString1[1] + ', ' + splitString1[3] + ', ' + splitString1[5] + ', ' + splitString1[7] + ', ' + splitString1[9];

        }

        languages.innerHTML = "Languages: " + fullWord;
        timezone.innerHTML = "Timezone: " + info.timezone.code;
        flag.src = info.flag.file;
        flag.style.height = 'auto';
        flag.style.width = '200px';

      })
      .catch(function(error) {
        console.log(error)

      });
  }

  var button = document.getElementById('Search');
  if (button) {
    button.addEventListener('click', fnClick, false);
  }

  function createNode(element) {
    return document.createElement(element);

  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const countryContainer = document.getElementById("country");
