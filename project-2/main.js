//put all axios here-one for each Pokemon
axios.get("https://fizal.me/pokeapi/api/v2/id/448.json")
  .then(function (response){
    console.log(response.data);
    let sprite = response.data.sprites.front_default;
    let hp = "Hp: " + response.data.stats[5].base_stat;
    let atk = "Atk: " + response.data.stats[4].base_stat;
    let def = "Def: " + response.data.stats[3].base_stat;
    // let abilities = "Abilities: " + response.data.abilities;

    let Lucario = new Pokemon(sprite, "Lucario", hp, atk, def);
    Lucario.display();

});

axios.get("https://fizal.me/pokeapi/api/v2/id/6.json")
  .then(function (response){
    console.log(response.data);
    let sprite = response.data.sprites.front_default;
    let hp = "Hp: " + response.data.stats[5].base_stat;
    let atk = "Atk: " + response.data.stats[4].base_stat;
    let def = "Def: " + response.data.stats[3].base_stat;

    let Charmander = new Pokemon(sprite,"Charizard", hp, atk, def);
    Charmander.display();
});

axios.get("https://fizal.me/pokeapi/api/v2/id/655.json")
  .then(function (response){
    console.log(response.data);
    let sprite = response.data.sprites.front_default;
    let hp = "Hp: " + response.data.stats[5].base_stat;
    let atk = "Atk: " + response.data.stats[4].base_stat;
    let def = "Def: " + response.data.stats[3].base_stat;

    let Delphox = new Pokemon(sprite,"Delphox", hp, atk, def);
    Delphox.display();
});

//objects for Trainer and Pokemon components on the page

class Trainer {
  constructor(url, classnames, trainerName){
    this.url = url;
    this.classnames = classnames;
    this.image = document.createElement('img');
    this.trainer = document.getElementById('pokeball-center');
    this.trainerStatsDiv = document.getElementById('trainer-stats');
    this.trainerStats = document.createElement('ul');
    this.trainerName = trainerName

    this.pokemon = []; //all pokemon objects
    console.log(this.pokemon);
  }
  execute(){
    this.trainer.appendChild(this.image);
    this.image.src = this.url;
    this.image.className = this.classnames;
    this.trainerStatsDiv.appendChild(this.trainerStats);

    let li1 = document.createElement('li');
    li1.innerHTML = "Trainer Name: Kendra";
    this.trainerStats.appendChild(li1)

    let li2 = document.createElement('li');
    li2.innerHTML = "Badges: 3";
    this.trainerStats.appendChild(li2);

    let bugBadge = document.getElementById('bugBadge');
    bugBadge.src = 'bug_badge.png';
    this.trainerStatsDiv.appendChild(bugBadge);

    let cliffBadge = document.getElementById('cliffBadge');
    cliffBadge.src = 'cliff_badge.png';
    this.trainerStatsDiv.appendChild(cliffBadge);

    let rumbleBadge = document.getElementById('rumbleBadge');
    rumbleBadge.src = 'rumble_badge2.png';
    this.trainerStatsDiv.appendChild(rumbleBadge);

  }
  // all(){
  //
  // }
  // get(){
  //
  // }
}

let Kendra = new Trainer("trainer.png", "trainer", "Kendra");
Kendra.execute();


class Pokemon {
  constructor(sprite, divId, hp, atk, def){
    // sprite = img
    //hp = integer
    // atk = integer
    // def = integer
    // abilities = array of strings
    this.sprite = sprite;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    // this.abilities = abilities;
    this.divId = divId
  }
//another way to get sprites
  // sprite(){
  //   let div = document.getElementById('Lucario');
  //   let img = document.createElement('img');
  //   div.appendChild(img)
  //   img.src = "https://play.pokemonshowdown.com/sprites/xyani/" + this.name +".gif";
  // }
  display(){
    let pokemonSprite = document.createElement('img');
    pokemonSprite.src = this.sprite;
    pokemonSprite.id = "size";
    document.getElementById(this.divId).appendChild(pokemonSprite);

    let pokemonHp = document.createElement('p');
    pokemonHp.innerHTML = this.hp;
    document.getElementById(this.divId).appendChild(pokemonHp);

    let pokemonAttack = document.createElement('p');
    pokemonAttack.innerHTML = this.atk;
    document.getElementById(this.divId).appendChild(pokemonAttack);

    let pokemonDefense = document.createElement('p');
    pokemonDefense.innerHTML = this.def;
    document.getElementById(this.divId).appendChild(pokemonDefense);

    // let pokemonAbilities = document.createElement('p');
    // pokemonAbilities.innerHTML = this.abilities;
    // document.getElementById(this.divId).appendChild(pokemonAbilities);
  }
}
