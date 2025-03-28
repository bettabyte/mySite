//my code
document.addEventListener("DOMContentLoaded", function () {
    //numbers
    let pizza = parseInt(localStorage.getItem('pizza')) || 0;
    let pps = parseInt(localStorage.getItem('pps')) || 0;
    let crew = parseInt(localStorage.getItem('crew')) || 0;
    let deck = parseInt(localStorage.getItem('deck')) || 0;
    let lead = parseInt(localStorage.getItem('lead')) || 0;
    let con = parseInt(localStorage.getItem('con')) || 0;

    //number elements
    const pizzaIMG = document.getElementById("pizzaIMG");
    const pizzaNum = document.getElementById("pizzaNum");
    const ppsNum = document.getElementById("ppsNum");
    const crewNum = document.getElementById("crewNum");
    const deckNum = document.getElementById("deckNum");
    const leadNum = document.getElementById("leadNum");
    const conNum = document.getElementById("conNum");

    //base upgrade costs
    let crewCost = parseFloat(localStorage.getItem('crewCost')) || 15;
    let deckCost = parseFloat(localStorage.getItem('deckCost')) || 200;
    let leadCost = parseFloat(localStorage.getItem('leadCost')) || 1420;
    let conCost = parseFloat(localStorage.getItem('conCost')) || 15000;

    //upgrade elements
    const crewCostElement = document.getElementById("crewCost");
    const deckCostElement = document.getElementById("deckCost");
    const leadCostElement = document.getElementById("leadCost");
    const conCostElement = document.getElementById("conCost");

    //upgrade constants and pizzas per click
    const costIncreasePercent = 1.15;
    const crewUpNum = 0.2;
    const deckUpNum = 1;
    const leadUpNum = 8;
    const conUpNum = 69;
    let clickIncrease = parseInt(localStorage.getItem('clickIncrease')) || 1;

    //how many updates to PPS every second
    const PPSPS = 10;

    //pizza and pps update functions
    function updatePPS() {
        pps = (crew * crewUpNum) + (deck * deckUpNum) + (lead * leadUpNum) + (con * conUpNum);
        ppsNum.textContent = Math.floor(pps*10)/10;
        localStorage.setItem('pps', pps);

        clickIncrease = Math.floor((pps + 4) / 4) || 1;
        localStorage.setItem('clickIncrease', clickIncrease);
    };
    function updatePizza() {
        pizza += (pps / PPSPS);
        pizzaNum.textContent = Math.round(pizza);
        localStorage.setItem('pizza', Math.round(pizza));
    }
    setInterval(updatePizza, (1000 / PPSPS));

    //console commands
    window.cheatPizza = function (num) {
        pizza += num;
        pizzaNum.textContent = Math.round(pizza);
        localStorage.setItem('pizza', Math.round(pizza));
        console.log("You have added "+num+" pizzas.");
    };
    window.resetGame = function () {
        pizza = 0;
        pps = 0;
        crew = 0;
        deck = 0;
        lead = 0;
        con = 0;
        crewCost = 15;
        deckCost = 200;
        leadCost = 1420;
        conCost = 15000;

        localStorage.setItem('pizza', 0);
        localStorage.setItem('pps', 0);
        localStorage.setItem('crew', 0);
        localStorage.setItem('deck', 0);
        localStorage.setItem('lead', 0);
        localStorage.setItem('con', 0);
        localStorage.setItem('crewCost', 15);
        localStorage.setItem('deckCost', 200);
        localStorage.setItem('leadCost', 1420);
        localStorage.setItem('conCost', 15000);
        localStorage.setItem('clickIncrease', 1);

        pizzaNum.textContent = 0;
        ppsNum.textContent = 0;
        crewNum.textContent = 0;
        deckNum.textContent = 0;
        leadNum.textContent = 0;
        conNum.textContent = 0;
        crewCostElement.textContent = 15;
        deckCostElement.textContent = 200;
        leadCostElement.textContent = 1420;
        conCostElement.textContent = 15000;
        console.log("Game data reset.");
    };

    //click pizza function
    function pizzaClicked(event) {
        event.preventDefault();
        pizza += clickIncrease;
        pizzaNum.textContent = Math.round(pizza);
        localStorage.setItem('pizza', Math.round(pizza));
    };
    pizzaIMG.addEventListener("pointerdown", pizzaClicked);

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
            localStorage.setItem('crew', crew);
            localStorage.setItem('crewCost', crewCost);
        }
    });
    document.getElementById("deckButton").addEventListener("click", function () {
        if (pizza >= deckCost) {
            pizza -= deckCost;
            deck++;
            deckNum.textContent = deck;
            deckCost *= costIncreasePercent;
            deckCostElement.textContent = Math.round(deckCost);
            pizzaNum.textContent = Math.round(pizza);
            updatePPS();
            localStorage.setItem('deck', deck);
            localStorage.setItem('deckCost', deckCost);
        }
    });
    document.getElementById("leadButton").addEventListener("click", function () {
        if (pizza >= leadCost) {
            pizza -= leadCost;
            lead++;
            leadNum.textContent = lead;
            leadCost *= costIncreasePercent;
            leadCostElement.textContent = Math.round(leadCost);
            pizzaNum.textContent = Math.round(pizza);
            updatePPS();
            localStorage.setItem('lead', lead);
            localStorage.setItem('leadCost', leadCost);
        }
    });
    document.getElementById("conButton").addEventListener("click", function () {
        if (pizza >= conCost) {
            pizza -= conCost;
            con++;
            conNum.textContent = con;
            conCost *= costIncreasePercent;
            conCostElement.textContent = Math.round(conCost);
            pizzaNum.textContent = Math.round(pizza);
            updatePPS();
            localStorage.setItem('con', con);
            localStorage.setItem('conCost', conCost);
        }
    });

    //initial update to display stored values.
    pizzaNum.textContent = Math.round(pizza);
    ppsNum.textContent = pps;
    crewNum.textContent = crew;
    deckNum.textContent = deck;
    leadNum.textContent = lead;
    conNum.textContent = con;
    crewCostElement.textContent = Math.round(crewCost);
    deckCostElement.textContent = Math.round(deckCost);
    leadCostElement.textContent = Math.round(leadCost);
    conCostElement.textContent = Math.round(conCost);
    updatePPS();
});