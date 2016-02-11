var myModule = (function() {

    var init = function() {
        _setUpListners();
    };

    var _setUpListners = function() {
        // прослушка событий...
        $('#add-project-form').on('submit', _addProject);
    };

    var _addProject = function(event) {

        event.preventDefault();

        var form = $(this),
            url = 'php/add-project.php';

        // проверить форму на валидность
        if (!validator.validationForm(form)) return false;

        // передаем данные формы PHP обработчику
        var ajaxAnswer = _ajaxRequest(form, url);

        if(ajaxAnswer) {
            // Выводим сообщение о полученные данных с PHP обработчика
            ajaxAnswer.done(function(answer) {

                if (answer.status === 'success') {

                    form.trigger('reset');

                    $('.popup-msg').text(answer.message).addClass('success-msg').show();
                } else {
                    $('.popup-msg').text(answer.message).addClass('error-msg').show();
                }
            }).fail(function() {

                console.log('Произошла ошибка при передаче данных PHP');

                $('.popup-error-msg').text('Произошла ошибка при передаче данных PHP').addClass('error').show();
            });
        }
    };

    var _ajaxRequest = function(form, url) {

        var data = form.serialize();

        return $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data
        });
    };

    return {
        init: init
    };

})();

myModule.init();
