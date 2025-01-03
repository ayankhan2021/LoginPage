document.addEventListener("DOMContentLoaded", function() {
    const loginWrapper = document.querySelector('.login_wrapper');
    const signupWrapper = document.querySelector('.signup_wrapper');
    const signupButton = document.querySelector('.sec_btn');
    const logbtn = document.querySelector('.logbtn');
    const signbtn = document.querySelector('.signbtn');
    const loginButton = document.querySelector('.sec_btn1');

    // Toggle to Signup view
    signupButton.addEventListener('click', function() {
        loginWrapper.classList.remove('active');
        loginWrapper.classList.add('nonactive');
        signupWrapper.classList.remove('nonactive');
        signupWrapper.classList.add('active');
        
    });

    // Toggle to Login view
    loginButton.addEventListener('click', function() {
        signupWrapper.classList.remove('active');
        signupWrapper.classList.add('nonactive');
        loginWrapper.classList.remove('nonactive');
        loginWrapper.classList.add('active');
        
    });

    signbtn.addEventListener('click', function(e){
        e.preventDefault();

        // Get the values from the inputs
        const firstName = document.querySelector('.fname').value;
        const lastName = document.querySelector('.lname').value;
        const email = document.querySelector('.email').value;
        const password = document.querySelector('.password').value;

        // Create an object with the values
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
        };

        // Convert the object to JSON format and log it to the console
        console.log(JSON.stringify(formData));
        alert("Signup Successful")
        
    });

    logbtn.addEventListener('click', function(e){
        e.preventDefault();

        // Get the values from the inputs
        const email = document.querySelector('.email').value;
        const password = document.querySelector('.password').value;

        // Create an object with the values
        const formData = {
            email: email,
        };

        // Convert the object to JSON format and log it to the console
        console.log(JSON.stringify(formData));
        
    });
});


