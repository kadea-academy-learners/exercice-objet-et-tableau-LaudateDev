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
function showStudentBulletin(eleves) {
  if (eleves.length === 0) return [];

  return eleves.map((eleve) => {
    const notes = eleve.notes || [];

    // Si l'élève n'a pas de notes, la moyenne = 0
    const moyenne =
      notes.length === 0 ? 0 : notes.reduce((a, b) => a + b, 0) / notes.length;

    // Arrondi à deux décimales et conversion en nombre
    const moyenneArrondie = Number(moyenne.toFixed(2));

    // Attribution du commentaire selon la moyenne
    let commentaire;
    if (moyenneArrondie >= 16) commentaire = "Excellent";
    else if (moyenneArrondie >= 14) commentaire = "Très Bien";
    else if (moyenneArrondie >= 12) commentaire = "Bien";
    else if (moyenneArrondie >= 10) commentaire = "Passable";
    else commentaire = "À revoir";

    return {
      nom: eleve.nom,
      moyenne: moyenneArrondie,
      commentaire,
    };
  });
}
module.exports = {
  showStudentBulletin,
};
