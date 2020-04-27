class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("images.jpg");
    this.Visiblity = 255;
    
  }

 display(){
   
   if(this.body.speed < 8){
    super.display();
    this.count=this.body.position.x-this.body.position.x;
    this.counta=this.body.position.x-this.body.position.x;
    this.text=createElement('h2');
    this.word=createElement("h2");
    this.pigcount=0;
    this.self=createElement('h2');
  
    this.text.position(200,200);
    this.word.position(300,300);
    this.self.position(200,200);
   }
   else{
     World.remove(world, this.body);
     push();
   
     this.esteem=0; 
     for(var i=0;i=200;i++){
      this.esteem=this.esteem+1;
      this.element.html("Self Esteem:"+this.esteem);
     this.count=20;
     this.text.html("Score:"+this.count);
     this.Visiblity = this.Visiblity - 5;
     if(this.count>20){
      this.count=20;
       
       
     }
   
      
       
       }
       
       
     
     
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     
     pop();}
   }}

  
   
 



