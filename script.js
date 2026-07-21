// ======================================
// PARA NINI ❤️
// Version 2
// Partie 1/5
// ======================================

// ---------- ELEMENTS ----------

const snoopyContainer = document.getElementById("snoopyContainer");
const snoopy = document.getElementById("snoopy");
const letter = document.getElementById("letter");

const instruction = document.getElementById("instruction");

const overlay = document.getElementById("messageOverlay");
const birthdayText = document.getElementById("birthdayText");
const closeButton = document.getElementById("closeButton");

const hearts = document.getElementById("hearts");

// ---------- VARIABLES ----------

let animationStarted = false;
let letterReady = false;
let typingFinished = false;

letter.style.display = "none";

if (hearts) {
    hearts.style.display = "none";
}

// ---------- TEXTE ----------

const birthdayMessage = `

Se que no es mucho, te mereces mucho mas, pero espero que ilumine un poquito tu dia 🥹

Se que no han sido faciles los ultimos dias que acabamos de pasar, pero queria asegurarme de que todavia sientas que eres mi prioridad y que siempre me preocupare por ti 🥹❤️

Deseo que tengas un cumpleanos increible con tu familia y conmigo 🥺

Es el primero de muchos cumpleanos que pasaremos juntos, asi que no tienes que preocuparte por eso 🥹

Espero que aprecies esta sorpresa.
Aunque parezca simple, he trabajado muchisimo en ella porque queria hacer algo especial para ti ❤️

Feliz cumpleanos mi linda Nini 🥰🎉 Me gustaria darte muchos besitos y abrazarte mucho, pero no te preocupes, los guarda para cuando estemos juntos 🥰

Te quiero mucho y siempre estare a tu lado, incluso en los momentos dificiles ❤️

Con mucho carino y todo mi amor,

Steven ❤️

`;

// ---------- EVENEMENTS ----------

snoopy.addEventListener("click", startAnimation);

letter.addEventListener("click", openLetter);

closeButton.addEventListener("click", closeLetter);

// ---------- ANIMATION PRINCIPALE ----------

function startAnimation(){

    if(animationStarted) return;

    animationStarted = true;

    instruction.innerHTML =
    "Snoopy esta preparando algo para ti ❤️";

    snoopy.classList.add("walk");

    walkToRight();

}// ======================================
// Partie 2/5
// ======================================

// ---------- DEPLACEMENTS ----------

function walkToRight(){

    snoopyContainer.style.transition = "left 4s linear";
    snoopyContainer.style.left = "130%";

    setTimeout(() => {

        comeBackWithLetter();

    }, 4200);

}

function comeBackWithLetter(){

    snoopyContainer.style.transition = "none";

    snoopyContainer.style.left = "130%";

    letter.style.display = "block";

    letter.style.opacity = "1";

    letter.style.transform = "scale(1)";

    requestAnimationFrame(() => {

        snoopyContainer.style.transition = "left 4s linear";

        snoopyContainer.style.left = "45%";

    });

    setTimeout(() => {

        dropLetter();

    }, 4000);

}

function dropLetter(){

    snoopy.classList.remove("walk");

    letter.classList.add("dropLetter");

    instruction.innerHTML = "Click on the letter ❤️";

    letterReady = true;

    letter.style.pointerEvents = "auto";

}// ======================================
// Partie 3/5
// ======================================

// ---------- OUVERTURE DE LA LETTRE ----------

function openLetter(){

    if(!letterReady) return;

    overlay.style.display = "flex";

    birthdayText.innerHTML = "";

    if(hearts){
        hearts.style.display = "none";
    }

    closeButton.style.display = "none";

    typeWriter(birthdayMessage, birthdayText, 32);

}

// ---------- FERMER ----------

function closeLetter(){

    overlay.style.display = "none";

}

// ---------- MACHINE A ECRIRE ----------

function typeWriter(text, element, speed = 32){

    let index = 0;

    element.innerHTML = "";

    function write(){

        if(index < text.length){

            const char = text.charAt(index);

            if(char === "\n"){

                element.innerHTML += "<br>";

            }else{

                element.innerHTML += char;

            }

            element.scrollTop = element.scrollHeight;

            index++;

            setTimeout(write, speed);

        }else{

            typingFinished = true;

            if(hearts){

                hearts.style.display = "block";

            }

            closeButton.style.display = "block";

        }

    }

    write();

}// ======================================
// Partie 4/5
// ======================================

// ---------- EFFETS VISUELS ----------

function showHearts() {

    if (!hearts) return;

    hearts.style.display = "block";
    hearts.style.opacity = "0";
    hearts.style.transform = "translateY(20px)";

    setTimeout(() => {

        hearts.style.transition = "all 1.2s ease";
        hearts.style.opacity = "1";
        hearts.style.transform = "translateY(0px)";

    }, 100);

}

// ---------- REMISE A ZERO ----------

function resetLetter() {

    birthdayText.innerHTML = "";

    typingFinished = false;

    if (hearts) {

        hearts.style.display = "none";
        hearts.style.opacity = "0";
        hearts.style.transform = "translateY(20px)";
        hearts.style.transition = "";

    }

}

// ---------- AMELIORATION DE L'OUVERTURE ----------

const oldOpenLetter = openLetter;

openLetter = function(){

    if(!letterReady) return;

    resetLetter();

    overlay.style.display = "flex";

    closeButton.style.display = "none";

    setTimeout(() => {

        typeWriter(birthdayMessage, birthdayText, 30);

    }, 600);

}

// ---------- FIN DE LA MACHINE A ECRIRE ----------

const oldTypeWriter = typeWriter;

typeWriter = function(text, element, speed = 30){

    let i = 0;

    element.innerHTML = "";

    function type(){

        if(i < text.length){

            if(text.charAt(i) == "\n"){

                element.innerHTML += "<br>";

            }else{

                element.innerHTML += text.charAt(i);

            }

            element.scrollTop = element.scrollHeight;

            i++;

            setTimeout(type, speed);

        }

        else{

            typingFinished = true;

            showHearts();

            closeButton.style.display = "block";

        }

    }

    type();

}// ======================================
// Partie 5/5
// ======================================

// ---------- CONFETTIS ----------

function launchConfetti() {

    for (let i = 0; i < 25; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎉","✨","❤️","🎊"][Math.floor(Math.random()*4)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = (18 + Math.random()*12) + "px";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";
        confetti.style.transition = "transform 3s linear, opacity 3s linear";

        document.body.appendChild(confetti);

        requestAnimationFrame(() => {

            confetti.style.transform =
                `translateY(${window.innerHeight + 100}px)
                 rotate(${Math.random()*720}deg)`;

            confetti.style.opacity = "0";

        });

        setTimeout(() => {

            confetti.remove();

        }, 3000);

    }

}

// ---------- AJOUT DES CONFETTIS A LA FIN ----------

const previousShowHearts = showHearts;

showHearts = function(){

    previousShowHearts();

    launchConfetti();

}

// ---------- FERMETURE ----------

const previousClose = closeLetter;

closeLetter = function(){

    previousClose();

    instruction.innerHTML =
        "Espero que te haya gustado ❤️";

}

// ---------- FIN ----------

console.log("❤️ Carta de Nini cargada correctamente ❤️");
