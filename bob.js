class Bob {
  constructor(x,y,diameter) {
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
  }

   this.body = Bodies.circle(x,y,diameter,options);
   this.diameter = diameter;
   World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill("purple");
    circle(pos.x, pos.y, this.diameter);
  }
}