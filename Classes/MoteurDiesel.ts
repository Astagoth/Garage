import MoteurThemique from "../Interfaces/MoteurThermique";

export default class MoteurDiesel implements MoteurThemique {
    
    /**
     * Permet au moteur de faire le plein de diesel
     */
    faireLePlein() {
        console.log("Le plein de diesel est fait !");
    }

    /**
     * Permet d'augmenter le nombre de tours du moteur
     */
    augmenterTours() {
        console.log("Augmentation du nb de tours !");
    }
}