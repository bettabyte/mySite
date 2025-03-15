let rainbowColors = ["red","orange","yellow","green","blue","purple"];
let i = 0;

const rainbowText = () => {
    document.getElementById("container").style.color = rainbowColors[i];
    i += 1;
    if (i >= rainbowColors.length) {
        i = 0;
    };
};

window.addEventListener("load",setInterval(rainbowText,250));