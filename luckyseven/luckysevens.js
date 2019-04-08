function rollDice(){
	return (Math.floor(Math.random() * 6) + 1);
}
function rollDice2(){
	var rollDice2 = rollDice() + rollDice();
	return (rollDice2); 
}	


function gambling() {
var money=document.getElementById("startingBet").value;
money = Number(money)
var counting = 0;
var max = money; 
var highRoll = 0;
var zero = money; 
	while (zero > 0) {
	var twoDice = rollDice2()
 	if (twoDice !=7) {zero = zero - 1;}
    else {zero = zero + 4;}
	counting++;
	if (max < zero){
		max = zero
		highRoll = counting;
	}
	}
	/*if max is less than zero value, than max will take on the
new higher zero value and highRoll will take on the current counting value
at the maximum amount of money, both thereby obtaining 
a new set of higher values at the highest amount won.*/	
	
	document.getElementById("table").style.display = "inline-block";
	
	document.getElementById('money').innerText=money;
	
	document.getElementById('counting').innerText=counting;
	
	document.getElementById('max').innerText=max;

	document.getElementById('highRoll').innerText=highRoll;
	return false;
}
