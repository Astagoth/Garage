import MoteurThemique from "../Interfaces/MoteurThermique";

export default class MoteurEssence implements MoteurThemique {
    
    /**
     * Permet au moteur de faire le plein d'essance
     */
    faireLePlein() {
        console.log("Le plein d'essence est fait !");
    }

    /**
     * Permet d'augmenter le nombre de tours du moteur
     */
    augmenterTours() {
        console.log("Augmentation du nb de tours !");
    }
}