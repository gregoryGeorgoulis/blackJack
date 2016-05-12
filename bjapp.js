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
	// miky holds the face down dealer card image	
	var miky =["pcf/pc/png/mik.png"];

	var player = {
		name: "player",
		money: 200,
		currentBet: 0 ,
		loss: loseMoney = function(loss){
			var theMoney = parseInt(player.money);
			player.money =  theMoney - loss;
		},
		gain: gainMoney = function(gain){
			var theMoney = parseInt(player.money);
			player.money = theMoney + gain;
		},
		currentHand: 	
		//this  function selects two cards from the deck array and puts them in the players hand
		// it does this by selcetion a random number which i get by num and then splicing two cards out
			getHand = function(){
				var num = Math.floor(Math.random()*30 );
				var hand = deck.splice(num,2);
				console.log(hand);
				var hand1 = hand[0].value;
				var hand2 = hand[1].value;
				player.handValue += hand1 + hand2;
				$("#p1").attr("src",hand[0].pic);
				$("#p1").css({'width' : '75px' , 'height' : '100px'});
				$("#p2").attr("src",hand[1].pic);
				$("#p2").css({'width' : '75px' , 'height' : '100px'});
			},
			 handValue: 0,
			 handsWon: 0,
			 handsLoss: 0
	}

	//===========================================================
	var dealer = {
		name: "dealer",
		currentHand: 	
		// this function is the same as the one in the player object but it uses the miky image instead of the card image 
		// it also saves that cards image in flipcard so an use it later in dealer turn
			getHand1 = function(){
				var num = Math.floor(Math.random()*30 );
				var hand = deck.splice(num,2);
				var hand1 = hand[0].value;
				var hand2 = hand[1].value;
				dealer.handValue += hand1 + hand2;
				$("#d1").attr("src",hand[0].pic);
				$("#d1").css({'width' : '75px' , 'height' : '100px'});
				$("#d2").attr("src",miky[0]);
				$("#d2").css({'width' : '75px' , 'height' : '100px'});
				dealer.flipCard = hand[1].pic;
				console.log(hand[1].pic)
			},
		handValue: 0,	
		flipCard:""		
	};
//////////////////////////////////////
// the star function begins and invokes the setBet function
	$("#start").click(function(){
		// console.log("working");
		$("#dealer").html("Dealer");
		$("#player").html("Player");
		$("#money").html("$" + player.money);
		setBet();
	})

/////the set bet function adds a drop list and a sumit button, removes the start button
//and invokes submitBet function
	var setBet = function(){			
		var $select = $("<select></select>");
		$select.attr("id","bet");
		$select.append($("<option>5</option>"));
		$select.append($("<option>10</option>"));
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
			$("h2").html("$"+player.currentBet);			
			deal();
			})
		}
	}
// takes functions from player and dealer to get their frst two cards
//then invokes the hit and stand functions
	var deal = function(){
		$("#bet").remove();
		$("#submit").remove();
		 getHand();
		 getHand1();
		 addHit();
		 addStand();
	}
	// adds a hit me button
	var addHit = function(){
		var hitB = $("<button>Hit Me</button>").attr("id","hitMe");
		$("#hit").append(hitB);
		hitPlayer();
	}
	//adds a stand button
	var addStand = function(){
		var standB = $("<button>stand</button>").attr("id","standMe");
		$("#hit").append(standB);
		standPlayer();
	}
	// this function is invoked by the hit me button when invoked it will add a card to the players hand and check if 
	// the player has busted, it also limits the hit me button to 3 clicks
	var hitPlayer = function(){
		 var hitCounter = 0;	
		$("#hitMe").click(function(){
			hitCounter ++;
			var num = Math.floor(Math.random()*28 );
			var hand = deck.splice(num,1);
			var one = $("#pcards").html();
			var hand1 = hand[0].value;
			player.handValue += hand1;
			var img = $("<img />",{src:hand[0].pic,class:"hit", width:75, height:100});
			$("#pcards").append(img);
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
	// the stand button removes the hit me button and invokes the dealers turn
	var standPlayer = function(){
		$("#standMe").click(function(){
			$("#hitMe").remove();
			dealerTurn();
		})	
	}
// in the dealerturn function alot goes on... first it flips the card by taking the image i stored in flipCard 
//earlier to relpace michelangelo, it alos hits for the deal using a while loop as long as the dealers hand value is
//less then 17, it also checks if the dealer busts and gives out money
	var dealerTurn = function(){
		$("#d2").attr("src",dealer.flipCard);
		while (dealer.handValue < 17){
		var num = Math.floor(Math.random()*28 );
		var hand = deck.splice(num,1);
		var one = $("#dcards").html();
		var hand1 = hand[0].value;
		dealer.handValue += hand1;
		var img = $("<img />",{src:hand[0].pic,class:"hit", width:75, height:100});	
		$("#dcards").append(img);
	}
		if (dealer.handValue > 21) {	
				alert("dealer bust yesssssssaahhhh");	
				var gain = parseInt(player.currentBet);
				gainMoney(gain);
				alert("+ $" + player.currentBet);
				$("#money").html("$"+player.money);	
				 nextHand();	
			}
		checkWinner();
		checkLoser();
	}
	// this function analyzes the card values to tell if the player has won and if player has won then he get money
	var checkWinner = function(){
		if( player.handValue < 22 && dealer.handValue < 22){
			if (player.handValue > dealer.handValue) {
			var gain = parseInt(player.currentBet);
			gainMoney(gain);
			alert("+ $" + player.currentBet);
			$("#money").html("$"+player.money);
			nextHand();
			}else if (dealer.handValue > 21) {
			gainMoney(gain);
			alert("+ $" + player.currentBet);
			$("#money").html("$"+player.money);
			nextHand();
			}else if (player.handValue === dealer.handValue) {
				alert("push");
				nextHand();
			}
		}		
	}
	// this function analyzes the card values to see if the player has lost if player lost then takes money 
	var checkLoser = function(){
		if( player.handValue < 22 && dealer.handValue < 22){
			if (player.handValue < dealer.handValue) {
			var loss = parseInt(player.currentBet);
			loseMoney(loss);
			alert("- $" + player.currentBet);
			$("#money").html("$"+player.money);
			nextHand();
			}
		}	
	}	
	// makes a next hand button while removing hit me and stand buttons
	var nextHand = function(){
		$("#hitMe").remove();
		$("#standMe").remove();
		var nextB = $("<button>next hand</button>").attr("id","next");
		$("#hit").append(nextB);
		newHand();
	}
	// this function whipes the board of images and clears the players and dealers handvalues
	// it also reinvokes the set bet function so a new hand can be player
	var newHand = function(){
		$("#next").click(function(){
			$("#p1").removeAttr("src");
			$("#p2").removeAttr("src");
			$("#d1").removeAttr("src");
			$("#d2").removeAttr("src");
			$(".hit").remove();
			$("h2").html("");
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