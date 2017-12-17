// just a good old class defining what a Recipe looks like.

export class Recipe {

  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, img: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = img;
  }

}
