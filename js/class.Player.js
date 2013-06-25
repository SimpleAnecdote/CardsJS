var Player = (function()
{
    function Player(playerName)
	{
		this._playerName = playerName;
		this._playerHand = Array();
    }
	/************ Getters and Setters ************/
	/**
	 * @return this._playerName Var
	 */
	Player.prototype.getPlayerName = function()
	{
		return this._playerName;
	};
	
	/**
	 * @return this._playerHand Obj
	 */
	Player.prototype.getPlayerHand = function()
	{
		return this._playerHand;
	};

    return Player;
})();