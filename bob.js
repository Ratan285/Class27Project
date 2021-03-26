class Bob{
    constructor(x,y){
        var options = {
            density:1.2,
            restitution:0.7,
            friction:1
        }
     this.body = Bodies.rectangle(x,y,50,50,options)
     this.width = 80;
     this.height = 80;
     this.image = loadImage("paper.png");
     World.add(world, this.body);
    }
    display(){
        
        var pos = this.body.position;
        
        fill("red");
        //translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);

    }
}