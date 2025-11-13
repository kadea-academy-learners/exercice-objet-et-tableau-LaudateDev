// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(utilisateurs) {
  const admins = [];
  for (let i = 0; i < utilisateurs.length; i++) {
    const userAdmin = utilisateurs[i].estAdmin;
    const afficherUtilisateur = utilisateurs[i];
    if (userAdmin === true) {
      admins.push(afficherUtilisateur.nom);
    }
  }
  return admins;
}
const utilisateurs = [
  { nom: "Tasisu", age: 30, estAdmin: true },
  { nom: "Kibedi", age: 19, estAdmin: false },
  { nom: "Kavunga", age: 26, estAdmin: true },
];
console.log(whoIsAdmin(utilisateurs));

module.exports = {
  whoIsAdmin,
};
