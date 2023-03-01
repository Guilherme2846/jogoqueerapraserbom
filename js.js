var cnv=document.querySelector("canvas"),
img,
LOUCURA=1,
HEIGHT=600,
WIDTH=400,
LARGURA=500;
var carro="pjo",
camioneta="camio",
caminhao="camin",
policia="poli";
var ctx=cnv.getContext("2d");
var p1 = {
	x:(LARGURA-50)/2,
	y:HEIGHT-100,
	spd:5,
	score:0,
	desenha:function(){
	imgcarro.desenha(this.x,this.y)
	}
};
var p2 = {
	x:undefined,
	y:HEIGHT-undefined,
	spd:5,
	score:0,
	desenha:function(){
		if(!p2afk){
	imgcarro2.desenha(this.x,this.y)
	}
	}
};
var direita="ArrowRight",esquerda="ArrowLeft",cima="ArrowUp",baixo="ArrowDown",direita2="D",esquerda2="A",cima2="W",baixo2="S",um="1",dois="2",space=" ";
var movdireita=false,movesquerda=false,movcima=false,movbaixo=false;
var movdireita2=false,movesquerda2=false,movcima2=false,movbaixo2=false;
var estadoAtual=0,
estado={
	jogar:0,
	jogando:1,
	perdeu:2
},
RECORD=localStorage.getItem("RECORD"),
p2afk=true,
spd_temp=1;

if(RECORD==null){
RECORD=0;
}
img= new Image();
img.src="a_imagem.png";

		document.getElementById("placar").innerText="HIGHER SCORE:";
		KRAI=document.getElementById("placar");
		BAGUIONECESSARIO = document.createTextNode(RECORD);
		KRAI.append(BAGUIONECESSARIO);
document.body.addEventListener("keydown",movimentar);
document.body.addEventListener("keyup",parar);
document.body.addEventListener("mousedown",clique);
trafico={
	carro:[],

	sla:[{n:"pjo",a:100,l:50,s:3},{n:"camio",a:110,l:55,s:2.5},{n:"camin",a:400,l:60,s:1.75},{n:"poli",a:50,l:100,s:2.75}],
	

	tempospaw:0,
	marginal:Math.floor(4*Math.random()),
	indicelinha:4,
	linhai:Math.floor(this.indicelinha*Math.random()),
	pista:[{l:51,pode:true},{l:150,pode:true},{l:250,pode:true},{l:349,pode:true}],
	linha:[1,2,3,4],
	
	insere:function(){
		this.linhai=Math.floor(this.indicelinha*Math.random())
		this.carro.push({
			pode:true,
			lincar:this.linha[this.linhai],
		x:(this.pista[this.linhai].l)+50-this.sla[this.marginal].l/2,
		n:this.sla[this.marginal].n,
		t:true,
		ppb:true,
		ppb2:true,
		nmdp:true,
		largura:this.sla[this.marginal].l,
		altura:this.sla[this.marginal].a,
		spd:this.sla[this.marginal].s,
		y:-420,
		});
		this.tempospaw=40+Math.floor(120*Math.random())/(spd_temp*1.3)*(LOUCURA*0.6);
		this.marginal=Math.floor(4*Math.random());
		if(!this.pista[this.linhai].pode){
			this.carro.pode=false;
			this.pista[this.linhai].pode=true;
		}else{
		this.pista[this.linhai].pode=false;
	}
		this.linhai=Math.floor(this.indicelinha*Math.random());
	},
	
	atualiza:function(){
		if(this.tempospaw<=0){
			this.insere();
		}else{
			this.tempospaw--;
		}
	for(var i=0,tam=this.carro.length;i<tam;i++){
		
		if(this.carro[i].pode) //|| (this.carro[i].lincar==this.carro[this.carro.slice(0,i-1)].lincar &&))
		{
			
		if(this.carro[i].n==policia && this.carro[i].nmdp){
			this.carro[i].nmdp=false;
			this.carro[i].x=this.pista[this.linhai].l;
		}
		this.carro[i].y = this.carro[i].y+this.carro[i].spd*(spd_temp*1.2);
		if(p2.x<WIDTH+50&&p2.x>0){
		p2.score+=1;
	}
		if(p1.x<WIDTH+50&&p1.x>0){
		p1.score+=1;
	}
	spd_temp+=0.00008;
		if((p1.y<=this.carro[i].y+this.carro[i].altura && p1.y+100>=this.carro[i].y && p1.x+50>=this.carro[i].x &&
		p1.x<=this.carro[i].x+this.carro[i].largura)||
		(p2.y<=this.carro[i].y+this.carro[i].altura && p2.y+100>=this.carro[i].y && p2.x+50>=this.carro[i].x &&
		p2.x<=this.carro[i].x+this.carro[i].largura)){
			if(p1.y<=this.carro[i].y+this.carro[i].altura && p1.y+100>=this.carro[i].y && p1.x+50<=this.carro[i].x+p1.spd+1 && p1.x+50<=this.carro[i].x+this.carro[i].largura){
						if(this.carro[i].n==caminhao && p1.y+100<=this.carro[i].y+this.carro[i].altura-100 && p1.y>this.carro[i].y && this.carro[i].ppb){
							this.carro[i].t=false;
							this.carro[i].ppb=false;
						p1.score+=500;
						p1.spd+=0.2;
					}else if(this.carro[i].t){
						movdireita=false;
						this.carro[i].t=false;
						
						p1.spd-=1;
						if(p1.spd<=0){
							estadoAtual=estado.perdeu;
						}
					}
			}else if(p1.y<=this.carro[i].y+this.carro[i].altura && p1.y+100>=this.carro[i].y && p1.x>=this.carro[i].x+this.carro[i].largura-p1.spd-1 && p1.x+50>=this.carro[i].x+this.carro[i].largura){
					if(this.carro[i].n==caminhao && p1.y+100<=this.carro[i].y+this.carro[i].altura-100 && p1.y>this.carro[i].y &&  this.carro[i].ppb){
						this.carro[i].t=false;
						this.carro[i].ppb=false;
						p1.score+=500;
						p1.spd+=0.2;
					}else if(this.carro[i].t){
						movesquerda=false;
						this.carro[i].t=false;
						p1.spd-=1;
						if(p1.spd<=0){
							estadoAtual=estado.perdeu;
						}
					}
			}else if(this.carro[i].t){
				
			estadoAtual=estado.perdeu;
			}
			
			if(p2.y<=this.carro[i].y+this.carro[i].altura && p2.y+100>=this.carro[i].y && p2.x+50<=this.carro[i].x+p2.spd+1 && p2.x+50<=this.carro[i].x+this.carro[i].largura){
						if(this.carro[i].n==caminhao && p2.y+100<=this.carro[i].y+this.carro[i].altura-100 && p2.y>this.carro[i].y && !ppb2){
							this.carro[i].t=false;
							this.carro[i].ppb2=false;
						p2.score+=500;
						p2.spd+=0.2;
					}else if(this.carro[i].t){
						movdireita2=false;
						this.carro[i].t=false;
						
						p2.spd-=1;
						if(p2.spd<=0){
							estadoAtual=estado.perdeu;
						}
					}
			}else if(p2.y<=this.carro[i].y+this.carro[i].altura && p2.y+100>=this.carro[i].y && p2.x>=this.carro[i].x+this.carro[i].largura-p2.spd-1 && p2.x+50>=this.carro[i].x+this.carro[i].largura){
					if(this.carro[i].n==caminhao && p2.y+100<=this.carro[i].y+this.carro[i].altura-100 && p2.y>this.carro[i].y && !ppb2){
						this.carro[i].t=false;
						this.carro[i].ppb2=false;
						p2.score+=500;
						p2.spd+=0.2;
					}else if(this.carro[i].t){
						movesquerda2=false;
						this.carro[i].t=false;
						p2.spd-=1;
						if(p2.spd<=0){
							estadoAtual=estado.perdeu;
						}
					}
			}else if(this.carro[i].t){
				
			estadoAtual=estado.perdeu;
			}
			}
			
		else if(this.carro[i].y>=HEIGHT){
		this.carro.splice(i,1);
		tam--;
		i--;
		}
	
		}else{
			this.carro.splice(i,1);
		}
	}
	},
	limpa:function(){
		this.carro=[];
	},
	desenha:function(){
	for(var i=0,tam=this.carro.length;i<tam;i++){
		if(this.carro[i].n==carro){
	pjo.desenha(this.carro[i].x,this.carro[i].y)
	}else if(this.carro[i].n==camioneta){
		cami.desenha(this.carro[i].x,this.carro[i].y)
	}else if(this.carro[i].n==caminhao){
		camin.desenha(this.carro[i].x,this.carro[i].y)
	}else if(this.carro[i].n==policia){
		poli.desenha(this.carro[i].x,this.carro[i].y)
	}
	}
	}
};

update();
function clique(event){	
if(estadoAtual==estado.jogar){
	spd_temp=1;	
	estadoAtual=estado.jogando;
}
else if(estadoAtual==estado.perdeu){
	
	estadoAtual=estado.jogar;
	
	if(p1.score>RECORD){
		RECORD=p1.score;
		localStorage.setItem("RECORD",RECORD);
		document.getElementById("placar").innerText="HIGHER SCORE:";
		KRAI=document.getElementById("placar");
		BAGUIONECESSARIO = document.createTextNode(RECORD);
		KRAI.append(BAGUIONECESSARIO);
	
	}
	if(p2.score>RECORD){
		RECORD=p2.score;
		localStorage.setItem("RECORD",RECORD);
		document.getElementById("placar").innerText="HIGHER SCORE:";
		KRAI=document.getElementById("placar");
		BAGUIONECESSARIO = document.createTextNode(RECORD);
		KRAI.append(BAGUIONECESSARIO);
	
	}
	trafico.limpa();
	p1.x=(LARGURA-50)/2;
	p1.y=HEIGHT-100;
	p1.score=0;
	p1.spd=5;
	if(!p2afk){
		p1.x=(LARGURA-50)/2+50;
	p2.x=(LARGURA-50)/2-50;
	p2.y=HEIGHT-100;
	p2.score=0;
p2.spd=5;
}
}
}

function movimentar(event){
	var tecla=event.key;
	console.log(`${tecla}`);
	if(tecla===space){
		clique();
	}
	if(estadoAtual==estado.jogar){
	if(tecla==2 && p2afk){
		LARGURA=700;
		WIDTH=600;
		p2afk=false;
		p1.x=(LARGURA-50)/2+50;
		p2.x=(LARGURA-50)/2-50;
	p2.y=HEIGHT-100;
	LOUCURA=1.3;
	trafico.indicelinha=6;
	trafico.linha=[1,2,3,4,5,6];
	trafico.pista=[{l:51,pode:true},{l:150,pode:true},{l:250,pode:true},{l:350,pode:true},{l:450,pode:true},{l:549,pode:true}],
	document.querySelector("canvas").width=LARGURA;
	
	
	}
	if(tecla==1 && !p2afk){
		p2afk=true;
		p2.x=undefined;
	p2.y=undefined;
	LARGURA=500;
		WIDTH=400;
		LOUCURA=1;
		trafico.indicelinha=4;
		trafico.linha=[1,2,3,4];
		trafico.pista=[{l:51,pode:true},{l:150,pode:true},{l:250,pode:true},{l:349,pode:true}]
	document.querySelector("canvas").width=LARGURA;
	p1.x=(LARGURA-50)/2
		
	render();
	}
	}
	if(tecla===direita && tecla!==esquerda&&p1.x<LARGURA-50){
		if(!p2afk){
			if (p1.x+50+p1.spd<=p2.x||p1.x>=p2.x+50||p1.y>=p2.y+100||p1.y+100<=p2.y) {
				movdireita=true;
			}
		}else{
			movdireita=true;
		}
	}
	if(tecla===esquerda && tecla!==direita&&p1.x>0){
		if(!p2afk){
			if(p1.x-p1.spd>=p2.x+50||p1.x+50<=p2.x||p1.y>=p2.y+100||p1.y+100<=p2.y){
				movesquerda=true;
			}
		}else
		movesquerda=true;
	}
	if(tecla===baixo && tecla!==cima&&p1.y<HEIGHT-100){
		if(!p2afk){
			if(p1.x+50<=p2.x||p1.x>=p2.x+50||p1.y+100+p1.spd<=p2.y||p1.y>=p2.y+100){
				movbaixo=true;
			}
		}else
		movbaixo=true;
	}
	if(tecla===cima && tecla!==baixo&&p1.y>0){
		if(!p2afk){
			if(p1.x+50<=p2.x||p1.x>=p2.x+50||p1.y-p1.spd>=p2.y+100||p1.y+100<=p2.y){
				movcima=true;
			}
		}else
		movcima=true;
	}
	
	
	if((tecla===direita2 || tecla===direita2.toLowerCase()) && (tecla!==esquerda2|| tecla!==esquerda2.toLowerCase())&&p2.x<LARGURA-50){
		if(!p2afk){
		if (p2.x+50+p2.spd<=p1.x||p2.x>=p1.x+50||p2.y>=p1.y+100||p2.y+100<=p1.y) {
				movdireita2=true;
			}
		}else
		movdireita2=true;
		
	}
	if((tecla===esquerda2 || tecla===esquerda2.toLowerCase()) && (tecla!==direita2|| tecla!==direita2.toLowerCase())&&p2.x>0){
		if(!p2afk){
		if(p2.x-p2.spd>=p1.x+50||p2.x+50<=p1.x||p2.y>=p1.y+100||p2.y+100<=p1.y){
				movesquerda2=true;
			}
		}else
		movesquerda2=true;
	}
	if((tecla===baixo2 || tecla===baixo2.toLowerCase()) && (tecla!==cima2|| tecla!==cima2.toLowerCase())&&p2.y<HEIGHT-100){
		if(!p2afk){
			if(p2.x+50<=p1.x||p2.x>=p1.x+50||p2.y+100+p2.spd<=p1.y||p2.y>=p1.y+100){
				movbaixo2=true;
			}
		}else
		movbaixo2=true;
	}
	if((tecla===cima2|| tecla===cima2.toLowerCase()) && (tecla!==baixo2|| tecla!==baixo2.toLowerCase())&&p2.y>0){
		if(!p2afk){
			if(p2.x+50<=p1.x||p2.x>=p1.x+50||p2.y-p2.spd>=p1.y+100||p2.y+100<=p1.y){
				movcima2=true;
			}
		}else
		movcima2=true;
	}
}
function parar(event){
	var tecla=event.key;
	if(tecla===direita && tecla!==esquerda){
		movdireita=false;
	}
	if(tecla===esquerda && tecla!==direita){
		movesquerda=false;
	}
	if(tecla===baixo && tecla!==cima){
		movbaixo=false;
	}
	if(tecla===cima && tecla!==baixo){
		movcima=false;
	}
	
	
	
	
	if((tecla===direita2 || tecla===direita2.toLowerCase()) && (tecla!==esquerda2|| tecla!==esquerda2.toLowerCase())){
		movdireita2=false;
	}
	if((tecla===esquerda2 || tecla===esquerda2.toLowerCase()) && (tecla!==direita2|| tecla!==direita2.toLowerCase())){
		movesquerda2=false;
	}
	if((tecla===baixo2 || tecla===baixo2.toLowerCase()) && (tecla!==cima2|| tecla!==cima2.toLowerCase())){
		movbaixo2=false;
	}
	if((tecla===cima2|| tecla===cima2.toLowerCase()) && (tecla!==baixo2|| tecla!==baixo2.toLowerCase())){
		movcima2=false;
	}
}
function mover(){
	if(estadoAtual==estado.jogando){
		if(movdireita&&p1.x<LARGURA-50){
			if(!p2afk){
			if(p1.x+50+p1.spd<=p2.x||p1.x>=p2.x+50||p1.y>=p2.y+100||p1.y+100<=p2.y){
				p1.x+=p1.spd;
			}
		}else
		p1.x+=p1.spd;
		}
		if(movesquerda&&p1.x>0){
			if(!p2afk){
			if(p1.x-p1.spd>=p2.x+50||p1.x+50<=p2.x||p1.y>=p2.y+100||p1.y+100<=p2.y){
				p1.x-=p1.spd;	
}				
			}else
		p1.x-=p1.spd;
		}
		
		if(movbaixo&&p1.y<HEIGHT-100){
			if(!p2afk){
			if(p1.x+50<=p2.x||p1.x>=p2.x+50||p1.y+100+p1.spd<=p2.y||p1.y>=p2.y+100){
				p1.y+=p1.spd;	
}				
			}else
			p1.y+=p1.spd;
		}
		if(movcima&&p1.y>0){
			if(!p2afk){
			if(p1.x+50<=p2.x||p1.x>=p2.x+50||p1.y-p1.spd>=p2.y+100||p1.y+100<=p2.y){
				p1.y-=p1.spd;	
}				
			}else
		p1.y-=p1.spd;
		}
		
		
		
		if(movdireita2&&p2.x<LARGURA-50){
			if(!p2afk){
		if (p2.x+50+p2.spd<=p1.x||p2.x>=p1.x+50||p2.y>=p1.y+100||p2.y+100<=p1.y) {
				p2.x+=p2.spd;
			}
		}else
		p2.x+=p2.spd;
		}
		if(movesquerda2&&p2.x>0){
			if(!p2afk){
		if(p2.x-p2.spd>=p1.x+50||p2.x+50<=p1.x||p2.y>=p1.y+100||p2.y+100<=p1.y){
				p2.x-=p2.spd;
			}
		}else
		p2.x-=p2.spd;
		}
		if(movbaixo2&&p2.y<HEIGHT-100){
			if(!p2afk){
			if(p2.x+50<=p1.x||p2.x>=p1.x+50||p2.y+100+p2.spd<=p1.y||p2.y>=p1.y+100){
				p2.y+=p2.spd;
			}
		}else
			p2.y+=p2.spd;
		}
		if(movcima2&&p2.y>0){
			if(!p2afk){
			if(p2.x+50<=p1.x||p2.x>=p1.x+50||p2.y-p2.spd>=p1.y+100||p2.y+100<=p1.y){
				p2.y-=p2.spd;
			}
		}else
		p2.y-=p2.spd;
		}
	}
}
function render(){
	ctx.clearRect(0,0,cnv.width,cnv.height);
	if(p2afk){
	imgbg.desenha(0,0);
	}else{
	imgbg2.desenha(0,0);	
	}
	p1.desenha();
	if(!p2afk){
	p2.desenha();
	}
	if(estadoAtual==estado.jogar){
		imgj.desenha(LARGURA/2-50,HEIGHT/2-50);
	}
	else if(estadoAtual==estado.perdeu){
		imgj2.desenha(LARGURA/2-50,HEIGHT/2-50);
	}
	else if(estadoAtual==estado.jogando){
		trafico.desenha();
	}
	ctx.fillStyle="white";
	ctx.font="20px Broadway";
	ctx.fillText(p1.score,LARGURA*3/4,50);
	if(!p2afk){
	ctx.fillStyle="white";
	ctx.font="20px Broadway";
	ctx.fillText(p2.score,LARGURA*3/4,90);
	}
	

}

function update(){
requestAnimationFrame(update,cnv);	
mover();
if(estadoAtual==estado.jogando){
	trafico.atualiza();
}
render();
}