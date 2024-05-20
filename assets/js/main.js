//запрет правого клика
$(document).bind('contextmenu', function(e) {
    e.preventDefault();
});

//кастомное меню
$(document).ready(function() {
    // скрыть
    $(document).on("contextmenu", function(e) {
        e.preventDefault();

        // показать
        $("#custom-menu").css({
            display: "block",
            left: e.pageX,
            top: e.pageY
        });
    });

    // скрыть по клику вне
    $(document).on("click", function(e) {
        if (!$(e.target).closest("#custom-menu").length) {
            $("#custom-menu").hide();
        }
    });

    // действия
    $("#option-1").on("click", function() {
        alert("Пункт 1 нажат");
    });
    $("#option-2").on("click", function() {
        alert("Пункт 2 нажат");
    });
    $("#option-3").on("click", function() {
        alert("Пункт 3 нажат");
    });
});

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

function toggleBrightMode() {
    document.body.classList.toggle('bright-mode');
}

document.getElementById('feedbackform').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    alert('Сообщение отправлено!');
    this.reset();
  });

jQuery(function($){
	$(document).mouseup( function(e){
		var wrapmenu = $(".wrap-main-menu"); 
		if ( !wrapmenu.is(e.target) 
		    && wrapmenu.has(e.target).length === 0 
            && $('.main-menu-button').hasClass('openDone')) { 
            $('nav').css("left","-350px");
            $('.main-menu-button').removeClass('openDone')
		}
	});
});

// // Функция для сохранения данных в локальное хранилище
// function saveData() {
//     let data = document.getElementById("inputField").value;
//     localStorage.setItem("userData", data);
// }

// // Функция для извлечения данных из локального хранилища
// function retrieveData() {
//     let data = localStorage.getItem("userData");
//     document.getElementById("output").textContent = data;
// }