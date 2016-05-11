$(document).ready(function(){
	console.log('yesssssssaahhhh');
/////////here are the objects for the player and the dealer
//player has functions for money lost money gained and to see what the hand value u is 
//dealer just has a function for its hand value
// dummy array for testing


	var dummyDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11];


	var player = {
		name: "player",
		money: 200,
		currentBet: 0 ,
		loss: loseMoney = function(loss){
			var theMoney = parseInt(player.money);
			player.money = theMoney - loss;
		},
		gain: gainMoney = function(gain){
			var theMoney = parseInt(player.money);
			player.money = theMoney + gain;
		},
		currentHand: 	
			getHand = function(){
				var num = Math.floor(Math.random()*25 );
				var hand = dummyDeck.splice(num,2);
				var hand1 = parseInt(hand[0]);
				var hand2 = parseInt(hand[1]);
				player.handValue += hand1 + hand2;
				console.log(player.handValue);
				// console.log(hand);
				$("#pcards").html(hand[0] + " ," + hand[1]);
			},
			 handValue: 0
	
	}

	//===========================================================
	var dealer = {
		name: "dealer",
		currentHand: 	
			getHand1 = function(){
				var num = Math.floor(Math.random()*22 );
				var hand = dummyDeck.splice(num,2);
				var hand1 = parseInt(hand[0]);
				var hand2 = parseInt(hand[1]);
				dealer.handValue += hand1 + hand2;
				// console.log(hand);
				$("#dcards").html(hand[0] + " ," + hand[1]);
			},
		handValue: 0,		
		handsWon: 0,
		handsLoss: 0
	};


//////////////////////////////////////
// the star function begins and invokes the setBet function

	$("#start").click(function(){
		// console.log("working");
		$("#dealer").html("dealer");
		$("#player").html("player");
		$("#money").html(player.money);
		setBet();
	})

/////the set bet function adds a drop list and a sumit button, removes the start button
//and invokes submitBet function
	var setBet = function(){
		dummyDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11];
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
		if (player.money > 0) {
			$("#submit").click(function(){
			player.currentBet = $("#bet").val();
			$("h2").html(player.currentBet);
			
			deal();
			})
		}
	}
// takes functions from player and dealer to get their frst two cards
	var deal = function(){
		$("#bet").remove();
		$("#submit").remove();
		// console.log(dummyDeck);
		 getHand();
		 getHand1();
		 addHit();
		 addStand();
	}

	var addHit = function(){
		// console.log($("#pcards").html());
		var hitB = $("<button>Hit Me</button>").attr("id","hitMe");
		$("#hit").append(hitB);
		hitPlayer();

	}
	var addStand = function(){
		var standB = $("<button>stand</button>").attr("id","standMe");
		$("#hit").append(standB);
		standPlayer();

	}
	var hitPlayer = function(){
		 var hitCounter = 0;	
		 console.log(player.currentBet);
		$("#hitMe").click(function(){
			hitCounter ++;
			var num = Math.floor(Math.random()*20 );
			var hand = dummyDeck.splice(num,1);
			var one = $("#pcards").html();
			var hand1 = parseInt(hand);
			player.handValue += hand1;
			console.log(player.handValue);
			$("#pcards").html(one + " ," + hand);
			if (player.handValue > 21) {
				$("#hitMe").unbind("click");
				alert(" so sorry, you bust");
				var loss = parseInt(player.currentBet);
				loseMoney(loss);
				alert("- $" + player.currentBet);
				$("#money").html(player.money);
				nextHand();
				dealerTurn();

			}
			if (hitCounter === 3) {
				$("#hitMe").unbind("click");
			}
		})
	}

	var standPlayer = function(){
		$("#standMe").click(function(){
			$("#hitMe").remove();
			dealerTurn();
		})

		
	}

	var dealerTurn = function(){
		while (dealer.handValue < 17){
		var num = Math.floor(Math.random()*15 );
		var hand = dummyDeck.splice(num,1);
		var one = $("#dcards").html();
		var hand1 = parseInt(hand);
		dealer.handValue += hand1;
		$("#dcards").html(one + " ," + hand);
	}
		if (dealer.handValue > 21) {	
				alert("dealer bust yesssssssaahhhh");	
				var gain = parseInt(player.currentBet);
				gainMoney(gain);
				alert("+ $" + player.currentBet);
				$("#money").html(player.money);	
				// nextHand();	
			}
		console.log(dealer.handValue);
		checkWinner();
		checkLoser();
	}

	var checkWinner = function(){
		if( player.handValue < 22 && dealer.handValue < 22){
			if (player.handValue > dealer.handValue) {
			var gain = parseInt(player.currentBet);
			gainMoney(gain);
			alert("+ $" + player.currentBet);
			$("#money").html(player.money);
			console.log(player.money);
			nextHand();
			}else if (dealer.handValue > 21) {
			gainMoney(gain);
			alert("+ $" + player.currentBet);
			$("#money").html(player.money);
			nextHand();
			}else if (player.handValue === dealer.handValue) {
				alert("push");
				nextHand();
			}
		}
		
	}

	var checkLoser = function(){
		if( player.handValue < 22 && dealer.handValue < 22){
			if (player.handValue < dealer.handValue) {
			var loss = parseInt(player.currentBet);
			loseMoney(loss);
			alert("- $" + player.currentBet);
			$("#money").html(player.money);
			console.log(player.money);
			nextHand();
			}
		}	
	}	

	var nextHand = function(){
		console.log("working");
		$("#hitMe").remove();
		$("#standMe").remove();
		var nextB = $("<button>next hand</button>").attr("id","next");
		$("#hit").append(nextB);
		newHand();
	}
	
	var newHand = function(){
		$("#next").click(function(){
			$("h2").html("");
			$("#pcards").html("");
			$("#dcards").html("");
			player.handValue = 0;
			dealer.handValue = 0;
			setBet();
			$("#next").remove();

		})

	}





})