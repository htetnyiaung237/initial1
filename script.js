// Initializing DOMs
let startPoint = document.querySelector('.start-point');
let endPoint = document.querySelector('.end-point');
let carsChoose = document.querySelector('.form-car');
// make sure if it works
console.log(carsChoose);
console.log(startPoint);
console.log(endPoint);

// declarations of necessary variables
let selectedStart = '';
let selectedEnd = '';
let distance = '';
let selectedCars = '';
let fuelEfficiency = '';

// objects storing needed data for users
let distances = {
    "Yangon-Mandalay": 626, "Yangon-Taunggyi": 645, "Yangon-Bagan": 629, "Yangon-Naypyidaw": 370, "Yangon-Pyin Oo Lwin": 675, "Yangon-Kalaw": 580, "Yangon-Mawlamyine": 312, "Yangon-Bago": 78,
    "Mandalay-Naypyidaw": 269, "Mandalay-Taunggyi": 321, "Mandalay-Pyin Oo Lwin": 64, "Mandalay-Bago": 563, "Mandalay-Mawlamyine": 718, "Mandalay-Kalaw": 255, "Mandalay-Bagan": 180, 
    "Naypyidaw-Taunggyi": 285, "Naypyidaw-Bago": 304, "Naypyidaw-Bagan": 271, "Naypyidaw-Mawlamyine": 460, "Naypyidaw-Pyin Oo Lwin": 318, "Naypyidaw-Kalaw": 220,
    "Bagan-Pyin Oo Lwin": 234, "Bagan-Taunggyi": 334, "Bagan-Kalaw": 271, "Bagan-Mawlamyine": 718, "Bagan-Bago": 563,
    "Pyin Oo Lwin-Taunggyi": 292, "Pyin Oo Lwin-Kalaw": 252, "Pyin Oo Lwin-Mawlamyine": 766, "Pyin Oo Lwin-Bago": 611,
    "Taunggyi-Kalaw": 70, "Taunggyi-Mawlamyine": 736, "Taunggyi-Bago": 581,
    "Kalaw-Mawlamyine": 670, "Kalaw-Bago": 515,
    "Mawlamyine-Bago": 228,
};

let theCars = {
    forLands : { type : "Toyota", model : "LandCruiser", modelYear : "2008-2022", engineSizes : 4.5, fuelCapacity : 138, fuelEffi : 7 },
    forKlu : { type: "Toyota", model: "Kluger", modelYear : "2007-2019", engineSizes : 2.4, fuelCapacity : 65, fuelEffi : 9 },
    forSurf : { type: "Toyota", model: "Hilux Surf SSR-G", modelYear: "2002-2009", engineSizes : 3.0, fuelCapacity : 70, fuelEffi : 8 },
    forBel : { type: "Toyota", model: "Belta", modelYear: "2005- 2014", engineSizes : 1.3, fuelCapacity : 42, fuelEffi : 15 },
    forAlp : { type: "Toyota", model: "Alphat", modelYear: "2002-2022", engineSizes : 3.0, fuelCapacity : 65, fuelEffi : 10 },
    forCiaz : { type : "Suzuki", model: "Fit Ciaz", modelYear: "2014", engineSizes : 1.4, fuelCapacity : 43, fuelEffi : 14 },
    forSwift : { type : "Suzuki", model: "Swift", modelYear: "2010-2020", engineSizes : 1.2, fuelCapacity : 42, fuelEffi : 23 },
};

let subButton = document.getElementById('subBtn');
console.log(subButton); 

// userinteractions
startPoint.addEventListener('change', function() {
    console.clear();
    selectedStart = startPoint.value;
    console.log(selectedStart);
    makeDistance();
})

endPoint.addEventListener('change', function() {
    console.clear();
    selectedEnd = endPoint.value;
    console.log(selectedEnd);
    makeDistance();
})

carsChoose.addEventListener('change', function() {
    console.clear();
    selectedCars = carsChoose.value;
    console.log(selectedCars);
    makeCar();
    scroll1();
})

// pull up the distance between two points based on user's selection
function makeDistance() {
    if (selectedStart && selectedEnd) {
        let key = selectedStart + "-" + selectedEnd;
        let reKey = selectedEnd + "-" + selectedStart;
 
        if (distances[key] !== undefined) {
            distance = distances[key];
            console.log(distance);
        } else if (distances[reKey] !== undefined) {
            distance = distances[reKey];
            console.log(distance);
        } else {
            console.log("Dude, same points are not assigned for distance!")
        }
        localStorage.setItem('distance', distance);
    }
}

// pull up car's data based on user's selection and then display
let carDetails = '';
function makeCar() {
    if (selectedCars === "Toyota LandCruiser") {
        carDetails = theCars.forLands;
    } else if (selectedCars === "Toyota Kluger") {
        carDetails = theCars.forKlu;
    } else if (selectedCars === "Toyota Hilux Surf") {
        carDetails = theCars.forSurf;
    } else if (selectedCars === "Toyota Belta") {
        carDetails = theCars.forBel;
    } else if (selectedCars === "Toyota Alphat") {
        carDetails = theCars.forAlp;
    } else if (selectedCars === "Suzuki Ciaz") {
        carDetails = theCars.forCiaz;
    } else if (selectedCars === "Suzuki Swift") {
        carDetails = theCars.forSwift;
    }

    displayCar[0].innerHTML = "Type: " + carDetails.type;
    displayCar[1].innerHTML = "Model: " + carDetails.model;
    displayCar[2].innerHTML = "Model Year: " + carDetails.modelYear;
    displayCar[3].innerHTML = "Engine Size: " + carDetails.engineSizes + "L"; 
    displayCar[4].innerHTML = "Fuel Capacity: " + carDetails.fuelCapacity + "L";
    displayCar[5].innerHTML = "Fuel Efficiency: " + carDetails.fuelEffi + "km/L";

    fuelEfficiency = carDetails.fuelEffi;
    // console.log(fuelEfficiency);
}

let displayCar = document.querySelectorAll('.car-data');
console.log(displayCar);

let cacuButton = document.getElementById('estiBtn');
console.log(cacuButton);

let fuelPrice = 3290;
cacuButton.addEventListener('click', function() {
    caculate();
    scroll2();
})

function scroll1() {
    window.scrollTo(0, 650);
}

function scroll2() {
    window.scrollTo(0, 1200);
}

// caculation of fuel price based on user's selected data
function caculate() {
    let d = '';
    let f = '';

    if (distance && fuelEfficiency) {
        d = parseFloat(distance);
        console.log(d);
        f = parseFloat(fuelEfficiency);
        console.log(f);
    }
    var result = (d / f)*fuelPrice;
    console.log(result.toFixed(2));
    displayCost[0].innerHTML = result.toLocaleString() + " MMK";
}

let displayCost = document.querySelectorAll('.estm-cost');
console.log(displayCost);

let contactButton = document.getElementById('contactBtn');
console.log(contactButton)

contactButton.addEventListener('click', function() {
    window.location.href = "contact.html";
})