/*!
* JQUERY NEcessary Functions 
* Version 4.01
* SJ
*/

function sec3_col_height() {
    /* Dynamically adjust font-size for 6-reasons */
        // jQuery('#section_3 .sp1').each(function(){
        //     var fs = (jQuery(this).closest('div.slide').width() / 100) * 30;
        //     jQuery(this).css('font-size', fs + 'px');
        // });
        // jQuery('#section_3 .sp2').each(function(){
        //     var fs = (jQuery(this).closest('div.slide').width() / 100) * 3.75;
        //     jQuery(this).css('font-size', fs + 'px');
        // });
    /* @end */
    
}
function slideHeight() {
    var adminmenu = jQuery('#wpadminbar').outerHeight();
    var eyebrow = jQuery('#masthead .top-bar').outerHeight();
    var mainnav = jQuery('#masthead .bottom-bar').outerHeight();
    var subnav = jQuery('#affixSubMenu').outerHeight();
    var cutoff = adminmenu + eyebrow + mainnav + subnav;
    var sheight = window.innerHeight - cutoff + 'px';
    
    if(jQuery(window).width() > 768) {
        jQuery('.reasons_cycle-slideshow .slide_element').each(function() {
            jQuery(this).height(sheight);
        });
        // jQuery('.timeline-cycle-slideshow .slide_element').each(function(){
        //     jQuery(this).height(sheight);
        // });
        jQuery('.slide_container').each(function(){
            jQuery(this).height(sheight);
        });
        //jQuery('.reasons_cycle-slideshow').height(sheight);
        //jQuery('.timeline-cycle-slideshow').height(sheight);
        //jQuery ('#section_1 .container').height(sheight);
    }
}

function smoothScrollTo(anchor) {
    var offsetDistance = jQuery(anchor).offset().top;
    var margin = jQuery(anchor).outerHeight(true) - jQuery(anchor).outerHeight();
    var adminmenu = jQuery('#wpadminbar').outerHeight();
    var eyebrow = jQuery('#masthead .top-bar').outerHeight();
    var mainnav = jQuery('#masthead .bottom-bar').outerHeight();
    var subnav = jQuery('#affixSubMenu').outerHeight();
    var mobile = jQuery('.fixed-area.page-header-wrapper.mobile').outerHeight();
    if(jQuery(window).width() > 768) {
        var adjust = adminmenu + eyebrow + mainnav + subnav + margin;
    } 
    else {
        adjust = margin + adminmenu;
    }
    jQuery('html, body').stop().animate({ scrollTop: offsetDistance - adjust }, 2000);
}





jQuery(function($) {

    /* @group Video */
    $('#section_2').click(function(){
        console.log('clicked');
        $('#videoModaliofvcntx9z').modal('show');
    });
    
    $('#videoModaliofvcntx9z').on('shown.bs.modal', function (e) {
 		window._wq = window._wq || [];
		$video_id  = 'iofvcntx9z';
		
		_wq.push({ id: $video_id, onReady: function(video) {
			video.play();
		}});
    });
    /* @end */
    /** CREATE DROPDOWN LIST NAVIGATION FROM MENU FOR MOBILE SJ-20180802 **/ 
    var $list   = $("#menu-about-us"),
    $select = $('<select />');

    $list.children('li').each(function(index) {
        var $att = $("a",this).attr('href');
        var $title = $("a",this).html();
        $select.append($('<option />').attr('value', $att).html($title));
    });
    
    $("#tertMobile").append($select);
    $("#tertMobile select").css( "width", "100%" );
    
    // Trigger URL on change
    $('#tertMobile select').on('change',function(){
        var value = $(this).val();
        location.href = value; 
    });
/**@END  CREATE DROPDOWN LIST NAVIGATION FROM MENU FOR MOBILE SJ-20180802 **/
    /** @group Section_3 Hovers **/
            $('.rlink').hover(
                function() {
                imge = $( this ).data('bg');
                $('#section_3').addClass(imge);
            }, function(imge) {
                $('#section_3').removeClass('reason1 reason2 reason3 reason6 reason5 reason4');
            });
            $('.rlink').click(function(el){
                event.preventDefault();
                rslide = $(this).data('slide');
                $('.reasons_cycle-slideshow').cycle('goto', rslide);
                $('#section_3').hide();
                $('#reasons_slider').show();
                var anchor = this.hash;
                setTimeout(function() {
                    smoothScrollTo(anchor);
                    window.location.hash = anchor;
                    }, 5);
                    return false;
            });
            
            $('#reasons_slider a.close').click(function(element){
                event.preventDefault();
                $('#reasons_slider').hide();
                $('#section_3').show();
            });
            $('#vtimeline').click(function(){
                $('#section_4').hide();
                $('#timeline').show();
                var anchor = "#section_4";
                setTimeout(function() {
                    smoothScrollTo(anchor);
                    window.location.hash = anchor;
                    }, 5);
                    return false;
            });
            $('#timeline a.close').click(function(element){
                event.preventDefault();
                $('#timeline').hide();
                $('#section_4').show();
            });
    /** @end **/
    /* @group Change Image on scroll */
            if (window.innerWidth > 767) {
                var waypoint = new Waypoint({
                    element: $('#img1_holder'),
                    handler: function(direction) {
                        $('#img1_holder img.top').toggleClass('transparent');
                    },
                    offset: '30%'
                });
                var waypoint = new Waypoint({
                    element: $('#img2_holder'),
                    handler: function(direction) {
                        $('#img2_holder img.top').toggleClass('transparent');
                    },
                    offset: '30%'
                });
            }
    /* @end */
    slideHeight();
    sec3_col_height();

    
});



jQuery( window ).resize(function($) {
    sec3_col_height();
    slideHeight();
});