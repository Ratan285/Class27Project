class Bob{
    constructor(x,y){
        var options = {
            density:1.2,
            restitution:0.7,
            friction:1
        }
     this.body = Bodies.circle(x, y,40,options)
     this.radius = 140;
     World.add(world, this.body);
    }
    display(){
        
        var pos = this.body.position;
        push();
        fill("red");
        translate(pos.x, pos.y);
        rectMode(CENTER);
        circle(0, 0, this.radius);
        pop()

    }
}