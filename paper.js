class Paper {

    constructor() {

      var options = {
          isStatic:false,
          restituition:0.4,
          friction:0.4,
          density:1.2
      }
      
      this.body = Bodies.circle(100, 680, 65, options);
      this.body.position.x = 100;
      this.body.position.y = 680;
      this.radius = 70;

      this.image = loadImage("Paper.png");
      
      World.add(world, this.body);

    }

    display(){
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
    
  };
  