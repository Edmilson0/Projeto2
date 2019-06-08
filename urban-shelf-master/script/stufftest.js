
window.onload = function (){

    // VARIABLES
    let navLogin = document.getElementById("navLogin");
    let navRegister = document.getElementById("navRegister");
    let navHi = document.getElementById("navHi");
    let navLogout = document.getElementById("navLogout");
    let formLogin = document.getElementById("formLogin");
    
    // TEST
    
    
    
    
    // LOCAL STORAGE
    
    
    // // ESCONDER OPÇOES AUTENTICAÇAO
    navHi.style.display = "none";
    navLogout.style.display = "none";
    
    // LOGIN SUBMIT
    formLogin.addEventListener("submit", function(event){
        event.preventDefault();
    
        // 1.VARIABLES
        let inputUsernameLogin = document.getElementById("loginUsername").value;
        let inputPasswordLogin = document.getElementById("inputPassword").value;
        // 2.VERIFICAR SE UTILIZADOR EXISTE
        let userExists = false;
        let userName = "";
        let id = "";
        let typeUser = 0;
        for (let i = 0; i < arrayUsers.length; i++) {
            if (arrayUsers[i].email == inputUsernameLogin && arrayUsers[i].password == inputPasswordLogin) {
                userExists = true;
                id = arrayUsers[i].userId;
                userName = arrayUsers[i].username;
                typeUser = arrayUsers[i].userType;
            }
        }
        // 3.SE EXISTE; AUTENTICAR UTILIZADOR
        if(userExists == true){
            // FECHAR MODAL
            $("#loginModal").modal("hide");
            // ALTERAR NAVBAR
            navLogin.style.display = "none";
            navRegister.style.display = "none";
            navLogout.style.display = "block";
            navHi.innerHTML = "<a id='" + id + "' class='nav-link' href='#'>Olá, " +
            userName + "</a>";
            navHi.style.display = "block";
        } else{
            alert("Dados de autenticação inválidos!");
        }
        
        // CHECK USERTYPE 
        switch (typeUser) {
            case 0: 
                loadAdminPage();
                break;
            case 1:
                loadUserPage();
                break;
            case 2:
                loadOperatorPage();
                break;
    
            default:
                break;
        }
    })
    }




















     // // FEED SIDENAV FILTER MENU WITH OPTIONS
    // let dropdownCategory = document.getElementById("dropdownCategory");
    // for (var i = 0; i < arrayCategorias.length; i++) {
       
    //     dropdownCategory.innerHTML += "<a href='#'>" + arrayCategorias[i]._nameCategory + "</a>";
        
    // }

    // let dropdownBiblioteca = document.getElementById("dropdownBiblioteca");
    // for (var i = 0; i < arrayBibliotecas.length; i++) {
       
    //     dropdownBiblioteca.innerHTML += "<a href='#'>" + arrayBibliotecas[i]._adress + "</a>";
        
    // }

    // // EVENT FOR DROPWDOWN FILTER MENU ITEMS
    // let dropdown = document.getElementsByClassName("dropdown-btn");

    // for (let i = 0; i < dropdown.length; i++) {
    //     dropdown[i].addEventListener("click", function() {
    //         this.classList.toggle("active");
            
    //         let dropdownContent = this.nextElementSibling;
            
    //         if (dropdownContent.style.display === "block") {
    //             dropdownContent.style.display = "none";
    //         } else {
    //             dropdownContent.style.display = "block";
            
    //         }
    //     });
    // }

    // // BUTTON SHOW FILTER MENU
    // let openFilterMenuBtn = document.getElementById("openFilterMenuBtn");
    // openFilterMenuBtn.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     // document.getElementById("contentDiv").style.marginLeft = "25%";
    //     // document.getElementById("sidenav").style.width = "25%";
    //     document.getElementById("sidenav").style.display = "block";
    //     document.getElementById("openFilterMenuBtn").style.display = 'none';
    //   })

    // // BUTTON HIDE FILTER MENU
    // let closeFilterBtn = document.getElementById("closeFilterBtn");
    // closeFilterBtn.addEventListener("click", function (event){
    //     event.preventDefault();
    //     document.getElementById("contentDiv").style.marginLeft = "0%";
    //     document.getElementById("sidenav").style.display = "none";
    //     document.getElementById("openFilterMenuBtn").style.display = "block";
    //   })