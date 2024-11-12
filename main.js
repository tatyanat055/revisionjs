//Révision de code avec Javascript
//Avant 2025
var variable = 13;
var village = "Passam";
//Syntaxe à partir de 2015
//ES6 ou Javascript ES6
//Lien : w3schools.com/js/js_es.asp

let nomVariable;
const maVariable = 12;


//Les fonctions
//Version ESS
var 1 = function(x,y) {
    return x * y;
};


//ES6, on utilise la fonction fléchée "arrow fonction"
const n =(x,y) => x * y;

const m =(x,y) => { return x * y };


//Objet avec ES6
const personne = {

    

    prenom: "Tatyana"
    village: "Passam"

};

console.log(personne.nom);

//tableau avec ES6
const tableauFruits = [ "Mangue", "Papaye", "Oragne"];
console.log(tableauFruits[0]);//Récupére le 1er membre du tableau
//Récupere le 1er membre du tableau et le reconvertit en minuscule
console.log(tableauFruits[0].toLowerCase()); 
//Récupère le 1er membre du tableau et le reconvertit entièrement en majiscule
console.log(tableauFruits[0].toUpperCase());



const tableauLegumes = ["Tsouzi", "Trango","Trovi"];
const tableauKibushi = ["vari","huntzsi"];



//Nombres
const notes = [15, 11, 9, 18, 4];
// Je veux récuperer la note plus élevée
let notePlusGrand = Math.max(...notes);
console.log(notePlusGrand);

//Je veux recuperer la note la plus petite 
letnotePlusPetite = Math.min(...notes);
console.log(notePlusPetite);

//MAP
/*Dans un MAP, les données (informations) sont
 sous forme de couple clé-valeur exemple "age: 12"
*/
//Créer un MAP en utilisant new MAP()
let mapLegumes = new MAP([
    ["ravi",500],
    ["huntsi",1000],
    ["moho",800],
    ["batata",345],
]);

//accéder aux éléments qui sont dans la MAP
//Pour cela, on urilise la méthode get()
console.log(mapLegumes.get("ravi"));

// je veux ajouter un nouveau couple dans la MAP mapLegumes
//On utilise une méthode appelé set()
mapLegumes.set("trango",2000);

console.log("nouvelle MAP: ", mapLegumes);