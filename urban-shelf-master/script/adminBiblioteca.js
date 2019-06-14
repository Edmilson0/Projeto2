window.onload = function () {
    loginUser();
    allowLogout();

    // INITIATE FUNCTIONS
    getLibraries().then(result => {
        libraries = result.data;
        refreshTableBibliotecas();
        addMapMarkers();
        //console.log(libraries)
    })

    //refreshStoredBibliotecas();

    // VARIABLES
    let addBiblioteca = document.getElementById("addBiblioteca");

    // ADD BIBLIOTECA EVENT
    addBiblioteca.addEventListener("submit", function (event) {

        // 1. GET iNPUT VALueS FROM DOCUMENT
        let bibliotecaLocation = document.getElementById("bibliotecaLocation");
        let bibliotecaAdress = document.getElementById("bibliotecaAdress");
        let bibliotecaCapacity = document.getElementById("bibliotecaCapacity");
        let bibliotecaLat = document.getElementById("bibliotecaLat");
        let bibliotecaLong = document.getElementById("bibliotecaLong");
        let errorMsg = "";

        //PARSE TO UPPER CASE 
        let parsedLocation = bibliotecaLocation.value.charAt(0).toUpperCase() + bibliotecaLocation.value.slice(1);
        let parsedAdress = bibliotecaAdress.value.charAt(0).toUpperCase() + bibliotecaAdress.value.slice(1);

        // STORE LAT AND LONG IN ARRAYCOORDENATES
        // let arrayCoordenates = [];
        // arrayCoordenates.push(bibliotecaLat.value, bibliotecaLong.value);

        // 2. VALIDATIONS

        // CHECK IF ADRESS ALREAY EXISTS
        for (let i = 0; i < arrayBibliotecas.length; i++) {
            if (bibliotecaAdress.value == arrayBibliotecas[i]._adress) {
                errorMsg = "Já existe uma biblioteca nessa morada!";
            }
        }

        // CHECK IF INPUT CAPACITY IS LESS THAN 999
        if (bibliotecaCapacity.value > 999) {
            errorMsg += "A capacidade da biblioteca não pode exceder 999!"
        }

        // CHECK IF> LAT AND LONG INPUTS ARE NUMBERS
        if (isNaN(bibliotecaLat.value) || isNaN(bibliotecaLong.value)) {
            errorMsg += "As coordenadas não são válidas! \n Por favor insira apenas digitos númericos."
        }


        // 3. IF NO ERRORS CREATE NEW INSTANCE OF BIBLIOTECA CLASS AND PUSH TO ARRAY, ELSE DISPLAY ERRORMSG
        if (errorMsg == "") {
            let newBiblioteca = new Library(parsedLocation, parsedAdress, bibliotecaLat.value, bibliotecaLong.value, bibliotecaCapacity.value);
            arrayBibliotecas.push(newBiblioteca);
            bibliotecaLocation.value = "";
            bibliotecaAdress.value = "";
            bibliotecaCapacity.value = "";
            bibliotecaLat.value = "";
            bibliotecaLong.value = "";

            // STORE NEWBIBLIOTECA
            // localStorage.bibliotecaStorage = JSON.stringify(arrayBibliotecas);
            // refreshStoredBibliotecas();

            let newLibraryData = {

                location: newBiblioteca._location,
                adress: newBiblioteca._adress,
                coordinatesLong: newBiblioteca._coordenatesLong,
                coordinatesLat: newBiblioteca._coordenatesLat,
                capacity: newBiblioteca._capacity,
            }

            postLibrary(newLibraryData).then(result => {
                library = result.data;
                carregarLibraries()
            })
            //.then(refreshTableBooks().then(event.preventDefault())))
            event.preventDefault()
            addBiblioteca.reset() //.then(console.log("reset"))
        }
        else {
            alert(errorMsg);
        }
        event.preventDefault();
    })

}
