let newBook;
let categories;
let tags;
let libraries;
//let books;
window.onload = function() {





    loginUser();
    allowLogout();

    //refreshStoredBooks();
    getBooks().then(result => {
        books = result.data;
        refreshTableBooks()
    })


    //1. CRIAR REFERÊNCIAS AOS VARIOS ELEMENTOS


    let formDoarLivro = document.getElementById("formDoarLivro");
    let tblBooks = document.getElementById("tblBooks");

    //2. DEFINIR DATA MAXIMA  DE LANÇAMENTO E DOAÇÃO POSSIVEL 
    let dataAtual = new Date()
    let dd = dataAtual.getDate()
    let mm = dataAtual.getMonth() + 1
    let yyyy = dataAtual.getFullYear()

    let new_dataAtual = ""
    if (mm >= 10 && dd >= 10) {
        new_dataAtual = yyyy.toString() + "-" + mm.toString() + "-" + dd.toString()

    }
    else if (mm < 10 && dd >= 10) {
        new_dataAtual = yyyy.toString() + "-0" + mm.toString() + "-" + dd.toString()

    }
    else if (mm < 10 && dd < 10) {
        new_dataAtual = yyyy.toString() + "-0" + mm.toString() + "-0" + dd.toString()

    }

    doarLivroDataLançamento.setAttribute("max", new_dataAtual)
    let doarLivroDataDonation = new_dataAtual

    //3. ALIMENTAR OPÇOES DE GENERO
    getCategories().then(result => {
        categories = result.data;
        for (var i = 0; i < categories.length; i++) {

            doarLivroGenero.innerHTML += "<option value='" + categories[i]._id + "'>" + categories[i].nameCategory + "</option>";

        }

    })

    //4. ALIMENTAR OPÇOES DE TAGS
    getTags().then(result => {
        tags = result.data;
        for (var i = 0; i < tags.length; i++) {
            doarLivroTags.innerHTML += "<option value='" + tags[i]._id + "'>" + tags[i].tagName + "</option>"

        }

    })

    // ALIMENTAR OPÇÔES BIBLIOTECA
    getLibraries().then(result => {
        libraries = result.data;
        for (var i = 0; i < libraries.length; i++) {
            doarLivroBiblioteca.innerHTML += "<option value='" + libraries[i]._id + "'>" + libraries[i].adress + "</option>"

        }

    })

    //5. PREVIEW DA CAPA
    let btnCapaPreview = document.getElementById("btnCapaPreview")
    let urlCapaPreview = document.getElementById("urlCapaPreview")
    btnCapaPreview.addEventListener("click", function() {
        urlCapaPreview.setAttribute("src", document.getElementById("doarLivroCapa").value)

    })
    //6. VERIFICAÇOES
    formDoarLivro.addEventListener("submit", function(event) {
        event.preventDefault();
        // VARIAVEIS
        let doarLivroTitulo = document.getElementById("doarLivroTitulo")
        let doarLivroCapa = document.getElementById("doarLivroCapa")
        let doarLivroDescription = document.getElementById("doarLivroDescription")
        let doarLivroAutores = document.getElementById("doarLivroAutores")
        let doarLivroDataLançamento = document.getElementById("doarLivroDataLançamento")
        let doarLivroGenero = document.getElementById("doarLivroGenero")
        let doarLivroTags = document.getElementById("doarLivroTags")
        let doarLivroEditora = document.getElementById("doarLivroEditora")
        let doarLivroPaginas = document.getElementById("doarLivroPaginas")
        let doarLivroEstado = document.getElementById("doarLivroEstado")
        let doarLivroDoador = document.getElementById("doarLivroDoador")
        let doarLivroBiblioteca = document.getElementById("doarLivroBiblioteca")

        let errorMsg = "";
        let donerName = "Anónimo";
        let count = 0;

        // CHECK IF HAS DONER NAME
        if (doarLivroDoador.value != "") {
            donerName = doarLivroDoador.value;
        }

        // CHECK IF LIBRARY ALREADY AT MAX CAPACITY
        for (let i = 0; i < arrayLivros.length; i++) {
            if (arrayLivros[i]._libraryId == doarLivroBiblioteca.value) {
                count++;
            }
        }
        for (let i = 0; i < arrayBibliotecas.length; i++) {
            if (doarLivroBiblioteca.value == arrayBibliotecas[i]._libraryId) {
                if (count >= arrayBibliotecas[i]._capacity) {
                    errorMsg = "A biblioteca já se encontra na sua capacidade máxima!";
                }
            }
        }


        //AGRUPAR TODAS AS TAGS DO SELECT
        let selectTags = []
        for (let i = 0; i < doarLivroTags.getElementsByTagName("option").length; i++) {
            if (doarLivroTags.getElementsByTagName("option")[i].selected) {
                selectTags.push(doarLivroTags.getElementsByTagName("option")[i].value)
            }
        }



        //7. CRIAR NOVO OBJETO "LIVRO" E ADICIONAR AO ARRAY
        if (errorMsg == "") {


            let newBook = new Book(doarLivroTitulo.value,
                doarLivroCapa.value,
                doarLivroAutores.value,
                doarLivroDescription.value,
                doarLivroDataLançamento.value,
                doarLivroGenero.value,
                selectTags,
                doarLivroEditora.value,
                doarLivroPaginas.value,
                doarLivroEstado.value,
                donerName,
                doarLivroDataDonation,
                doarLivroBiblioteca.value, [0], [])


            let newBookData = {

                title: doarLivroTitulo.value,
                cover: doarLivroCapa.value,
                synopsis: doarLivroDescription.value,
                author: doarLivroAutores.value,
                releaseDate: doarLivroDataLançamento.value,
                categoryId: doarLivroGenero.value,
                tags: selectTags,
                publisher: doarLivroEditora.value,
                numberPages: doarLivroPaginas.value,
                condition: doarLivroEstado.value,
                donorName: donerName,
                donationDate: doarLivroDataDonation,
                description: doarLivroDescription.value,
                libraryId: doarLivroBiblioteca.value,
                // scores: 70
            }



            arrayLivros.push(newBook);
            // STORE IN LOCAL STORAGE
            localStorage.bookStorage = JSON.stringify(arrayLivros);
            //refreshStoredBooks();
            console.log(selectTags)
            //postBook(newBookData).then(carregarBooks()).then()
            postBook(newBookData).then(result => {
                book = result.data;
            carregarBooks()})
            //.then(refreshTableBooks().then(event.preventDefault())))
            event.preventDefault()
            formDoarLivro.reset() //.then(console.log("reset"))

        }
        else {
            alert(errorMsg);
        }



    })


}

//fuctionCarregarBooks
 /*function carregarBooks(){
    getBooks().then(result => {
        books = result.data;
        refreshTableBooks()
    console.log(books)})



 }

//post book
async function postBook(data) {
    try {
        return await axios.post("https://edmilson-edmilson0.c9users.io/books", data)
    }
    catch (err) {
        console.log(err)
    }

}


///get books
async function getBooks() {

    try {
        return await axios.get("https://edmilson-edmilson0.c9users.io/books")
    }
    catch (err) {
        console.log(err)
    }
}*/
