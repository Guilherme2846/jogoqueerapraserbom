function Sprite(x,y,largura,altura){
	this.x=x;
	this.y=y;
	this.largura=largura;
	this.altura=altura;
	
	this.desenha=function(xCanvas,yCanvas){
		ctx.drawImage(img,this.x,this.y,this.largura,this.altura,xCanvas,yCanvas,this.largura,this.altura);
	}
	
}

var imgbg= new Sprite(0,0,500,600),
imgbg2=new Sprite(500,0,700,600),
imgj=new Sprite(0,1250,100,100),
imgj2=new Sprite(100,1250,100,100),
imgcarro=new Sprite(0,603,50,100),
imgcarro2=new Sprite(51,603,50,100),
poli=new Sprite(103,603,100,50),
cami=new Sprite(51,703,55,110),
camin=new Sprite(0,815,60,400),
pjo=new Sprite(0,703,50,100);

/*
ataque de status -> el=oq vai mudar
					pwr=quanto


mochila(9)
vender
css
treinador
pp
queimar (etc...)
outros bichos

}*/


