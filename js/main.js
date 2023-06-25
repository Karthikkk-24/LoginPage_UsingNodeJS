let loginBtn = document.getElementById('loginBtn');
let registerBtn = document.getElementById('registerBtn');
let loginContainer = document.getElementById('loginContainer');
let heading = document.getElementById('heading');
let subheading = document.getElementById('subheading');
let loginDiv = document.getElementById('loginDiv');
let registerNow = document.getElementById('register_now');
let loginNow = document.getElementById('login_now');

registerBtn.addEventListener('click', function () {
    document.title = 'Register Page';
    loginBtn.classList.remove('active');
    registerBtn.classList.add('active');
    heading.innerText = 'Register';
    subheading.innerHTML = `Already A Member?  &emsp;<p id="login_now">Log In</p>`;
    loginDiv.innerHTML = `
        <div class="flex">
            <div class="input_div">
                <input type="text" placeholder="Name">
                <i class="fa-solid fa-signature"></i>
            </div>
            <div class="input_div">
                <input type="text" placeholder="Username">
                <i class="fa-solid fa-user"></i>
            </div>
        </div>
        <div class="flex">
            <div class="input_div">
                <input type="email" placeholder="Email">
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="input_div" id="password3">
                <input type="password" placeholder="Password">
                <i class="fa-solid fa-eye"></i>
            </div>
        </div>
        <br>
        <div class="input_div">
            <button class="login_button">Register</button>
        </div>`;

    let passwordDiv3 = document.getElementById('password3');
    let clickCount3 = 0;

    function passwordClickCounter3() {
        if (clickCount3 % 2 === 0) {
            passwordDiv3.lastElementChild.classList.remove('fa-eye');
            passwordDiv3.lastElementChild.classList.add('fa-eye-slash');
        } else {
            passwordDiv3.lastElementChild.classList.add('fa-eye');
            passwordDiv3.lastElementChild.classList.remove('fa-eye-slash');
        }
        clickCount3++;
    }

    if (passwordDiv3) {
        passwordDiv3.lastElementChild.addEventListener('click', passwordClickCounter3);
    }


});

loginBtn.addEventListener('click', function () {
    document.title = 'Login Page';
    heading.innerText = 'Login';
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    subheading.innerHTML = `Not registered yet?  &emsp;<p>Register Now</p>`;
    loginDiv.innerHTML = `
        <div class="input_div">
            <input type="email" placeholder="Email">
            <i class="fa-solid fa-envelope"></i>
        </div>
        <div class="input_div" id="password2">
            <input type="password" placeholder="Password">
            <i class="fa-solid fa-eye"></i>
        </div>
        <br>
        <div class="input_div">
            <button class="login_button">Login</button>
        </div>`;

    let passwordDiv2 = document.getElementById('password2');

    let clickCount2 = 0;
    function passwordClickCounter2() {
        if (clickCount2 % 2 === 0) {
            passwordDiv2.lastElementChild.classList.remove('fa-eye');
            passwordDiv2.lastElementChild.classList.add('fa-eye-slash');
        } else {
            passwordDiv2.lastElementChild.classList.add('fa-eye');
            passwordDiv2.lastElementChild.classList.remove('fa-eye-slash');
        }
        clickCount2++;
    }

    if (passwordDiv2) {
        passwordDiv2.lastElementChild.addEventListener('click', passwordClickCounter2);
    }

});

let passwordDiv1 = document.getElementById('password1');

let clickCount1 = 0;

function passwordClickCounter1() {
    if (clickCount1 % 2 === 0) {
        passwordDiv1.lastElementChild.classList.remove('fa-eye');
        passwordDiv1.lastElementChild.classList.add('fa-eye-slash');
    } else {
        passwordDiv1.lastElementChild.classList.add('fa-eye');
        passwordDiv1.lastElementChild.classList.remove('fa-eye-slash');
    }
    clickCount1++;
}




if (passwordDiv1) {
    passwordDiv1.lastElementChild.addEventListener('click', passwordClickCounter1);
}


