(function($){
    $(document).ready(function(){

        /////////////////////////////////
        check_pay_type($('input[name=field_pay_format\\[und\\]]:checked'))

        $('input[name=field_pay_format\\[und\\]]').change(function (){
            check_pay_type($(this))
        })

        /////////////////////////////////
        check_pay_format($('input[name=field_pay_type\\[und\\]]:checked'))

        $('input[name=field_pay_type\\[und\\]]').change(function (){
            check_pay_format($(this))
        })

        /////////////////////////////////
        check_is_public()

        $('#edit-field-is-public-und').change(function(){
            check_is_public()
        })
    })
    function check_is_public() {
        $perekidka_master = $('label[for="edit-field-pay-type-und-112"]')

        if (!$('#edit-field-is-public-und').is(':checked')) {
            $('#edit-field-shared-address-und').val('_none')
            $('.field-name-field-shared-address').hide()
            $perekidka_master.show().parent().show()
        }
        else {
            $perekidka_master.hide().parent().hide()
            $perekidka_master.children('input').removeAttr('checked')
            $('.field-name-field-shared-address').show()
        }
        $('input[name=field_pay_type\\[und\\]]').trigger('change')
    }
    function check_pay_type($node) {

        $perekidka_master = $('label[for="edit-field-pay-type-und-112"]')

        if ($node.val() != '30'&& $node.val() != '33') {

            $perekidka_master.hide().parent().hide()
            $perekidka_master.children('input').removeAttr('checked')
        }
        else {
            $perekidka_master.show().parent().show()
        }

        if ($node.val() == '30') {
            $('.field-name-field-is-public').show()
        }
        else{
            $('.field-name-field-is-public').hide()
            $('#edit-field-shared-address-und').val('_none')
        }

        check_pay_format($('input[name=field_pay_type\\[und\\]]:checked'));
    }
    function check_pay_format($node) {
        $perekidka_address = $('.field-name-field-perekidka-balance')

        if ($node.val() != '112') {
            $perekidka_address.hide()
            $('#edit-field-perekidka-balance-und').val('_none')
        }
        else {
            $perekidka_address.show()
        }
    }
})(jQuery);
