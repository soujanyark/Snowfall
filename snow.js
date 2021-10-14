class Snow{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:1,density:1
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
        this.image=loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}