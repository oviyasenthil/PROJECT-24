class Paper
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.circle(x,y,width,height,option);
        World.add(world,this.body);
    }
    display()
    {
        
        ellipseMode(CENTER);
        fill("purple");
        ellipse(x,y,width,height);
    }
}