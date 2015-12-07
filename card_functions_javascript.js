$(document).ready(function(){
	var deck1 = new deck(["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"],["Hearts","Spades","Clubs","Diamonds"]);
	deck1.shuffle();
	deck1.printdeck();
	var hands = deck1.deal(4,2);
	printhands(hands);
	
});

// Creating the new card class
function card(val, suit) {
	this.value = val;
	this.suit = suit;
};

function deck(values, suits){
	this.cards=[];
	for(var i = 0; i<values.length; i++){
		for(var j = 0; j<suits.length; j++){
			this.cards.push(new card(values[i],suits[j]));
		}
	}
	this.printdeck = function(){
		for(var i = 0; i<this.cards.length; i++){
			console.log(this.cards[i].value + " of " + this.cards[i].suit);
		}
	}
	this.shuffle = function(){
		var holder;
		var randloc;
		for(var i = 0; i<this.cards.length; i++){
			holder = this.cards[i];
			randloc = parseInt(Math.random()*(this.cards.length));
			this.cards[i] = this.cards[randloc];
			this.cards[randloc] = holder;
		}
	}
	this.deal = function(numhands, numcards){
		var hands = new Array(numhands);
		for (var i = 0; i<numhands; i++){
			hands[i] = [];
		}
		for(var i = 0; i<numcards; i++){
			for(var j = 0; j<numhands; j++){
				hands[j].push(this.cards.pop());
			}
		}
		return(hands);
	}
};

function printhands(hands){
	for(var i = 0; i<hands.length; i++){
		console.log("Player "+(i+1)+"'s Hand:");
		for (var j = 0; j<hands[i].length; j++){
			console.log(hands[i][j].value+" of " +hands[i][j].suit);
		}
	}
}