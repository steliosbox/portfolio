var validator = (function() {

    var initial = function() {
        _setUpListeners();
    }    
    
    var _setUpListeners = function() {
        $('form').on('keydown', '.error-field', _removeErr);
        $('form').on('reset', _clearForm);
        $('.b-close').on('click', _clearForm);
    };
    
    var _removeErr = function() {
        $(this).removeClass('error-field');
    }

    var _clearForm = function() {
        var form = $(this);
        form.find('.error-field').removeClass('error-field');
        form.find('.input, .textarea').trigger('hideToolTip');
        $('.status-msg').text("").removeClass('success-msg').removeClass('error-msg').hide();
    }

    var _viewTooltip = function(input, location) {

        switch (location) {

            case 'left':
                location = {
                    my: 'center right',
                    at: 'center left'
                }

                break;

            case 'right':
                location = {
                    my: 'center left',
                    at: 'center right'
                }
                break;
        }

        // инициализируем тултип

        input.qtip({
            content: {
                text: function() {
                    return $(this).attr('qtip-content');
                }
            },

            show: {
                event: 'show'
            },

            hide: {
                event: 'keydown hideToolTip'
            },

            position: location,

            style: {
                classes: 'qtip-red qtip-rounded',

                tip: {
                    height: 7,
                    width: 12
                }
            }

        }).trigger('show');
    };

    // добавим функцию валидации - пробежимся по всем элементам формы
    var validationForm = function(form) {

        // возьмём все элементы формы input[type="file"], 
        var inputs = form.find('input, textarea').not('input[type="hidden"], input[type="submit"]'),
            valid = true;

        $.each(inputs, function(index, val) {
            var element = $(val),
                val = element.val(),
                pos = element.attr('qtip-position');

            if (!val.length) {
    
                    var pr = $(".project-file").val();
                    
                    if(!pr.length){
                        $(".popup-label-img").addClass('error-field');
                    }
                
                element.addClass('error-field');

                _viewTooltip(element, pos);

                valid = false;
            }
        });

        return valid;

    };

    return {
        init: initial,
        validationForm: validationForm
    }

})();

validator.init();
