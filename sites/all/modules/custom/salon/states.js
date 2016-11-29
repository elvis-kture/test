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
            $perekidka_local = $('label[for="edit-field-pay-type-und-85"]')
            $perekidka_dev = $('label[for="edit-field-pay-type-und-111"]')
            $perekidka_master = $('label[for="edit-field-pay-type-und-112"]')
        if ($node.val() != '30') {
            $perekidka_local.hide().parent().hide()
            $perekidka_local.children('input').removeAttr('checked')

            $perekidka_dev.hide().parent().hide()
            $perekidka_dev.children('input').removeAttr('checked')

            $perekidka_master.hide().parent().hide()
            $perekidka_master.children('input').removeAttr('checked')
        }
        else {
            $perekidka_local.show().parent().show()
            $perekidka_dev.show().parent().show()
        }
    }
    function check_pay_format($node) {
        $perekidka_address = $('.field-name-field-perekidka-balance')

        if ($node.val() != '85' && $node.val() != '111' && $node.val() != '112') {
            $perekidka_address.hide()
            $('#edit-field-perekidka-balance-und').val('_none')
            $('.autocomplete-deluxe-container').show()
        }
        else {
            $('.autocomplete-deluxe-container').hide()
            $perekidka_address.show()
        }
    }
})(jQuery);
