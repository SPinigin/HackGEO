$(document).ready(function()
{
    $('.main-menu-button').click(function() {
        if(!$('.main-menu-button').hasClass('openDone'))
        {
            $('.main-menu-button').addClass('openDone');
            $('nav').css("left","0px");
        }
        else 
        {
            $('.main-menu-button').removeClass('openDone');
            $('nav').css("left","-350px");
        }
    })
});

$(window).resize(function()
{
    if($(window).width() > 1200)
    {
        $('nav ul li').removeAttr('style');
    }
});

document.getElementById('feedbackform').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
   
    
   
    alert('Сообщение отправлено!');
    this.reset();
  });

// jQuery(function($){
// 	$(document).mouseup( function(e){
// 		var wrapmenu = $(".wrap-main-menu"); 
// 		if ( !wrapmenu.is(e.target) 
// 		    && wrapmenu.has(e.target).length === 0 
//             && $('.main-menu-button').hasClass('openDone')) { 
//             $('nav').css("left","-350px");
//             $('.main-menu-button').removeClass('openDone')
// 		}
// 	});
// });