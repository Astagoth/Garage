import Camion from "./Classes/Camion";
import Garage from "./Classes/Garage";
import Garagiste from "./Classes/Garagiste";
import MoteurDiesel from "./Classes/MoteurDiesel";
import MoteurElectrique from "./Classes/MoteurElectrique";
import MoteurEssence from "./Classes/MoteurEssence";
import Moto from "./Classes/Moto";
import Voiture from "./Classes/Voiture";

const garagiste = new Garagiste(35, "Joseph");
const garage = new Garage();

const electrique = new MoteurElectrique();
const diesel = new MoteurDiesel();
const essence = new MoteurEssence();
const moto = new Moto("BMW", electrique);
const camion = new Camion("Porsch", diesel);
const voiture = new Voiture("Peugeot", essence);


// Le garagiste se présente, conduit et fait le plein :
garagiste.sePresente();
garagiste.conduire();
garagiste.faireLePleinDeToutesLesVoitures();
garagiste.presenterGarage();


// On fait fonctionner la moto :
console.log("\n\n\t\tAu tour de la moto !\n");
moto.afficherVehicule();
moto.avancer();
moto.augmenterTours();
moto.freiner();
moto.reculer();
moto.faireUnWheeling();


// On fait fonctionner la voiture :
console.log("\n\n\t\tAu tour de la voiture !\n");
voiture.afficherVehicule();
voiture.avancer();
voiture.augmenterTours();
voiture.freiner();
voiture.reculer();


// On fait fonctionner le camion :
console.log("\n\n\t\tAu tour du camion !\n");
camion.afficherVehicule();
camion.avancer();
camion.augmenterTours();
camion.freiner();
camion.reculer();
