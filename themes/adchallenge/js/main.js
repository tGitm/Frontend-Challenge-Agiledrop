document.addEventListener("DOMContentLoaded",function(){jQuery('a[href^="#"]').click(function(e){e.preventDefault();var t=jQuery(this).attr("href");jQuery("html,body").animate({scrollTop:jQuery(t).offset().top},"slow")}),jQuery(".menu-item").on("click",function(){jQuery(".menu-item").removeClass("active-link"),jQuery(this).addClass("active-link")})});