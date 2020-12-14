class Paper{
 constructor(x,y){
 var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':false
        }
    this.body = Bodies.circle(x, y, 5, options);
    this.image = loadImage("image/paper.png");
   
    World.add(world, this.body);
 }
 display(){
        var angle = this.body.angle;
        push();
        fill('red');
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(20,20);
        image(this.image,,50,150);
        pop();

 }
}