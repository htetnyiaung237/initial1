// DOM
const startPointSelect = document.querySelector('.start-point');
const endPointSelect = document.querySelector('.end-point');
const carSelect = document.querySelector('.form-car');
const carDataDisplay = document.querySelectorAll('.car-info');
const cacuButton = document.getElementById('estiBtn');
const conButton = document.getElementById('continueBtn');

conButton.addEventListener('click', function() {
    window.location.href = 'expression.html';
    
})

// Assign the variables that would need below
let selectStartOption = '';
let selectEndOption = '';
let selectedCar = '';
let selectDistance = null;

// Store the related datas in objects
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
    forLands : 
    { type : "Toyota", model : "LandCruiser", modelYear : "2008-2022", 
        engineSizes : 4.5,
        fuelCapacity : 138,
        fuelEffi : 9,
    },
    forKlu : {
        type: "Toyota", model: "Kluger", modelYear : "2007-2019",
        engineSizes : 2.4,
        fuelCapacity : 65,
        fuelEffi : 9,
    },
    forSurf : {
        type: "Toyota", model: "Hilux Surf SSR-G", modelYear: "2002-2009",
        engineSizes : 3.0,
        fuelCapacity : 70,
        fuelEffi : 10,
    },
    forBel : {
        type: "Toyota", model: "Belta", modelYear: "2005- 2014",
        engineSizes : 1.3,
        fuelCapacity : 42,
        fuelEffi : 15,
    },
    forAlp : {
        type: "Toyota", model: "Alphat", modelYear: "2002-2022",
        engineSizes : 3.0,
        fuelCapacity : 65,
        fuelEffi : 10,
    },
    forCiaz : {
        type : "Suzuki", model: "Fit Ciaz", modelYear: "2014",
        engineSizes : 1.4,
        fuelCapacity : 43,
        fuelEffi : 16,
    },
    forSwift : {
        type : "Suzuki", model: "Swift", modelYear: "2010-2020",
        engineSizes : 1.2,
        fuelCapacity : 42,
        fuelEffi : 23,
    },
}

// eventlisteners for select boxs
const value = startPointSelect.getAttribute("data-value");

startPointSelect.addEventListener('change', function() {
    console.clear();
    selectStartOption = startPointSelect.value;
    showDistance();
})

endPointSelect.addEventListener('change', function() {
    console.clear();
    selectEndOption = endPointSelect.value;
    showDistance();
})

carSelect.addEventListener('change', function() {
    console.clear();
    selectedCar = carSelect.value;
    showCar();
})

// function that would catch the distances from object
function showDistance() {
    if (selectStartOption && selectEndOption) {
        let key = selectStartOption + "-" + selectEndOption;
        let reKey = selectEndOption + "-" + selectStartOption;

        if (distances[key] !== undefined) {
            selectDistance = distances[key];
            console.log("Distance from " + selectStartOption + " to " + selectEndOption + " is " + selectDistance + " km.")
        } else if (distances[reKey] !== undefined) {
            selectDistance = distances[reKey];
            console.log(selectDistance);
        } 
        else {
            selectDistance = null;
            console.log("Same places can't be assign for distance!");
        }
    }
}

// function for cars...
function showCar() {
    let carDetails = '';

    if (selectedCar === "Toyota LandCruiser") {
        carDetails = theCars.forLands;
        console.log(carDetails);
    } else if (selectedCar === "Toyota Kluger") {
        carDetails = theCars.forKlu;
    } else if (selectedCar === "Toyota Hilux Surf") {
        carDetails = theCars.forSurf;
    } else if (selectedCar === "Toyota Belta") {
        carDetails = theCars.forBel;
    } else if (selectedCar === "Toyota Alphat") {
        carDetails = theCars.forAlp;
    } else if (selectedCar === "Suzuki Ciaz") {
        carDetails = theCars.forCiaz;
    } else if (selectedCar === "Suzuki Swift") {
        carDetails = theCars.forSwift
    }

    let fuel = carDetails.fuelEffi;
    console.log(fuel);
}

// caculation of cost
let price = 3290;
// let finalCost = caculate(selectDistance, fuel, price);
//     console.log("Fuel cost is " + finalCost);
cacuButton.addEventListener('click', function(cacuEvent) {
    cacuEvent.preventDefault();
    showCar();
    if (selectDistance && fuel) {
        let finalCost = caculate(selectDistance, fuel, price);
        console.log("final cost is " + finalCost);
    } else {
        console.log("Null");
    }
});

function caculate(distance, fuelEfficiency, fuelPrice) {
    return (distance / fuelEfficiency) * fuelPrice;
}

