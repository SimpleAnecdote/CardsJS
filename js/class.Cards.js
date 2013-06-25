var Cards = (function()
{
    function Cards()
	{
		this._stack;
		// How many cards we deal at the start to a player
		this._startingCards = 2;
		// How many decks do we want to play with
		this._numberOfDecks = 2;
		this._cardDelimiter = " of ";
		// Some General Settings and Key Names
		this._cardValueKey = "Value";
		this._cardFaceKey  = "Face";
		this._cardSuitKey  = "Suit";
		this._jokers = false;
		// Suits
		this._suits = Array();
		this._suits = 
		[
			"Hearts",
			"Diamonds",
			"Clubs",
			"Spades"
		];
		// Cards
		this._cards = Array();
		// Cards to put in the deck
		this._cards[0] = Object();
		this._cards[0][this._cardValueKey] = 1;
		this._cards[0][this._cardFaceKey] = "Ace";
		this._cards[1] = Object();
		this._cards[1][this._cardValueKey] = 2;
		this._cards[1][this._cardFaceKey] = "Two";
		this._cards[2] = Object();
		this._cards[2][this._cardValueKey] = 3;
		this._cards[2][this._cardFaceKey] = "Three";
		this._cards[3] = Object();
		this._cards[3][this._cardValueKey] = 4;
		this._cards[3][this._cardFaceKey] = "Four";
		this._cards[4] = Object();
		this._cards[4][this._cardValueKey] = 5;
		this._cards[4][this._cardFaceKey] = "Five";
		this._cards[5] = Object();
		this._cards[5][this._cardValueKey] = 6;
		this._cards[5][this._cardFaceKey] = "Six";
		this._cards[6] = Object();
		this._cards[6][this._cardValueKey] = 7;
		this._cards[6][this._cardFaceKey] = "Seven";
		this._cards[7] = Object();
		this._cards[7][this._cardValueKey] = 8;
		this._cards[7][this._cardFaceKey] = "Eight";
		this._cards[8] = Object();
		this._cards[8][this._cardValueKey] = 9;
		this._cards[8][this._cardFaceKey] = "Nine";
		this._cards[9] = Object();
		this._cards[9][this._cardValueKey] = 10;
		this._cards[9][this._cardFaceKey] = "Ten";
		this._cards[10] = Object();
		this._cards[10][this._cardValueKey] = 10;
		this._cards[10][this._cardFaceKey] = "Jack";
		this._cards[11] = Object();
		this._cards[11][this._cardValueKey] = 10;
		this._cards[11][this._cardFaceKey] = "Queen";
		this._cards[12] = Object();
		this._cards[12][this._cardValueKey] = 10;
		this._cards[12][this._cardFaceKey] = "King";
    }
	
	/**
	 * Shell function to automate the building and shuffling of stacks
	 * @param numberOfDecks Int The number of decks to be put in the stack
	 * @return this._stack Obj
	 */
	Cards.prototype.buildShuffledStack = function(numberOfDecks)
	{
		var numberOfDecksToStack = this._numberOfDecks;
		// If the supplied numberOfDecks is greater than 0, overwrite the value with it
		if(numberOfDecks > 0)
		{
			numberOfDecksToStack = numberOfDecks;
		}
		// Build the stack
		this.buildStack(numberOfDecksToStack);
		// Shuffle the stack
		this.shuffleStack();
		
		return this._stack;
	};
	
	/**
	 * Stack is a compilation of decks
	 * @param numberOfDecks INT The number of decks to be put in the stack
	 * @return this._stack Obj
	 */
	Cards.prototype.buildStack = function(numberOfDecks)
	{
		var stack = Array(),
			numberOfDecksToStack = this._numberOfDecks,
			deck,
			cardCount = 0;
		// If the supplied numberOfDecks is greater than 0, overwrite the value with it
		if(numberOfDecks > 0)
		{
			numberOfDecksToStack = numberOfDecks;
		}
		
		for(var i = 0; i < numberOfDecksToStack; i += 1)
		{
			deck = this.buildDeck();
			for(var x = 0; x < deck.length; x += 1)
			{
				stack[cardCount] = deck[x];
				cardCount += 1;
			}
		}
		
		this._stack = stack;
		
		return this._stack;
	};
	
	/**
	 * Build a deck
	 * @param jokers boolean
	 * @return deck Obj
	 */
	Cards.prototype.buildDeck = function()
	{
		var deck = Array();
		
		var z = 0;
		var suitsLength = this._suits.length;
		for(var i = 0; i < suitsLength; i += 1)
		{
			var cardsLength = this._cards.length;
			for(var x = 0; x < cardsLength; x += 1)
			{
				deck[z] = Object();
				deck[z][this._cardValueKey] = this._cards[x][this._cardValueKey];
				deck[z][this._cardFaceKey] = this._cards[x][this._cardFaceKey];
				deck[z][this._cardSuitKey] = this._suits[i];
				z += 1;
			}
		}
		if(this._jokers == true)
		{
			deck[z+1] = Object();
			deck[z+1][this._cardValueKey] = 0;
			this._cards[13][this._cardFaceKey] = "Red Joker";
			this._cards[14] = Object();
			this._cards[14][this._cardValueKey] = 0;
			this._cards[14][this._cardFaceKey] = "Black Joker";
		}
		
		return deck;
	};
	
	/**
	 * Shuffle any stack of cards that conforms to the Object structure
	 * @param stack Obj
	 * @return this._stack Obj
	 */
	Cards.prototype.shuffleStack = function(stack)
	{
		if(stack == null)
		{
			stack = this._stack;
		}
		var shuffledStack,
			i = stack.length;
		if(i == 0)
		{
			return false;
		}
		while(--i)
		{
			var j = Math.floor(Math.random() * (i + 1));
			var tempi = stack[i];
			var tempj = stack[j];
			stack[i] = tempj;
			stack[j] = tempi;
		}
		
		this._stack = stack;
		
		return this._stack;
	};
	
	/**
	 * Draws the last card from this._stack
	 * @return drawCard Obj
	 */
	Cards.prototype.drawCard = function()
	{
		var drawnCard = this._stack.pop();
		
		return drawnCard;
	};
	
	/************ Getters and Setters ************/
	/**
	 * @return this._stack Obj
	 */
	Cards.prototype.getStack = function()
	{
		return this._stack;
	};
	/**
	 * @param stack Obj
	 * @return true Bool
	 */
	Cards.prototype.setStack = function(stack)
	{
		this._stack = stack;
		
		return true;
	};
	/**
	 * @return this._cardDelimiter Var
	 */
	Cards.prototype.getCardDelimiter = function()
	{
		return this._cardDelimiter;
	};
	/**
	 * @return this._cardSuitKey Var
	 */
	Cards.prototype.getCardSuitKey = function()
	{
		return this._cardSuitKey;
	};
	/**
	 * @return this._cardValueKey Var
	 */
	Cards.prototype.getCardValueKey = function()
	{
		return this._cardValueKey;
	};
	/**
	 * @return this._cardFaceKey Var
	 */
	Cards.prototype.getCardFaceKey = function()
	{
		return this._cardFaceKey;
	};
	/**
	 * @return this._numberOfDecks Int
	 */
	Cards.prototype.getNumberOfDecks = function()
	{
		return this._numberOfDecks;
	};

    return Cards;
})();