window.onload = function () {
    loginUser();
    allowLogout();

    // INITIATE FUNCTIONS
    refreshStoredTags();

    // VARIABLES
    let tblTags = document.getElementById("tblTags");
    let addTag = document.getElementById("addTag");

    // TEST

    // ADD TAG EVENT
    addTag.addEventListener("submit", function (event) {
        event.preventDefault();
        // 1. GET VALUES FROM HTML FILE
        let inputTagName = document.getElementById("inputTagName");
        let nameTag = inputTagName.value.charAt(0).toUpperCase() + inputTagName.value.slice(1);
        let errorMsg = "";

        // 2. VALIDATE INPUTS
        for (let i = 0; i < arrayTags.length; i++) {
            if (nameTag == arrayTags[i]._nameTag) {
                errorMsg = "Tag já existe!";
            }
        }

        if (inputTagName.value == "") {
            errorMsg = "Tem de inserir o nome da tag!"
        }

        // 3.CHECK FOR ERRORS, IF NONE,CREATE NEW TAG AND PUSH TO ARRAYTAGS
        if (errorMsg == "") {
            let newTag = new Tag(nameTag);
            arrayTags.push(newTag);
            inputTagName.value = "";

            // STORE IN LOCAL STORAGE
            localStorage.tagStorage = JSON.stringify(arrayTags);
            refreshStoredTags();
        }
        else {
            alert(errorMsg);
        }

    })

}