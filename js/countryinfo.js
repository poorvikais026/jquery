$(function () {
    $("#btnshow").click(function () {

        $.ajax({
            url: "https://restcountries.eu/rest/v2/all",
            methodType: "GET",
            success: function (countryInfo) {
                showData(countryInfo);
            },
            error: function (error) {
                alert("something went wrong");
            }
        })
    });




    function showData(countryInfo) {
        var countryarr = [];
        for (var i = 0; i < countryInfo.length; i++) {
            var name = countryInfo[i].name;
            var capital = countryInfo[i].capital;
            var code = countryInfo[i].alpha3Code;
            var region = countryInfo[i].region;
            var flag = countryInfo[i].flag;
            var country = {

                "name": name,
                "capital": capital,
                "code": code,
                "region": region,
                "flag": flag,

            }
            countryarr.push(country);
        }

        showInfoAsTable(countryarr);
    }


    function showInfoAsTable(countryinfo) {
        var data = "";
        if (countryinfo.length == 0) {
            data = "No information to display.."
        } else {
            data += "<table id='countrynames' class='display'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>NAME</th>";
            data += "<th>CAPITAL</th>";
            data += "<th>CODE</th>";
            data += "<th>REGION</th>";
            data += "<th>FLAG</th>";
            data += "</tr></thead>";
            for (var i = 0; i < countryinfo.length; i++) {
                var j = i + 1;
                data += "<tr>";
                data += "<td>" + j + "</td>";
                data += "<td>" + countryinfo[i].name + "</td>";
                data += "<td>" + countryinfo[i].capital + "</td>";
                data += "<td>" + countryinfo[i].code + "</td>";
                data += "<td>" + countryinfo[i].region + "</td>";
                data += "<td> <img src='"+countryinfo[i].flag+"'class='flag'> </td>";

                data += "</tr>";
            }
            data += "</table>";
        }
        $("#content").html(data);
        $("#countrynames").dataTable();
    }
});
