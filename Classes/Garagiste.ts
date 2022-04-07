import Personne from "./Personne";

export default class Garagiste extends Personne {
    public age: number;
    public nom: string;
    
    constructor(age:number, nom:string) {
        super(age, nom);
        this.age = age;
        this.nom = nom;
    }
    /**
     * Permet au garagiste de conduite peu importe le véhicule
     */
    conduire() {
        console.log("Le garagiste conduit !");
    }

    /**
     * Permet au garagiste de se présenté
     */
    presenterGarage() {
        console.log("Le garagiste se presente !");
    }

    /**
     * Permet au garagiste de faire le plein de toutes les voitures du garage
     */
    faireLePleinDeToutesLesVoitures() {
        console.log("Le garagiste fait le plein de tous les véhicules !");
    }

    public sePresente(): void {
        console.log(`Le garagiste s'appel ${this.nom} et il a ${this.age} ans`);
    }
    
}