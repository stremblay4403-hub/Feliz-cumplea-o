const snoopyContainer = document.getElementById("snoopyContainer");
const snoopy = document.getElementById("snoopy");
const letter = document.getElementById("letter");

const instruction = document.getElementById("instruction");

const overlay = document.getElementById("messageOverlay");
const birthdayText = document.getElementById("birthdayText");
const closeButton = document.getElementById("closeButton");

let started = false;

letter.style.display = "none";

snoopy.addEventListener("click", startAnimation);

function startAnimation(){

    if(started) return;
    started = true;

    instruction.innerHTML =
    "Snoopy esta preparando algo para ti ❤️";

    snoopy.classList.add("walk");

    //------------------------------------
    // 1. Snoopy quitte l'écran
    //------------------------------------

    snoopyContainer.style.transition =
    "left 4s linear";

    snoopyContainer.style.left = "130%";

    //------------------------------------
    // 2. Il revient avec la lettre
    //------------------------------------

    setTimeout(()=>{

        snoopyContainer.style.transition="none";
        snoopyContainer.style.left="130%";

        letter.style.display="block";

        requestAnimationFrame(()=>{

            snoopyContainer.style.transition =
            "left 4s linear";

            snoopyContainer.style.left="45%";

        });

    },5500);

    //------------------------------------
    // 3. Déposer la lettre
    //------------------------------------

    setTimeout(()=>{

        snoopy.classList.remove("walk");

        letter.classList.add("dropLetter");

        instruction.innerHTML =
        "Click on the letter ❤️";

    },9600);

}

letter.addEventListener("click",()=>{

    if(!letter.classList.contains("dropLetter"))
        return;

    overlay.style.display="flex";

    birthdayText.innerHTML=`

    Aquí aparecerá tu carta para Nini ❤️

    `;

});

closeButton.addEventListener("click",()=>{

    overlay.style.display="none";

});