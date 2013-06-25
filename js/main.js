$(document).ready(function()
{
	var blackJackGui = new BlackJackGui();
	//console.log(blackJackPlayer.blackJack.getStack());
	
	$('button[data-action]').on('click', function(event)
	{
		blackJackGui.action($(this).attr('data-action'), this);
	});
	
});