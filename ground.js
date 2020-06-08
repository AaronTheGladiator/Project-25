class Ground {

    constructor() {

      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(400, 700, 800, 20, options);
      this.body.position.x = 400;
      this.body.position.y = 700;
      this.width = 800;
      this.height = 20;

      World.add(world, this.body);

    }

    display(){
      rectMode(CENTER);
      fill("brown");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  };
 