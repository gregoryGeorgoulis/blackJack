$(document).ready(function(){
	console.log('yesssssssaahhhh');

	var player = {
		name: "player",
		money: 200,
		currentBet: 0 ,
		loss: loseMoney = function(loss){
			player.money = player.money - loss;
		},
		gain: gainMoney = function(gain){
			player.money = player.money + gain;

		},
		currentHand: hand = [2,4,6],
		gethandVal: 
		handVal = function(){
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
	var dealer = {
		name: "dealer",
		currentHand: hand = [2,4,6],
		gethandVal: 
		handVal = function(){
			sum = 0
			for (var i = 0; i < hand.length; i++) {
				sum += hand[i];
				}
			return sum;	
		},
		handValue: 	handVal(),
		
		handsWon: 0,
		handsLoss: 0

	};

	var dummyDeck = [1,2,3,4,5,6,7,8,9,10,11];

//////////////////////////////////////
// the star function begins the game and asks player to place a bet

	$("#start").click(function(){
		console.log("working");
		$("#dealer").html("dealer");
		$("#player").html("player");
		setBet()
	})

	var setBet = function(){
		var $select = $("<select></select>");
		$select.attr("id","bet");
		$select.append($("<option>5</option>"));
		$select.append($("<option>15</option>"));
		$select.append($("<option>25</option>"));
		$("#player").append($select);
		$("#start").remove();
		var $submit = $("<button>sumbit</button>");
		$submit.attr("id","submit");
		$("#player").append($submit);
		submitBet();
	}

	var submitBet = function(){
		$("#submit").click(function(){
			player.currentBet = $("#bet").val();
			console.log(player.currentBet);
			
		})
	}







	








})