const token = '525f2051abfc603b2fa5d2b335ddc71afb0ba4911372d5e376d8ad8dd0a8ef1a'

function setWeatherIcon(ID) {

    const icon = document.querySelector('.mainContainer__meteo__previsions__icon__img')

    const WEATHER = {
        0 : "Soleil",
        1 : "Peu nuageux",
        2 : "Ciel voilé",
        3 : "Nuageux",
        4 : "Très nuageux",
        5 : "Couvert",
        6 : "Brouillard",
        7 : "Brouillard givrant",
        10 : "Pluie faible",
        11 : "Pluie modérée",
        12 : "Pluie forte",
        13 : "Pluie faible verglaçante",
        14 : "Pluie modérée verglaçante",
        15 : "Pluie forte verglaçante",
        16 : "Bruine",
        20 : "Neige faible",
        21 : "Neige modérée",
        22 : "Neige forte",
        30 : "Pluie et neige mêlées faibles",
        31 : "Pluie et neige mêlées modérées",
        32 : "Pluie et neige mêlées fortes",
        40 : "Averses de pluie locales et faibles",
        41 : "Averses de pluie locales",
        42 : "Averses locales et fortes",
        43 : "Averses de pluie faibles",
        44 : "Averses de pluie",
        45 : "Averses de pluie fortes",
        46 : "Averses de pluie faibles et fréquentes",
        47 : "Averses de pluie fréquentes",
        48 : "Averses de pluie fortes et fréquentes",
        60 : "Averses de neige localisées et faibles",
        61 : "Averses de neige localisées",
        62 : "Averses de neige localisées et fortes",
        63 : "Averses de neige faibles",
        64 : "Averses de neige",
        65 : "Averses de neige fortes",
        66 : "Averses de neige faibles et fréquentes",
        67 : "Averses de neige fréquentes",
        68 : "Averses de neige fortes et fréquentes",
        70 : "Averses de pluie et neige mêlées localisées et faibles",
        71 : "Averses de pluie et neige mêlées localisées",
        72 : "Averses de pluie et neige mêlées localisées et fortes",
        73 : "Averses de pluie et neige mêlées faibles",
        74 : "Averses de pluie et neige mêlées",
        75 : "Averses de pluie et neige mêlées fortes",
        76 : "Averses de pluie et neige mêlées faibles et nombreuses",
        77 : "Averses de pluie et neige mêlées fréquentes",
        78 : "Averses de pluie et neige mêlées fortes et fréquentes",
        100 : "Orages faibles et locaux",
        101 : "Orages locaux",
        102 : "Orages fort et locaux",
        103 : "Orages faibles",
        104 : "Orages",
        105 : "Orages forts",
        106 : "Orages faibles et fréquents",
        107 : "Orages fréquents",
        108 : "Orages forts et fréquents",
        120 : "Orages faibles et locaux de neige ou grésil",
        121 : "Orages locaux de neige ou grésil",
        122 : "Orages locaux de neige ou grésil",
        123 : "Orages faibles de neige ou grésil",
        124 : "Orages de neige ou grésil",
        125 : "Orages de neige ou grésil",
        126 : "Orages faibles et fréquents de neige ou grésil",
        127 : "Orages fréquents de neige ou grésil",
        128 : "Orages fréquents de neige ou grésil",
        130 : "Orages faibles et locaux de pluie et neige mêlées ou grésil",
        131 : "Orages locaux de pluie et neige mêlées ou grésil",
        132 : "Orages fort et locaux de pluie et neige mêlées ou grésil",
        133 : "Orages faibles de pluie et neige mêlées ou grésil",
        134 : "Orages de pluie et neige mêlées ou grésil",
        135 : "Orages forts de pluie et neige mêlées ou grésil",
        136 : "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
        137 : "Orages fréquents de pluie et neige mêlées ou grésil",
        138 : "Orages forts et fréquents de pluie et neige mêlées ou grésil",
        140 : "Pluies orageuses",
        141 : "Pluie et neige mêlées à caractère orageux",
        142 : "Neige à caractère orageux",
        210 : "Pluie faible intermittente",
        211 : "Pluie modérée intermittente",
        212 : "Pluie forte intermittente",
        220 : "Neige faible intermittente",
        221 : "Neige modérée intermittente",
        222 : "Neige forte intermittente",
        230 : "Pluie et neige mêlées",
        231 : "Pluie et neige mêlées",
        232 : "Pluie et neige mêlées",
        235 : "Averses de grêle",
    }
    
    document.querySelector('.mainContainer__meteo__previsions__icon__text').innerText = WEATHER[ID]

    switch (parseInt(ID)) {
        case 0:
            icon.src = '../img/animated/clear-day.svg'
            break;

        case 1:
            icon.src = '../img/animated/partly-cloudy-day.svg'
            break;

        case 2:
            icon.src = '../img/animated/cloudy.svg'
            break;

        case 3:
            icon.src = '../img/animated/cloudy.svg'
            break;

        case 4:
            icon.src = '../img/animated/overcast.svg'
            break;

        case 5:
            icon.src = '../img/animated/cloudy.svg'
            break;

        case 6:
            icon.src = '../img/animated/mist.svg'
            break;

        case 7:
            icon.src = '../img/animated/mist.svg'
            break;

        case 10:
            icon.src = '../img/animated/drizzle.svg'
            break;

        case 11:
            icon.src = '../img/animated/hail.svg'
            break;

        case 12:
            icon.src = '../img/animated/rain.svg'
            break;

        case 13:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 14:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 15:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 16:
            icon.src = '../img/animated/drizzle.svg'
            break;

        case 20:
            icon.src = '../img/animated/snow.svg'
            break;

        case 21:
            icon.src = '../img/animated/snow.svg'
            break;

        case 22:
            icon.src = '../img/animated/snow.svg'
            break;

        case 30:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 31:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 32:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 40:
            icon.src = '../img/animated/drizzle.svg'
            break;

        case 41:
            icon.src = '../img/animated/hail.svg'
            break;

        case 42:
            icon.src = '../img/animated/drizzle.svg'
            break;

        case 43:
            icon.src = '../img/animated/hail.svg'
            break;

        case 44:
            icon.src = '../img/animated/rain.svg'
            break;

        case 45:
            icon.src = '../img/animated/rain.svg'
            break;

        case 46:
            icon.src = '../img/animated/drizzle.svg'
            break;

        case 47:
            icon.src = '../img/animated/hail.svg'
            break;

        case 48:
            icon.src = '../img/animated/rain.svg'
            break;

        case 60:
            icon.src = '../img/animated/snow.svg'
            break;

        case 61:
            icon.src = '../img/animated/snow.svg'
            break;

        case 62:
            icon.src = '../img/animated/snow.svg'
            break;

        case 63:
            icon.src = '../img/animated/snow.svg'
            break;

        case 64:
            icon.src = '../img/animated/snow.svg'
            break;

        case 65:
            icon.src = '../img/animated/snow.svg'
            break;

        case 66:
            icon.src = '../img/animated/snow.svg'
            break;

        case 67:
            icon.src = '../img/animated/snow.svg'
            break;

        case 68:
            icon.src = '../img/animated/snow.svg'
            break;

        case 70:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 71:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 72:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 73:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 74:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 75:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 76:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 77:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 78:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 100:
            icon.src = '../img/animated/thunderstorms-day.svg'
            break;

        case 101:
            icon.src = '../img/animated/thunderstorms-day.svg'
            break;

        case 102:
            icon.src = '../img/animated/thunderstorms-day.svg'
            break;

        case 103:
            icon.src = '../img/animated/thunderstorms.svg'
            break;

        case 104:
            icon.src = '../img/animated/thunderstorms.svg'
            break;

        case 105:
            icon.src = '../img/animated/thunderstorms.svg'
            break;

        case 106:
            icon.src = '../img/animated/thunderstorms.svg'
            break;

        case 107:
            icon.src = '../img/animated/thunderstorms.svg'
            break;

        case 108:
            icon.src = '../img/animated/thunderstorms.svg'
            break;

        case 120:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 121:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 122:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 123:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 124:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 125:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 126:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 127:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 128:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 130:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 131:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 132:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 133:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 134:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 135:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 136:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 137:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 138:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 140:
            icon.src = '../img/animated/thunderstorms-rain.svg'
            break;

        case 141:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 142:
            icon.src = '../img/animated/thunderstorms-snow.svg'
            break;

        case 210:
            icon.src = '../img/animated/hail.svg'
            break;

        case 211:
            icon.src = '../img/animated/hail.svg'
            break;

        case 212:
            icon.src = '../img/animated/hail.svg'
            break;

        case 220:
            icon.src = '../img/animated/snow.svg'
            break;

        case 221:
            icon.src = '../img/animated/snow.svg'
            break;

        case 222:
            icon.src = '../img/animated/snow.svg'
            break;

        case 230:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 231:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 232:
            icon.src = '../img/animated/sleet.svg'
            break;

        case 235:
            icon.src = '../img/animated/snow.svg'
            break;

        default:
            break;
    }


}

async function searchCities(search) {
    const result = await fetch(`https://api.meteo-concept.com/api/location/cities?token=${token}&search=${search}`)
        .then(response => response.json())
        .catch(err => alert(err))

    document.querySelector('.modalSearch').classList.remove("inactive")
    document.querySelector('.modalSearch').classList.add("active")
    document.querySelector('.results_list').innerHTML = ''

    result.cities.forEach(city => {
        const itemList = document.createElement('li')
        itemList.innerText = `${city.name} (${city.cp})`
        itemList.dataset.insee = city.insee
        itemList.classList.add(`insee-${city.insee}`, 'results_list_item')

        document.querySelector('.results_list').appendChild(itemList)

        document.querySelector(`.insee-${city.insee}`).addEventListener('click', (e) => {

            document.querySelector('.modalSearch').classList.remove("active")
            document.querySelector('.modalSearch').classList.add("inactive")
            document.querySelector('.results_list').innerHTML = ''

            displayWeatherDatas(e.target.dataset.insee)
        })
    });
}

async function displayWeatherDatas(insee) {
    const data = await fetch(`https://api.meteo-concept.com/api/forecast/daily?token=${token}&insee=${insee}`)
        .then(response => response.json())
        .catch(err => alert(err))
    console.log(data)

    document.querySelector('.mainContainer__meteo').classList.remove('inactive')
    document.querySelector('.mainContainer__meteo').classList.add('active')

    document.querySelector('.mainContainer__meteo__title').innerHTML = `Demain, à ${data.city.name} (${data.city.cp})`

    document.querySelector('.item_colder_data').innerHTML = `${data.forecast[1].tmin}°C`
    document.querySelector('.item_warmer_data').innerHTML = `${data.forecast[1].tmax}°C`
    document.querySelector('.rain_data').innerHTML = `${data.forecast[1].probarain}%`

    setWeatherIcon(data.forecast[0].weather)
}

document.querySelector('.mainContainer__form').addEventListener('submit', (e) => {
    e.preventDefault()
    const search = e.target.querySelector("[name=search]").value
    try {
        searchCities(search)
    } catch (error) {
        alert(error)
    }

})

