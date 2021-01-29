class Block{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0
          }
        this.Visibility=255
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        World.add(myworld,this.body);
    }
    /* score(){
        if(this.Visiblity<0 && this.Visiblity>-105){
          score++
        }
      }  
 */
    display(){
        
        var pos=this.body.position
        if(this.body.speed<3){
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        //fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }else{
            World.remove(myworld,this.body)
            score=score+20
            push();
            this.Visibility=this.Visibility-5
            //tint(255,this.Visiblity)
           // rect(pos.x,pos.y,this.width,this.height)
            pop();
        } 
    }
    
     
}