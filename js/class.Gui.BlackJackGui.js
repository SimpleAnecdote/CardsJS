var BlackJackGui = (function(_super)
{
	// BlackJackGui extends Gui
    __extends(BlackJackGui, _super);

    function BlackJackGui()
	{
        _super.call(this);
		
		// Instantiate a new BlackJackPlayer
		this.blackJackPlayer = new BlackJackPlayer("Matan");
		
		// Put name in place
		$(this._playerNameElement).html(this.blackJackPlayer.getPlayerName());
		// Put player's bank sum in place
		$(this._playerBankSumElement).html(this.blackJackPlayer.blackJackBank.getPlayerSum());
    }
	
	/**
	 *  A hub function to figure out which actions the user is trying to execute
	 * @param action Var
	 * @param element Obj The 'this' object of the HTML element activated
	 */
	BlackJackGui.prototype.action = function(action, element)
	{
		switch(action)
		{
			case this._betAction:
				// Get the betting amount, and convert it to an Int
				var bet = parseFloat($(element).attr(this._betAttribute));
				// Place bet
				this.blackJackPlayer.blackJackBank.placeBet(bet);
				this.updatePlayerBankSum();
				this.updatePot();
			break;
			
			case this._hitAction:
				console.log("You hit");
				playerHand = this.blackJackPlayer.blackJack.hit(this.blackJackPlayer.getPlayerHand());
				this.updatePlayerHand();
			break;
			
			case this._standAction:
				console.log("You chose to stand");
				// Disable stand button
				this.disableElement('[' + this._actionAttribute + '=' + this._standAction + ']')
				// Disable hit button
				this.disableElement('[' + this._actionAttribute + '=' + this._hitAction + ']');
				// Let the house play
				// Sample
				this.blackJackPlayer.blackJackBank.winPot();
				this.updatePlayerBankSum();
				this.updatePot();
			break;
			
			case this._playAction:
				console.log('game starting... Good luck');
				this.updatePlayerHand();
				// Disable play button
				this.disableElement('[' + this._actionAttribute + '=' + this._playAction + ']')
				// Disable bet buttons
				this.disableElement('[' + this._actionAttribute + '=' + this._betAction + ']');
				// Enable hit button
				this.enableElement('[' + this._actionAttribute + '=' + this._hitAction + ']');
				// Enable stand button
				this.enableElement('[' + this._actionAttribute + '=' + this._standAction + ']');
			break;
			
			default:
				// Do nothing
			break;
		}
	};
	
	/**
	 * 
	 */
	BlackJackGui.prototype.disableButtonsOnStand = function()
	{
		// Disable bet buttons
		$('button[data-bet]').attr('disabled', 'disabled');
		// Disable hit
		$('button[data-action="hit"]').attr('disabled', 'disabled');
	};
	
	/**
	 * 
	 */
	BlackJackGui.prototype.enableButtonsFromStand = function()
	{
		// Enable bet buttons
		$('button[data-bet]').removeAttr('disabled');
		// Enable hit
		$('button[data-action="hit"]').removeAttr('disabled');
	};
	
	/**
	 * Update the pot element with the current pot sum
	 */
	BlackJackGui.prototype.updatePot = function()
	{
		var pot = this.blackJackPlayer.blackJackBank.getPot();
		// If the pot is bigger than 0
		if(pot > 0)
		{
			// Enable the play button
			this.enableElement('[' + this._actionAttribute + '=' + this._playAction + ']')
		}
		// Update the pot
		$(this._playerPotElement).html(pot);
	};
	
	/**
	 * Update the player bank sum element with the current player bank sum
	 */
	BlackJackGui.prototype.updatePlayerBankSum = function()
	{
		$(this._playerBankSumElement).html(this.blackJackPlayer.blackJackBank.getPlayerSum());
	};
	
	/**
	 * Update the player hand element with the current player hand
	 */
	BlackJackGui.prototype.updatePlayerHand = function()
	{
		var playerHand = this.blackJackPlayer.getPlayerHand();
		
		this.printCardsObject(playerHand, this._playerHandElement);
		$(this._playerHandSumElement).html(this.blackJackPlayer.blackJack.handSum(playerHand));
	};
	
	/**
	 * Prints a list of the cards in a cardsObject to a target element
	 * @param cardsObject Obj Cards Object Format required
	 * @param targetElementId Var The HTML ID of the element you want to print to
	 */
	BlackJackGui.prototype.printCardsObject = function(cardsObject, targetElementId)
	{
		var stack = cardsObject,
			stackElement = targetElementId,
			cards = "";
		
		for(var i = 0; i < stack.length; i += 1)
		{
			cards += "<li>";
			cards += stack[i][this.blackJackPlayer.blackJack.getCardFaceKey()];
			cards += this.blackJackPlayer.blackJack.getCardDelimiter();
			cards += stack[i][this.blackJackPlayer.blackJack.getCardSuitKey()];
			cards += "</li>";
		}
		
		$(stackElement).html
		(
			"<ol>" +
			cards +
			"</ol>"
		);
	};

    return BlackJackGui;
})(Gui);