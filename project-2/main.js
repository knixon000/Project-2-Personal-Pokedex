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


class Pokemon {
  constructor(sprite, hp, atk, def, spAtk, spDef){
    this.sprite = sprite;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spAtk = spAtk;
    this.spDef = spDef;
  }
  execute2(){
    
  }
}


axios.get("https://fizal.me/pokeapi/api/v2/id/447.json")
  .then(function (response){
    console.log(response.data);
  });

axios.get("https://fizal.me/pokeapi/api/v2/id/4.json")
  .then(function (response){
    console.log(response.data);
  });

axios.get("https://fizal.me/pokeapi/api/v2/id/653.json")
  .then(function (response){
    console.log(response.data);
  });
