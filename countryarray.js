// Array of country objects since this appeared to tbe the easiest way to do it
const countries = [{
    "name": "afghanistan",
    "code": "AF"
  },
  {
    "name": "albania",
    "code": "AL"
  },
  {
    "name": "algeria",
    "code": "DZ"
  },
  {
    "name": "andorra",
    "code": "AD"
  },
  {
    "name": "angola",
    "code": "AO"
  },
  {
    "name": "antigua and barbuda",
    "code": "AG"
  },
  {
    "name": "argentina",
    "code": "AR"
  },
  {
    "name": "armenia",
    "code": "AM"
  },
  {
    "name": "australia",
    "code": "AU"
  },
  {
    "name": "austria",
    "code": "AT"
  },
  {
    "name": "azerbaijan",
    "code": "AZ"
  },
  {
    "name": "bahamas",
    "code": "BS"
  },
  {
    "name": "bahrain",
    "code": "BH"
  },
  {
    "name": "bangladesh",
    "code": "BD"
  },
  {
    "name": "barbados",
    "code": "BB"
  },
  {
    "name": "belarus",
    "code": "BY"
  },
  {
    "name": "belgium",
    "code": "BE"
  },
  {
    "name": "belize",
    "code": "BZ"
  },
  {
    "name": "benin",
    "code": "BJ"
  },
  {
    "name": "bermuda",
    "code": "BM"
  },
  {
    "name": "bhutan",
    "code": "BT"
  },
  {
    "name": "bolivia",
    "code": "BO"
  },
  {
    "name": "bosnia and herzegovina",
    "code": "BA"
  },
  {
    "name": "botswana",
    "code": "BW"
  },
  {
    "name": "brazil",
    "code": "BR"
  },
  {
    "name": "brunei",
    "code": "BN"
  },
  {
    "name": "bulgaria",
    "code": "BG"
  },
  {
    "name": "burkina faso",
    "code": "BF"
  },
  {
    "name": "burundi",
    "code": "BI"
  },
  {
    "name": "cambodia",
    "code": "KH"
  },
  {
    "name": "cameroon",
    "code": "CM"
  },
  {
    "name": "canada",
    "code": "CA"
  },
  {
    "name": "cape verde",
    "code": "CV"
  },
  {
    "name": "central african republic",
    "code": "CF"
  },
  {
    "name": "chad",
    "code": "TD"
  },
  {
    "name": "chile",
    "code": "CL"
  },
  {
    "name": "china",
    "code": "CN"
  },
  {
    "name": "colombia",
    "code": "CO"
  },
  {
    "name": "comoros",
    "code": "KM"
  },
  {
    "name": "congo",
    "code": "CG"
  },
  {
    "name": "the democratic republic of the congo",
    "code": "CD"
  },
  {
    "name": "costa rica",
    "code": "CR"
  },
  {
    "name": "cote d'ivoire",
    "code": "CI"
  },
  {
    "name": "croatia",
    "code": "HR"
  },
  {
    "name": "cuba",
    "code": "CU"
  },
  {
    "name": "cyprus",
    "code": "CY"
  },
  {
    "name": "czech republic",
    "code": "CZ"
  },
  {
    "name": "denmark",
    "code": "DK"
  },
  {
    "name": "djibouti",
    "code": "DJ"
  },
  {
    "name": "dominica",
    "code": "DM"
  },
  {
    "name": "dominican republic",
    "code": "DO"
  },
  {
    "name": "ecuador",
    "code": "EC"
  },
  {
    "name": "egypt",
    "code": "EG"
  },
  {
    "name": "el salvador",
    "code": "SV"
  },
  {
    "name": "equatorial guinea",
    "code": "GQ"
  },
  {
    "name": "eritrea",
    "code": "ER"
  },
  {
    "name": "estonia",
    "code": "EE"
  },
  {
    "name": "ethiopia",
    "code": "ET"
  },
  {
    "name": "fiji",
    "code": "FJ"
  },
  {
    "name": "finland",
    "code": "FI"
  },
  {
    "name": "france",
    "code": "FR"
  },
  {
    "name": "gabon",
    "code": "GA"
  },
  {
    "name": "gambia",
    "code": "GM"
  },
  {
    "name": "georgia",
    "code": "GE"
  },
  {
    "name": "germany",
    "code": "DE"
  },
  {
    "name": "ghana",
    "code": "GH"
  },
  {
    "name": "greece",
    "code": "GR"
  },
  {
    "name": "grenada",
    "code": "GD"
  },
  {
    "name": "guatemala",
    "code": "GT"
  },
  {
    "name": "guinea",
    "code": "GN"
  },
  {
    "name": "guinea-bissau",
    "code": "GW"
  },
  {
    "name": "guyana",
    "code": "GY"
  },
  {
    "name": "haiti",
    "code": "HT"
  },
  {
    "name": "vatican city ",
    "code": "VA"
  },
  {
    "name": "honduras",
    "code": "HN"
  },
  {
    "name": "hong kong",
    "code": "HK"
  },
  {
    "name": "hungary",
    "code": "HU"
  },
  {
    "name": "iceland",
    "code": "IS"
  },
  {
    "name": "india",
    "code": "IN"
  },
  {
    "name": "indonesia",
    "code": "ID"
  },
  {
    "name": "iran",
    "code": "IR"
  },
  {
    "name": "iraq",
    "code": "IQ"
  },
  {
    "name": "ireland",
    "code": "IE"
  },
  {
    "name": "israel",
    "code": "IL"
  },
  {
    "name": "italy",
    "code": "IT"
  },
  {
    "name": "jamaica",
    "code": "JM"
  },
  {
    "name": "japan",
    "code": "JP"
  },
  {
    "name": "jordan",
    "code": "JO"
  },
  {
    "name": "kazakhstan",
    "code": "KZ"
  },
  {
    "name": "kenya",
    "code": "KE"
  },
  {
    "name": "kiribati",
    "code": "KI"
  },
  {
    "name": "north korea",
    "code": "KP"
  },
  {
    "name": "south korea",
    "code": "KR"
  },
  {
    "name": "kuwait",
    "code": "KW"
  },
  {
    "name": "kyrgyzstan",
    "code": "KG"
  },
  {
    "name": "laos",
    "code": "LA"
  },
  {
    "name": "latvia",
    "code": "LV"
  },
  {
    "name": "lebanon",
    "code": "LB"
  },
  {
    "name": "lesotho",
    "code": "LS"
  },
  {
    "name": "liberia",
    "code": "LR"
  },
  {
    "name": "libya",
    "code": "LY"
  },
  {
    "name": "liechtenstein",
    "code": "LI"
  },
  {
    "name": "lithuania",
    "code": "LT"
  },
  {
    "name": "luxembourg",
    "code": "LU"
  },
  {
    "name": "north macedonia",
    "code": "MK"
  },
  {
    "name": "madagascar",
    "code": "MG"
  },
  {
    "name": "malawi",
    "code": "MW"
  },
  {
    "name": "malaysia",
    "code": "MY"
  },
  {
    "name": "maldives",
    "code": "MV"
  },
  {
    "name": "mali",
    "code": "ML"
  },
  {
    "name": "malta",
    "code": "MT"
  },
  {
    "name": "marshall Islands",
    "code": "MH"
  },
  {
    "name": "mauritania",
    "code": "MR"
  },
  {
    "name": "mauritius",
    "code": "MU"
  },
  {
    "name": "mexico",
    "code": "MX"
  },
  {
    "name": "micronesia",
    "code": "FM"
  },
  {
    "name": "moldova",
    "code": "MD"
  },
  {
    "name": "monaco",
    "code": "MC"
  },
  {
    "name": "mongolia",
    "code": "MN"
  },
  {
    "name": "montenegro",
    "code": "ME"
  },
  {
    "name": "morocco",
    "code": "MA"
  },
  {
    "name": "mozambique",
    "code": "MZ"
  },
  {
    "name": "myanmar",
    "code": "MM"
  },
  {
    "name": "namibia",
    "code": "NA"
  },
  {
    "name": "nauru",
    "code": "NR"
  },
  {
    "name": "nepal",
    "code": "NP"
  },
  {
    "name": "netherlands",
    "code": "NL"
  },
  {
    "name": "new zealand",
    "code": "NZ"
  },
  {
    "name": "nicaragua",
    "code": "NI"
  },
  {
    "name": "niger",
    "code": "NE"
  },
  {
    "name": "nigeria",
    "code": "NG"
  },
  {
    "name": "norway",
    "code": "NO"
  },
  {
    "name": "oman",
    "code": "OM"
  },
  {
    "name": "pakistan",
    "code": "PK"
  },
  {
    "name": "palau",
    "code": "PW"
  },
  {
    "name": "palestine",
    "code": "PS"
  },
  {
    "name": "panama",
    "code": "PA"
  },
  {
    "name": "papua new guinea",
    "code": "PG"
  },
  {
    "name": "paraguay",
    "code": "PY"
  },
  {
    "name": "peru",
    "code": "PE"
  },
  {
    "name": "philippines",
    "code": "PH"
  },
  {
    "name": "poland",
    "code": "PL"
  },
  {
    "name": "portugal",
    "code": "PT"
  },
  {
    "name": "qatar",
    "code": "QA"
  },
  {
    "name": "romania",
    "code": "RO"
  },
  {
    "name": "russia",
    "code": "RU"
  },
  {
    "name": "rwanda",
    "code": "RW"
  },
  {
    "name": "Saint kitts and nevis",
    "code": "KN"
  },
  {
    "name": "saint lucia",
    "code": "LC"
  },
  {
    "name": "saint vincent and the grenadines",
    "code": "VC"
  },
  {
    "name": "samoa",
    "code": "WS"
  },
  {
    "name": "san marino",
    "code": "SM"
  },
  {
    "name": "sao tome and principe",
    "code": "ST"
  },
  {
    "name": "saudi arabia",
    "code": "SA"
  },
  {
    "name": "senegal",
    "code": "SN"
  },
  {
    "name": "serbia",
    "code": "RS"
  },
  {
    "name": "seychelles",
    "code": "SC"
  },
  {
    "name": "sierra leone",
    "code": "SL"
  },
  {
    "name": "singapore",
    "code": "SG"
  },
  {
    "name": "slovakia",
    "code": "SK"
  },
  {
    "name": "slovenia",
    "code": "SI"
  },
  {
    "name": "solomon islands",
    "code": "SB"
  },
  {
    "name": "somalia",
    "code": "SO"
  },
  {
    "name": "south africa",
    "code": "ZA"
  },
  {
    "name": "spain",
    "code": "ES"
  },
  {
    "name": "sri lanka",
    "code": "LK"
  },
  {
    "name": "sudan",
    "code": "SD"
  },
  {
    "name": "suriname",
    "code": "SR"
  },
  {
    "name": "sweden",
    "code": "SE"
  },
  {
    "name": "switzerland",
    "code": "CH"
  },
  {
    "name": "syria",
    "code": "SY"
  },
  {
    "name": "taiwan",
    "code": "TW"
  },
  {
    "name": "tajikistan",
    "code": "TJ"
  },
  {
    "name": "tanzania",
    "code": "TZ"
  },
  {
    "name": "thailand",
    "code": "TH"
  },
  {
    "name": "timor-leste",
    "code": "TL"
  },
  {
    "name": "togo",
    "code": "TG"
  },
  {
    "name": "tonga",
    "code": "TO"
  },
  {
    "name": "trinidad and tobago",
    "code": "TT"
  },
  {
    "name": "tunisia",
    "code": "TN"
  },
  {
    "name": "turkey",
    "code": "TR"
  },
  {
    "name": "turkmenistan",
    "code": "TM"
  },
  {
    "name": "tuvalu",
    "code": "TV"
  },
  {
    "name": "uganda",
    "code": "UG"
  },
  {
    "name": "ukraine",
    "code": "UA"
  },
  {
    "name": "united arab emirates",
    "code": "AE"
  },
  {
    "name": "united kingdom",
    "code": "GB"
  },
  {
    "name": "united States",
    "code": "US"
  },
  {
    "name": "uruguay",
    "code": "UY"
  },
  {
    "name": "uzbekistan",
    "code": "UZ"
  },
  {
    "name": "vanuatu",
    "code": "VU"
  },
  {
    "name": "venezuela",
    "code": "VE"
  },
  {
    "name": "vietnam",
    "code": "VN"
  },
  {
    "name": "yemen",
    "code": "YE"
  },
  {
    "name": "zambia",
    "code": "ZM"
  },
  {
    "name": "zimbabwe",
    "code": "ZW"
  }
]

const data = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
