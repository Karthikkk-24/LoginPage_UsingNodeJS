let loginBtn = document.getElementById('loginBtn');
let registerBtn = document.getElementById('registerBtn');
let loginContainer = document.getElementById('loginContainer');
let heading = document.getElementById('heading');
let subheading = document.getElementById('subheading');
let loginDiv = document.getElementById('loginDiv');

registerBtn.addEventListener('click', function () {
    document.title = 'Register Page';
    heading.innerText = 'Register';
    subheading.innerHTML = `Already A Member?  &emsp;<p>Log In</p>`;
    loginDiv.innerHTML = `
    <div class="flex">
    <div class="input_div">
                        <input type="text">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="input_div">
                        <input type="password">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    </div>
                    <br>
                    <div class="input_div">
                        <button class="login_button">Register</button>
                    </div>`;
});

loginBtn.addEventListener('click', function () {
    document.title = 'Login Page';
    heading.innerText = 'Login';
    subheading.innerHTML = `Not registered yet?  &emsp;<p>Register Now</p>`;
    loginDiv.innerHTML = `
    
    <div class="input_div">
                        <input type="text">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="input_div">
                        <input type="password">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    <br>
                    <div class="input_div">
                        <button class="login_button">Login</button>
                    </div>`;
});