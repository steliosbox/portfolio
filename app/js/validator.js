var validator = (function() {
  
  var initial = function () {
    _setUpListeners();
  }
  
  var _setUpListeners =function () {
    
  }
  
  // создадим тултип

  var _viewTooltip = function (input, location) {
    
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
            text: function(){
                return $(this).attr('qtip-content');
            }
        },
        
        show: {
            event: 'show'
        },
        
        hide: {
            event: 'keydown'
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
    var validationForm = function (form) {
    
        // возьмём все элементы формы
        var inputs = form.find('input, textarea').not('input[type="file"], input[type="hidden"], input[type="submit"]'),
            valid = true;

        $.each(inputs, function(index, val) {
            var element = $(val),
                val = element.val(),
                pos = element.attr('qtip-position');

            if (!val.length) {
                
                element.css('border-color': 'red');
                
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