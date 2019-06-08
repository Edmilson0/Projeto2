//let arrayLivros;
//let books;
window.onload = function() {

    // INITIATE FUNCTIONS 
    loginUser();
    allowLogout();
    //getStoredBooks();
    getStoredBibliotecas();
    getStoredCategorias();
    getStoredRequisitions();
    showUserNotifications();

    getBooks().then(result => {
        books = result.data;
        console.log(books)
        // VARS
        let fullBooksCount;
        if (parseInt(books.length % 12) == 0) {
            fullBooksCount = parseInt(books.length / 12);
        }
        else {
            fullBooksCount = parseInt(books.length / 12) + 1;
        }
        let currentBooksCount = 1;
        let startingCount = 0;
        let finishCount = 11;
        let arrayFilteredBooks = [];
        let filteredStartingCount = 0;
        let paginationDiv = document.getElementById("paginationDiv");
        let clearBtn = document.getElementById("clearBtn");
        let displayNumberOfPages = document.getElementById("displayNumberOfPages");
        displayNumberOfPages.innerHTML = currentBooksCount + " de " + fullBooksCount;

        // CALL FEED BOOKS
        feedBooks(startingCount, finishCount, books);


        // FILTER FUNCTIONS
        let categoryFilter = document.getElementById("categoryFilter");
        let filterForm = document.getElementById("filterForm");
        let libraryFilter = document.getElementById("libraryFilter");
        let sortingFilter = document.getElementById("sortingFilter");
        let sortingForm = document.getElementById("sortingForm");






        // TODO FILTERS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // ADD OPTIONS TO SELECTS
        // CATEGORY SELECT
        categoryFilter.innerHTML += "<option value='todas' selected>Todas as categorias</option>";
        getCategories().then(result => {
            categories = result.data;
            for (let i = 0; i < categories.length; i++) {
                categoryFilter.innerHTML += "<option value='" + categories[i]._id + "'>" + categories[i].nameCategory + "</option>";

            }
        })

        // LIBRARY SELECT
        libraryFilter.innerHTML += "<option value='todas' selected>Todas as bibliotecas</option>";
        getLibraries().then(result => {
            libraries = result.data;
            for (let i = 0; i < libraries.length; i++) {
                libraryFilter.innerHTML += "<option value='" + libraries[i]._id + "'>" + libraries[i].adress + "</option>";

            }
        })

        // FILTER EVENT
        filterForm.addEventListener("submit", function(event) {
            arrayFilteredBooks.length = 0;

            if ((categoryFilter.value == "todas") && (libraryFilter.value == "todas")) {
                window.location.replace = "catalog.html";
            }
            else {
                for (let i = 0; i < books.length; i++) {
                    if ((categoryFilter.value == books[i].categoryId) && (libraryFilter.value == books[i].libraryId) ||
                        (categoryFilter.value == "todas") && (libraryFilter.value == books[i].libraryId) ||
                        (categoryFilter.value == books[i].categoryId) && (libraryFilter.value == "todas")) {
                        arrayFilteredBooks.push(books[i]);
                    }

                }
                feedBooks(filteredStartingCount, arrayFilteredBooks.length, arrayFilteredBooks);
                paginationDiv.style.display = "none";
                event.preventDefault();
            }
        })


        // EVENT LISTENER FOR SEARCH BAR
        let searchForm = document.getElementById("searchForm");
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // VARS
            let searchBar = document.getElementById("searchBar");

            // FUNCTIONS
            searchBookItems(searchBar.value);
            feedBooks(filteredStartingCount, arrayFilteredBooks.length, arrayFilteredBooks);
            console.log(paginationDiv)
            paginationDiv.style.display = "none";
            searchForm.style.display = "none";
            clearBtn.style.display = "block";

        })


        // CLEAR BTN EVENT
        clearBtn.addEventListener("click", function(event) {
            event.preventDefault();
            window.location = "catalog.html";
        })


        // SEARCH BAR
        function searchBookItems(input) {
            input = searchBar.value.toUpperCase();
            // LOOP TO CHECK 
            for (i = 0; i < books.length; i++) {
                if ((books[i].title.toUpperCase().indexOf(input) > -1) || (books[i].author.toUpperCase().indexOf(input) > -1)) {
                    arrayFilteredBooks.push(books[i]);
                }
            }
        }



        // BUTTONS FOR "PAGINATION"
        let previousPageBtn = document.getElementById("previousPageBtn");
        let nextPageBtn = document.getElementById("nextPageBtn");

        // EVENT LISTENER PREVIOUS
        previousPageBtn.addEventListener("click", function(event) {
            event.preventDefault();

            // CONDITION CHECK 
            if (startingCount != 0) {
                startingCount -= 12;
                finishCount -= 12;
                currentBooksCount--;
                feedBooks(startingCount, finishCount, books);
                displayNumberOfPages.innerHTML = currentBooksCount + " de " + fullBooksCount;
            }
            else {
                feedBooks(startingCount, finishCount, books);
            }
        })

        // EVENT LISTENER PREVIOUS
        nextPageBtn.addEventListener("click", function(event) {
                event.preventDefault();

                if (finishCount < books.length - 1) {
                    startingCount += 12;
                    finishCount += 12;
                    currentBooksCount++;
                    feedBooks(startingCount, finishCount, books);
                    displayNumberOfPages.innerHTML = currentBooksCount + " de " + fullBooksCount;
                }
                else {
                    feedBooks(startingCount, finishCount, books);
                }

            })



            // SORT SELECT
            -
            sortingFilter.addEventListener("change", function(event) {
                event.preventDefault();
                if (sortingFilter.value == "rateDown") {
                    sortByScoreDown();
                    feedBooks(startingCount, finishCount, arrayLivros);
                }
                if (sortingFilter.value == "rateUp") {
                    sortByScoreUp();
                    feedBooks(startingCount, finishCount, arrayLivros);
                }
                if (sortingFilter.value == "dateDown") {
                    sortByReleaseDateDown();
                    feedBooks(startingCount, finishCount, arrayLivros);
                }
                if (sortingFilter.value == "dateUp") {
                    sortByReleaseDateUp();
                    feedBooks(startingCount, finishCount, arrayLivros);
                }
            })






    })

}




////GET BOOKS
///get books
async function getBooks() {

    try {
        return await axios.get("https://edmilson-edmilson0.c9users.io/books")
    }
    catch (err) {
        console.log(err)
    }
}
