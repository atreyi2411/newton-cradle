class rope
{
constructor(body1,body2,offSetX,offSetY){
    this.offSetX = offSetX
    this.offSetY = offSetY
    var options = {
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offSetX,y:this.offSetY}        
        //stiffness:0.04, 
        //length:10
    }
this.rope = Constraint.create (options);
World.add(world,this.rope)
}

display(){
    var pointA = this.rope.bodyA.position
    var pointB = this.rope.bodyB.position
    strokeWeight(2)
    stroke("black")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}