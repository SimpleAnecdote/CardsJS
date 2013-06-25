var Bank = (function()
{
	function Bank()
	{
		// The starting amount of money to give to a player
		this._playerStarterSum = 3000;
		this._playerSum = this._playerStarterSum;
		this._pot = 0;
		this._house = 0;
	}
	
	Bank.prototype.test = function()
	{
		console.log(this._playerSum);
		this.placeBet(500);
		console.log(this._playerSum);
		console.log(this._house);
		console.log(this._pot);
		this.losePot();
		console.log(this._playerSum);
		console.log(this._house);
		console.log(this._pot);
	};
	
	/**
	 * Checks if the player has enough money in their bank to place the bet.
	 * If they have the money, we take the sum out of their bank and put it in the pot.
	 * @param bet Int
	 * @return Bool
	 */
	Bank.prototype.placeBet = function(bet)
	{
		// Check the player has enough money to place bet
		if(this._playerSum - bet < 0)
		{
			console.log('You don\'t have the money to place this bet');
			return false;
		}
		// Take bet amount out of player's bank
		this._playerSum -= bet;
		// Place bet amount in pot
		this._pot += bet;
		
		return true;
	};
	
	Bank.prototype.winPot = function()
	{
		// Put the bet sum, plus the winnings back in the player's bank
		this._playerSum += this._pot * 2;
		//Take the bet sum from the house
		this._house -= this._pot;
		// Reset pot
		this._pot = 0;
		
		return true;
	};
	
	Bank.prototype.drawPot = function()
	{
		// Put the player's bet back in their bank
		this._playerSum += this._pot;
		// Reset pot
		this._pot = 0;
	};
	
	Bank.prototype.losePot = function()
	{
		// Give the house the pot
		this._house += this._pot;
		// Reset pot and put nothing in player's bank.
		this._pot = 0;
	};
	
	/************ Getters and Setters ************/
	Bank.prototype.getPot = function()
	{
		return this._pot;
	};
	
	Bank.prototype.setPot = function(pot)
	{
		this._pot = pot;
		
		return true;
	};
	
	Bank.prototype.getPlayerSum = function()
	{
		return this._playerSum;
	};
	
	Bank.prototype.setPlayerSum = function(playerSum)
	{
		this._playerSum = playerSum;
		
		return true;
	};
	
	return Bank;
})();