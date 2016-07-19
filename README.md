# Gdtsubscription
AJAX form submission handler

##Installation & Usage

1. Download and unzip the package into your js directory.
2. Link to js/jquery.gdtsubscription.min.js
3. Call the plugin by attaching it to the form it will handle.


####Options

| Option | Description | Default | Options
| --- | --- | --- | --- |
| action | URL to submit request | extracted from form tag |  |
| method | Method to use | extracted from form tag | GET,POST |
| error | Class to add to form if AJAX returns error | error |  |
| sending | Class to add to form when request is sent | sending |  |
| success | Class to add to form when request successful | success | |
| target | Target to send response | Selected form | Any selector |
| errorMsg | Custom string to return to target |  |  |
| successMsg | Custom string to return to target |  |  |


#####Example

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Gdtsubscription</title>
	<style>
		#newsletter #messaging.sending {
			background: yellow;
		}
		
		#newsletter #messaging.error {
			background: pink;
		}
		
		#newsletter #messaging.success {
			background: lime;
		}
	</style>
</head>
<body>
<form id="newsletter" method="POST" action="/?ACT=46"> 
<div id="messaging"></div>              
   <p>
        <input class="form-newsletter-input" type="email" name="email" placeholder="email addresss" value="">
        <button class=" news-subscribe" role="button" name="submit">Subscribe</button>
        <input type="hidden" name="csrf_token" value="fc9ce0bc686072e655cdc408e83bcf403af583e1">  
    </p>
</form>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="/js/jquery.gtdsubscription.min.js"></script>
<script>
(function($){
	
	var options = { 
		error: 'error-class',
		sending: 'sending-class',
		success: 'success-class',
		errorMsg: 'Sorry, there was a problem...',
		successMsg: 'Success!',
		target: '#messaging'
		
	}
	
	$('#newsletter').gdtsubscription(options);
	
})(jQuery);
</script>
</body>
</html>
```