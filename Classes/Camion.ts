import Vehicule from "./Vehicule";

export default class Camion extends Vehicule {
    
    /**
     * Permet d'attacher une remorque au camion
     */
    public attacherRemorque() {
        console.log("Le camion attache une remorque !");
    }

    /**
     * Permet de détacher la remorque du camion
     */
    public detacherRemorque() {
        console.log("Le camion détache la remorque !");
    }
}