class Trainer {
  constructor(url, classnames){
    this.url = url;
    this.classnames = classnames;
    this.image = document.createElement('img');
    this.trainer = document.getElementById('pokeball-center');

    this.pokemon = []; //all pokemon objects
  }
  execute(){
    this.trainer.appendChild(this.image);
    this.image.src = this.url;
    this.image.className = this.classnames;
  }
  // all(){
  //
  // }
  // get(){
  //
  // }
}

let Kendra = new Trainer("trainer.png", "trainer");
Kendra.execute();


class Pokemon {
  constructor(sprite, atk, def, abilities){
    // sprite = img
    // atk = integer
    // def = integer
    // abilities = array of strings
    this.sprite = sprite;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.abilities = abilities;

  }
}

axios.get("https://fizal.me/pokeapi/api/v2/id/4.json")
  .then(function (response){
    console.log(response.data);
});

axios.get("https://fizal.me/pokeapi/api/v2/id/447.json")
  .then(function (response){
    console.log(response.data);
});

axios.get("https://fizal.me/pokeapi/api/v2/id/653.json")
  .then(function (response){
    console.log(response.data);
});
