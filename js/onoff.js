$(function () {
   
    var flag = true;
    var count = 3;


    $("#onoroff").click(function () {
        if (count == 0) {
            var imgname = "images/imgbst.jpg";
        } else {

            if (flag) {
                var imgname = "images/imgoff.jpg";
                flag = false;
                count--;
            } else {
                var imgname = "images/imgon.jpg";
                flag = true;
                count--;
            }
        }
        $("img").attr("src", imgname);


    });

    /*hide show example*/

    $("#btnhide").click(function () {
        $("#randomtext").hide(500);
    });

    $("#btnshow").click(function () {
        $("#randomtext").show(500);
    });
    $("#btntoggle").click(function () {
        $("#randomtext").toggle(500);
    });

    /*end of hide show example*/

    /*fadein fadeout example*/

    $("#btnfadein").click(function () {
        $("#box").fadeIn(500);
    });
    $("#btnfadeout").click(function () {
        $("#box").fadeOut(500);
    });
    $("#btnfadetoggle").click(function () {
        $("#box").fadeToggle(500);
    });

    /*end of fadein fadeout example*/


});
