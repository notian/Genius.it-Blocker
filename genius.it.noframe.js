/*
 * Remove the genius embedded iframe 1 time per second.
 */

(function(){
	setInterval(function(){
		var d = document.getElementById('genius_back_page');
		if( d != null ) d.innerHTML = '';	
	},1000);
})();
