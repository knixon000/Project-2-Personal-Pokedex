class Trainer {
  constructor(url, classnames){
    this.url = url;
    this.classnames = classnames;
    this.image = document.createElement('img');
    this.trainer = document.getElementById('pokeball-center');
  }
  execute(){
    this.trainer.appendChild(this.image);
    this.image.src = this.url;
    this.image.className = this.classnames;
  }
}

let Kendra = new Trainer("trainer.png", "trainer");
Kendra.execute();

// class Stats {
//   constructor(hp, atk, def, spAtk, spDef){
//     this.hp = hp;
//     this.atk = atk;
//     this.def = def;
//     this.spAtk = spAtk;
//     this.spDef = spDef;
//   }
// }
//
// let TranStats = new Stats();
//
// let RioStats = new Stats();
//
// let Stats = new Stats();
//
// let DelphoxStats = new Stats();
