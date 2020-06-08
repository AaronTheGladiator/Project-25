class Trash {

    constructor(x, y, width,height) {

      var options = {
          isStatic:true
      } 

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x=x
      this.y=y
      this.width = width;
      this.height =height;

      this.image = loadImage("Trash.png");
      
      World.add(world, this.body);

    }

    display(){
      rectMode(CENTER);
      fill("black");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, side1.body.position.x, 630, 200, 100);
    }
  };
 