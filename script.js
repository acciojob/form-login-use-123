function getFormvalue() {
	// Access the form elements by their name attribute
    const fname = document.querySelector('input[name="fname"]').value;
    const lname = document.querySelector('input[name="lname"]').value;

    // Alert the concatenated full name
    alert(fname + " " + lname);
	//Write your code here
    
}
