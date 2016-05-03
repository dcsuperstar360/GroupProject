$(document).ready(function() {
	console.log("Loaded");	

var p = $('p#test');
p.replaceWith('id="username' + p.html() + '>');
});

<input type="button" value="click me" onclick="function getConfirmation(){
               var retVal = confirm("Do you want to continue ?");
               if( retVal == true ){
                  document.write ("Thank you for submting!");
                  return true;
               }
            }" />
            

