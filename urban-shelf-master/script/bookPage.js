window.onload = function () {
    console.log("bookpagevalue:"+pageBookValues)
    // INITIATE FUNCTIONS
    getStoredBooks();
    loginUser();
    allowLogout();
    feedBookInfo();
    getStoredComments();
    // TEST
    // let requisitionTest = new Requisition(1, 3)
    // requisitionTest._requisitionDateFull = new Date().getTime()-(1000*3600*24*40)
    // requisitionTest._fine = 10

    // arrayRequisitions.push(requisitionTest)
    // localStorage.requisitionStorage = JSON.stringify(arrayRequisitions)

    getStoredRequisitions();
    getStoredBibliotecas();
    getStoredNotifications();
    showUserNotifications();



    // VARS
    let requisitionButton = document.getElementById("requisitionButton");
    let alreadyRequestedHeader = document.getElementById("alreadyRequestedHeader");
    let notificationRequestBtn = document.getElementById("notificationRequestBtn");

    // CHECK IF BOOK IS ALREADY REQUESTED
    for (let i = 0; i < arrayRequisitions.length; i++) {
        if (arrayRequisitions[i]._bookId == pageBookValues._bookId) {
            alreadyRequestedHeader.style.display = "block";
            requisitionButton.style.display = "none";
            notificationRequestBtn.style.display = "block";
        }

    }



    let commentSection = document.getElementById("commentSection");
    commentSection.innerHTML = feedCommentSection();

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





        bookPageBookCover.src = pageBookValues.cover;
        if (pageBookValues.scores.length != 1) {
            bookScore.innerHTML = starRating(pageBookValues.scores);
        }
        else {
            bookScore.innerHTML = "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>" +
                "<span class='fa fa-star'></span>"
        }
        bookTitle.innerHTML = pageBookValues.title;
        bookCondition.innerHTML = "Estado: " + pageBookValues.condition;
        bookAuthors.innerHTML = "de " + pageBookValues.author;
        bookReleaseDate.innerHTML = "em " + pageBookValues.releaseDate;
        bookPublisher.innerHTML = pageBookValues.publisher;
        bookPagesNumber.innerHTML = "Nº Páginas: " + pageBookValues.numberPages;
        bookDonationDate.innerHTML = "Doado em: " + pageBookValues.donationDate;
        for (let i = 0; i < arrayCategorias.length; i++) {
            if (arrayCategorias[i]._categoryId == pageBookValues._category) {
                bookCategory.innerHTML = "Categoria: " + arrayCategorias[i]._nameCategory;
            }
        }
        bookTags.innerHTML = "Tags: " + getTagNames();


        bookSynopsis.innerHTML = pageBookValues._synopsis;

    }


    // let notificationRequestBtn = document.getElementById("notificationRequestBtn")
    //FUNÇÃO PRA VERIFICAR SE O USER JÁ TENS NOTIFICAÇÕES PRA ESTE TITULO
    function checkNotification() {
        let hasBookNotification = false

        for (let i = 0; i < arrayNotifications.length; i++) {
            if (arrayNotifications[i]._bookTitle == bookTitle.innerHTML && arrayNotifications[i]._userId == login.id) {
                hasBookNotification = true
            }
        }

        if (hasBookNotification) {
            notificationRequestBtn.innerHTML = "<i class='fas fa-bell-slash'></i>"
            document.getElementById("alreadyRequestedHeader").innerText = "Será notificado quando este título estiver disponível para requisição."

            //REMOVER EVENT LISTENER PRA CRIAR NOTIFICAÇÃO
            notificationRequestBtn.removeEventListener("click", function () {
                let newNotification = new BookNotification(login.id, bookTitle.innerHTML)

                arrayNotifications.push(newNotification)
                localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                checkNotification();
            })
            //ADICIONAR EVENT LISTENER PRA REMOVER NOTIFICAÇÃO
            notificationRequestBtn.addEventListener("click", function () {
                for (let i = 0; i < arrayNotifications.length; i++) {
                    if (arrayNotifications[i]._bookTitle == bookTitle.innerHTML && arrayNotifications[i]._userId == login.id) {
                        arrayNotifications.splice(i, 1)

                        localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                        checkNotification();
                    }
                }
            })


        }

        else {
            notificationRequestBtn.innerHTML = "<i class='fas fa-bell'></i>"
            document.getElementById("alreadyRequestedHeader").innerText = "Este livro já se encontra requisitado."

            //REMOVER EVENT LISTENER PRA REMOVER NOTIFICAÇÃO
            notificationRequestBtn.removeEventListener("click", function () {
                for (let i = 0; i < arrayNotifications.length; i++) {
                    if (arrayNotifications[i]._bookTitle == bookTitle.innerHTML && arrayNotifications[i]._userId == login.id) {
                        arrayNotifications.splice(i, 1)

                        localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                        checkNotification();
                    }
                }
            })
            //ADICIONAR EVENT LISTENER PRA CRIAR NOTIFICAÇÃO
            notificationRequestBtn.addEventListener("click", function () {
                let newNotification = new BookNotification(login.id, bookTitle.innerHTML)

                arrayNotifications.push(newNotification)
                localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                checkNotification();
            })
        }
    }

    checkNotification()


    // SCORE INPUT EVENTS
    let inputScore = document.getElementById("inputScore");
    let previewScore = document.getElementById("previewScore");


    // KEYUP EVENT
    inputScore.addEventListener("keyup", function (event) {
        previewScore.innerHTML = changePreviewRating(inputScore.value);
        event.preventDefault();
    })

    //FOCUSOUT EVENT
    inputScore.addEventListener("focusout", function (event) {
        previewScore.innerHTML = changePreviewRating(inputScore.value);
        event.preventDefault();
    })






    // FUNCTION CHANGE PREVIEW SCORE FROM INPUT VALUE
    function changePreviewRating(score) {

        console.log(score)
        let strScore = "";
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




    // GET TAG NAMES FROM ID
    function getTagNames() {
        let strHtml = "";
        for (let i = 0; i < arrayTags.length; i++) {
            for (let j = 0; j < pageBookValues._tags.length; j++) {
                if (arrayTags[i]._tagId == pageBookValues._tags[j]) {
                    if (strHtml.length == 0) {
                        strHtml += arrayTags[i]._nameTag;
                    }
                    else {
                        strHtml += ", " + arrayTags[i]._nameTag;
                    }

                }

            }
        }
        return strHtml;
    }


    // DISPLAY COMMENTS FUNCTION
    function feedCommentSection() {
        let strHtml = "";
        for (let i = 0; i < arrayComments.length; i++) {
            if (pageBookValues._bookId == arrayComments[i]._bookId) {
                strHtml += "<div class='row row-fluid mb-5'>" +
                    "<div class='userCommentsPhoto col-md-6 mb-3'>";

                for (let j = 0; j < arrayUsers.length; j++) {
                    if (arrayUsers[j]._userId == arrayComments[i]._userId) {
                        if (arrayUsers[j]._photo) {
                            strHtml += "<img class='userCommentImg img img-fluid mr-2' alt='' src='" + arrayUsers[j]._photo + "'/><span>" + arrayUsers[j]._username + "</span>";
                        }
                        else {
                            strHtml += "<img class='userCommentImg img img-fluid mr-2' alt='' src='images/userIcon(white).png'/><span>" + arrayUsers[j]._username + "</span>";
                        }
                    }
                }

                strHtml += "</div>" +
                    "<div class='userCommentsTxt col-md-10 offset-md-1'>" +
                    "<p>" + arrayComments[i]._txtComment + "</p>" +
                    "</div>" +
                    "</div>";



            }
        }

        return strHtml;
    }



    // ADD COMMENT
    let commentForm = document.getElementById("commentForm");
    commentForm.addEventListener("submit", function (event) {


        // VARS
        let inputComment = document.getElementById("inputComment");
        let commentExists = false;

        // CHECK IF COMMENT EXISTS
        for (let i = 0; i < arrayComments.length; i++) {
            if (login.id == arrayComments[i]._userId && arrayComments[i]._bookId == pageBookValues._bookId) {
                commentExists = true;
            }

        }

        // CREATE NEW COMMENT IF COMMENTEXISTS == FALSE
        if (commentExists) {
            alert("Já comentou este livro!");
        }
        else {
            let newComment = new Comment(inputComment.value, login.id, pageBookValues._bookId);
            arrayComments.push(newComment);
            localStorage.commentStorage = JSON.stringify(arrayComments);
            getStoredComments();

            // PUSH SCORE TO SCORES PROPERTY
            for (let i = 0; i < arrayLivros.length; i++) {
                if (pageBookValues._bookId == arrayLivros[i]._bookId) {
                    arrayLivros[i]._scores.push(parseInt(inputScore.value));
                    localStorage.bookStorage = JSON.stringify(arrayLivros);
                    getStoredBooks();
                }

            }
        }


    })



    // REQUISITION
    requisitionButton.addEventListener("click", function (event) {
        // VARS
        let requisitionCount = 0;
        let errorMsg = "";
        let hasFine = false;


        // CHECK IF USERTYPE != 2 (USER)
        if (login.typeUser != 2) {
            errorMsg += "Apenas utilizadores podem requisitar livros!";
        }



        // VALIDATIONS
        // CHECK ALL ACTIVE REQUISITIONS OF LOGGED USER
        for (let i = 0; i < arrayUsers.length; i++) {
            if (login.id == arrayUsers[i]._userId) {
                for (let j = 0; j < arrayRequisitions.length; j++) {
                    // INCREMENT REQUISITIONCOUNT || MAX == 2
                    if (arrayUsers[i]._userId == arrayRequisitions[j]._userId) {
                        // CHECK FOR FINES
                        if (arrayRequisitions[j]._fine != 0) {
                            hasFine = true;
                        }
                        requisitionCount++;
                    }
                }
            }
        }

        // CHECK REQUISITIONCOUNT || MAX == 2
        if (requisitionCount >= 2) {
            errorMsg += "Já tem 2 livros requisitados!";
        }
        if (hasFine) {
            errorMsg += "\n Tem multas por pagar! Por favor pague antes de requesitar outro livro."
        }

        // CHECK FOR ERRORS
        if (errorMsg) {
            alert(errorMsg);
        }
        else {
            //REGISTAR NOVA REQUISITION
            let newRequisiton = new Requisition(pageBookValues._bookId, login.id);
            arrayRequisitions.push(newRequisiton);
            localStorage.requisitionStorage = JSON.stringify(arrayRequisitions);

            //APAGAR NOTIFICAÇÃO DESTE TITULO CASO EXISTA
            for (let i = 0; i < arrayNotifications.length; i++) {
                if (arrayNotifications[i]._userId == login.id && bookTitle.innerHTML == arrayNotifications[i]._bookTitle) {
                    arrayNotifications.splice(i, 1)
                    localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                }
            }
            //IR PARA A PAGINA DAS REQUISIÇÕES
            window.location = "userRequisitions.html";
        }








    })







}


