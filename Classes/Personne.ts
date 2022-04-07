export default abstract class Personne {
    
    // Chaque personne a un nom et un age
    public age:number;
    public nom:string;
    
    constructor (_age:number, _nom:string) {
        this.age = _age;
        this.nom = _nom;
    }

    /**
     * Permet à une personne  de se présenter
     */
    public sePresente() {
        console.log("La personne se présente !");
    };
}