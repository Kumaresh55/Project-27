class Bob
{
    constructor(x, y, radius)
    {
        var options={
            'isStatic' : false,
            'restitution' : 0.3,
            'friction' : 0,
            'density' : 0.8
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        World.add(world, this.body);
        
       
      
      }

      display()
      {   
        var ro = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(ro);
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0, 0, this.r, this.r);
        pop(); 
      }
}