	var btn = document.getElementsByName('number');
	var img= document.getElementsByTagName('img');//player 1 image 0 and player 3 image 3;
	var dice = document.getElementById("dice")
	var mes = document.getElementById("mes")
	var wini = document.getElementById("winingimg")
	var messl= document.getElementById("messl");
		
	up = new Audio('image/up.wav');
	sna = new Audio('image/snake.wav');
	si = new Audio('image/sidi.wav');
	wi = new Audio('image/win.mp3');
	var count=1;
	var p1=0;
	var p2=0;
	var c=0;
	var same=0;
	var r=0;
	var la=[6,35,98,43,25,86,58,93]
	var sn=[40,18,19,24,5,99,74,66]
 	do
	{
		var right=1;
	if(player1=="" || player1==" " || player1==null || !(isNaN(player1)))
	{
		right=0;
		var player1 = prompt("Enter First Player Name")
   	}
   }while(right!=1)
   do
	{
		right=1;
	if(player2=="" || player2==" " || player2==null || !(isNaN(player2)))
	{
		right=0;
		var player2 = prompt("Enter Second Player Name")
		
   	}
    }while(right!=1)
	mes.innerHTML= count==1?"This Chance "+player1:"This Chance "+player2;
mes.style="color:;font-size:30px";

	for(i=0;i<=100;i++)
	{
		btn[i].style= i%2==0?"background:#ff6666;color:#fff;":"background:#ff99ff;color:#fff;"
		
	}	
	la.forEach(function (k) {
		btn[k].style = "background:#cc3300;";
	});
	sn.forEach(function (k) {
		btn[k].style = "background:#cc0066;";
	});
	var k=1;
	function randam() {
		messl.innerText="";
		if( p1==100 || p2==100 || k==0 ) return 0;
		r = Math.trunc(Math.random() * 6) + 1;
		dice.setAttribute("src","image/dice"+r+".png");	
		if(p1==p2)
		{
			same=1;
		}
	if(count==1)
	{	
		btn[p1].innerHTML=" "+parseInt(p1);
		p1 =parseInt(p1+ r);
			p1= checkleader(p1);
			p1 = checksnake(p1);
			if(p1>100 && p1!=100)
			{
				p1 = parseInt(p1 - r);
				btn[p1].innerHTML="<img class='img-fluid' src='image/playerA.png'  style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"
			}
			else if(p1<=100)
			{
				function delay(ms)
				{
					return new Promise(resolve=> setTimeout(resolve,ms));
				}
				async function delayed()
				{
				if (p1 == 35 || p1== 98 ||p1== 86 ||p1== 93 ) {
					btn[p1].innerHTML= "<img class='img-fluid' src='image/playerA.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"
					
				} 
				else if(p1 == 18 || p1== 5 ||p1== 19 ||p1== 66 )
				{
					btn[p1].innerHTML= "<img class='img-fluid' src='image/playerA.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"
										
				}
				else {
					for(i=p1-r;i<=p1;i++)
					{
						k=0;
						dice.setAttribute("style","opacity:0.5")
						up.play();
					btn[i].innerHTML="<img class='img-fluid' src='image/playerA.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"
					await delay(500);
					}
						if(i==p1)
						{
							k=1;
							dice.setAttribute("style","opacity:1");
						}
				}
				}
				delayed();

				function delay1(ms)
				{
					return new Promise(resolve=> setTimeout(resolve,ms));

				}
				async function delayed1()
				{
					
					for(var i=p1-r;i<p1;i++)
					{
						//if(i<=0) break;
						k=0;
		dice.setAttribute("style","opacity:0.5")

				if(i==p2)
					{

					btn[i].innerHTML="<img class='img-fluid' src='image/playerB.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"

					}
					else
					{
						if(!(i<=0)) btn[i].innerHTML=(i);
					}
		
					await delay1(800);
					}		
						if(i==p1)
						{
							k=1;
		dice.setAttribute("style","opacity:1")

						}
				}
				delayed1();
				if(same==1)
				{
				btn[p2].innerHTML="<img class='img-fluid' src='image/playerB.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"
				if(p2==0) 
				btn[p2].innerHTML="<img class='img-fluid' src='image/playerB.png' style='z-index: 2;  position: relative; height: 20px; width: 20px;' />"

				same=0;
				}
				
			}
			count=2;
			if(r==6) count=1;

			mes.innerHTML= count==1?"This Chance "+player1:"This Chance "+player2;
			if(p1==100)
				{
					wi.play();
					wini.setAttribute("src","image/winnig.gif")
					mes.innerHTML=player1+" is Win"
				}
		}
		else
		{
			btn[p2].innerHTML=" "+parseInt(p2);
			p2 =parseInt(p2+ r);
			p2= checkleader(p2);
			p2 = checksnake(p2);
			if(btn[0].innerHTML==0)	btn[0].innerHTML="Start";
			if(p2>100 && p2!=100)
			{
				p2 =parseInt(p2 - r);
				btn[p2].innerHTML="<img class='img-fluid' src='image/playerB.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"		
			}
			else if(p2<=100)
			{

				if (p2 == 35 || p2== 98 ||p2== 86 ||p2== 93 ) {
					btn[p2].innerHTML= "<img class='img-fluid' src='image/playerB.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"
						
				} 
				else if(p2 == 18 || p2== 5 ||p2== 19 ||p2== 66 )
				{
					btn[p2].innerHTML= "<img class='img-fluid' src='image/playerB.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"
				}
				else {
				
				function delay2(ms)
				{
					return new Promise(resolve=> setTimeout(resolve,ms));

				}
				async function delayed2()
				{
					for(i=p2-r;i<=p2;i++)
					{
						k=0;
						dice.setAttribute("style","opacity:0.5")
						up.play();
					btn[i].innerHTML="<img class='img-fluid' src='image/playerB.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"
					await delay2(500);
					}
						if(i==p2)
						{
							k=1;
							dice.setAttribute("style","opacity:1")
						}
				}
				delayed2();

				function delay3(ms)
				{
					return new Promise(resolve=> setTimeout(resolve,ms));

				}
				async function delayed3()
				{

					for(var i=p2-r;i<p2;i++)
					{
						k=0;
						dice.setAttribute("style","opacity:0.5")

					if(i==p1)
					{
					btn[i].innerHTML="<img class='img-fluid' src='image/playerA.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"

					}
					else
					{
					btn[i].innerHTML=(i);
						if(i==0 )
						{
					btn[i].innerHTML="Start";

						}
					}
					await delay3(800);
					}

						if(i==p2)
						{
							k=1;
		dice.setAttribute("style","opacity:1")

						}
				}
				delayed3();
				}
				if(same==1)
				{
				
				btn[p1].innerHTML="<img class='img-fluid' src='image/playerA.png' style='z-index: 2;  position: relative; height: 100%; width: 100%;' />"
				same=0;
				}
			}
				count=1;

			if(r==6)
			{

				count=2;	
			}
			mes.innerHTML= count==1?"This Chance "+player1:"This Chance "+player2;
			if(p2==100)
				{
					wi.play();
					wini.setAttribute("src","image/winnig.gif")
					mes.innerHTML=player2+" is Win"
				}
		}	
	}
	function checksnake(x) {
	 	switch(x){
			case 40: sna.play(); messl.innerText="Snake \n 40-18"; 	return 18;
				break;
			case 24: sna.play(); messl.innerText="Snake \n 24-5"; 	return 5;
				break;
			case 99: sna.play();  messl.innerText="Snake \n 99-19";	return 19;
				break;
			case 74: sna.play();  messl.innerText="Snake \n 74-66";	return 66;
				break;
			default: return x;
				break		
		}
	 }
	 function checkleader(y) {
		switch(y){
			case 6: si.play();  messl.innerText="ladder \n 6-35";	return 35;
				break;
			case 43: si.play();  messl.innerText="ladder \n 43-86";	return 86;
				break;
			case 58: si.play();  messl.innerText="ladder \n 58-93";	return 93;
				break;
			case 25: si.play();  messl.innerText="ladder \n 25-98";	return 98;
				break;
			default: return y;
				break		
		}
	 }
			
