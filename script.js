

// La page d’accueil permet de rechercher un trajet en 
// fonction du départ, de l’arrivée et de la date.

console.log("script")


document.querySelector('#search').addEventListener('click', function() {
    console.log('Clicked!')
    const departureVal = document.querySelector('#departure').value;
    const arrivalVal = document.querySelector('#arrival').value;
    const dateVal = document.querySelector('#date').value;

    const body = {
        departure: departureVal,
        arrival: arrivalVal,
        date: dateVal
    }

    fetch('http://localhost:3000/trips', {
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.querySelector('#content-right').innerHTML = ""

        for (let i=0; i< data.allTrips.length; i++){
            const trip = data.allTrips[i]

            const tripBox = `
                <div id ="tripBox"> 
                    <p> ${trip.price}</p>
                    <p>${trip.departure}</p>
                    <p> ${trip.arrival}</p>
                    <p> ${trip.date}</p>
                </div>
            `

            document.querySelector('#content-right').innerHTML += tripBox;
        }

        
    })

});