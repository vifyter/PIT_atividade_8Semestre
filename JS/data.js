function save() {
    var userSave = document.getElementById("welcome_user").value;
    var passwordSave = document.getElementById("welcome_password").value;

    localStorage.setItem("user", userSave);
    localStorage.setItem("pass", passwordSave);
    console.log('User and password saved');
}

function back() {
    localStorage.clear();
    document.location.href = "../default.html";
}

function checkEnterKey(event) {
    if (event.key === "Enter") {
        save();
        login();
    }
}


