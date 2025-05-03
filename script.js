function validateForm(event) {
    event.preventDefault(); // prevent form from submitting

    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var email = document.getElementById("email").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var location = document.getElementById("location").value;

    if (!name || !age || !email || !gender || !location) {
        alert("Please fill all fields before submitting.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function allowOnlyNumbers(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
    }
}
 