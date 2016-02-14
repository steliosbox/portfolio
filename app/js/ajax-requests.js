var myModule = (function() {
    
    var init = function() {
        _setUpListners();
    };

    // Прослушиваем события 
    var _setUpListners = function() {
        // Проверяем форму "Обратная связь" при нажатии на кнопку submit
        $('.contact-me').on('submit', _submitForm);
        // Добавить порек
        $('.add-project-form').on('submit', _submitProject);
    };

	var _submitForm = function(event) {
        
		event.preventDefault();
		
        // убираем статус сообщений
        $('.status-msg').text("").removeClass('success-msg').removeClass('error-msg').hide();
        
        var form = $(this),
            url = 'php/contact.php';

        // проверить форму на валидность
        if (!validator.validationForm(form)) return false;
        
        // передаем данные формы PHP обработчику
        var ajaxAnswer = _ajaxRequest(form, url);
        
    };
    
    // Добавляем приект
    var _submitProject = function(event) {

        event.preventDefault();

        var form = $(this),
            url = 'php/add-project.php';
        
        // проеряем форму на валидность
        if (!validator.validationForm(form)) return false;
        
        // передаем данные формы PHP обработчику
        var ajaxAnswer = _ajaxRequest(form, url);

    };
    
    // Делаем запрос к PHP файлу
    var _ajaxRequest = function(form, url) {

        var data = form.serialize();

        return $.ajax({
            
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data
            
        }).done(function(answer) {

            if (answer.status === 'success') {

                form.trigger('reset');

                $('.status-msg').text(answer.message).addClass('success-msg').show();
            } else {
                $('.status-msg').text(answer.message).addClass('error-msg').show();
            }
            
        }).fail(function() {

            console.log('Произошла ошибка при передаче данных PHP');

            $('.popup-error-msg').text('Произошла ошибка при передаче данных PHP').addClass('error').show();
        });
    };
    
	return {
		init: init
	};

})();

myModule.init();
