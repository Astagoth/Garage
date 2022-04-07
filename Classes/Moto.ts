import Vehicule from "./Vehicule";

export default class Moto extends Vehicule {
    
    /**
     * Permet à la moto de se mettre la roue arrière
     */
    public faireUnWheeling() {
        console.log("La moto fait un wheel !");
    }
}