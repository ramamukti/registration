// Registrant object
class Registrant {
    constructor (name, age, pocket) {
        this.name = name;
        this.age = age;
        this.pocket = pocket;
    }
}

// Registrants list
let regList = [];

// Main function triggered by button click
window.onload = () => {
    const addButton = document.getElementById("addButton");

    addButton.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const pocket = document.getElementById("pocket").value;
        const regInput = new Registrant(name, age, pocket);

        // Data validation
        if(name.length >= 10 && age >= 25 && pocket >= 100000 && pocket <= 1000000) {
            regList.push(regInput);
            sendData();
            formClear();
        }
    })
};

// Sending the input to table and calculating the average value 
const sendData = () => {
    const tableBody = document.getElementById("tableBody")

    tableBody.innerHTML = "";

    let totalAge = 0;
    let totalPocket = 0;

    for (let i = 0; i < regList.length; i++) {
        const row = tableBody.insertRow(i);

        const cell0 = row.insertCell(0);
        const cell1 = row.insertCell(1);
        const cell2 = row.insertCell(2);
        const cell3 = row.insertCell(3);

        cell0.innerHTML = i+1;
        cell1.innerHTML = regList[i].name;
        cell2.innerHTML = regList[i].age;
        cell3.innerHTML = regList[i].pocket;

        totalAge += parseInt(regList[i].age);
        totalPocket += parseInt(regList[i].pocket);
    }

    let ageAverage = totalAge / regList.length;
    let pocketAverage = totalPocket / regList.length;

    document.getElementById("ageAverage").innerHTML = ageAverage;
    document.getElementById("pocketAverage").innerHTML = pocketAverage;
}

function formClear() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("pocket").value = "";
}