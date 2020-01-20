<script type="text/javascript">
// Run browser console (F12 key): 
// Key F12 next click Console tab
(function( $ ) {

    $.fn.PluginX = function( options ) {
        // Default variables
        // var defaults = {textColor: "#000", backgroundColor: "#fff"}
        // var opts = $.extend( {}, defaults, options );
        var id = 1;

        // Or
        var settings = $.extend( {}, $.fn.PluginX.defaults, options );

        // Private function
        var privFunc = function(txt) {
            return "Private function " + txt;
        };

        // Public function
        this.pubFunc = function(txt) {
            id = id + 1;
            // x = $.fn.PluginX.eid + 1;
            console.log("Private id: " + id);
            console.log("\r\nPublic function " + txt);
            return this;
        };

        // Public function2
        this.pubFunc2 = function(txt) {
            id = id + 4;
            // x = $.fn.PluginX.eid + 1;
            console.log("Private id: " + id);           
            console.log("\r\nPublic function " + txt);

            // Private from public
            privFunc("\r\nPrivate function from public -- " + txt);
            return this;
        };

        // Our plugin implementation code goes here.
        return this.each(function() {
            // alert(opts.validate);
            $(this).on('click',function(){
                var elem = $( this );
                var markup = elem.text();                                
                console.log("\r\nElement text " + markup);

                // Function private
                console.log(privFunc(markup));

                // External func
                console.log($.fn.PluginX.format(markup));

                // External function
                console.log(external(markup));
            });

            return this;
        });
    };

    $.fn.PluginX.eid = 1;

    // Variable
    $.fn.PluginX.defaults = {
        validate: "username"
    };

    // External Function
    $.fn.PluginX.format = function(txt) {
        return "<strong>" + txt + "</strong>";
    };

    // External Function
    function external(txt){
        return "External " + txt;
    }

})(jQuery);

$(document).ready(function() {
    var pl = $('.txt').PluginX({validate: "words"}).pubFunc("Hello Public").pubFunc2("Hello Public2");
    // pl.pubFunc("Hello Public");
    // pl.pubFunc2("Hello Public2");
});
</script>
<p class="txt">Hello Max</p>
<p class="txt">Hello Pax</p>
