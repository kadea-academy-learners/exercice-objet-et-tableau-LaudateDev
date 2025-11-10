// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".
const eleves = [
  { nom: "Tasisu", notes: [15, 18, 17] },
  { nom: "Kavunga", notes: [10, 12, 11] },
];

function showStudentBulletin(eleves) {
  let bulletins = [];

  for (let i = 0; i < eleves.length; i++) {
    let eleve = eleves[i];

    let moyenne = 0;

    if (eleve.notes.length > 0) {
      let somme = 0;
      for (let j = 0; j < eleve.notes.length; j++) {
        somme = somme + eleve.notes[j];
      }

      moyenne = somme / eleve.notes.length;
    }

    moyenne = moyenne.toFixed(2);

    let commentaire = "";

    let moyenneNum = Number(moyenne);

    if (moyenneNum >= 16) {
      commentaire = "Excellent";
    } else if (moyenneNum >= 14) {
      commentaire = "Très Bien";
    } else if (moyenneNum >= 12) {
      commentaire = "Bien";
    } else if (moyenneNum >= 10) {
      commentaire = "Passable";
    } else {
      commentaire = "À revoir";
    }

    let bulletin = {
      nom: eleve.nom,
      moyenne: moyenne,
      commentaire: commentaire,
    };

    bulletins.push(bulletin);
  }

  return bulletins;
}
module.exports = {
  showStudentBulletin,
};
