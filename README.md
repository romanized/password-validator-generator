## Password Validator & Generator door n3bi
### Deze module biedt eenvoudige functionaliteiten om willekeurige wachtwoorden te genereren en de sterkte van wachtwoorden te controleren. Het is ontworpen om gemakkelijk te integreren in webprojecten.

## Installatie
### Om deze module te gebruiken, installeer je deze via npm:
npm install password-generator

## Gebruik
Na installatie kun je de module als volgt in je project gebruiken:

## Wachtwoord Genereren
import { generatePassword } from 'password-validator-generator/passwordGenerator.mjs';

const wachtwoord = generatePassword(12); // Genereert een wachtwoord van 12 karakters
console.log(wachtwoord);

## Wachtwoord Sterkte Controleren
import { checkPasswordStrength } from 'password-validator-generator/passwordStrengthChecker.mjs';

const resultaat = checkPasswordStrength('eenSterkWachtwoord123!');
console.log(resultaat.rating);

## Voorbeeld
Bekijk de examples map voor een HTML-demo over hoe je deze module in een webpagina kunt gebruiken.

## Licentie
Dit project is gelicenseerd onder de MIT-licentie

## MIT Licentie
### Copyright (c) 2024 Nebi C.

Hierbij wordt, gratis, toestemming verleend aan een ieder die een kopie
van deze software en bijbehorende documentatiebestanden (de "Software") in
bezit krijgt, om zonder beperking te dealen in de Software, inclusief de
rechten om het te gebruiken, kopiëren, wijzigen, samenvoegen, publiceren,
verspreiden, sublicentiëren, en/of verkopen, en om personen aan wie de
Software is verschaft dit ook toe te staan, onder de volgende voorwaarden:

De bovenstaande copyrightvermelding en deze toestemmingsvermelding moeten
in alle kopieën of substantiële delen van de Software worden opgenomen.

DE SOFTWARE WORDT VERSTREKT "AS IS", ZONDER ENIGE GARANTIE, EXPLICIET OF
IMPLICIET, INCLUSIEF MAAR NIET BEPERKT TOT DE GARANTIES VAN VERKOOPBAARHEID,
GESCHIKTHEID VOOR EEN BEPAALD DOEL EN NIET-INBREUK. IN GEEN GEVAL ZULLEN DE
AUTEURS OF COPYRIGHT HOUDERS AANSPRAKELIJK ZIJN VOOR ENIGE CLAIM, SCHADE OF
ANDERE AANSPRAKELIJKHEID, VOORTVLOEIEND UIT OF IN VERBAND MET DE SOFTWARE
OF HET GEBRUIK OF ANDERE HANDELINGEN IN DE SOFTWARE.