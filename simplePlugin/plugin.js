// Create plugin example
(function( $ ) {

    $.fn.ValidateJs = function( options ) {
        var opts = $.extend( {}, $.fn.ValidateJs.defaults, options );
        // var settings = $.extend( {}, defaults, options );

        // Our plugin implementation code goes here.
        return this.each(function() {
            
            // alert(opts.validate);

            $(this).on('blur',function(){
                var elem = $( this );
                var markup = elem.val();               
                // var markup = elem.html(); 
                
                console.log(markup + " " + opts.validate);
                console.log(validateRegEx(markup, opts.validate));

                // Call our format function.
                markup = $.fn.ValidateJs.format( markup ); 
                elem.html( markup );

                // Call out debug private function
                debug( this.value );
            });

        });
    };

    // Variable
    $.fn.ValidateJs.defaults = {
        validate: "username"
    };

    // Function
    $.fn.ValidateJs.format = function(txt) {
        return "<strong>" + txt + "</strong>";
    };

    // Private function
    function debug( obj ) {
        if ( window.console && window.console.log ) {
            window.console.log( "hilight selection count: " + obj.length );
        }
    };

    function validateEmail( text ) {
        // var re = new RegExp(String(regx), 'gi');
        // var re = /\S+@\S+\.\S+/;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(text).toLowerCase());
    };

    function validateRegEx( text, reg ) {       
        // var re = /^[a-zA-Z]{1}[a-zA-Z0-9]{1,30}$/;
        // var re = new RegExp(String(reg));
        var re = reg;
        return re.test(String(text).toLowerCase());
    };

})(jQuery);

$(document).ready(function() {
    // $('.input-email').JsMagicValidator({validate : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/});
    // $('.input-username').JsMagicValidator({validate : /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,30}$/});
    $('.input-username').ValidateJs({validate : /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,30}$/});
});
