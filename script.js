class Location {
    constructor(country, city) {
        this.country = country;
        this.city = city
    }
}

class ViewLocation {
    static handleLocationInput() {

        const locationList = [
            {
                country: 'portugal',
                city: 'lissabon',
            },
            {
                country: 'netherlands',
                city: 'Amsterdam',
            },
        ]

        const allLocations = locationList
    
        allLocations.forEach((location) => {
            ViewLocation.addTolist(location)
        })
    }

    static addTolist(location) {
        const graph = document.querySelector('#location-graph')

        const listDiv = document.createElement("ul");
        listDiv.innerHTML = `
        <li>${location.country}</li>
        <li>${location.city}<?li>
        `
        graph.appendChild(listDiv)

    }
}

//toon boeken
document.addEventListener('DOMContentLoaded', ViewLocation.handleLocationInput)

document.querySelector("#safe-location-value").addEventListener('click', (e) => {
    e.preventDefault()

    const country = document.querySelector('#country-value').value
    const city = document.querySelector("#city-value").value
   
    const place = new Location(country, city)

    ViewLocation.addTolist(place)

})





