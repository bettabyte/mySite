//my code
document.addEventListener("DOMContentLoaded",function () {
    //numbers
    let pizza = 0;
    let pps = 0;
    let crew = 0;
    let deck = 0;
    let lead = 0;
    let con = 0;
    
    //number elements
    const pizzaIMG = document.getElementById("pizzaIMG");
    const pizzaNum = document.getElementById("pizzaNum");
    const ppsNum = document.getElementById("ppsNum");
    const crewNum = document.getElementById("crewNum");
    const deckNum = document.getElementById("deckNum");
    const leadNum = document.getElementById("leadNum");
    const conNum = document.getElementById("conNum");

    //base upgrade costs
    let crewCost = 100;
    let deckCost = 1000;
    let leadCost = 2500;
    let conCost = 5000;

    //upgrade elements
    const crewCostElement = document.getElementById("crewCost");
    const deckCostElement = document.getElementById("deckCost");
    const leadCostElement = document.getElementById("leadCost");
    const conCostElement = document.getElementById("conCost");

    //upgrade constants
    const costIncreasePercent = 1.15;
    const crewUpNum = 1;
    const deckUpNum = 5;
    const leadUpNum = 25;
    const conUpNum = 100;

    let clickIncrease = 1;

    //how many updates to PPS every second
    const PPSPS = 10

    //pizza and pps update functions
    function updatePPS () {
        pps = (crew * crewUpNum) + (deck * deckUpNum) + (lead * leadUpNum) + (con * conUpNum);
        ppsNum.textContent = pps;

        clickIncrease = Math.floor(pps / 2);
    };
    function updatePizza() {
        pizza += (pps / PPSPS);
        pizzaNum.textContent = Math.round(pizza);
    }
    window.cheatPizza = function (num) {
        pizza += num;
        pizzaNum.textContent = Math.round(pizza);
    };
    setInterval(updatePizza, (1000/PPSPS));

    //click pizza function
    pizzaIMG.addEventListener("click", function () {
        pizza += clickIncrease;
        pizzaNum.textContent = Math.round(pizza);
    });

    //upgrade button functions
    document.getElementById("crewButton").addEventListener("click", function () {
        if (pizza >= crewCost) {
            pizza -= crewCost;
            crew++;
            crewNum.textContent = crew;
            crewCost *= costIncreasePercent;
            crewCostElement.textContent = Math.round(crewCost);
            pizzaNum.textContent = Math.round(pizza);
            updatePPS();
        }
    })
    document.getElementById("deckButton").addEventListener("click", function () {
        if (pizza >= deckCost) {
            pizza -= deckCost;
            deck++;
            deckNum.textContent = deck;
            deckCost *= costIncreasePercent;
            deckCostElement.textContent = Math.round(deckCost);
            pizzaNum.textContent = Math.round(pizza);
            updatePPS();
        }
    })
    document.getElementById("leadButton").addEventListener("click", function () {
        if (pizza >= leadCost) {
            pizza -= leadCost;
            lead++;
            leadNum.textContent = lead;
            leadCost *= costIncreasePercent;
            leadCostElement.textContent = Math.round(leadCost);
            pizzaNum.textContent = Math.round(pizza);
            updatePPS();
        }
    })
    document.getElementById("conButton").addEventListener("click", function () {
        if (pizza >= conCost) {
            pizza -= conCost;
            con++;
            conNum.textContent = con;
            conCost *= costIncreasePercent;
            conCostElement.textContent = Math.round(conCost);
            pizzaNum.textContent = Math.round(pizza);
            updatePPS();
        }
    })
});

/*
chatgpt code
document.addEventListener("DOMContentLoaded", function () {
    let pizza = 0;
    let pps = 0;
    
    let crew = 0, deck = 0, lead = 0, con = 0;
    let crewCost = 100, deckCost = 1000, leadCost = 2500, conCost = 5000;

    const COST_INCREASE_PERCENT = 1.15; // 15% increase per purchase
    const CREW_PPS = 1, DECK_PPS = 5, LEAD_PPS = 10, CON_PPS = 20; 

    const pizzaIMG = document.getElementById("pizzaIMG");
    const pizzaNum = document.getElementById("pizzaNum");
    const ppsNum = document.getElementById("ppsNum");

    const crewNum = document.getElementById("crewNum");
    const deckNum = document.getElementById("deckNum");
    const leadNum = document.getElementById("leadNum");
    const conNum = document.getElementById("conNum");

    const crewCostEl = document.getElementById("crewCost");
    const deckCostEl = document.getElementById("deckCost");
    const leadCostEl = document.getElementById("leadCost");
    const conCostEl = document.getElementById("conCost");

    const crewButton = document.getElementById("crewButton");
    const deckButton = document.getElementById("deckButton");
    const leadButton = document.getElementById("leadButton");
    const conButton = document.getElementById("conButton");

    function updatePPS() {
        pps = (crew * CREW_PPS) + (deck * DECK_PPS) + (lead * LEAD_PPS) + (con * CON_PPS);
        ppsNum.textContent = pps;
    }

    function updatePizza() {
        pizza += pps;
        pizzaNum.textContent = pizza;
    }

    function buyUpgrade(upgradeType) {
        if (upgradeType === "crew" && pizza >= crewCost) {
            pizza -= crewCost;
            crew++;
            crewCost = Math.floor(crewCost * COST_INCREASE_PERCENT);
            crewNum.textContent = crew;
            crewCostEl.textContent = crewCost;
        } else if (upgradeType === "deck" && pizza >= deckCost) {
            pizza -= deckCost;
            deck++;
            deckCost = Math.floor(deckCost * COST_INCREASE_PERCENT);
            deckNum.textContent = deck;
            deckCostEl.textContent = deckCost;
        } else if (upgradeType === "lead" && pizza >= leadCost) {
            pizza -= leadCost;
            lead++;
            leadCost = Math.floor(leadCost * COST_INCREASE_PERCENT);
            leadNum.textContent = lead;
            leadCostEl.textContent = leadCost;
        } else if (upgradeType === "con" && pizza >= conCost) {
            pizza -= conCost;
            con++;
            conCost = Math.floor(conCost * COST_INCREASE_PERCENT);
            conNum.textContent = con;
            conCostEl.textContent = conCost;
        }
        pizzaNum.textContent = pizza;
        updatePPS();
    }

    pizzaIMG.addEventListener("click", function () {
        pizza++;
        pizzaNum.textContent = pizza;
    });

    crewButton.addEventListener("click", function () {
        buyUpgrade("crew");
    });

    deckButton.addEventListener("click", function () {
        buyUpgrade("deck");
    });

    leadButton.addEventListener("click", function () {
        buyUpgrade("lead");
    });

    conButton.addEventListener("click", function () {
        buyUpgrade("con");
    });

    setInterval(updatePizza, 1000); // Updates the pizza count every second
});

*/