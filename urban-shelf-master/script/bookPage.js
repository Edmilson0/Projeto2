window.onload = function () {
    //console.log("bookpagevalue:" + pageBookValues)
    // INITIATE FUNCTIONS   
    getLoggedUser(getTokenStorage()).then(result => {

        loggedUserToken = result.data;
        console.log(loggedUserToken)
        changesLogedUser(loggedUserToken)
        
        //checkNotification()
        showUserNotifications();

        // ADD COMMENT
        let commentForm = document.getElementById("commentForm");
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault()
            getComments().then(result => {
                comments = result.data;
                //console.log(comments)
                getUsers().then(result => {
                    users = result.data;
                    //console.log(users)
                    // VARS

                    let inputComment = document.getElementById("inputComment");
                    let commentExists = false;

                    // CHECK IF COMMENT EXISTS
                    for (let i = 0; i < comments.length; i++) {
                        if (loggedUserToken._id == comments[i].userId && comments[i].bookId == pageBookValues._id) {
                            commentExists = true;
                        }

                    }

                    // CREATE NEW COMMENT IF COMMENTEXISTS == FALSE
                    if (commentExists) {
                        alert("Já comentou este livro!");
                    }
                    else {
                        let newComment = new Comment(inputComment.value, loggedUserToken._id, pageBookValues._bookId);
                        let newCommentPost = {
                            bookId: pageBookValues._id,
                            userId: loggedUserToken._id,
                            txtComment: inputComment.value,
                            commentDate: new Date()
                        }
                        //arrayComments.push(newComment);
                        console.log(newCommentPost)
                        postComment(newCommentPost).then(result => {
                            comment = result.data;
                            console.log(comment)
                            getComments().then(result => {
                                comments = result.data;
                                commentSection.innerHTML = feedCommentSection();
                            })
                            commentForm.reset();

                        })
                        //localStorage.commentStorage = JSON.stringify(arrayComments);
                        //getStoredComments();
                        //event.preventDefault()
                        // PUSH SCORE TO SCORES PROPERTY
                        //for (let i = 0; i < books.length; i++) {
                        // if (pageBookValues._id == books[i]._id) {
                        //books[i].scores.push(parseInt(inputScore.value));
                        //localStorage.bookStorage = JSON.stringify(arrayLivros);
                        // getStoredBooks();
                        // event.preventDefault()
                        // }

                        //}

                        let arrayScores = pageBookValues.scores;
                        arrayScores.push(parseInt(inputScore.value))
                        pageBookValues.scores = arrayScores;
                        localStorage.bookPageValues = JSON.stringify(pageBookValues);
                        //localStorage.pageBookValues.scores=JSON.stringify(arrayScores);
                        putBookSores(arrayScores, pageBookValues._id).then(result => {
                            book = result.data;
                            console.log(arrayScores)
                            //carregarBooks()
                            console.log(pageBookValues)
                            //localStorage.removeItem(pageBookValues)
                            localStorage.bookPageValues = JSON.stringify(pageBookValues);
                            feedBookInfo()
                        })

                        //event.preventDefault()

                    }

                })
            })
        })

    })

    //getStoredBooks();

    loginUser();


    allowLogout();

    //GET TAGS

    getTags().then(result => {
        tags = result.data;
        getCategories().then(result => {
            //GET CATEGORIES
            categories = result.data;

            feedBookInfo()

            console.log(categories)
        })
        console.log(tags)
    })

    //GET REQUISITIONS
    getRequisitions().then(result => {
        getBookPageValues()
        requisitions = result.data;
        for (let i = 0; i < requisitions.length; i++) {
            if ((requisitions[i].bookId == pageBookValues._id) && (requisitions[i].returnDate == null)) {

                alreadyRequestedHeader.style.display = "block";
                requisitionButton.style.display = "none";
                //if(loggedUserToken._id==requisitions[i].userId){
                notificationRequestBtn.style.display = "block";//}
            }

        }
        //console.log("requisitons: "+requisitions)
    })

    //getStoredComments();
    // TEST
    // let requisitionTest = new Requisition(1, 3)
    // requisitionTest._requisitionDateFull = new Date().getTime()-(1000*3600*24*40)
    // requisitionTest._fine = 10

    // arrayRequisitions.push(requisitionTest)
    // localStorage.requisitionStorage = JSON.stringify(arrayRequisitions)

    //getStoredRequisitions();
    //getStoredBibliotecas();




    //getStoredNotifications();








    // VARS
    let requisitionButton = document.getElementById("requisitionButton");
    let alreadyRequestedHeader = document.getElementById("alreadyRequestedHeader");
    let notificationRequestBtn = document.getElementById("notificationRequestBtn");

    /*// CHECK IF BOOK IS ALREADY REQUESTED
    for (let i = 0; i < arrayRequisitions.length; i++) {
        if (arrayRequisitions[i]._bookId == pageBookValues._bookId) {
            alreadyRequestedHeader.style.display = "block";
            requisitionButton.style.display = "none";
            notificationRequestBtn.style.display = "block";
        }

    }*/



    let commentSection = document.getElementById("commentSection");
    getComments().then(result => {
        comments = result.data;
        console.log(comments)
        getUsers().then(result => {
            users = result.data;
            console.log(users)
            commentSection.innerHTML = feedCommentSection();
        })
    })


   

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

        /* var d = pageBookValues.releaseDate
             let days=d.getUTCDays(); // Hours
             let months=d.getUTCMonths();
             let years=d.getUTCYears();
             let RealeseDate=days+"/"+months+"/"+years;*/





        bookPageBookCover.src = pageBookValues.cover;
        if (pageBookValues.scores.length != 0) {
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
        bookReleaseDate.innerHTML = "em " + pageBookValues.releaseDate.slice(0, 10);
        bookPublisher.innerHTML = pageBookValues.publisher;
        bookPagesNumber.innerHTML = "Nº Páginas: " + pageBookValues.numberPages;
        bookDonationDate.innerHTML = "Doado em: " + pageBookValues.donationDate.slice(0, 10);
        for (let i = 0; i < categories.length; i++) {
            if (categories[i]._id == pageBookValues.categoryId) {
                bookCategory.innerHTML = "Categoria: " + categories[i].nameCategory;
            }
        }
        bookTags.innerHTML = "Tags: " + getTagNames();


        bookSynopsis.innerHTML = pageBookValues.synopsis;

    }


     //let notificationRequestBtn = document.getElementById("notificationRequestBtn")
    //FUNÇÃO PRA VERIFICAR SE O USER JÁ TENS NOTIFICAÇÕES PRA ESTE TITULO
    function checkNotification() {
        getNotifications().then(result => {
            notifications = result.data;
        let hasBookNotification = false
        console.log(hasBookNotification)
        for (let i = 0; i < notifications.length; i++) {
            if (notifications[i].title == bookTitle.innerHTML && notifications[i].userId == loggedUserToken._id) {
                
                hasBookNotification = true
                
            }
        }

        if (hasBookNotification) {
            notificationRequestBtn.innerHTML = "<i class='fas fa-bell-slash'></i>"
            document.getElementById("alreadyRequestedHeader").innerText = "Será notificado quando este título estiver disponível para requisição."

            //REMOVER EVENT LISTENER PRA CRIAR NOTIFICAÇÃO
            notificationRequestBtn.removeEventListener("click", function () {
                let newNotification = {userId:loggedUserToken.id, title:bookTitle.innerHTML}

                //arrayNotifications.push(newNotification)
                postNotification(newNotification).then(result => {
                    requisition = result.data;
                   //checkNotification();
                })
                //localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                
            })
            //ADICIONAR EVENT LISTENER PRA REMOVER NOTIFICAÇÃO
            notificationRequestBtn.addEventListener("click", function () {
                for (let i = 0; i < notifications.length; i++) {
                    if (notifications[i].title == bookTitle.innerHTML && notifications[i].userId == loggedUserToken._id) {
                        //arrayNotifications.splice(i, 1)
                        delNotification(id).then(result => {
                            notification = result.data;
                           //checkNotification();
                            
                        })
                        //localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                        
                    }
                }
            })


        }

        else {
            notificationRequestBtn.innerHTML = "<i class='fas fa-bell'></i>"
            document.getElementById("alreadyRequestedHeader").innerText = "Este livro já se encontra requisitado."

            //REMOVER EVENT LISTENER PRA REMOVER NOTIFICAÇÃO
            notificationRequestBtn.removeEventListener("click", function () {
                for (let i = 0; i < notifications.length; i++) {
                    if (notifications[i].title == bookTitle.innerHTML && notifications[i].userId == loggedUserToken._id) {
                        //arrayNotifications.splice(i, 1)
                        delNotification(id).then(result => {
                            notification = result.data;
                            //checkNotification();
                            
                        })
                        //localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                        checkNotification();
                    }
                }
            })
            //ADICIONAR EVENT LISTENER PRA CRIAR NOTIFICAÇÃO
            notificationRequestBtn.addEventListener("click", function () {
                //let newNotification = new BookNotification(login.id, bookTitle.innerHTML)
                let newNotification = {userId:loggedUserToken.id, title:bookTitle.innerHTML}
                postNotification(newNotification).then(result => {
                    requisition = result.data;
                    //checkNotification();
                })
                //arrayNotifications.push(newNotification)
                //localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                checkNotification();
            })
        }
    })
    //checkNotification()
    }

   // checkNotification()


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
        for (let i = 0; i < tags.length; i++) {
            for (let j = 0; j < pageBookValues.tags.length; j++) {
                if (tags[i]._id == pageBookValues.tags[j]) {
                    if (strHtml.length == 0) {
                        strHtml += tags[i].tagName;
                    }
                    else {
                        strHtml += ", " + tags[i].tagName;
                    }

                }

            }
        }
        return strHtml;
    }


    // DISPLAY COMMENTS FUNCTION
    function feedCommentSection() {
        getBookPageValues();
        let strHtml = "";
        for (let i = 0; i < comments.length; i++) {
            if (pageBookValues._id == comments[i].bookId) {
                strHtml += "<div class='row row-fluid mb-5'>" +
                    "<div class='userCommentsPhoto col-md-6 mb-3'>";

                for (let j = 0; j < users.length; j++) {
                    if (users[j]._id == comments[i].userId) {
                        if (users[j].photo) {
                            strHtml += "<img class='userCommentImg img img-fluid mr-2' alt='' src='" + users[j].photo + "'/><span>" + users[j].username + "</span>";
                        }
                        else {
                            strHtml += "<img class='userCommentImg img img-fluid mr-2' alt='' src='images/userIcon(white).png'/><span>" + users[j].username + "</span>";
                        }
                    }
                }

                strHtml += "</div>" +
                    "<div class='userCommentsTxt col-md-10 offset-md-1'>" +
                    "<p>" + comments[i].txtComment + "</p>" +
                    "</div>" +
                    "</div>";



            }
        }

        return strHtml;
    }






    // REQUISITION
    requisitionButton.addEventListener("click", function (event) {
        // VARS
        let requisitionCount = 0;
        let errorMsg = "";
        let hasFine = false;


        // CHECK IF USERTYPE != 2 (USER)
        if (loggedUserToken.userTypeId != 2) {
            errorMsg += "Apenas utilizadores podem requisitar livros!";
        }



        // VALIDATIONS
        // CHECK ALL ACTIVE REQUISITIONS OF LOGGED USER

        getRequisitions().then(result => {
            requisitions = result.data;

            for (let j = 0; j < requisitions.length; j++) {
                // INCREMENT REQUISITIONCOUNT || MAX == 2
                if (loggedUserToken._id == requisitions[j].userId && requisitions[j].returnDate == null) {
                    let dataLimite = (new Date(requisitions[j].requisitionDate).getTime() + (1000 * 3600 * 24 * 30))
                    let dataAtual = new Date().getTime()

                    if (dataAtual > dataLimite) {
                        hasFine = true
                    }

                    requisitionCount++;
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
                getBookPageValues()
                //REGISTAR NOVA REQUISITION
                let d = new Date();
                //let dd=d.setMonth(1)
                let newRequisiton = {

                    userId: loggedUserToken._id,
                    bookId: pageBookValues._id,
                    requisitionDate: d,
                    //fine:0
                    //returnDate:dd

                }

                //arrayRequisitions.push(newRequisiton);
                //localStorage.requisitionStorage = JSON.stringify(arrayRequisitions);

                //APAGAR NOTIFICAÇÃO DESTE TITULO CASO EXISTA
                for (let i = 0; i < arrayNotifications.length; i++) {
                    if (arrayNotifications[i]._userId == login.id && bookTitle.innerHTML == arrayNotifications[i]._bookTitle) {
                        arrayNotifications.splice(i, 1)
                        localStorage.notificationStorage = JSON.stringify(arrayNotifications)
                    }
                }
                postRequisition(newRequisiton).then(result => {
                    requisition = result.data;
                    console.log(requisition)
                    getRequisitions().then(result => {
                        requisitions = result.data;
                        for (let i = 0; i < requisitions.length; i++) {
                            if (requisitions[i].bookId == pageBookValues._id) {
                                alreadyRequestedHeader.style.display = "block";
                                requisitionButton.style.display = "none";
                                notificationRequestBtn.style.display = "block";
                            }

                        }

                    })
                    window.location = "userRequisitions.html";
                })
                //IR PARA A PAGINA DAS REQUISIÇÕES

            }



        })




    })







}


