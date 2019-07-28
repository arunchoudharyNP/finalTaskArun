
function listHover() {
    $(document).ready(function (e) {

        $('.cal-list>li').mouseover(function () {
            var num = parseInt($(this).text());

            var i = 0;
            $('.cal-list>li').each(function (index, element) {

                if (index < num) {
                    $(element).css("backgroundColor", "#6FBA1C");

                    console.log(index)

                }
                else {
                    $(element).css("backgroundColor", "#4256b4");



                }



            })


        });

                $('.cal-list').mouseleave(function ( ) {

                    $('.cal-list>li').each(function (index, element) {


                        $(element).css("background-color", "#4256b4");

                    });

                });


            })


}
