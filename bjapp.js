$(document).ready(function(){
	// console.log('yesssssssaahhhh');
/////////here are the objects for the player and the dealer
//player has functions for money lost money gained and to see what the hand value u is 
//dealer just has a function for its hand value
// dummy array for testing
//the deck has the cards their names the value and a pic of them 

	// var dummyDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11];
		var deck = [
		{name:"ace",value:11,pic:"pcf/pc/png/ac.png"},{name:"2",value:2,pic:"pcf/pc/png/2c.png"},
		{name:"3",value:3,pic:"pcf/pc/png/3c.png"},{name:"4",value:4,pic:"pcf/pc/png/4c.png"},
		{name:"5",value:5,pic:"pcf/pc/png/5c.png"},{name:"6",value:6,pic:"pcf/pc/png/6c.png"},
		{name:"7",value:7,pic:"pcf/pc/png/7c.png"},{name:"8",value:8,pic:"pcf/pc/png/8c.png"},
		{name:"9",value:9,pic:"pcf/pc/png/9c.png"},{name:"10",value:10,pic:"pcf/pc/png/10c.png"},
		{name:"jack",value:10,pic:"pcf/pc/png/jc.png"},{name:"queen",value:10,pic:"pcf/pc/png/qc.png"},
		{name:"king",value:10,pic:"pcf/pc/png/kc.png"},
		{name:"ace",value:11,pic:"pcf/pc/png/ah.png"},{name:"2",value:2,pic:"pcf/pc/png/2h.png"},
		{name:"3",value:3,pic:"pcf/pc/png/3h.png"},{name:"4",value:4,pic:"pcf/pc/png/4h.png"},
		{name:"5",value:5,pic:"pcf/pc/png/5h.png"},{name:"6",value:6,pic:"pcf/pc/png/6h.png"},
		{name:"7",value:7,pic:"pcf/pc/png/7h.png"},{name:"8",value:8,pic:"pcf/pc/png/8h.png"},
		{name:"9",value:9,pic:"pcf/pc/png/9h.png"},{name:"10",value:10,pic:"pcf/pc/png/10h.png"},
		{name:"jack",value:10,pic:"pcf/pc/png/jh.png"},{name:"queen",value:10,pic:"pcf/pc/png/qh.png"},
		{name:"king",value:10,pic:"pcf/pc/png/kh.png"},
		{name:"ace",value:11,pic:"pcf/pc/png/ad.png"},{name:"2",value:2,pic:"pcf/pc/png/2d.png"},
		{name:"3",value:3,pic:"pcf/pc/png/3d.png"},{name:"4",value:4,pic:"pcf/pc/png/4d.png"},
		{name:"5",value:5,pic:"pcf/pc/png/5d.png"},{name:"6",value:6,pic:"pcf/pc/png/6d.png"},
		{name:"7",value:7,pic:"pcf/pc/png/7d.png"},{name:"8",value:8,pic:"pcf/pc/png/8d.png"},
		{name:"9",value:9,pic:"pcf/pc/png/9d.png"},{name:"10",value:10,pic:"pcf/pc/png/10d.png"},
		{name:"jack",value:10,pic:"pcf/pc/png/jd.png"},{name:"queen",value:10,pic:"pcf/pc/png/qd.png"},
		{name:"king",value:10,pic:"pcf/pc/png/kd.png"},
		{name:"ace",value:11,pic:"pcf/pc/png/as.png"},{name:"2",value:2,pic:"pcf/pc/png/2s.png"},
		{name:"3",value:3,pic:"pcf/pc/png/3s.png"},{name:"4",value:4,pic:"pcf/pc/png/4s.png"},
		{name:"5",value:5,pic:"pcf/pc/png/5s.png"},{name:"6",value:6,pic:"pcf/pc/png/6s.png"},
		{name:"7",value:7,pic:"pcf/pc/png/7s.png"},{name:"8",value:8,pic:"pcf/pc/png/8s.png"},
		{name:"9",value:9,pic:"pcf/pc/png/9s.png"},{name:"10",value:10,pic:"pcf/pc/png/10s.png"},
		{name:"jack",value:10,pic:"pcf/pc/png/js.png"},{name:"queen",value:10,pic:"pcf/pc/png/qs.png"},
		{name:"king",value:10,pic:"pcf/pc/png/ks.png"},

	]		
	

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
				var num = Math.floor(Math.random()*20 );
				var hand = deck.splice(num,2);
				// console.log(hand);
				var hand1 = hand[0].value;
				var hand2 = hand[1].value;
				player.handValue += hand1 + hand2;
				// console.log(player.handValue);
				// console.log(hand);
				$("#p1").attr("src",hand[0].pic);
				$("#p1").css({'width' : '75px' , 'height' : '100px'});
				$("#p2").attr("src",hand[1].pic);
				$("#p2").css({'width' : '75px' , 'height' : '100px'});
				// .html(hand[0].value + " ," + hand[1].value);
			},
			 handValue: 0
	
	}

	//===========================================================
	var dealer = {
		name: "dealer",
		currentHand: 	
			getHand1 = function(){
				var num = Math.floor(Math.random()*18 );
				var hand = deck.splice(num,2);
				var hand1 = hand[0].value;
				var hand2 = hand[1].value;
				dealer.handValue += hand1 + hand2;
				$("#d1").attr("src",hand[0].pic);
				$("#d1").css({'width' : '75px' , 'height' : '100px'});
				$("#d2").attr("src",hand[1].pic);
				$("#d2").css({'width' : '75px' , 'height' : '100px'});
				// console.log(hand);
				// $("#dcards").html(hand[0].value + " ," + hand[1].value);
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

		// var cards = deck[0].pic;
		// $("#dcard").css("background-image",);
		setBet();
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
		 // console.log(player.currentBet);
		$("#hitMe").click(function(){
			hitCounter ++;
			var num = Math.floor(Math.random()*16 );
			var hand = deck.splice(num,1);
			var one = $("#pcards").html();
			var hand1 = hand[0].value;
			player.handValue += hand1;

			
			// console.log(player.handValue);
			$("#pcards").html(one + " ," + hand[0].value);
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
		var num = Math.floor(Math.random()*13 );
		var hand = deck.splice(num,1);
		var one = $("#dcards").html();
		var hand1 = hand[0].value;
		dealer.handValue += hand1;
		$("#dcards").html(one + " ," + hand[0].value);
	}
		if (dealer.handValue > 21) {	
				alert("dealer bust yesssssssaahhhh");	
				var gain = parseInt(player.currentBet);
				gainMoney(gain);
				alert("+ $" + player.currentBet);
				$("#money").html(player.money);	
				// nextHand();	
			}
		// console.log(dealer.handValue);
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
			// console.log(player.money);
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
			// console.log(player.money);
			nextHand();
			}
		}	
	}	

	var nextHand = function(){
		// console.log("working");
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


//Scrap
// 	var deck = [
	// 	{name:"ace",value:11},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4},{name:"5",value:5},
	// 	{name:"6",value:6},{name:"7",value:7},{name:"8",value:8},{name:"9",value:9},{name:"10",value:10},
	// 	{name:"jack",value:10},{name:"queen",value:10},{name:"king",value:10},{name:"ace",value:11},
	// 	{name:"2",value:2},{name:"3",value:3},{name:"4",value:4},{name:"5",value:5},{name:"6",value:6},
	// 	{name:"7",value:7},{name:"8",value:8},{name:"9",value:9},{name:"10",value:10},{name:"jack",value:10},
	// 	{name:"queen",value:10},{name:"king",value:10}
	// ]
// this will change later because of dummy deck
//takes values out of dummy deck then puts them in player/dealer nad array
	// var deal = function(){
		// var num = Math.floor(Math.random()*19 );
		// var hand = dummyDeck.splice(num,2);
	// 	player.currentHand = hand;
	// 	var num1 = Math.floor(Math.random()*17 );
	// 	var hand1 = dummyDeck.splice(num1,2);
	// 	dealer.currentHand = hand;
		// $("#bet").remove();
		// $("#submit").remove();
	// 	$("#dcards").html(hand1[0] + hand1[1]);
	// 	$("#pcards").html(hand[0] + hand[1]);
	// 	// console.log(dummyDeck);
	// 	// console.log(player.currentHand);
	// 	// console.log(dealer.currentHand);

	// }
		// gethandVal: 
		// 	handVal = function(){
		// 		getHand();
		// 		sum = 0
		// 		for (var i = 0; i < hand.length; i++) {
		// 			sum += hand[i];
		// 			}
		// 		return sum;	
		// 	},
		// handValue: 	handVal(),	
		// handsWon: 0,
		// handsLoss: 0
		// currentHand: ,
		// gethandVal: 
		// handVal = function(){
		// 	sum = 0
		// 	for (var i = 0; i < hand.length; i++) {
		// 		sum += hand[i];
		// 		}
		// 	return sum;	
		// },
		// handValue: 	handVal(),	
				// var $makeDiv = $("<div></div>");
		// $($makeDiv).html(hand[0]);
		// $("#pcards").append($makeDiv);
		// console.log($("#pcards").html());	