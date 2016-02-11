var myModule = (function() {
        
    var init = function() {
        _setUpListners();
    };

    var _setUpListners = function() {

        // прослушка событий...
        $('#add-project-link').on('click', _showPopUp);
    };

    var _showPopUp = function(e) {

        e.preventDefault();

        $('#bpopup').bPopup({
            escClose: true,
            onClose: function() {
                $('.popup-info-msg').text('').hide();
                this.find('.error-field').removeClass('error-field');
                document.getElementById('add-project-form').reset();
//                this.find('.input, .textarea').trigger('hideToolTip');
            }
        });
    };

    return {
        init: init
    };

})();

myModule.init();
