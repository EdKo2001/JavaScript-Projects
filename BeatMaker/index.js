const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");
const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
];

pads.forEach((pad, key) => {
    pad.addEventListener("click", function() {
        sounds[key].currentTime = 0;
        sounds[key].play();
        createBubble(key);
    });
});

const createBubble = key => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[key];
    bubble.style.animation = `jump 1.2s ease`;
};