var myModule = (function() {
        
    var init = function() {
        _setUpListners();
    };

    var _setUpListners = function() {

        // прослушка событий...
        $('.add-project-link').on('click', _showPopUp);
    };

    var _showPopUp = function(e) {

        e.preventDefault();

        $('.bpopup').bPopup({
            escClose: true,
            onClose: function() {
//                $(this).find('.error-field').removeClass('error-field');      
//                $(this).find('.status-msg').removeClass('success-msg').hide();
                $('.add-project-form').find('.error-field').removeClass('error-field');      
                $('.status-msg').text("").removeClass('success-msg').removeClass('error-msg').hide();
                this.find('.input, .textarea').trigger('hideToolTip');
                this.find('.input, .textarea').val('');
                $('.project-file').trigger('hideToolTip');
                $('.popup-label-img').removeClass('error-field');
                $('.popup-label-img-txt').text('Загрузите изображение');
            }
        });
    };

    return {
        init: init
    };

})();

myModule.init();
