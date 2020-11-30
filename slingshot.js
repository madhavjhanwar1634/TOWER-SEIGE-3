class SlingShot {
    constructor(bodyA, pointB){
        var option= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:10
         }
        this.sling =  Constraint.create(option)
        this.pointB=pointB
        World.add(world,this.sling)
    }
    fly(){
this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA = body
    }
    display(){
        if (this.sling.bodyA){

        
        var slingA=this.sling.bodyA.position
        var slingB=this.pointB
        line(slingA.x,slingA.y,slingB.x,slingB.y)
        }
    }

}

    
