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

    const message = `

Se que no es mucho, pero espero que ilumine un poquito tu dia. 🥹

Se que no han sido faciles los ultimos dias que acabamos de pasar, pero queria asegurarme de que todavia sientas que eres mi prioridad y que siempre me preocupare por ti. 🥹❤️

Deseo que tengas un cumpleanos increible con tu familia. 🥺

Es el primero de muchos cumpleanos que pasaremos juntos, asi que no tienes que preocuparte por eso. 🥹

Espero que aprecies esta sorpresa.
Aunque parezca simple, he trabajado muchisimo en ella porque queria hacer algo especial para ti. ❤️

Feliz cumpleanos, mi linda Nini. 🥰🎉

Te quiero mucho. ❤️

Con mucho carino,

Steven ❤️

`;

typeWriter(message, birthdayText);

    Aquí aparecerá tu carta para Nini ❤️

    `;

});

closeButton.addEventListener("click",()=>{

    overlay.style.display="none";

});
function typeWriter(text, element, speed = 35) {

    element.innerHTML = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            if (text.charAt(i) === "\n") {
                element.innerHTML += "<br><br>";
            } else {
                element.innerHTML += text.charAt(i);
            }

            i++;
            setTimeout(type, speed);

        }

    }

    type();

}