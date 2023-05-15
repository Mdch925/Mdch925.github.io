// localStorage.clear();

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span => {

    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("check-item")) {
            checkItem();
        }
        if (e.target.classList.contains("add-item")) {
            addItem();
        }
        if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }
        if (e.target.classList.contains("show-item")) {
            showItem();
        }

    });

});

function showMessage() {

    results.innerHTML = "Input Cant Be Empty";

}

function checkItem() {

    if (theInput.value !== "") {

        if (localStorage.getItem(theInput.value)) {

            results.innerHTML = `Found Local Storage Item called <span>${theInput.value}</span>`;

        } else {

            results.innerHTML = `No Local Storage Item called <span>${theInput.value}</span>`;

        }

        theInput.value = "";

    } else {

        showMessage();

    }

}

function addItem() {

    if (theInput.value !== "") {

        localStorage.setItem(theInput.value, "Test");
        results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
        theInput.value = "";

    } else {

        showMessage();

    }

}

function deleteItem() {

    if (theInput.value !== "") {

        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);
            results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Deleted`;


        } else {

            results.innerHTML = `No Local Storage Item called <span>${theInput.value}</span>`;

        }

        theInput.value = "";

    } else {

        showMessage();

    }

}


function showItem() {

    if (localStorage.length) {

        console.log(`Found Elements ${localStorage.length}`);

        results.innerHTML = '';

        for (let [key, value] of Object.entries(localStorage)) {

            results.innerHTML += `<span class = "keys"> ${key}</span>`;

        }

    } else {

        results.innerHTML = `Local Storage Is Empty`;

    }
}

fetch("https://api.currencyfreaks.com/latest?apikey=ADD_YOUR_KEY")
    .then((result) => {
        // console.log(result);
        let myData = result.json();
        // console.log(myData);
        return myData;
    })
    .then((currency) => {
        let amount = document.querySelector(".amount");
        let egpPrice = document.querySelector(".egp span");
        let sarPrice = document.querySelector(".sar span");

        egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
        sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);

        // console.log(currency.rates);
        console.log(currency.rates["EGP"]);
        console.log(currency.rates["SAR"]);
    });