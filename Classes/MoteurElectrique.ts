import Moteur from "../Interfaces/Moteur";

export default class MoteurElectrique implements Moteur {
    /**
     * Permet de recharger la batterie du moteur électrique
     */
    recharger() {
        console.log("Le moteur électrique se recharge !");
    }
    
    /**
     * Permet d'augmenter le nombre de tours du moteur
     */
    augmenterTours() {
        console.log("Augmentation du nb de tours !");
    }
}