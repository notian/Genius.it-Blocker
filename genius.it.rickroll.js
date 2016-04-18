(function(){
	var iter = function(c){
		if( typeof c != 'object' ) return;
		if( typeof c.getAttribute == 'undefined' ) return;
		var s = c.getAttribute('src');
		if( s.indexOf( 'genius.com/web_pages') != -1 ){
			c.setAttribute( 'src', atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZFF3NHc5V2dYY1E/YXV0b3BsYXk9MQ==") );
		}
	}
	setInterval(function(){
		try{
			var f = document.getElementById('genius_back_page').getElementsByTagName('iframe')
			for( var x in f ){	
				iter( f[x] );
			}
		}catch(e){}
	},1000);
})();
