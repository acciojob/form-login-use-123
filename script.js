function getFormvalue() {
    //Write your code here
    // Get the form elements by their IDs or names
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;

    // Display an alert with the concatenated full name
    alert(firstName + " " + lastName);
}
