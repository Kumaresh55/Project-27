class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        
        var options={
        bodyA : body1,
        bodyB : body2,
        PointB : {x:offsetX, y:offsetY},
        stiffness : 0.04,
        length : 200
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var PointA = this.rope.bodyA.position;
        var PointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(PointA.x, PointA.y, PointB.x, PointB.y);
    }
}