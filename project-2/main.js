class Pokedex {
  constructor(url, classnames){
    this.url = url;
    this.classnames = classnames;
    this.image = document.createElement('img');
    this.trainer = document.getElementById('pokeball-center');
  }
  execute(){
    this.trainer.appendChild(this.image);
    this.image.src=this.url;
    this.image.classNames = this.classnames;
  }
}

let Kendra = new Pokedex("trainer.png", "trainer");
Kendra.execute();
