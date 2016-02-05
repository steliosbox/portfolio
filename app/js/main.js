var myModule = (function () {
        
        var init = function () {
            _setUpListners();
        };

        var _setUpListners = function () {
            // прослушка событий...
            $('#my-button').on('click', _showPopUp);
            console.log('привет! я в прослушке сонытий')
        };

        var _showPopUp = function (e) {
            e.preventDefault();
            $('#bpopup').bPopup().show();
        };

        return {
            init: init
        };
        
    })();

    myModule.init();