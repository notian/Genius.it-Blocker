Simple no configuration Genius.it annotator blocker.

```javascript
/* No Config genius.it blocker */
(function(){
	var l = document.location;
	if( l.host == 'genius.it' ){
		var p = l.pathname.substring(1).split('/');
		if( parseInt( p[0] ).toString() == p[0]  ) {
			p.shift(); /* Get rid Genius ID (if applicable) */
		}
		document.location = '//'+p.join('/');
	}
})();
```
