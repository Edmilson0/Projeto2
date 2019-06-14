let books = [];
let comments = [];
let token = "";
//et data;
//let pageBookValues;

// // TEST SCRIPT
function testUsers() {

    let newAdmin1 = new User("admin1", "123", "admin1@gmail.com", "", "", 0);
    arrayUsers.push(newAdmin1);

    let newOperador1 = new User("operador1", "123", "operador1@gmail.com", "", "", 1);
    arrayUsers.push(newOperador1);

    let newUser1 = new User("user1", "123", "user1@gmail.com", "", "", 2);
    arrayUsers.push(newUser1);


    localStorage.userStorage = JSON.stringify(arrayUsers);
    getStoredUsers();
}

////GET USERS
/*async function getUsers() {
    try {
        const response = await axios.get("https://edmilson-edmilson0.c9users.io/users")
        console.log(response.data)

        return response.data;
    }
    catch (err) {
        console.log(err)
    }

}*/


function testBibliotecas() {

    let newBib1 = new Library("Vila do Conde", "Rua do Cais das Lavandeiras", "41.350558", " -8.743255", 100);
    arrayBibliotecas.push(newBib1);

    let newBib2 = new Library("Azurara", "Praia da Azurara", "41.339626", "-8.744147", 200);
    arrayBibliotecas.push(newBib2);

    let newBib3 = new Library("Árvore", "Praia da Árvore", "41.329989", "-8.738786", 180);
    arrayBibliotecas.push(newBib3);

    localStorage.bibliotecaStorage = JSON.stringify(arrayBibliotecas);
    getStoredBibliotecas();
}


function testTags() {

    let toCreate = ["N/A", "Desenolvimento-espiritual", "Desenolvimento-pessoal", "Cavaleiros", "Criaturas Fanstásticas", "Espaço", "Jornada", "Série", "Trilogia", "Monstros", "Guerra", "Espiões", "Aliens", "Didático", "Robôs"];
    for (let i = 0; i < toCreate.length; i++) {
        let newTag = new Tag(toCreate[i]);
        arrayTags.push(newTag);
    }
    localStorage.tagStorage = JSON.stringify(arrayTags);
    getStoredTags();
}

function testCategorias() {

    let toCreate = ["N/A", "Romance", "Fantasia", "Épico", "Horror", "Infantil", "Ensino Básico", "Ensino Secundário", "Tutorial", "Ficção Cientifica", "Poesia", "Auto-ajuda"];
    for (let i = 0; i < toCreate.length; i++) {
        let newCategory = new Category(toCreate[i]);
        arrayCategorias.push(newCategory);
    }
    localStorage.categoriaStorage = JSON.stringify(arrayCategorias);
    getStoredCategorias();
}

function testBooks() {

    let newBook1 = new Book("Eu, Robô", "https://img.wook.pt/images/eu-robo-isaac-asimov/MXwxODIyNjMzN3wxNDAxMjE4NXwxNTEyMDg2NDAwMDAw/502x", "Isaac Asimov", "Sensíveis, divertidos e instigantes, os contos de Eu, robô são um marco na história da ficção científica, seja pela introdução das célebres Leis da Robótica, pelos personagens inesquecíveis ou por seu olhar completamente novo a respeito das máquinas. Vivam eles na Terra ou no espaço sideral; sejam domésticos ou especializados, submissos ou rebeldes, meramente mecânicos ou humanizados, os robôs de Asimov conquistaram a cabeça e a alma de gerações de escritores, cineastas e cientistas, sendo até hoje fonte de inspiração de tudo o que lemos e assistimos sobre essas criaturas mecânicas.Verdadeiro marco na história da ficção científica, 'Eu, robô' reúne os primeiros textos de Isaac Asimov sobre robôs, publicados entre 1940 e 1950. São nove contos que relatam a evolução dos autômatos através do tempo, e que contêm em suas páginas, pela primeira vez, as célebres Três Leis da Robótica.",
        "2015-09-08", 10, [15], "Editora Aleph",
        320, "Bom", "Miguel", "2018-03-14", 2, [0, 100, 90, 80], "");
    arrayLivros.push(newBook1);
    let newBook2 = new Book("A Arte Subtil de Saber Dizer Que Se F*da", "https://img.wook.pt/images/a-arte-subtil-de-saber-dizer-que-se-fda-mark-manson/MXwyMTI2MDIxNXwxNzEzMDkyNnwxNTEzNTU1MjAwMDAw/502x", "Mark Manson", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2018-01-08", 12, [2, 3], "Desassossego",
        208, "Bom", "", "2018-06-15", 1, [0, 60, 80], "");
    arrayLivros.push(newBook2);

    let newBook3 = new Book("A Arte Subtil de Saber Dizer Que Se F*da", "https://img.wook.pt/images/a-arte-subtil-de-saber-dizer-que-se-fda-mark-manson/MXwyMTI2MDIxNXwxNzEzMDkyNnwxNTEzNTU1MjAwMDAw/502x", "Mark Manson", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2018-01-08", 12, [2, 3], "Desassossego",
        208, "Bom", "Miguel", "2018-05-14", 2, [0], "");
    arrayLivros.push(newBook3);

    let newBook4 = new Book("As Crónicas de Gelo e Fogo - Livro Um", "https://img.wook.pt/images/a-guerra-dos-tronos-george-r-r-martin/MXwxOTY1MTF8MjQ3OTIzfDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        400, "Bom", "", "2018-06-01", 1, [0, 80, 100, 75], "");
    arrayLivros.push(newBook4);

    let newBook5 = new Book("As Crónicas de Gelo e Fogo - Livro Um", "https://img.wook.pt/images/a-guerra-dos-tronos-george-r-r-martin/MXwxOTY1MTF8MjQ3OTIzfDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        400, "Bom", "", "2018-06-01", 3, [0, 80, 100, 75], "");
    arrayLivros.push(newBook5);

    let newBook6 = new Book("As Crónicas de Gelo e Fogo - Livro Um", "https://img.wook.pt/images/a-guerra-dos-tronos-george-r-r-martin/MXwxOTY1MTF8MjQ3OTIzfDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        400, "Médio", "", "2018-06-01", 1, [0, 80, 100], "");
    arrayLivros.push(newBook6);

    let newBook7 = new Book("As Crónicas de Gelo e Fogo - Livro Um", "https://img.wook.pt/images/a-guerra-dos-tronos-george-r-r-martin/MXwxOTY1MTF8MjQ3OTIzfDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        400, "Médio", "", "2018-06-01", 1, [0, 80, 100], "");
    arrayLivros.push(newBook7);

    let newBook8 = new Book("As Crónicas de Gelo e Fogo - Livro Dois", "https://img.wook.pt/images/a-muralha-de-gelo-george-r-r-martin/MXwxOTc5Mjl8MjUwNzk2fDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        416, "Fraco", "", "2018-03-01", 1, [0, 40, 100], "");
    arrayLivros.push(newBook8);

    let newBook9 = new Book("As Crónicas de Gelo e Fogo - Livro Dois", "https://img.wook.pt/images/a-muralha-de-gelo-george-r-r-martin/MXwxOTc5Mjl8MjUwNzk2fDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        416, "Fraco", "", "2018-03-01", 2, [0, 40, 100], "");
    arrayLivros.push(newBook9);

    let newBook10 = new Book("As Crónicas de Gelo e Fogo - Livro Dois", "https://img.wook.pt/images/a-muralha-de-gelo-george-r-r-martin/MXwxOTc5Mjl8MjUwNzk2fDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        416, "Fraco", "", "2018-03-11", 3, [0, 40, 80], "");
    arrayLivros.push(newBook10);

    let newBook11 = new Book("As Crónicas de Gelo e Fogo - Livro Três", "https://img.wook.pt/images/a-furia-dos-reis-george-r-r-martin/MXwyMDAyOTN8MjU3ODk2fDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        702, "Médio", "", "2018-05-01", 2, [0, 40], "");
    arrayLivros.push(newBook11);

    let newBook12 = new Book("As Crónicas de Gelo e Fogo - Livro Três", "https://img.wook.pt/images/a-furia-dos-reis-george-r-r-martin/MXwyMDAyOTN8MjU3ODk2fDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        702, "Médio", "", "2018-03-18", 2, [0, 40, 100, 60, 55], "");
    arrayLivros.push(newBook12);

    let newBook13 = new Book("As Crónicas de Gelo e Fogo - Livro Três", "https://img.wook.pt/images/a-furia-dos-reis-george-r-r-martin/MXwyMDAyOTN8MjU3ODk2fDEzODM1MjMyMDAwMDA=/502x", "George R. R. Martin", "Lorem ipsum dolor sit amet, accusata repudiandae voluptatibus sed ei. Ius choro suscipiantur consequuntur ad, facilis singulis has at. Duo ei mentitum instructior, errem viris pri cu, no pro malorum epicuri forensibus. Est no duis idque iudicabit, erat ocurreret voluptatibus est ne, agam deserunt vim id. Reque aliquip aperiam te sit, vix quas intellegat forensibus ut.",
        "2007-09-08", 3, [5, 8, 10, 11], "Saída de Emergência",
        702, "Médio", "", "2018-02-01", 2, [0, 75], "");
    arrayLivros.push(newBook13);

    let newBook14 = new Book("As Criação Rápida de Sites Responsivos com o Bootstrap", "https://img.wook.pt/images/criacao-rapida-de-sites-responsivos-com-o-bootstrap-ricardo-queiros/MXwxOTM4NjUwN3wxNTIwNDgwN3wxNDk1NDA3NjAwMDAw/502x", "Ricardo Queirós", "Bootstrap == <div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
        "2017-05-01", 9, [14], " FCA",
        208, "Bom", "", "2018-03-01", 2, [0, 40], "");
    arrayLivros.push(newBook14);

    let newBook15 = new Book("As Criação Rápida de Sites Responsivos com o Bootstrap", "https://img.wook.pt/images/criacao-rapida-de-sites-responsivos-com-o-bootstrap-ricardo-queiros/MXwxOTM4NjUwN3wxNTIwNDgwN3wxNDk1NDA3NjAwMDAw/502x", "Ricardo Queirós", "Bootstrap == <div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
        "2017-05-01", 9, [14], " FCA",
        208, "Médio", "", "2018-03-01", 2, [0, 30], "");
    arrayLivros.push(newBook15);

    let newBook16 = new Book("As Criação Rápida de Sites Responsivos com o Bootstrap", "https://img.wook.pt/images/criacao-rapida-de-sites-responsivos-com-o-bootstrap-ricardo-queiros/MXwxOTM4NjUwN3wxNTIwNDgwN3wxNDk1NDA3NjAwMDAw/502x", "Ricardo Queirós", "Bootstrap == <div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
        "2017-05-01", 9, [14], " FCA",
        208, "Médio", "", "2018-03-01", 2, [0, 30], "");
    arrayLivros.push(newBook16);

    let newBook17 = new Book("Criação Rápida de Sites Responsivos com o Bootstrap", "https://img.wook.pt/images/criacao-rapida-de-sites-responsivos-com-o-bootstrap-ricardo-queiros/MXwxOTM4NjUwN3wxNTIwNDgwN3wxNDk1NDA3NjAwMDAw/502x", "Ricardo Queirós", "Bootstrap == <div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
        "2017-05-01", 9, [14], " FCA",
        208, "Médio", "", "2018-03-01", 1, [0, 70], "");
    arrayLivros.push(newBook17);






    localStorage.bookStorage = JSON.stringify(arrayLivros);
    getStoredBooks();
}

















// GET STORED BOOKS
function refreshStoredBooks() {
    //getStoredBooks();
    refreshTableBooks();
}



function getStoredBooks() {
    if (localStorage.bookStorage) {
        arrayLivros = JSON.parse(localStorage.bookStorage);
    }

}



// GET STORED REQUISITIONS
function getStoredRequisitions() {
    if (localStorage.requisitionStorage) {
        arrayRequisitions = JSON.parse(localStorage.requisitionStorage);
    }
}







// GET STORED COMMENTS
function getStoredComments() {
    if (localStorage.commentStorage) {
        arrayComments = JSON.parse(localStorage.commentStorage);
    }
}







// GET STORED NOTIFICATIONS
function getStoredNotifications() {
    if (localStorage.notificationStorage) {
        arrayNotifications = JSON.parse(localStorage.notificationStorage);
    }
}
let a = 0
// DISPLAY CURRENT USER NOTIFICATIONS
function showUserNotifications() {
    getStoredNotifications();
    for (let i = 0; i < arrayNotifications.length; i++) {
        if (arrayNotifications[i]._userId == login.id) {
            //VERIFICAR SE O TÍTULO ESTÁ DISPONÍVEL
            let bookIsAvailable = false
            let catalogBookCount = 0
            let requisitionedBookCount = 0

            for (let j = 0; j < arrayLivros.length; j++) {
                if (arrayLivros[j]._title == arrayNotifications[i]._bookTitle) {
                    catalogBookCount++
                    for (let k = 0; k < arrayRequisitions.length; k++) {
                        if (arrayRequisitions[k]._bookId == arrayLivros[j]._bookId) {
                            console.log("arrayRequisitions[k]._bookId" + arrayRequisitions[k]._bookId)
                            console.log("arrayLivros[j]._bookId" + arrayLivros[j]._bookId)
                            requisitionedBookCount++

                        }
                    }
                }
            }
            //DIFERENÇA ENTRE LIVROS COM O MESMO TITULO DISPONIVEIS NO CATALOGO, E OS QUE ESTÃO REQUISITADOS
            console.log("catalogBookCount = " + catalogBookCount)
            console.log("requisitionedBookCount = " + requisitionedBookCount)
            console.log("catalogBookCount - requisitionedBookCount = " + (catalogBookCount - requisitionedBookCount))

            if (catalogBookCount - requisitionedBookCount > 0) {
                bookIsAvailable = true
            }

            //DAR DISPLAY ÁS NOTIFICAÇÕES


            if (bookIsAvailable) { //INCOMPLETO//////////////////////////////
                document.getElementById("notificationsDropdown").innerHTML += '<a class="dropdown-item ' + arrayNotifications[i]._bookTitle + '" href="bookPage.html">O livro "' + arrayNotifications[i]._bookTitle + '" encontra-se disponível para requisição' + '</a>'

                a = i;
                console.log("a: " + a)

                document.getElementById("notificationsDropdownCounter").innerHTML = document.getElementById("notificationsDropdown").getElementsByTagName("a").length + '   <i class="fas fa-bell"></i>'

                console.log(bookIsAvailable)
            }



        }
    }
    for (let i = 0; i < document.getElementById("notificationsDropdown").getElementsByTagName("a").length; i++) {

        document.getElementById("notificationsDropdown").getElementsByTagName("a")[i].addEventListener("click", getTitle)
    }
}

//FUNÇÃO PARA OBTER O TITULO DO LIVRO DA NOTIFICAÇÃO SELECIONADA
function getTitle(e) {
    let firstNotRequistionedId = 0
    let arrayNotRequisitioned = [];
    console.log(e.target.className)
    console.log("hehe")
    let q = e.target.className.indexOf(' ')
    let titulo = e.target.className.slice(q + 1, e.target.className.length)
    console.log("titulo: " + titulo)
    for (let j = arrayLivros.length - 1; j >= 0; j--) {
        if (titulo == arrayLivros[j]._title) {
            for (let k = 0; k < arrayRequisitions.length; k++) {
                if (arrayRequisitions[k]._bookId == arrayLivros[j]._bookId) {
                    continue;
                }
                else {
                    arrayNotRequisitioned.push(arrayLivros[j]);
                }
            }
        }
    }
    firstNotRequistionedId = arrayNotRequisitioned[0]._bookId
    console.log("lala")
    console.log(firstNotRequistionedId)
    window.location = "bookPage.html"
    setStorageValuesBook(firstNotRequistionedId);
    // getBookPageValues();
    // feedBookInfo(firstNotRequistionedId);

    // arrayNotifications.splice(i, 1)
    // getStoredNotifications()
    // showUserNotifications()


}

// FUNCTION TO REPLACE VALUES IN BOOK PAGE
function feedBookInfo() {
    getBookPageValues();




    // BOOK VALUES VARS
    let bookPageBookCover = document.getElementById("bookPageBookCover");
    let bookScore = document.getElementById("bookScore");
    let bookTitle = document.getElementById("bookTitle");
    let bookCondition = document.getElementById("bookCondition");
    let bookAuthors = document.getElementById("bookAuthors");
    let bookReleaseDate = document.getElementById("bookReleaseDate");
    let bookPublisher = document.getElementById("bookPublisher");
    let bookPagesNumber = document.getElementById("bookPagesNumber");
    let bookDonationDate = document.getElementById("bookDonationDate");
    let bookCategory = document.getElementById("bookCategory");
    let bookTags = document.getElementById("bookTags");
    let bookSynopsis = document.getElementById("bookSynopsis");





    bookPageBookCover.src = pageBookValues._cover;
    if (pageBookValues._scores.length != 1) {
        bookScore.innerHTML = starRating(pageBookValues._scores);
    }
    else {
        bookScore.innerHTML = "<span class='fa fa-star'></span>" +
            "<span class='fa fa-star'></span>" +
            "<span class='fa fa-star'></span>" +
            "<span class='fa fa-star'></span>" +
            "<span class='fa fa-star'></span>"
    }
    bookTitle.innerHTML = pageBookValues._title;
    bookCondition.innerHTML = "Estado: " + pageBookValues._condition;
    bookAuthors.innerHTML = "de " + pageBookValues._autor;
    bookReleaseDate.innerHTML = "em " + pageBookValues._releaseDate;
    bookPublisher.innerHTML = pageBookValues._publisher;
    bookPagesNumber.innerHTML = "Nº Páginas: " + pageBookValues._numberPages;
    bookDonationDate.innerHTML = "Doado em: " + pageBookValues._donationDate;
    for (let i = 0; i < arrayCategorias.length; i++) {
        if (arrayCategorias[i]._categoryId == pageBookValues._category) {
            bookCategory.innerHTML = "Categoria: " + arrayCategorias[i]._nameCategory;
        }
    }
    bookTags.innerHTML = "Tags: " + getTagNames();


    bookSynopsis.innerHTML = pageBookValues._synopsis;

}

// ARRAYTAGS GET LOCAL STORAGE
function refreshStoredTags() {
    getStoredTags();
    refreshTableTags();
}

function getStoredTags() {
    if (localStorage.tagStorage) {
        arrayTags = JSON.parse(localStorage.tagStorage);
    }
}




// ARRAYCATEGORIAS GET LOCAL STORAGE
function refreshStoredCategorias() {
    getStoredCategorias();
    refreshTableCategorias();
}

function getStoredCategorias() {
    if (localStorage.categoriaStorage) {
        arrayCategorias = JSON.parse(localStorage.categoriaStorage);
    }
}




// ARRAYBIBLIOTECAS GET LOCAL STORAGE
function refreshStoredBibliotecas() {
    getStoredBibliotecas();
    refreshTableBibliotecas();
    addMapMarkers();

}

function getStoredBibliotecas() {
    if (localStorage.bibliotecaStorage) {
        arrayBibliotecas = JSON.parse(localStorage.bibliotecaStorage);
    }
}




// ARRAYUSERS GET LOCAL STORAGE
function refreshStoredUsers() {
    //getStoredUsers();
    refreshTableUsers();
}

function getStoredUsers() {
    if (localStorage.userStorage) {
        arrayUsers = JSON.parse(localStorage.userStorage);
    }
}







// DISPLAY MAP MARKERS ONLY
function displayMapMarkes() {
    if (localStorage.bibliotecaStorage) {
        arrayBibliotecas = JSON.parse(localStorage.bibliotecaStorage);
        addMapMarkers();
    }
}

// ADDMAPMARKERS FUNCTION
function addMapMarkers() {
    var icon = {
        url: "images/map-marker-alt.png", // url
        scaledSize: new google.maps.Size(70, 55), // scaled size
    };
    for (let i = 0; i < arrayBibliotecas.length; i++) {
        let marker = new google.maps.Marker({
            position: { lat: parseFloat(arrayBibliotecas[i]._coordenatesLat), lng: parseFloat(arrayBibliotecas[i]._coordenatesLong) },
            map: map,
            title: arrayBibliotecas[i]._adress,
            icon: icon
        })

    }
}


function addCurrentMarkers() {
    var icon = {
        url: "images/map-marker-alt.png", // url
        scaledSize: new google.maps.Size(70, 55), // scaled size
    };
    for (let i = 0; i < arrayBibliotecas.length; i++) {
        if (pageBookValues._libraryId == arrayBibliotecas[i]._libraryId) {
            let marker = new google.maps.Marker({
                position: { lat: parseFloat(arrayBibliotecas[i]._coordenatesLat), lng: parseFloat(arrayBibliotecas[i]._coordenatesLong) },
                map: map,
                title: arrayBibliotecas[i]._adress,
                icon: icon
            })

        }
    }
}


















// REFRESHTABLE TAGS FUNCTION
function refreshTableBooks() {
    console.log("entrei")
    //getBooks().then(result => {
    //books = result.data;
    console.log(books)
    let strHtml = "";
    strHtml = "<thead class='thead'><tr>" +
        "<th class='w-30'>Capa</th>" +
        "<th class='w-50'>Título</th>" +
        "<th class='w-20'>Estado</th>" +
        "<th class='w-20'>ID Biblioteca</th>" +
        "<th class='w-20'>ID Livro</th>" +
        "<th class='w-20'></th>" +
        "</tr>" +
        "</thead><tbody>"

    for (var i = 0; i < books.length; i++) {
        strHtml += "<tr>" +
            "<td><img class='bookCover' src='" + books[i].cover + "' alt='capa'></td>" +
            "<td>" + books[i].title + "</td>" +
            "<td>" + books[i].condition + "</td>" +
            "<td>" + books[i].libraryId + "</td>" +
            "<td>" + books[i]._id + "</td>" +
            "<td>" +
            "<a id='" + books[i]._id + "' class='editBtn' data-toggle='modal' data-target='#editModal'><i class='fas fa-edit'></i></a> " +
            "<a id='" + books[i]._id + "' class='removeBook'><i class='fas fa-trash-alt'></i></a> " +
            "</td>" +
            "</tr>"
    }
    strHtml += "</tbody>";

    tblBooks.innerHTML = strHtml;

    // GET REMOVE LINKS FROM TABLE
    let tdRemove = document.getElementsByClassName("removeBook");
    let editBtn = document.getElementsByClassName("editBtn");

    // ADD LISTENER TO EACH REMOVE ITEM
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function (event) {
            let isConfirmed = confirm("Está prestes a eliminar o livro!");
            // ON CLICK TARGET REMOVE FROM TABLE
            if (isConfirmed) {
                let bookId = tdRemove[i].getAttribute("id");
                removeBook(bookId);
                refreshStoredBooks();
            }
            event.preventDefault();
        })
    }

    // ADD LISTENER TO EACH EDIT ITEM
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener("click", function () {
            // ON CLICK TARGET FILL MODAL WITH VALUES
            let bookId = editBtn[i].getAttribute("id");
            document.getElementById("editEstado").value = books[i].condition;
            document.getElementById("editEstado").focus();
            editBook(bookId);
            //refreshStoredBooks();
            event.preventDefault();
        })
    }
    // })
}

// REMOVE BOOK
function removeBook(id) {
    /*for (let i = 0; i < arrayLivros.length; i++) {
        if (arrayLivros[i]._bookId == id) {
            arrayLivros.splice(i, 1)
            localStorage.bookStorage = JSON.stringify(arrayLivros);
        }
    }*/
    delBook(id).then(result => {
        book = result.data;

        carregarBooks()
    })
}

// EDIT BOOK
function editBook(id) {
    getBooks().then(result => {
        books = result.data;
        let editBookForm = document.getElementById("editBookForm");
        editBookForm.addEventListener("submit", function (event) {
            // GET VALUE FROM MODAL
            let bookCondition = document.getElementById("editEstado");

            // CHANGE VALUE

            putBook(bookCondition.value, id).then(result => {
                book = result.data;

                carregarBooks()
            })

            event.preventDefault();
        })

    })
}


//functionCarregarBooks
function carregarBooks() {
    getBooks().then(result => {
        books = result.data;
        refreshTableBooks()
        console.log(books)
    })



}

//functionCarregarBooks
function carregarUsers() {
    getUsers().then(result => {
        users = result.data;
        refreshTableUsers()
        console.log(users)
    })



}

//functionCarregarTags
function carregarTags() {
    getTags().then(result => {
        tags = result.data;
        refreshTableTags()
        console.log(tags)
    })



}

//functionCarregarCategories
function carregarCategories() {
    getCategories().then(result => {
        categories = result.data;
        refreshTableCategorias()
        console.log(categories)
    })



}

//functionCarregarLibraries
function carregarLibraries() {
    getLibraries().then(result => {
        libraries = result.data;
        refreshTableBibliotecas()
        console.log(libraries)
    })



}












// REFRESHTABLE TAGS FUNCTION
function refreshTableTags() {
    let strHtml = "";
    strHtml = "<thead class='thead'><tr>" +
        "<th class='w-30'>Tag</th>" +
        "<th class='w-50'>ID</th>" +
        "<th class='w-20'></th>" +
        "</tr>" +
        "</thead><tbody>"

    for (var i = 0; i < tags.length; i++) {
        strHtml += "<tr>" +
            "<td>" + tags[i].tagName + "</td>" +
            "<td>" + tags[i]._id + "</td>" +
            "<td>" +
            "<a id='" + tags[i]._id + "' class='editBtn' data-toggle='modal' data-target='#editModal'><i class='fas fa-edit'></i></a> " +
            "<a id='" + tags[i]._id + "' class='removeTag'><i class='fas fa-trash-alt'></i></a> " +
            "</td>" +
            "</tr>"
    }
    strHtml += "</tbody>";

    tblTags.innerHTML = strHtml;

    // GET REMOVE LINKS FROM TABLE
    let tdRemove = document.getElementsByClassName("removeTag");
    let editBtn = document.getElementsByClassName("editBtn");

    // ADD LISTENER TO EACH REMOVE ITEM
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function () {
            let isConfirmed = confirm("Está prestes a eliminar a tag!");
            // ON CLICK TARGET REMOVE FROM TABLE
            if (isConfirmed) {
                let tagId = tdRemove[i].getAttribute("id");
                removeTag(tagId);
                refreshStoredTags();
            }
        })
    }

    // ADD LISTENER TO EACH EDIT ITEM
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener("click", function () {
            // ON CLICK TARGET FILL MODAL WITH VALUES
            let tagId = editBtn[i].getAttribute("id");
            document.getElementById("editTagName").value = tags[i].tagName;
            document.getElementById("editTagName").focus();
            editTag(tagId);
            refreshStoredTags();
        })
    }

}

// REMOVE TAG
function removeTag(id) {
    // for (let i = 0; i < tags.length; i++) {
    //     // if (arrayTags[i]._tagId == id) {
    //     //     arrayTags.splice(i, 1)
    //     //     localStorage.tagStorage = JSON.stringify(arrayTags);
    //     // }
    // }
    delTag(id).then(result => {
        tag = result.data;

        carregarTags()
    })
}

// EDIT TAG
function editTag(id) {
    let editTagForm = document.getElementById("editTagForm");
    editTagForm.addEventListener("submit", function (event) {
        // GET VALUE FROM MODAL
        let tagName = document.getElementById("editTagName");

        // CHANGE VALUE
        putTag(tagName.value, id).then(result => {
            tag = result.data;

            carregarTags()
        })

        event.preventDefault();
    })
}


















// REFRESHTABLE CATEGORIAS FUNCTION
function refreshTableCategorias() {
    let strHtml = "";
    strHtml = "<thead class='thead'><tr>" +
        "<th class='w-30'>Categoria</th>" +
        "<th class='w-50'>ID</th>" +
        "<th class='w-20'></th>" +
        "</tr>" +
        "</thead><tbody>"

    for (var i = 0; i < categories.length; i++) {
        strHtml += "<tr>" +
            "<td>" + categories[i].nameCategory + "</td>" +
            "<td>" + categories[i]._id + "</td>" +
            "<td>" +
            "<a id='" + categories[i]._id + "' class='editBtn' data-toggle='modal' data-target='#editModal'><i class='fas fa-edit'></i></a> " +
            "<a id='" + categories[i]._id + "' class='removeCategoria'><i class='fas fa-trash-alt'></i></a> " +
            "</td>" +
            "</tr>"
    }
    strHtml += "</tbody>";

    tblCategorias.innerHTML = strHtml;

    // GET REMOVE LINKS FROM TABLE
    let tdRemove = document.getElementsByClassName("removeCategoria");
    let editBtn = document.getElementsByClassName("editBtn");

    // ADD LISTENER TO EACH REMOVE ITEM
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function () {
            let isConfirmed = confirm("Está prestes a eliminar a tag!");
            // ON CLICK TARGET REMOVE FROM TABLE
            if (isConfirmed) {
                let categoryId = tdRemove[i].getAttribute("id");
                removeCategoria(categoryId);
                refreshStoredCategorias();
            }
        })
    }

    // TOGGLE EDIT MODAL CATEGORIAS
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener("click", function () {
            // ON CLICK TARGET FILL MODAL WITH VALUES
            let categoryId = editBtn[i].getAttribute("id");
            document.getElementById("editCategoriaName").value = categories[i].nameCategory;
            document.getElementById("editCategoriaName").focus();
            editCategoria(categoryId);
            refreshStoredCategorias();
        })
    }

}

// REMOVE CATEGORIA
function removeCategoria(id) {
    // for (let i = 0; i < arrayCategorias.length; i++) {
    //     if (arrayCategorias[i]._categoryId == id) {
    //         arrayCategorias.splice(i, 1);
    //         localStorage.categoriaStorage = JSON.stringify(arrayCategorias);
    //     }
    // }
    delCategory(id).then(result => {
        categories = result.data;

        carregarCategories()
    })

}



// EDIT CATEGORIA
function editCategoria(id) {
    let editCategoriaForm = document.getElementById("editCategoriaForm");
    editCategoriaForm.addEventListener("submit", function (event) {
        // GET VALUE FROM MODAL
        let editCategoriaName = document.getElementById("editCategoriaName");

        // CHANGE VALUE
        putCategory(editCategoriaName.value, id).then(result => {
            category = result.data;

            carregarCategories()
        })

        event.preventDefault();
    })
}














// REFRESHTABLE BIBLIOTECAS FUNCTION
function refreshTableBibliotecas() {
    let strHtml = "";
    strHtml = "<thead class='thead'><tr>" +
        "<th class='w-30'>Localização</th>" +
        "<th class='w-30'>Morada</th>" +
        "<th class='w-30'>Coordenadas</th>" +
        "<th class='w-20'>Capacidade</th>" +
        "<th class='w-20'>ID</th>" +
        "<th class='w-20'></th>" +
        "</tr>" +
        "</thead><tbody>"

    for (var i = 0; i < libraries.length; i++) {
        strHtml += "<tr>" +
            "<td>" + libraries[i].location + "</td>" +
            "<td>" + libraries[i].adress + "</td>" +
            "<td>" + libraries[i].coordinatesLong + "; " + libraries[i].coordinatesLat + "</td>" +
            "<td>" + libraries[i].capacity + "</td>" +
            "<td>" + libraries[i]._id + "</td>" +
            "<td>" +
            "<a id='" + libraries[i]._id + "' class='editBtn' data-toggle='modal' data-target='#editModal'><i class='fas fa-edit'></i></a> " +
            "<a id='" + libraries[i]._id + "' class='removeBiblioteca'><i class='fas fa-trash-alt'></i></a> " +
            "</td>" +
            "</tr>"
    }
    strHtml += "</tbody>";
    tblBibliotecas.innerHTML = strHtml;

    // GET REMOVE LINKS FROM TABLE
    let tdRemove = document.getElementsByClassName("removeBiblioteca");
    let editBtn = document.getElementsByClassName("editBtn");

    // ADD LISTENER TO EACH REMOVE ITEM
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function () {
            let isConfirmed = confirm("Está prestes a eliminar a biblioteca!");
            // ON CLICK TARGET REMOVE FROM TABLE
            if (isConfirmed) {
                let bibliotecaId = tdRemove[i].getAttribute("id");
                removeBiblioteca(bibliotecaId);
                refreshStoredBibliotecas();
            }
        })
    }

    // ADD LISTENER TO EACH EDIT ITEM
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener("click", function () {
            // ON CLICK TARGET FILL MODAL WITH VALUES
            let bibliotecaId = editBtn[i].getAttribute("id");
            document.getElementById("editLocation").value = libraries[i].location;
            document.getElementById("editAdress").value = libraries[i].adress;
            document.getElementById("editCapacity").value = libraries[i].capacity;
            document.getElementById("editLat").value = libraries[i].coordinatesLat;
            document.getElementById("editLong").value = libraries[i].coordinatesLong;
            editBiblioteca(bibliotecaId);
            refreshStoredBibliotecas();
        })
    }
}

// REMOVE BIBLIOTECA
function removeBiblioteca(id) {
    // for (let i = 0; i < arrayBibliotecas.length; i++) {
    //     if (arrayBibliotecas[i]._libraryId == id) {
    //         arrayBibliotecas.splice(i, 1)
    //         localStorage.bibliotecaStorage = JSON.stringify(arrayBibliotecas);
    //     }
    // }
    delLibrary(id).then(result => {
        library = result.data;

        carregarLibraries()
    })
}

// EDIT BIBLIOTECA
function editBiblioteca(id) {
    let editBibliotecaForm = document.getElementById("editBibliotecaForm");
    editBibliotecaForm.addEventListener("submit", function (event) {
        // GET VALUE FROM MODAL
        let editLocation = document.getElementById("editLocation");
        let editAdress = document.getElementById("editAdress");
        let editCapacity = document.getElementById("editCapacity");
        let editLat = document.getElementById("editLat");
        let editLong = document.getElementById("editLong");

        let newLibrary = {

            location: editLocation.value,
            adress: editAdress.value,
            coordinatesLong: editLong.value,
            coordinatesLat: editLat.value,
            capacity: editCapacity.value,
        }

        // CHANGE VALUE
        putLibrary(newLibrary, id).then(result => {
            //library = result.data;

            carregarLibraries()
        })

        event.preventDefault();
    })
}















// REFRESHTABLE USERS FUNCTION
function refreshTableUsers() {
    let strHtml = "";
    strHtml = "<thead class='thead'><tr>" +
        "<th class='w-30'>Username</th>" +
        "<th class='w-30'>Email</th>" +
        "<th class='w-20'>Tipo de Utilizador</th>" +
        "<th class='w-30'>ID</th>" +
        "<th class='w-20'></th>" +
        "</tr>" +
        "</thead><tbody>"

    for (var i = 0; i < users.length; i++) {
        strHtml += "<tr>" +
            "<td>" + users[i].username + "</td>" +
            "<td>" + users[i].email + "</td>" +
            "<td>" + users[i].userTypeId + "</td>" +
            "<td>" + users[i]._id + "</td>" +
            "<td>" +
            "<a id='" + users[i]._id + "' class='removeCategoria'><i class='fas fa-trash-alt'></i></a> " +
            "</td>" +
            "</tr>"
    }
    strHtml += "</tbody>";

    tblUsers.innerHTML = strHtml;

    // GET REMOVE LINKS FROM TABLE
    let tdRemove = document.getElementsByClassName("removeCategoria");

    // ADD LISTENER TO EACH ITEM
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function () {
            let isConfirmed = confirm("Está prestes a eliminar o utilizador!");
            // ON CLICK TARGET REMOVE FROM TABLE
            if (isConfirmed) {
                let userId = tdRemove[i].getAttribute("id");
                removeUser(userId);
                refreshStoredUsers();
            }
        })
    }
}

// REMOVE USER
function removeUser(id) {
    /*for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i]._userId == id) {
            arrayUsers.splice(i, 1)
            localStorage.userStorage = JSON.stringify(arrayUsers);
        }
    }*/
    delUser(id).then(result => {
        user = result.data;

        carregarUsers()
    })
}










// LOGIN USER

// CHECK STORAGE FOR USER
function checkLoginStorage() {
    if (localStorage.loginStorage) {
        login = JSON.parse(localStorage.loginStorage);
    }
}

///guardar token no storage
function setTokenStorage(dataToken) {
    localStorage.loginToken = JSON.stringify(dataToken);
}
///obter token do storage e 
function getTokenStorage() {
    if (localStorage.loginToken) {
        //console.log(token)
        return token = JSON.parse(localStorage.loginToken);

    }
}
/////
/*function getTokenData(token) {
    
            getLoggedUser(token).then(result => {
                console.log(loggedUserToken)
                loggedUserToken = result.data;
                changesLogedUser(loggedUserToken)
                
    
            })
        }


       
    
}*/
//altearações
function changesLogedUser(loggedUserToken) {
    console.log(loggedUserToken)
    if (loggedUserToken != undefined) {
        if (loggedUserToken.userTypeId == 0) {
            console.log("s")
            loadAdminPage();
        }
        if (loggedUserToken.userTypeId == 1) {
            loadOperatorPage();
        }
        if (loggedUserToken.userTypeId == 2) {
            loadUserPage();
        }

        if (document.getElementById("topBooksDiv")) {
            document.getElementById("topBooksDiv").style.pointerEvents = "all";
            document.getElementById("recentBooksDiv").style.pointerEvents = "all";
        }
    }
}
function loginUser() {
    getLoggedUser(getTokenStorage()).then(result => {

        loggedUserToken = result.data;
        console.log(loggedUserToken)
        changesLogedUser(loggedUserToken)
    })
    //checkLoginStorage();
    //if(token!=""){
    //}
    //getTokenStorage()
    //getTokenData(token)
    //console.log("d")
    /*getLoggedUser(getTokenStorage()).then(result => {
        console.log(loggedUserToken)
        loggedUserToken = result.data;
        changesLogedUser(loggedUserToken)
        

    })
   
    /*if (login != undefined) {
        if (login.typeUser == 0) {
            console.log("s")
            loadAdminPage();
        }
        if (login.typeUser == 1) {
            loadOperatorPage();
        }
        if (login.typeUser == 2) {
            loadUserPage();
        }

        if (document.getElementById("topBooksDiv")) {
            document.getElementById("topBooksDiv").style.pointerEvents = "all";
            document.getElementById("recentBooksDiv").style.pointerEvents = "all";
        }
    }*/
}


// LOGOUT FUNCTION
function allowLogout() {
    document.getElementById("logoutButton").addEventListener("click", function (event) {
        event.preventDefault();
        if (localStorage.loginStorage) {
            localStorage.removeItem("loginStorage");
            window.location = "home.html";
        }
        if (localStorage.loginToken) {
            localStorage.removeItem("loginToken");
            window.location = "home.html";
        }
    })
}









// LOAD USERTYPES HTML PAGES 

function loadUserPage() {
    // VARS
    let navLogin = document.getElementById("navLogin");
    let navRegister = document.getElementById("navRegister");
    let navLogout = document.getElementById("navLogout");
    let navDropdownUserPage = document.getElementById("dropdownUserPage");
    let adminDropdownPanel = document.getElementById("adminDropdownPanel");
    let operadorDropdownPanel = document.getElementById("operadorDropdownPanel");
    let navCatalog = document.getElementById("navCatalog");
    let navBibliotecas = document.getElementById("navBibliotecas");
    let navbarDropdown = document.getElementById("navbarDropdown");
    let infoDiv = document.getElementById("infoDiv");
    let welcomeJumbotron = document.getElementById("welcomeJumbotron");
    let whereDiv = document.getElementById("whereDiv");
    let navNotifications = document.getElementById("navNotifications");

    if (navLogin) {
        navLogin.style.display = "none";
    }
    if (navRegister) {
        navRegister.style.display = "none";
    }

    navDropdownUser.style.display = "block";
    operadorDropdownPanel.style.display = "none";
    adminDropdownPanel.style.display = "none";
    if (navCatalog) {
        if (navCatalog.hasAttribute("data-toggle")) {
            navCatalog.removeAttribute("data-toggle", "data-target");
            navCatalog.setAttribute("href", "catalog.html");
        }
    }
    if (navBibliotecas) {
        if (navBibliotecas.hasAttribute("data-toggle")) {
            navBibliotecas.removeAttribute("data-toggle", "data-target");
            navBibliotecas.setAttribute("href", "bibliotecas.html");
        }
    }
    if (loggedUserToken.photo) {
        navbarDropdown.innerHTML = "<img src='" + loggedUserToken.photo + "' id='userPhoto' class='img img-fluid'></img>" + loggedUserToken.username;
    }
    else {
        navbarDropdown.innerHTML = "<img src='images/userIcon(white).png' id='userPhoto' class='img img-fluid'></img>" + loggedUserToken.username;
    }
    if (welcomeJumbotron) {
        welcomeJumbotron.style.display = "none";
    }
    if (infoDiv) {
        infoDiv.style.display = "none";
    }
    if (whereDiv) {
        whereDiv.style.display = "none";
    }
    navNotifications.style.display = "block";


}

function loadAdminPage() {
    // VARS
    let navLogin = document.getElementById("navLogin");
    let navRegister = document.getElementById("navRegister");
    let navLogout = document.getElementById("navLogout");
    let navDropdownUserPage = document.getElementById("dropdownUserPage");
    let adminDropdownPanel = document.getElementById("adminDropdownPanel");
    let operadorDropdownPanel = document.getElementById("operadorDropdownPanel");
    let navCatalog = document.getElementById("navCatalog");
    let navBibliotecas = document.getElementById("navBibliotecas");
    let navbarDropdown = document.getElementById("navbarDropdown");
    let infoDiv = document.getElementById("infoDiv");
    let welcomeJumbotron = document.getElementById("welcomeJumbotron");
    let whereDiv = document.getElementById("whereDiv");
    let navNotifications = document.getElementById("navNotifications");

    if (navLogin) {
        navLogin.style.display = "none";
    }
    if (navRegister) {
        navRegister.style.display = "none";
    }
    navDropdownUser.style.display = "block";
    operadorDropdownPanel.style.display = "none";
    adminDropdownPanel.style.display = "block";
    if (navCatalog) {
        if (navCatalog.hasAttribute("data-toggle")) {
            navCatalog.removeAttribute("data-toggle", "data-target");
            navCatalog.setAttribute("href", "catalog.html");
        }
    }
    if (navBibliotecas) {
        if (navBibliotecas.hasAttribute("data-toggle")) {
            navBibliotecas.removeAttribute("data-toggle", "data-target");
            navBibliotecas.setAttribute("href", "bibliotecas.html");
        }
    }
    if (loggedUserToken.photo) {
        navbarDropdown.innerHTML = "<img src='" + loggedUserToken.photo + "' id='userPhoto' class='img img-fluid'></img>" + loggedUserToken.username;
    }
    else {
        navbarDropdown.innerHTML = "<img src='images/userIcon(white).png' id='userPhoto' class='img img-fluid'></img>" + loggedUserToken.username;
    }
    if (welcomeJumbotron) {
        welcomeJumbotron.style.display = "none";
    }
    if (infoDiv) {
        infoDiv.style.display = "none";
    }
    if (whereDiv) {
        whereDiv.style.display = "none";
    }
    if (navNotifications) {
        navNotifications.style.display = "block";
    }

}

function loadOperatorPage() {
    // VARS
    let navLogin = document.getElementById("navLogin");
    let navRegister = document.getElementById("navRegister");
    let navLogout = document.getElementById("navLogout");
    let navDropdownUserPage = document.getElementById("dropdownUserPage");
    let adminDropdownPanel = document.getElementById("adminDropdownPanel");
    let operadorDropdownPanel = document.getElementById("operadorDropdownPanel");
    let navCatalog = document.getElementById("navCatalog");
    let navBibliotecas = document.getElementById("navBibliotecas");
    let navbarDropdown = document.getElementById("navbarDropdown");
    let infoDiv = document.getElementById("infoDiv");
    let welcomeJumbotron = document.getElementById("welcomeJumbotron");
    let whereDiv = document.getElementById("whereDiv");
    let navNotifications = document.getElementById("navNotifications");

    if (navLogin) {
        navLogin.style.display = "none";
    }
    if (navRegister) {
        navRegister.style.display = "none";
    }

    navDropdownUser.style.display = "block";
    operadorDropdownPanel.style.display = "block";
    adminDropdownPanel.style.display = "none";
    if (navCatalog) {
        if (navCatalog.hasAttribute("data-toggle")) {
            navCatalog.removeAttribute("data-toggle", "data-target");
            navCatalog.setAttribute("href", "catalog.html");
        }
    }

    if (navBibliotecas) {
        if (navBibliotecas.hasAttribute("data-toggle")) {
            navBibliotecas.removeAttribute("data-toggle", "data-target");
            navBibliotecas.setAttribute("href", "bibliotecas.html");
        }
    }
    if (loggedUserToken.photo) {
        navbarDropdown.innerHTML = "<img src='" + loggedUserToken.photo + "' id='userPhoto' class='img img-fluid'></img>" + loggedUserToken.username;
    }
    else {
        navbarDropdown.innerHTML = "<img src='images/userIcon(white).png' id='userPhoto' class='img img-fluid'></img>" + loggedUserToken.username;
    }
    if (welcomeJumbotron) {
        welcomeJumbotron.style.display = "none";
    }
    if (infoDiv) {
        infoDiv.style.display = "none";
    }
    if (whereDiv) {
        whereDiv.style.display = "none";
    }
    if (navNotifications) {
        navNotifications.style.display = "block";
    }


}




// LOAD TOP BOOKS
function loadTopBooks() {
    getBooks().then(result => {
        books = result.data;
        //refreshTableBooks()
        console.log(books)
        sortByScoreDown();
        let strHtmlCard = "";
        strHtmlCard += `<div class="row row-fluid">`;
        let count = 0;
        for (var i = 0; i < 6; i++) {

            strHtmlCard += "<div class='col-md-2 mb-5'>" +
                "<div id='" + books[i]._id + "' class='bookItem card'>";

            if (books[i].cover) {
                strHtmlCard += "<img class='card-img-top' src='" + books[i].cover + "' alt='image cap'>";
            }
            else {
                strHtmlCard += "<img class='card-img-top' src='images/bookCoverNotAvailable.jpg' alt='image cap'>";
            }

            strHtmlCard += "<div class='card-body flex-column'>" +
                "<h6 class='titles card-title'>" + books[i].title + "</h6>" +
                "<p class='authors card-text'>" + books[i].author + "</p>" +
                "</div>" +
                "<div class='card-footer align-center'>" + "<p class='score card-text'>";
            if (books[i].scores.length != 0) {
                strHtmlCard += starRating(books[i].scores);
            }
            else {
                strHtmlCard += "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>";
            }
            strHtmlCard += "</p>" +
                "</div>" +
                "</div>" +
                "</div>";

        }
        strHtmlCard += "</div>";
        let topBooksDiv = document.getElementById("topBooksDiv");
        topBooksDiv.innerHTML = strHtmlCard;

    })

}



// LOAD RECENT BOOKS
function loadRecentBooks() {
    getBooks().then(result => {
        books = result.data;
        //refreshTableBooks()
        console.log(books)

        sortByDonationDateDown(books);
        let strHtmlCard = "";
        strHtmlCard += `<div class="row row-fluid">`;
        let count = 0;
        for (var i = 0; i < 6; i++) {

            strHtmlCard += "<div class='col-md-2 mb-5'>" +
                "<div id='" + books[i]._id + "' class='bookItem card'>";

            if (books[i].cover) {
                strHtmlCard += "<img class='card-img-top' src='" + books[i].cover + "' alt='image cap'>";
            }
            else {
                strHtmlCard += "<img class='card-img-top' src='images/bookCoverNotAvailable.jpg' alt='image cap'>";
            }

            strHtmlCard += "<div class='card-body flex-column'>" +
                "<h6 class='titles card-title'>" + books[i].title + "</h6>" +
                "<p class='authors card-text'>" + books[i].author + "</p>" +
                "</div>" +
                "<div class='card-footer align-center'>" + "<p class='score card-text'>";
            if (books[i].scores.length != 1) {
                strHtmlCard += starRating(books[i].scores);
            }
            else {
                strHtmlCard += "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>";
            }
            strHtmlCard += "</p>" +
                "</div>" +
                "</div>" +
                "</div>";

        }
        strHtmlCard += "</div>";
        let recentBooksDiv = document.getElementById("recentBooksDiv");
        recentBooksDiv.innerHTML = strHtmlCard;

        // ADD EVENT LISTENER TO TRIGGER BOOK PAGE WITH TARGET BOOK CONTENT
        let bookItem = document.getElementsByClassName("bookItem");
        for (let i = 0; i < bookItem.length; i++) {
            bookItem[i].addEventListener("click", function () {
                // GET ID VALUE
                let bookItemId = bookItem[i].getAttribute("id");

                setStorageValuesBook(bookItemId);
                console.log("array" + books)
                getBookPageValues();
                window.location = "bookPage.html";

            })
        }
    })
}


// SOME FUNCTION
function setStorageValuesBook(id) {

    for (let i = 0; i < books.length; i++) {
        if (id == books[i]._id) {
            localStorage.bookPageValues = JSON.stringify(books[i]);
            pageBookValues = books[i];



            console.log(pageBookValues)
            //window.location = "bookPage.html";
        }
    }
    //window.location = "bookPage.html";
}

function getBookPageValues() {
    if (localStorage.bookPageValues) {
        pageBookValues = JSON.parse(localStorage.bookPageValues);
    }
}




// SORT BOOKS
// SORT BY SCORE BY MOST SCORED
function sortByScoreDown() {
    books.sort((a, b) => fullscoreForSort(b.scores) - fullscoreForSort(a.scores));
}

// SORT BY SCORE BY LEAST SCORED
function sortByScoreUp() {
    books.sort((a, b) => fullscoreForSort(a.scores) - fullscoreForSort(b.scores));
}

// SORT BY RELEASE DATE BY MOST RECENT
function sortByReleaseDateDown() {
    books.sort((a, b) => Date.parse(b.releaseDate.toString()) - Date.parse(a.releaseDate.toString()));
}

// SORT BY RELEASE DATE BY OLDEST
function sortByReleaseDateUp() {
    books.sort((a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate));
}

// SORT BY DONATION DATE BY MOST RECENT | DONT KNOW IF NEEDED
function sortByDonationDateDown() {
    books.sort((a, b) => Date.parse(b.donationDate) - Date.parse(a.donationDate));
    console.log(books)
}

// SORT BY DONATION DATE BY OLDEST | DONT KNOW IF NEEDED
function sortByDonationDateUp() {
    books.sort((a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate));
}

// CALCULATE FULLSCORE
function fullscoreForSort(givenScores) {
    console.log(givenScores)
    let total = givenScores.length; // -1 BECAUSE BOOK._SCORES STARTS WITH AN ARRAY WITH 0 AS FIRST VALUE FOR SIMPLIFICATION
    let score;

    if (total <= 0) {
        return 0;
    }
    else {
        score = givenScores.reduce((total, add) => total + add);
        return score / total;
    }
}




// FEED BOOKS TO CATALOG CONTAINER
function feedBooks(startArrayLivros, endArrayLivros, someArrayLivros) {
    console.log(someArrayLivros)
    let strHtmlCard = "";
    let count = 0;

    for (var i = startArrayLivros; i < endArrayLivros + 1; i++) {
        if (i < someArrayLivros.length) {
            if (count == 0) {
                strHtmlCard += `<div class="row row-fluid mb-5">`
            }

            strHtmlCard += "<div class='col-md-2 mb-5'>" +
                "<div id='" + someArrayLivros[i]._id + "' class='bookItem card'>";

            if (someArrayLivros[i].cover) {
                strHtmlCard += "<img class='card-img-top' src='" + someArrayLivros[i].cover + "' alt='image cap'>";
            }
            else {
                strHtmlCard += "<img class='card-img-top' src='images/bookCoverNotAvailable.jpg' alt='image cap'>";
            }

            strHtmlCard += "<div class='card-body flex-column'>" +
                "<h6 class='titles card-title'>" + someArrayLivros[i].title + "</h6>" +
                "<p class='authors card-text'>" + someArrayLivros[i].author + "</p>" +
                "</div>" +
                "<div class='card-footer align-center'>" + "<p class='score card-text'>";

            if (someArrayLivros[i].scores.length != 0) {
                strHtmlCard += starRating(someArrayLivros[i].scores);
            }
            else {
                strHtmlCard += "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>" +
                    "<span class='fa fa-star'></span>";
            }
            strHtmlCard += "</p>" +
                "</div>" +
                "</div>" +
                "</div>"

            count++;


            if (count == 6 || i == someArrayLivros.length - 1) {
                strHtmlCard += "</div>";
                count = 0;

            }

        }


    }


    let contentBooks = document.getElementById("contentBooks");
    contentBooks.innerHTML = strHtmlCard;

    // ADD EVENT LISTENER TO TRIGGER BOOK PAGE WITH TARGET BOOK CONTENT
    let bookItem = document.getElementsByClassName("bookItem");
    for (let i = 0; i < bookItem.length; i++) {
        bookItem[i].addEventListener("click", function () {
            // GET ID VALUE
            let bookItemId = bookItem[i].getAttribute("id");

            setStorageValuesBook(bookItemId);
            getBookPageValues();
            window.location = "bookPage.html"

        })
    }
}


// STAR RATING
function starRating(givenScores) {
    console.log("starRating");
    let strScore = "";
    // CALCULATE SCORE(){
    if (givenScores.length > 0) {
        let total = 0; // = givenScores.length - 1; // -1 BECAUSE BOOK._SCORES STARTS WITH AN ARRAY WITH 0 AS FIRST VALUE FOR SIMPLIFICATION

        for (let i = 0; i < givenScores.length; i++) {
            total += givenScores[i];
        }

        let score = total / givenScores.length; //givenScores.reduce((total, add) => total + add) / total;




        if (score >= 85) {
            strScore = "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>"
        }
        if ((score >= 70) && (score < 85)) {
            strScore = "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star'></span>"
        }
        if ((score >= 40) && (score < 70)) {
            strScore = "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>"
        }
        if ((score >= 20) && (score < 40)) {
            strScore = "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>"
        }
        if ((score < 20) && (score != 0)) {
            strScore = "<span class='fa fa-star checked'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>"
        }
        if (score == 0) {
            strScore = "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>"
        }


        return strScore;
    }
    else {
        strScore = "<span class='fa fa-star'></span>" +
            "<span class='fa fa-star'></span>" +
            "<span class='fa fa-star'></span>" +
            "<span class='fa fa-star'></span>" +
            "<span class='fa fa-star'></span>"



        return strScore;
    }
}



///////////GETS 
///get Users
async function getUsers() {

    try {

        return await axios.get("https://edmilson-edmilson0.c9users.io/users")


    }
    catch (err) {
        console.log(err)
    }


}

///get categories
async function getCategories() {

    try {
        return await axios.get("https://edmilson-edmilson0.c9users.io/categories")
    }
    catch (err) {
        console.log(err)
    }
}

///get tags
async function getTags() {

    try {
        return await axios.get("https://edmilson-edmilson0.c9users.io/tags")
    }
    catch (err) {
        console.log(err)
    }
}

///get libraries
async function getLibraries() {

    try {
        return await axios.get("https://edmilson-edmilson0.c9users.io/libraries")
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
}

///get comments
async function getComments() {

    try {
        return await axios.get("https://edmilson-edmilson0.c9users.io/comments")
    }
    catch (err) {
        console.log(err)
    }
}

///get comments
async function getRequisitions() {

    try {
        return await axios.get("https://edmilson-edmilson0.c9users.io/requisition")
    }
    catch (err) {
        console.log(err)
    }
}




///get LoggedUser
async function getLoggedUser(data) {

    try {
        return await axios.get("https://edmilson-edmilson0.c9users.io/getLoggedUser", { headers: { Authorization: `Bearer ${data}` } })
    }
    catch (err) {
        console.log(err)
    }
}

//POST USER
async function postLogin(data) {
    try {
        return await axios.post("https://edmilson-edmilson0.c9users.io/users/logIn", data)
    }
    catch (err) {
        console.log(err)
    }

}


let loggedUserToken;
///
/*postLogin(data).then(result => {
    token = result.data;
})*/






/////////POSTS

//POST USER
async function postUser(data) {
    try {
        return await axios.post("https://edmilson-edmilson0.c9users.io/users", data)
    }
    catch (err) {
        console.log(err)
    }

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
//post comment
async function postComment(data) {
    try {
        return await axios.post("https://edmilson-edmilson0.c9users.io/comments", data)
    }
    catch (err) {
        console.log(err)
    }

}

//POST Tag
async function postTag(data) {
    try {
        return await axios.post("https://edmilson-edmilson0.c9users.io/tags", data)
    }
    catch (err) {
        console.log(err)
    }

}

//POST Category
async function postCategory(data) {
    try {
        return await axios.post("https://edmilson-edmilson0.c9users.io/categories", data)
    }
    catch (err) {
        console.log(err)
    }

}

//POST Library
async function postLibrary(data) {
    try {
        return await axios.post("https://edmilson-edmilson0.c9users.io/libraries", data)
    }
    catch (err) {
        console.log(err)
    }

}
//POST requisition
async function postRequisition(data) {
    try {
        return await axios.post("https://edmilson-edmilson0.c9users.io/requisition", data)
    }
    catch (err) {
        console.log(err)
    }

}





///PUTS
async function putBook(data, id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/books/" + id;
        console.log(id)
        return await axios.put(url, { condition: data })
    }
    catch (err) {
        console.log(err)
    }

}
async function putBookLibrary(data, id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/books/" + id;
        console.log(id)
        return await axios.put(url, { libraryId: data })
    }
    catch (err) {
        console.log(err)
    }
}

async function putRequisition(data, id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/requisition/" + id;
        console.log(id)
        return await axios.put(url, { returnDate: data })
    }
    catch (err) {
        console.log(err)
    }

}
///editar socres livro
async function putBookSores(data, id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/books/" + id;
        console.log(id)
        return await axios.put(url, { scores: data })
    }
    catch (err) {
        console.log(err)
    }

}

async function putTag(data, id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/tags/" + id;
        console.log(id)
        return await axios.put(url, { tagName: data })
    }
    catch (err) {
        console.log(err)
    }

}

async function putCategory(data, id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/categories/" + id;
        console.log(id)
        return await axios.put(url, { nameCategory: data })
    }
    catch (err) {
        console.log(err)
    }

}

async function putLibrary(data, id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/libraries/" + id;
        console.log(id)
        return await axios.put(url, {
            location: data.location,
            adress: data.adress,
            coordinatesLong: data.coordinatesLong,
            coordinatesLat: data.coordinatesLat,
            capacity: data.capacity
        })
    }
    catch (err) {
        console.log(err)
    }

}

async function putRequisition(data, id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/requisition/" + id;
        console.log(id)
        return await axios.put(url, {
            returnDate: data.returnDate
        })
    }
    catch (err) {
        console.log(err)
    }
}

//DELETES
async function delBook(id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/books/" + id;
        console.log(id)
        return await axios.delete(url)
    }
    catch (err) {
        console.log(err)
    }

}

async function delUser(id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/users/" + id;
        console.log(id)
        return await axios.delete(url)
    }
    catch (err) {
        console.log(err)
    }

}

async function delTag(id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/tags/" + id;
        console.log(id)
        return await axios.delete(url)
    }
    catch (err) {
        console.log(err)
    }

}

async function delCategory(id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/categories/" + id;
        console.log(id)
        return await axios.delete(url)
    }
    catch (err) {
        console.log(err)
    }

}

async function delLibrary(id) {
    try {
        url = "https://edmilson-edmilson0.c9users.io/libraries/" + id;
        console.log(id)
        return await axios.delete(url)
    }
    catch (err) {
        console.log(err)
    }

}

