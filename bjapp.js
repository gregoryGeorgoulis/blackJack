$(document).ready(function(){
	console.log('yesssssssaahhhh');

	var player = {
		name: "player",
		money: 200,
		loss: loseMoney = function(loss){
			player.money = player.money - loss;
		},
		gain: gainMoney = function(gain){
			player.money = player.money + gain;

		},
		currentHand: hand = [2,4,6],
		gethandVal: handVal = function(){
								sum = 0
								for (var i = 0; i < hand.length; i++) {
									sum += hand[i];
								}
								return sum;	
							},
		handValue: 	handVal(),
		
		handsWon: 0,
		handsLoss: 0

	}

	var dummyDeck = [1,2,3,4,5,6,7,8,9,10,11];


	console.log(player.handValue);


	








})