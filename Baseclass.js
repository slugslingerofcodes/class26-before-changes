class Base{
    constructor(x,y,z,h,angle){
        var or={
            restitution:0.8,
            friction:1,
            density:1
          }
        this.body=Body.rectangle(x,y,z,h,or)
        this.z=z
        this.h=h
        this.image=loadImage("sprites/base.png")

        World.add(world,this.body);
         console.log(this.body) ;
    }
    object(){
        push ()
        angleMode(RADIANS)
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)

        fill ("red")
        imageMode(CENTER) 
        image (this.image,0,0,this.z,this.h)
        pop ()   
    }
}