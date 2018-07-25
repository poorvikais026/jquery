$(function () {
    showQuotes();
    $("#idbtnsub").click(function () {
        var author = $("#author").val();
        var message = $("#message").val();
        var quote = {
            "author": author,
            "message": message
        };
    


    $.ajax({
        url: "https://young-ocean-92165.herokuapp.com/add",
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(quote),
        success: function (data) {
            showData(data);
            $("#author").val('');
            $("#message").val('');
        },
        error: function (error) {
            alert("something went wrong");
        }
    })

})

function showQuotes() {
    $.ajax({
        url: "https://young-ocean-92165.herokuapp.com/all",
        methodType: "GET",
        success: function (data) {
            showData(data);
        },
        error: function (error) {
            alert("something went wrong");
        }
    })
}




function showData(quotes) {
    var data = "";
    for (var i = 0; i < quotes.length; i++) {
        data += "<p>";
        data += "<blockquotes>" + quotes[i].message + "</blockquotes>";
        data += "<h4>Author:" + quotes[i].author + "</h4>";
        data += "</p>";
        data += "<button value=" + quotes[i].id + " id='btndel'>delete</button><hr>";
    }
    $("#content").html(data);
}

$(document).on("click", "#btndel", function () {
    var id = $(this).val();
    $.ajax({
        url: "https://young-ocean-92165.herokuapp.com/remove/" + id,
        methodType: "GET",
        success: function (data) {
            showData(data);
        },
        error: function (error) {
            alert("something went wrong");
        }
    })
});
})