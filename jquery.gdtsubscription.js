(function($){
	
	$.fn.gdtsubscription = function(options) {
	
	var settings = $.extend({

            // Default settings.
            action: $(this).attr('action'),
            method: $(this).attr('method'),
            data: '',
            error: 'error',
            sending: 'sending',
            success: 'success',
            target: this
            }, options);

		  $(this).submit(function(){
			  
			  settings.data = $(this).serialize();
			  $.ajax({
				  url: settings.action,
				  method: settings.method,
				  data: $(this).serialize(),
				  beforeSend: function() {
					  $(settings.target).addClass(settings.sending);
					  },
				  complete: function() {
					  $(settings.target).removeClass(settings.sending);
				  },
				  success: function(data){
					  $(settings.target).addClass(settings.success);
					  if(settings.successMsg===undefined) {
					  	$(settings.target).html(data);
					  	} else {
						 $(settings.target).html(settings.successMsg); 
					  }
				  },
				  error: function() {
					  $(settings.target).addClass(settings.error);
					  if(settings.errorMsg!==undefined) {
						$(settings.target).html(settings.errorMsg);
					  }
				  }
			  });		  
			  return false;
		  });
	};
	
})(jQuery);
