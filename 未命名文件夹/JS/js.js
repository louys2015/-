var oContainer=document.querySelector('.container');

var amount=7;

for(var i=0;i<amount;i++){
	var oDiv=document.createElement('div');
	
	oDiv.classList.add('block');
	oDiv.style.backgroundImage='url(IMG/dancer'+(i+1)+'.png)';
	oDiv.style.transform='rotateY('+(i*360/amount)+'deg) translateZ(280px)';
	
	oContainer.appendChild(oDiv);
}