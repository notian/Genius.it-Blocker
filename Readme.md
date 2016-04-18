Simple no configuration Genius.it annotator blocker.

This snippet on any web page (or in a .js file) will redirect away from genius.it back to the source site:

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

To block (or harrass) genius web annotators using an extension, use one of the other js files.
