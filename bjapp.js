$(document).ready(function(){
	console.log('yesssssssaahhhh');
/////////here are the objects for the player and the dealer
//player has functions for money lost money gained and to see what the hand value u is 
//dealer just has a function for its hand value
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
		currentHand: hand = [],
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
		currentHand: hand = [],
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

	var dummyDeck = [2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7,8,9,10,11];

//////////////////////////////////////
// the star function begins and invokes the setBet function

	$("#start").click(function(){
		console.log("working");
		$("#dealer").html("dealer");
		$("#player").html("player");
		setBet()
	})
/////the set bet function adds a drop list and a sumit button, removes the start button
//and invokes submitBet function
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
/// this function occurs when the submit button is clicked and it takes the selected value and sets the player's
// currentBet value and invokes the deal function??
	var submitBet = function(){
		$("#submit").click(function(){
			player.currentBet = $("#bet").val();
			console.log(player.currentBet);
			deal();
		})
	}
// this will change later because of dummy deck
//takes values out of dummy deck then puts them in player/dealer nad array
	var deal = function(){
		var num = Math.floor(Math.random()*19 );
		var hand = dummyDeck.splice(num,2);
		player.hand = hand;
		var num = Math.floor(Math.random()*17 );
		var hand = dummyDeck.splice(num,2);
		dealer.hand = hand;
		$("#bet").remove();
		$("#submit").remove();
		console.log(dummyDeck);
		console.log(player.hand);
		console.log(dealer.hand);


	}





	








})