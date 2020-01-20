// Create plugin
(function($) {
	$.fn.extend({
        JsMagicValidator: function(options) {
            var defaults = {
                validate: 'email'
            };
            options = $.extend(defaults, options);
 			
            return this.each(function() {
            	// $('head').append('<link rel="stylesheet" href="plugin-styles.css" type="text/css" />');
            	// var ih = $(this).outerHeight();
                // var h = $(this)[0].outerHTML; // get plugin outherHtml

            	var ph = $(this).attr('placeholder'); // get place holder text
            	$(this).attr('placeholder',''); // clear placeholder
            	$(this).css({margin: '0px'}); // clear margin

            	
                var h = $(this)[0].outerHTML;                
                $(this).wrap( '<div class="JsMagicValidator-wraper"></div>');
                $(this).parent().css({position: "relative"});
                $(this).parent().prepend('<div class="JsMagicValidator-holder">'+ph+'</div>');
                var error = $(this).attr('data-error');                
                
                $(this).focusin(function() {
                    // alert(options.description + h);
                    var it = $(this).parent().children('.JsMagicValidator-holder');
                    it.removeClass('JsMagicValidator-movetop-gray');
                    it.addClass('JsMagicValidator-movetop');
                    it.animate({"top": "-12px"}, 100);
                });

                $(this).on('blur keyup',function(){
					var txt = $(this).val();
					var cnt = $(this).val().length;
					var it = $(this).parent().children('.JsMagicValidator-holder');
					if(cnt == 0){
						it.animate({"top":"12px"}, 100);
						it.removeClass('JsMagicValidator-movetop');
					}else{
						it.removeClass('JsMagicValidator-movetop');
						it.addClass('JsMagicValidator-movetop-gray');
					}
				
					var txt = $(this).val();
					if(!validateRegEx(txt, options.validate)){
						var error = $(this).attr('data-error');
						if(error.length > 0){
							$(this).parent().children('.JsMagicValidator-error-label').remove();
							$(this).removeClass('JsMagicValidator-input-ok');
							$(this).addClass('JsMagicValidator-input-error');
							$(this).parent().append('<div class="JsMagicValidator-error-label"><i class="fa fa-exclamation-circle"></i> '+error+'</div>');
						}
					}else{
						$(this).parent().children('.JsMagicValidator-error-label').remove();
						$(this).removeClass('JsMagicValidator-input-error');
						$(this).addClass('JsMagicValidator-input-ok');
					}
				});

				$('.JsMagicValidator-holder').on('click',function(){		
					$(this).removeClass('JsMagicValidator-movetop-gray');
					$(this).addClass('JsMagicValidator-movetop');
					$(this).animate({"top": "-12px"}, 100);
					$(this).parent().children('input').trigger('focus');
				});

                // If not empty
				var cnt = $(this).val().length;				
				if(cnt > 0){					
					var it = $(this).parent().children('.JsMagicValidator-holder');
					it.animate({"top": "-12px"}, 100);
					it.addClass('JsMagicValidator-movetop-gray');
				}           
            });
        }
    });

	function validateRegEx( text, reg ) {	    
	    // var re = /^[a-zA-Z]{1}[a-zA-Z0-9]{1,30}$/;
	    // var re = new RegExp(String(reg));
	    var re = reg;
	    return re.test(String(text).toLowerCase());
	};

})(jQuery);