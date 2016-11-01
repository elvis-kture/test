(function($){
    $(document).ready(function(){
        check_pay_type($('input[name=field_pay_format\\[und\\]]:checked'))

        $('input[name=field_pay_format\\[und\\]]').change(function (){
            check_pay_type($(this))
        })

        check_pay_format($('input[name=field_pay_type\\[und\\]]:checked'))

        $('input[name=field_pay_type\\[und\\]]').change(function (){
            check_pay_format($(this))
        })
    })
    function check_pay_type($node) {
        if ($node.val() != '30') {
            $perekidka = $('label[for="edit-field-pay-type-und-85"]')
            $perekidka.hide().parent().hide()
            $perekidka.children('input').removeAttr('checked')
        }
        else {
            $perekidka.show().parent().show()
        }
    }
    function check_pay_format($node) {
        $perekidka_address = $('.field-name-field-perekidka-balance')

        if ($node.val() != '85') {
            $perekidka_address.hide()
            $('#edit-field-perekidka-balance-und').val('_none')
        }
        else {
            $perekidka_address.show()
        }
    }
})(jQuery);
