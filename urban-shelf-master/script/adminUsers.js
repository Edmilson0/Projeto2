window.onload = function () {
    loginUser();
    allowLogout();

    // INITIATE FUNCTIONS
    refreshStoredUsers();

    // VARIABLES
    let tblUsers = document.getElementById("tblUsers");
    let addUser = document.getElementById("addUser");

    // ADD USER ECENT
    addUser.addEventListener("submit", function (event) {
        // 1. GET VALUES FROM DOCUMENT AND DECLARE VARIABLES
        let adminUsername = document.getElementById("adminUsername");
        let adminPassword = document.getElementById("adminPassword");
        let adminPassConfirm = document.getElementById("adminPassConfirm");
        let adminUserEmail = document.getElementById("adminUserEmail");
        let adminUserType = document.getElementById("adminUserType");
        let errorMsg = "";

        // // 2. CHECK IF USER Exists BY EMAIL
        for (let i = 0; i < arrayUsers.length; i++) {
            if (adminUserEmail.value == arrayUsers[i]._email) {
                errorMsg = "Esse e-mail já se encontra registado!";
            }
        }

        // 3. CHECK IF PASSWORDS MATCH
        if (adminPassword.value != adminPassConfirm.value) {
            errorMsg += "As passwords não coincidem!";
        }



        // 4. VALIDATE IF NO ERRORS, CREATE NEW USER AND PUSH TO ARRAYUSERS, ELSE DISPLAY ERRORMSG
        if (errorMsg == "") {
            let newUser = new User(adminUsername.value, adminPassword.value, adminUserEmail.value, "", "", adminUserType.value);
            arrayUsers.push(newUser);
            adminUsername.value = "";
            adminPassword.value = "";
            adminPassConfirm.value = "";
            adminUserEmail.value = "";
            // STORE IN USERSTORAGE, AND GET TO DISPLAY TABLE
            localStorage.userStorage = JSON.stringify(arrayUsers);
            refreshStoredUsers();
        }
        else {
            alert(errorMsg);
        }
        event.preventDefault();
    })

}