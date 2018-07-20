$(function () {

    if (localStorage.getItem("students") == null) {
        localStorage.setItem("students", JSON.stringify([]));
    }

    showRegisteredStudents();

    dialog = $("#dialog").dialog({
        title:"Placement Registration Form",
        autoOpen: false,
        height: 500,
        width: 500,
        modal: true
    });

    $(".regstu").click(function () {
        dialog.dialog("open");
    });

    $("#dob").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: "dd-mm-yy"
    });

    $(".submit").click(function () {
        var isValid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    maxlength: 10,
                    minlength: 5,

                },
                name: {
                    required: true,
                    maxlength: 50,
                    minlength: 3,
                },
                email: {
                    required: true,
                    email: true,

                },
                mobile: {
                    required: true,
                    maxlength: 10,
                    minlength: 10,

                },
                courses: {
                    required: true,

                },
                percentage: {
                    required: true,
                    max: 100,
                    min: 50,
                },
                dob: {
                    required: true,
                }

            },
            messages: {
                usn: {
                    required: "usn can't be empty",
                    maxlength: "usn must have maximun of 10 characters",
                    minlength: "enter atleast 5 characters",
                },
                name: {
                    required: "name can't be empty",
                    maxlength: "name must have maximun of 8 characters",
                    minlength: "enter atleast 3 characters",
                },
                email: {
                    required: "email can't be empty",
                    email: "enter a valid email",
                },
                mobile: {
                    required: "mobile can't be empty",
                    maxlength: "invalid number",
                    minlength: "enter atleast 10 characters",

                },
                courses: {
                    required: "course should be selected",
                },
                percentage: {
                    required: "percentage can't be empty",
                    max: "over qualified",
                    min: "not eligible",
                },
                dob: {
                    required: "dob can't be empty"
                }
            }
        }).form();

        if (isValid) {
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var courses = $("#courses").val();
            var percentage = $("#percentage").val();
            var dob = $("#dob").val();
            $(".reset").click();
            student = {
                "usn": usn,
                "name": name,
                "email": email,
                "mobile": mobile,
                "courses": courses,
                "percentage": percentage,
                "dob": dob
            }
            var students = getDataFromLocalStorage();
            students.push(student);
            updateLocalStorageData(students);
            showRegisteredStudents();
            dialog.dialog("close");
            return false;
        }


    });


    function showRegisteredStudents() {
        var students = getDataFromLocalStorage();
        var data = "";
        if (students.length == 0) {
            data = "<h3>No students registered yet..</h3>"
        } else {
            data += "<table id='regstudents'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>USN</th>";
            data += "<th>NAME</th>";
            data += "<th>EMAIL</th>";
            data += "<th>MOBILE</th>";
            data += "<th>COURSES</th>";
            data += "<th>PERCENTAGE</th>";
            data += "<th>DOB</th>";
            data += "</tr></thead>";
            for (var i = 0; i < students.length; i++) {
                var j = i + 1;
                data += "<tr>";
                data += "<td>" + j + "</td>";
                data += "<td>" + students[i].usn + "</td>";
                data += "<td>" + students[i].name + "</td>";
                data += "<td>" + students[i].email + "</td>";
                data += "<td>" + students[i].mobile + "</td>";
                data += "<td>" + students[i].courses + "</td>";
                data += "<td>" + students[i].percentage + "</td>";
                data += "<td>" + students[i].dob + "</td>";
                data += "</tr>";
            }
            data += "</table>";
        }
        $("#content").html(data);
        $("#regstudents").dataTable({
            "pageLength": 2
        });
    }

    function getDataFromLocalStorage() {
        var students = JSON.parse(localStorage.getItem("students"));
        return students;
    }


    function updateLocalStorageData(updatedStudentsArr) {
        localStorage.setItem("students", JSON.stringify(updatedStudentsArr));
    }


});
