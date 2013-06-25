var Gui = (function()
{

    function Gui()
	{
    	// Actions
		this._betAction = 'bet';
		this._hitAction = 'hit';
		this._standAction = 'stand';
		this._playAction = 'play';
		
		// HTML IDs and Classes
		this._stackElement = '#stack';
		this._playerNameElement = '#playerName';
		this._playerPotElement = '#playerPot';
		this._playerBankElement = '#playerBank';
		this._playerBankSumElement = '#playerBankSum';
		this._playerHandElement = '#playerHand';
		this._playerHandSumElement = '#playerHandSum';
		this._houseNameElement = '#houseName';
		this._housePotElement = '#housePot';
		this._houseBankElement = '#houseBank';
		this._houseBankSumElement = '#houseBankSum';
		this._houseHandElement = '#houseHand';
		this._houseHandSumElement = '#houseHandSum';
		
		// Misc
		this._actionAttribute = 'data-action';
		this._betAttribute = 'data-bet';
		this._disabledAttribute = 'disabled';
    }
    
    /**
	 * Disable element
	 * @param elementId
	 */
	Gui.prototype.disableElement = function(elementId)
	{
		$(elementId).attr(this._disabledAttribute, this._disabledAttribute);
	};
	
	/**
	 * Enable element
	 * @param elementId
	 */
	Gui.prototype.enableElement = function(elementId)
	{
		$(elementId).removeAttr(this._disabledAttribute);
	};
    
    /************ Getters and Setters ************/
	/**
	 * @return this._betAction Var
	 */
	Gui.prototype.getBetAction = function()
	{
		return this._betAction;
	};
	
	/**
	 * @return this._hitAction Var
	 */
	Gui.prototype.getHitAction = function()
	{
		return this._hitAction;
	};
	
	/**
	 * @return this._standAction Var
	 */
	Gui.prototype.getStandAction = function()
	{
		return this._standAction;
	};
	
	/**
	 * @return this._playAction Var
	 */
	Gui.prototype.getPlayAction = function()
	{
		return this._playAction;
	};

    return Gui;
})();