//PRESTATION DE SERVICE ET DE VENTE
const pourcentageService = 22;
let prestService = 612.51;//mettre le montant de prestation de service içi
const pourcentageVente = 12.80;
let prestVente = 76.66;//mettre le montant de prestation de vente içi
const formaArtisan = 0.30;

result = prestService * pourcentageService/100;
console.log(result);

result2 = prestVente * pourcentageVente/100;
console.log(result2);

sommePresta = result + result2;
console.log(sommePresta);

taxeTotal = sommePresta * formaArtisan/100;
console.log(taxeTotal);

taxeFinal = taxeTotal + sommePresta;
console.log (Math.round(taxeFinal));