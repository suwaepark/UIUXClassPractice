function Email_val() {
    var Email = document.getElementById("email").value;
    if (!Email.match(/^[a-zA-Z][a-zA-Z0-9_.]+[@](gmail)[.](com)$/)) {
        Error_msg("error1", "invalid email", "red")
    }
    else {
        Error_msg("error1", "valid email", "green")
    }
}
