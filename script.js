/*global $*/
/*global Firebase*/

$(document).ready(function() {
	
	var fbRef = new Firebase("https://sweltering-inferno-8062.firebaseio.com");
	
    $('#social-media').submit(function(e) {
		e.preventDefault();
		
    	var totaltwitter = parseInt($('#totaltwitter').val());
		var totalfacebook = parseInt($('#totalfacebook').val());
		var totalinstagram = parseInt($('#totalinstagram').val());
        var totalsnapchat = parseInt($('#totalsnapchat').val());
        var totalother = parseInt($('#totalother').val());
        
        var answer = {
			totaltwitter: totaltwitter,
			totalfacebook: totalfacebook,
			totalinstagram: totalinstagram,
            totalsnapchat: totalsnapchat,
            totalother: totalother
		}
		
        fbRef.child('total').push(answer);
    });
    
    var totalt = 0;
    var totalf = 0;
    var totali = 0;
    var totals = 0;
    var totalo = 0;
    
    fbRef.child('total').on('child_added', function(snap) {
        var answer = snap.val();
        
        totalt = totalt + answer.totaltwitter;
		totalf = totalf + answer.totalfacebook;
		totali = totali + answer.totalinstagram;
        totals = totals + answer.totalsnapchat;
        totalo = totalo + answer.totalother;
        
        $('#totalt').text(totalt);
        $('#totalf').text(totalf);
        $('#totali').text(totali);
        $('#totals').text(totals);
        $('#totalo').text(totalo);
    });

            
            
});
