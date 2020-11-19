class chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10
        }
        this.chain = Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.chain);
    }
    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
        var posA = this.chain.bodyA.position;
        var posB = this.pointB;
        stroke("#45DDC8");strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
    }
    }
}