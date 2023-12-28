$('document').ready(function() {

    var telMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    telOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(telMaskBehavior.apply({}, arguments), options);
        }
    };
    
    $('#telefone').mask(telMaskBehavior, telOptions);
});

