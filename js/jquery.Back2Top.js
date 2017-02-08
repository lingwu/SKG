//Jquery Back2Top plugin for Wang Lili
 (function($) {
     $.fn.Back2Top = function(options) {
         var defaults = {
             bottom: 0,
             right: 0
         };
         var isIE6 = false;
         var settings = $.extend({},defaults, options);
         isIE6 = $.browser.msie && $.browser.version == "6.0";
         return this.each(function(k, v) {
             $this = $(v);
             $this.css('bottom', settings.bottom).css('right', settings.right).css('position', 'fixed');
             if (isIE6) {
                 $this.css('position', 'absolute');
                 $(window).scroll(function() {
					 $this.css("top", $(window).scrollTop() + $(window).height() - $this.height() - settings.bottom);
                     $this.css("left", $(window).scrollLeft() + $(window).width() - $this.width() - settings.right);
                 });
             }
         });
     }
 })(jQuery);