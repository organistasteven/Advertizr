// Objet représentant l'écran défilant Advertizr
const Advertizer = {

    /**
     * Propriétés
     */

    // Propriété permettant de modéliser le fait que la touche MAJ a été enfoncée
    isUpperCase: false,
    container: null,


    /**
     * Méthodes
     */

    init: function() {
        // Récupère le container pour ajouter le lettre + tard
        Advertizer.container = document.querySelector('.screen .text');

        // Récupère les lettres du clavier + esapce
        const keys = document.querySelectorAll('.key');
        for( const key of keys) {
            key.addEventListener('click', Advertizer.handleLetterClick);
        }

        // Branche le click sur maj et return
        document.querySelector('.maj').addEventListener('click', Advertizer.handleMajClick);
        document.querySelector('.return').addEventListener('click', Advertizer.handleReturnClick);
    },

    handleLetterClick: function (event) {
        // Extrait la lettre du bouton clické
        const letter = event.currentTarget.textContent;
        console.log(letter)

        //Appelle l'ajout au screen
        Advertizer.addLetter(letter);
    },

    handleReturnClick: function (event) {
        console.log("return")
        Advertizer.removeLetter();
    },

    handleMajClick: function (event) {
        console.log(event)
    },



    /**
     * Cette méthode ne fait qu'une chose, ajouter la lettre au container
     * @param {String} letter 
     */
    addLetter: function (letter) {
        // Affiche la lettre
        Advertizer.container.textContent += letter;
        // container.textContent = container.textContent + letter;
    },


    removeLetter: function () {
        // Récupère le text
        let text = Advertizer.container.textContent;

        // Slice permet d'extraire une partie de la chaine
        // texte à partir du début -1 lettre en partant de la fin
        text = text.slice(0, -1);
        console.log(text);

        // Met à jour l'affichage
        Advertizer.container.textContent = text;
    },
}

document.addEventListener('DOMContentLoaded', Advertizer.init);