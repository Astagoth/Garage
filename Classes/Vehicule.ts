import Moteur from "../Interfaces/Moteur";

export default abstract class Vehicule implements Moteur {
    protected marque:string;
    _moteur:Moteur;

    constructor(_marque:string, moteur:Moteur) {
        this.marque = _marque;
        this._moteur = moteur;
    }

    /**
     * Permet au véhicule d'avancer
     */
    public avancer() {
        console.log("Le véhicule avance !");
    }

    /**
     * Permet au véhicule de reculer
     */
    public reculer() {
        console.log("Le véhicule recule !");
    }

    /**
     * Permet au véhicule de freiner
     */
    public freiner() {
        console.log("Le véhicule freine !");
    }

    /**
     * Permet d'afficher le véhicule
     */
    public afficherVehicule() {
        console.log(`Voici le véhicule de la marque ${this.marque} !`);
    }

    augmenterTours() {
        console.log("Le véhicule augmente le nombre de tours !");
    }
}