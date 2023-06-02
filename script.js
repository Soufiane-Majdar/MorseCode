
const morseCodeMap = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    ".-..-.": '"',
    "...-..-": "$",
    ".--.-.": "@",
    "/": " ",
};

function translate() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let result = "";

    if (input.startsWith(".") || input.startsWith("-")) {
        // Morse code to text
        const words = input.split(" / ");
        for (let i = 0; i < words.length; i++) {
            const letters = words[i].split(" ");
            for (let j = 0; j < letters.length; j++) {
                result += morseCodeMap[letters[j]];
            }
            result += " ";
        }
    } else {
        // Text to Morse code
        const words = input.toUpperCase().split(" ");
        for (let i = 0; i < words.length; i++) {
            const letters = words[i].split("");
            for (let j = 0; j < letters.length; j++) {
                result += getKeyByValue(morseCodeMap, letters[j]) + " ";
            }
            result += "/ ";
        }
    }

    output.innerHTML = result;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}