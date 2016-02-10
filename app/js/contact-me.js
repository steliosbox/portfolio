var contactModule = (function(){

	var initial = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('#contact-me').on('submit', _submitForm); // отправка формы "связаться со мной"
	};

	var _submitForm = function(event) {
        
		event.preventDefault();
		
        var form = $(this),
            url = 'php/send-mail.php';

        // проверить форму на валидность
        if (!validator.validationForm(form)) return false;
        
        // передаем данные формы PHP обработчику
        var ajaxAnswer = _ajaxRequest(form, url);
        
        // Выводим сообщение о полученные данных с PHP обработчика
        ajaxAnswer.done(function(answer) {
            if( answer.status === 'success') {
                
                form.trigger('reset');
                
                $('.popup-msg').text(answer.message).addClass('success-msg').show();
            } else {
                
                $('.popup-msg').text(answer.message).addClass('error-msg').show();
            }
        }).fail(function(answer) {
            
            console.log('Произошла ошибка при передаче данных PHP');
            
            $('.popup-msg').text('Произошла ошибка при передаче данных PHP').addClass('error-msg').show();
        });
        
        
    };

	var _ajaxRequest = function (form, url) {
        
        var data = form.serialize();
        
        return $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data
        });
    };

	return {
		init: initial
	};

})();

contactModule.init();