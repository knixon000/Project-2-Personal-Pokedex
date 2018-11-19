//store all stats and elements for each pokemon in variables

//put all axios here-one for each Pokemon
axios.get("https://fizal.me/pokeapi/api/v2/id/4.json")
  .then(function (response){
    console.log(response.data);
});

axios.get("https://fizal.me/pokeapi/api/v2/id/448.json")
  .then(function (response){
    console.log(response.data);
    let lucarioSprite = document.createElement('img');
    lucarioSprite.src = response.data.sprites.front_default;
    document.getElementById('Lucario').appendChild(lucarioSprite);
    
});

axios.get("https://fizal.me/pokeapi/api/v2/id/653.json")
  .then(function (response){
    console.log(response.data);
});

//complete the selectors for all stats in Pokemon Class

class Trainer {
  constructor(url, classnames){
    this.url = url;
    this.classnames = classnames;
    this.image = document.createElement('img');
    this.trainer = document.getElementById('pokeball-center');
    this.trainerStatsDiv = document.getElementById('trainer-stats');
    this.trainerStats = document.createElement('ul');

    this.pokemon = []; //all pokemon objects
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
  constructor(sprite, hp, atk, def, abilities){
    // sprite = img
    //hp = integer
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
