/*
 *  Create the splitter, set the viewport size, and set the position of the scrollbar to the first item.
 */
(function($){
    $(document).ready(function(){
        $('#edit-date-filter-value-date').datepicker( {
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            dateFormat: 'yy-mm',
            onClose: function(dateText, inst) {
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
            }
        });

        $('body #event-popup-container #cancel-popup').on('click', function (){
            alert()
        })
    })
})(jQuery);
