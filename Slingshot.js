class Slingshot{
    constructor(bodyA, pointB){
        var options = {
           length:10,
           stiffness:0.15, 
           bodyA:bodyA,
           pointB:pointB
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB=pointB;
        this.sling=Constraint.create(options)
        World.add(world, this.sling);
    }
    
    fly() {
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        image(this.sling1,200,30);
        image(this.sling2,172,25);
        if(this.sling.bodyA){
            var pA=this.sling.bodyA.position
            var pB=this.pointB;
            push()
            stroke(57,26,10)
            if(pA.x<=210){
                strokeWeight(7)
                line(pA.x-20,pA.y,pB.x-10,pB.y)
                line(pA.x-20,pA.y,pB.x+30,pB.y)
                image(this.sling3,pA.x-30,pA.y-12,15,30)
            }
            else{
                strokeWeight(3)     
                line(pA.x+20,pA.y,pB.x-30,pB.y)
                line(pA.x+20,pA.y,pB.x+20,pB.y)
                image(this.sling3,pA.x+20,pA.y-10,15,30)
            }
            pop()
        }
        
    }
}