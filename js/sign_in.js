// Contact Form Scripts

$(function() {

    $("#signInForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var firstName = $("input#signIn_firstName").val();
            var lastName = $("input#signIn_lastName").val();
            var email = $("input#signIn_email").val();
            var phone = $("input#signIn_phone").val();
            var city = $("input#signIn_city").val();
            var school = $("input#signIn_school").val();
            var grade = $("select#signIn_grade").val();
            var group = $("select#signIn_group").val();
            
            $.ajax({
                url: "././sign-in/sign_in.php",
                type: "POST",
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    city: city,
                    school: school,
                    grade: grade,
                    group: group
                },
                cache: false,
                success: function(res) {
                    if(res == true){
                    // Success message
                        $('#signIn_success').html("<div class='alert alert-success'>");
                        $('#signIn_success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#signIn_success > .alert-success')
                            .append("<strong>Записахте се успешно! Скоро ще се свържем с вас. </strong>");
                        $('#signIn_success > .alert-success')
                            .append('</div>');
                        }else{
                            $('#signIn_success').html("<div class='alert alert-danger'>");
                            $('#signIn_success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                                .append("</button>");
                            $('#signIn_success > .alert-danger').append("<strong>Грешка в записването. Моля опитайте отново по-късно!");
                            $('#signIn_success > .alert-danger').append('</div>');
                        }

                    //clear all fields
                    $('#signInForm').trigger("reset");
                },
                error: function(err) {
                    console.log(err);
                    // Fail message
                    $('#signIn_success').html("<div class='alert alert-danger'>");
                    $('#signIn_success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#signIn_success > .alert-danger').append("<strong>Съжаляваме, но в момента имаме проблем със сървъра. Моля опитайте отново по-късно!");
                    $('#signIn_success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#signInForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#firstName').focus(function() {
    $('#signIn_firstName').html('');
});
