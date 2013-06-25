var BlackJackBank = (function(_super)
{
	// BlackJackBank extends Bank
	__extends(BlackJackBank, _super);
	
	function BlackJackBank()
	{
		_super.call(this);
		
		// The starting amount of money to give to a player
		this._playerStarterSum = 3000;
		this._playerSum = this._playerStarterSum;
		this._pot = 0;
		this._house = 0;
	}
	
	return BlackJackBank;
})(Bank);