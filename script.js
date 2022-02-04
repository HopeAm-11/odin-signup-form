let passInput = document.getElementById("pass1");
let passConfirm = document.getElementById("pass2");
let errorMsg = document.querySelectorAll(".error");
let butSumbmit = document.getElementById("button");
// butSumbmit = true;

let check = function passConfirm2() {
    // let passInput = document.getElementById("pass1");
    // let passConfirm = document.getElementById("pass2");
    if (passInput.value != passConfirm.value) {
        document.getElementById("pass1").style.border = "1px solid red";
        document.getElementById("pass2").style.border = "1px solid red";
        document.getElementById("error").innerHTML = "* Passwords do not match";
        // return false;

    } else if (passInput.value === "" && passConfirm.value === "") {
        document.getElementById("pass1").style.border = "1px solid #E5E7EB";
        document.getElementById("pass2").style.border = "1px solid #E5E7EB";
        document.getElementById("error").innerHTML = "";


    } else if (passInput.value === passConfirm.value) {
        document.getElementById("pass1").style.border = "1px solid green";
        document.getElementById("pass2").style.border = "1px solid green";
        document.getElementById("error").innerHTML = "* Passwords match";
    }
}

// function test() {
//     if (passInput.value != passConfirm.value) {
//         // document.getElementById("pass1").style.border = "thick solid red";
//         // document.getElementById("error").innerHTML = "dont match";
//         // return false;
//         // butSumbmit.disabled = true;

//         alert("kindly do the right thing");
//         return false;

//     }
//     return true;
//     // e.preventDefault();
//     // window.history.back();
//     //else if (passInput.value === passConfirm.value) {
//     // document.getElementById("button").disabled = false;
//     // butSumbmit.disabled = false;
//     // alert("yay")
//     // butSumbmit.removeAttribute("disabled");


// };

// butSumbmit.addEventListener("click", test);