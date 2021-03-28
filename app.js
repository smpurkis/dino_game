const dino = document.getElementById("dino");
const block = document.getElementById("block");

function spacebarPressed(e) {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump")
        console.log("get here");

        setTimeout(() => {
            dino.classList.remove("jump")
        }, 500)
    }
}

document.addEventListener("keydown", spacebarPressed)


function checkCollision() {
    setInterval(() => {
        let dinoTop = parseInt(
            window.getComputedStyle(dino).getPropertyValue("top"))
        let blockTop = parseInt(
            window.getComputedStyle(block).getPropertyValue("top"))
        let blockLeft = parseInt(
            window.getComputedStyle(block).getPropertyValue("left"))
        console.log(blockLeft);
        if (blockLeft < 50) {
            console.log(dinoTop, blockTop);
            if (dinoTop > blockTop) {
                alert("Dead Dino Boy!")
            }
        }
    }, 10);
}

checkCollision()