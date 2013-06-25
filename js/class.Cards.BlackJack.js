var BlackJack = (function(_super)
{
	// BlackJack extends Cards
	__extends(BlackJack, _super);
	
    function BlackJack()
	{
		_super.call(this);
		
		this.house = new Player('House');
    }
	
	/**
	 * Deals another card from the stack to the player
	 * @param playerHand Obj
	 * @reutn newPlayerHand Obj The player hand with the extra card
	 */
	BlackJack.prototype.deal = function(playerHand)
	{
		var newPlayerHand;
		
		for(var i = 0; i < this._startingCards; i += 1)
		{
			newPlayerHand = this.hit(playerHand);
		}
		
		return newPlayerHand;
	};
	
	BlackJack.prototype.hit = function(playerHand)
	{
		playerHand[playerHand.length] = this.drawCard();
		
		return playerHand;
	};
	
	BlackJack.prototype.stand = function()
	{
		console.log('Now we need to make the house play');
	};
	
	BlackJack.prototype.lostRound = function()
	{
		console.log('Now we need to deal with the pot (Bank Class)');
	};
	
	BlackJack.prototype.playRound = function(hand)
	{
		/*
		// For testing
		var handSum;
		var hand = Array();
		hand[0] = Object();
		hand[0][this.getCardValueKey()] = 1;
		hand[1] = Object();
		hand[1][this.getCardValueKey()] = 7;
		hand[2] = Object();
		hand[2][this.getCardValueKey()] = 2;
		hand[3] = Object();
		hand[3][this.getCardValueKey()] = 1;
		hand[4] = Object();
		hand[4][this.getCardValueKey()] = 10;
		// End testing
		*/
		handSum = this.handSum(hand);
		console.log(handSum);
		// This is NOT A switch() for performance reasons
		if(handSum > 21)
		{
			console.log('You lost!');
			this.lostRound();
		}
		else if(handSum == 21)
		{
			console.log('You got 21!');
			this.stand();
		}
		else if(handSum < 21)
		{
			console.log('you can still have another go');
		}
	};
	
	BlackJack.prototype.handSum = function(hand)
	{
		var sum = 0,
			currentCard,
			z = 0,
			aces = Array();
		
		for(var i = 0; i < hand.length; i += 1)
		{
			currentCard = hand[i][this.getCardValueKey()];
			// Check for Aces
			if(currentCard == 1)
			{				
				currentCard = 11;
				aces[z] = true;
				z += 1;
			}
			sum += currentCard;
		}
		
		//Deal with Aces
		if(aces.length > 0)
		{
			for(var x = 0; x < aces.length; x += 1)
			{
				if(sum > 21)
				{
					sum -= 10;
				}
			}
		}
		
		return sum;
	};
	
	BlackJack.prototype.setupGame = function(playerHand)
	{
		// Build a shuffled stack
		this.buildShuffledStack();
		// Deal cards to player
		return this.deal(playerHand);
		// Deal cards to House
		//this.deal();
		
	};
	
	/************ Getters and Setters ************/

    return BlackJack;
})(Cards);