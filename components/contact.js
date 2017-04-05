/**
 * Created by Patryk on 28.02.2017.
 */
$(document).ready(function() {
    $("#submit").click(function() {
        let firstName = $("#firstName").val();
        let secondName = $("#secondName").val();
        let email = $("#email").val();
        let telephone = $("#telephone").val();
        let message = $("#message").val();
        $("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
        if (firstName == '' || secondName == '' || email == '' || telephone == '' || message == '' ) {
            $("#returnmessage").html("<p>Proszę wypełnić wszystkie pola!</p>");
        } else {
// Returns successful data submission message when the entered information is stored in database.
            $.post("components/contact_form.php", {
                firstName1: firstName,
                secondName1: secondName,
                email1: email,
                telephone1: telephone,
                message1: message
            }, function(data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Wiadomość została wysłana!") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
});