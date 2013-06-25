var BlackJackPlayer = (function(_super)
{
	// BlackJackPlayer extends Player
    __extends(BlackJackPlayer, _super);

    function BlackJackPlayer()
	{
        _super.call(this);
		
		// Set player Name
		var _ref = BlackJackPlayer.__super__.constructor.apply(this, arguments);
		
		// Instantiate a new BlackJack game
		this.blackJack = new BlackJack;
		// Instantiate a new BlackJack Bank
		this.blackJackBank = new BlackJackBank;
		
		// Setup game
		this._playerHand = this.blackJack.setupGame(this._playerHand);
		
		this._playerSum = this.blackJackBank.getPlayerSum();
    }
    
	/************ Getters and Setters ************/
	/**
	 * @return this._playerSum Int
	 */
	Player.prototype.getPlayerSum = function()
	{
		return this._playerSum;
	};
	
    return BlackJackPlayer;
})(Player);