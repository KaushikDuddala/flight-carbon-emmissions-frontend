async function calculate()
{
    let numOfPassengers = document.getElementById("passengers").value;
    let departure = document.getElementById("departure").value;
    let travelClass = document.getElementById("class").value;
    let destination = document.getElementById("destination").value;
    let roundTrip = document.getElementById("roundtrip").checked;



    let response = await fetch("https://flight-carbon-emmissions.kaushik-duddala.workers.dev/emmissions?numOfPassengers=" + numOfPassengers + "&departure=" + departure + "&cabinClass=" + travelClass + "&destination=" + destination);

    console.log(response)
}
