window.onload = function () {
    loginUser();
    allowLogout();

    // INITIATE FUNCTIONS
    getCategories().then(result => {
        categories = result.data;
        refreshTableCategorias()
       // console.log(categories)
    })

    //refreshStoredCategorias();

    // VARIABLES
    let addCategory = document.getElementById("addCategory");
    let tblCategorias = document.getElementById("tblCategorias");

    // ADD CATEGORY EVENT
    addCategory.addEventListener("submit", function (event) {
        event.preventDefault();
        // 1. GET VALUES FROM HTML FILE
        let inputCategoryName = document.getElementById("inputCategoryName");
        let categoryName = inputCategoryName.value.charAt(0).toUpperCase() + inputCategoryName.value.slice(1);
        let errorMsg = "";

        // 2. VALIDATE INPUTS
        for (let i = 0; i < categories.length; i++) {
            if (categoryName == categories[i].nameCategory) {
                errorMsg = "Categoria já existe!";
            }
        }

        if (inputCategoryName.value == "") {
            errorMsg = "Tem de inserir o nome da Categoria!"
        }

        // 3.CHECK FOR ERRORS, IF NONE,CREATE NEW TAG AND PUSH TO ARRAYTAGS
        if (errorMsg == "") {
            let newCategory = new Category(categoryName);
            // arrayCategorias.push(newCategory);
            inputCategoryName.value = "";
            // STORE IN LOCAL STORAGE
            // localStorage.categoriaStorage = JSON.stringify(arrayCategorias);
            // refreshStoredCategorias();

            newCategoryBody = {
                nameCategory: newCategory._nameCategory,
            }
            postCategory(newCategoryBody).then(result => {
                categories = result.data;
                carregarCategories()
            })

        }
        else {
            alert(errorMsg);
        }

    })

}

