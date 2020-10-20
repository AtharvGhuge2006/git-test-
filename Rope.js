class Rope {
    constructor(BodyA,BodyB)
    {
        var options ={
          bodyA: BodyA,
          bodyB: BodyB,
          stiffness: 0.5,
          length:5  
        };
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
    }

    display()
    {
     var posA=this.rope.bodyA.position
     var posB =this.rope.bodyB.position  
     strokeWeight(5)
     line(posA.x,posA.y,posB.x,posB.y) 
    }
}