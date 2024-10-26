const voicesDropdown = document.querySelector("#voices");
const textarea = document.querySelector("#text");
const rateInput = document.querySelector("#rate");
const pitchInput = document.querySelector("#pitch");
const speak = document.querySelector("#speak");

const message = new SpeechSynthesisUtterance(textarea.value);

let voices = [];

function populateVoices() {
    voices = speechSynthesis.getVoices();

    for(let index = 0; index < voices.length; index++) {
        const option = document.createElement("option");
        option.setAttribute("value",voices[index].name);
        option.textContent = voices[index].name;
        voicesDropdown.appendChild(option); 
    }
}
function setVoices() {
    for(let index = 0; index < voices.length; index++) {
        if(voicesDropdown.value === voices[index].name){
            message.voice = voices[index].name;

        }
    }
}
function setRate() {
    message.rate = rateInput.value;
}

function setPitch() {
    message.pitch = pitchInput.value;
}
function setText() {
    message.text = textarea.value;
}

function speakVoice() {
    speechSynthesis.    speak(message);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoices);
rateInput.addEventListener("change", setRate);
pitchInput.addEventListener("change", setPitch);
speak.addEventListener("change", speakVoice);
