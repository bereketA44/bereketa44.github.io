/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
!function(e){var r,s,d=e.event;r=d.special.debouncedresize={setup:function(){e(this).on("resize",r.handler)},teardown:function(){e(this).off("resize",r.handler)},handler:function(e,n){var t=this,i=arguments,o=function(){e.type="debouncedresize",d.dispatch.apply(t,i)};s&&clearTimeout(s),n?o():s=setTimeout(o,r.threshold)},threshold:150}}(jQuery);