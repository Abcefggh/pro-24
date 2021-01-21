class Hammer {
    constructor(x , y ) {
      var options = {
          'restitution':2.0,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 50, 20, options);
      this.width = 50;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  