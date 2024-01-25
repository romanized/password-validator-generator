// passwordGenerator.mjs
export function generatePassword(length = 12) {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()";
    const allCharacters = lowerCaseLetters + upperCaseLetters + numbers + specialCharacters;
    let password = "";

    // dit zorgt ervoor dat je zeker 1 van elke (hier onder) krijgt in je wachtwoord
    password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
    password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));

    // zorgt er voor dat de rest van je wachtwoord automatisch gevuld word met characters
    for (let i = password.length; i < length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    // gewoon een simpele suffle die alles door elkaar haalt
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}
