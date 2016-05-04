$(document).ready(function() {
	console.log("Loaded");	
    var Firebase = require("firebase")
    var fbref = new Firebase("htts://social-media-tracker.firebaseio.com/");
    
});
    $('#social-media').submit(function(e) {
		e.preventDefault();
    	var totaltwitter = parseInt($('#totaltwitter').val());
		var totalfacebook = parseInt($('#totalfacebook').val());
		var totalinstagram = parseInt($('#totalinstagram').val());
        var totalsnapchat = parseInt($('#totalsnapchat').val());
        	var answer = {
			totaltwitter: totaltwitter,
			totalfacebook: totalfacebook,
			totalinstagram: totalinstagram,
                totalsnapchat: totalsnapchat
		}
        fbRef.child('answers').push(answer);
    });
var p = $('p#totalinstagram');
p.replaceWith('id="totalinstagram' + p.html() + '>');
});
var p = $('p#totalfacebook');
p.replaceWith('id="totalfacebook' + p.html() + '>');
});
var p = $('p#totalsnapchat');
p.replaceWith('id="totalsnapchat' + p.html() + '>');
});
var p = $('p#totaltwitter');
p.replaceWith('id="totaltwitter1' + p.html() + '>');
});
    	fbRef.child('answers').on('child_added', function(snap) {
		var answer = snap.val();
               
            }" />
            
            

