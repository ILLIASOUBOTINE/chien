
class Chien{
  nom;
  age;
  race;
  // mangeFois;
  mangeTotale = 0;

 mange(quantite){
  this.mangeTotale += quantite;
  console.log(this.mangeTotale);
 }

 aboie(){
  console.log("aboie aboie aboie!!!");
 }

  constructor(nom,age,race){
    this.nom = nom;
    this.age = age;
    this.race = race;
    // this.mangeFois = mangeFois;
  }


}

let chien1 = new Chien("rex", 4, "corgi");

chien1.aboie();

chien1.mange(450);

chien1.mange(150);


