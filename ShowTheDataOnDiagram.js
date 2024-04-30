// this class will make the datas you setted  before
class MakeDiagram
{
    constructor(name,studentScores,ClassScore,delay,cooperation,participate,color) {
        this.name=name;
        this.studentScores=studentScores;
        this.ClassScore=ClassScore;
        this.delay=delay;
        this.cooperation=cooperation;
        this.participate=participate;
        this.color=color;
        this.div;
        this.p;
        this.divHolder;
    }
    MakeLines()
    {

        c.fillStyle=this.color;
        c.strokeStyle=this.color;
        c.beginPath();
        c.arc(canvas.width/2,(canvas.height/2)-((5*this.studentScores)),3,0,Math.PI*2);
        c.fill();
        c.beginPath();
        c.arc((canvas.width/2)+((4.9*this.ClassScore)),(canvas.height/2)-((.89*this.ClassScore)),3,0,Math.PI*2);
        c.fill();
        c.beginPath();
        c.arc((canvas.width/2)+((2.75*this.delay)),(canvas.height/2)+((5*this.delay)),3,0,Math.PI*2);
        c.fill();
        c.beginPath();
        c.arc((canvas.width/2)-((2.7*this.cooperation)),(canvas.height/2)+((5*this.cooperation)),3,0,Math.PI*2);
        c.fill();
        c.beginPath();
        c.arc((canvas.width/2)-((4.9*this.participate)),(canvas.height/2)-((.8*this.participate)),3,0,Math.PI*2);
        c.fill();
        c.beginPath()
        c.moveTo(canvas.width/2,(canvas.height/2)-((5*this.studentScores)));
        c.lineTo((canvas.width/2)+((4.9*this.ClassScore)),(canvas.height/2)-((.89*this.ClassScore)));
        c.lineTo((canvas.width/2)+((2.75*this.delay)),(canvas.height/2)+((5*this.delay)));
        c.lineTo((canvas.width/2)-((2.7*this.cooperation)),(canvas.height/2)+((5*this.cooperation)));
        c.lineTo((canvas.width/2)-((5*this.participate)),(canvas.height/2)-((.8*this.participate)));
        c.lineTo(canvas.width/2,(canvas.height/2)-((5*this.studentScores)));
        c.stroke();
        this.MakeNamse();
      
    }
    MakeNamse()
    {
        this.divHolder=document.createElement("div");
        this.divHolder.classList.add("divs");
        this.div=document.createElement("div");
        this.div.style.background=`${this.color}`;
        this.p=document.createElement("p");
        this.p.innerText=`${this.name}`;
        this.divHolder.append(this.div,this.p);
        holder.append(this.divHolder);
    }

}
// and here we call the class that will show the data on the diagram
data.map((item,index)=>
{
    new MakeDiagram(item.name,item.studentScores,item.ClassScore,item.delay,item.cooperation,item.participate,colors[index]).MakeLines();
});