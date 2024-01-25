// passwordStrengthChecker.mjs
export function checkPasswordStrength(password) {
    let strengthPoints = 0;
    const minLength = 8;
    let suggestions = [];

    // criteria voor een sterker wachtwoord (dus als je wachtwoord steeds een van deze bevat krijg je een punt die bepaald hoe goed je wachtwoord is)
    const criteria = [
        { regex: /[a-z]/, points: 1, message: "Gebruik minstens één kleine letter." }, // Kleine letters
        { regex: /[A-Z]/, points: 1, message: "Gebruik minstens één hoofdletter." }, // Hoofdletters
        { regex: /[0-9]/, points: 1, message: "Gebruik minstens één cijfer." }, // Cijfers
        { regex: /[^A-Za-z0-9]/, points: 1, message: "Gebruik minstens één speciaal teken." } // Speciale tekens
    ];

    // voor elke criterium voegt die een . toe
    criteria.forEach(criterion => {
        if (criterion.regex.test(password)) {
            strengthPoints += criterion.points;
        } else {
            suggestions.push(criterion.message);
        }
    });

    // lengtecontrole
    if (password.length >= minLength) {
        strengthPoints += 1;
    } else {
        suggestions.push(`Gebruik minstens ${minLength} tekens.`);
    }

    // beoordeling op basis van de sterktepunten
    let rating = '';
    switch (strengthPoints) {
        case 5:
            rating = 'Zeer Sterk';
            suggestions = [];
            break;
        case 4:
            rating = 'Sterk';
            break;
        case 3:
            rating = 'Goed';
            break;
        case 2:
            rating = 'Zwak';
            break;
        default:
            rating = 'Zeer Zwak';
            break;
    }

    return {
        rating, // De beoordeling van het wachtwoord
        points: strengthPoints, // Het aantal behaalde punten
        maxPoints: criteria.length + 1, // Het maximaal mogelijke aantal punten
        suggestions // Suggesties voor verbetering van het wachtwoord
    };
}
