class polygon{
    constructor(x,y){
        this.body = Bodies.circle(x,y,25,{density:5});
        World.add(world,this.body);

        this.image = loadImage("polygon.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}