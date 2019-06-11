// ARRAYS
let arrayUsers = [];
let arrayTags = [];
let arrayCategorias = [];
let arrayLivros = [];
let arrayBibliotecas = [];
let arrayRequisitions = [];
let arrayComments = [];
let arrayNotifications = [];
let pageBookValues;
let login;


// CLASS USER
class User {
    constructor(username, password, email, adress, photo, userType) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.adress = adress;
        this.photo = photo;
        this.userType = userType;
        this._userId = User.getLastId() + 1;
    }


    // name property
    set username(newName) {
        this._username = newName;
    }
    get username() {
        return this._username;
    }

    // password property
    set password(newPassword) {
        this._password = newPassword;
    }
    get password() {
        return this._password;
    }

    // email property
    set email(newEmail) {
        this._email = newEmail;
    }
    get email() {
        return this._email;
    }

    // adress property
    set adress(newAdress) {
        this._adress = newAdress;
    }
    get adress() {
        return this._adress;
    }

    // name property
    set photo(newPhoto) {
        this._photo = newPhoto;
    }
    get photo() {
        return this._photo;
    }

    // userType property
    set userType(newUserType) {
        this._userType = newUserType;
    }
    get userType() {
        return this._userType;
    }

    // userId property
    get userId() {
        return this._userId;
    }

    // // GERAR UM NUMERO ENTRE 1 E 10 E MULTIPLICA-O POR 65536(EM HEXADECIMAL)
    // // COVERTE-O EM STRING NA BASE 16(HEXADECIMAL)
    // // CRIA UMA SUBSTRING DE FORMA A TIRAR O PRIMEIRO ELEMENTO QUE É SEMPRE 1
    // // RETORNA EM FORMA DE XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
    // // INSPIRADO NOS CÓDIGOS DE ATIVAÇAO DE PRODUTOS/ JOGOS DE COMPUTADOR E ESTUDO SOBRE O ASSUNTO
    // static generateId(){
    //     function rand() {
    //         return Math.floor(( Math.random() + 1) * 0x10000).toString(16).substring(1);
    //     }
    //     return rand() + rand() + '-' + rand() + '-' + rand() + '-' + rand() + '-' + rand() + rand() + rand();
    // }

    // ID GENERATOR
    static getLastId() {
        let lastId = 0
        if (arrayUsers.length > 0) {
            lastId = arrayUsers[arrayUsers.length - 1]._userId;
        }
        return lastId;
    }

}

// CLASS BIBLIOTECA
class Library {
    constructor(location, adress, coordenatesLat, coordenatesLong, capacity) {
        this.location = location;
        this.adress = adress;
        this.coordenatesLat = coordenatesLat;
        this.coordenatesLong = coordenatesLong;
        this.capacity = capacity;
        this._libraryId = Library.getLastId() + 1;
    }

    // LOCATION PROPERTY
    set location(newLocation) {
        this._location = newLocation;
    }
    get location() {
        return this._location;
    }

    // ADRESS PROPERTY
    set adress(newAdress) {
        this._adress = newAdress;
    }
    get adress() {
        return this._adress;
    }

    // COORDENATESLAT PROPERTY
    set coordenatesLat(newCoordenatesLat) {
        this._coordenatesLat = newCoordenatesLat;
    }
    get coordenatesLat() {
        return this._coordenatesLat;
    }

    // COORDENATESLONG PROPERTY
    set coordenatesLong(newCoordenatesLong) {
        this._coordenatesLong = newCoordenatesLong;
    }
    get coordenatesLong() {
        return this._coordenatesLong;
    }

    // CAPACITY PROPERTY
    set capacity(newCapacity) {
        this._capacity = newCapacity;
    }
    get capacity() {
        return this._capacity;
    }

    // ID PROPERTY
    get libraryId() {
        return this._libraryId;
    }

    // ID GENERATOR
    static getLastId() {
        let lastId = 0
        if (arrayBibliotecas.length > 0) {
            lastId = arrayBibliotecas[arrayBibliotecas.length - 1]._libraryId;
        }
        return lastId;
    }

}

// CLASS CATEGORIA
class Category {
    constructor(nameCategory) {
        this.nameCategory = nameCategory;
        this._categoryId = Category.getLastId() + 1;
    }

    // NAMECATEGORY PROPERTY
    set nameCategory(newCategory) {
        this._nameCategory = newCategory;
    }
    get nameCategory() {
        return this._nameCategory;
    }

    // ID PROPERTY
    get categoryId() {
        return this._categoryId;
    }

    // ID GENERATOR
    static getLastId() {
        let lastId = 0
        if (arrayCategorias.length > 0) {
            lastId = arrayCategorias[arrayCategorias.length - 1]._categoryId;
        }
        return lastId;
    }



}

// CLASS TAG
class Tag {
    constructor(nameTag) {
        this.nameTag = nameTag;
        this._tagId = Tag.getLastId() + 1;
    }

    // NAMETAG PROPERTY
    set nameTag(newTag) {
        this._nameTag = newTag;
    }
    get nameTag() {
        return this._nameTag;
    }

    // ID PROPERTY
    get tagId() {
        return this._tagId;
    }

    // ID GENERATOR
    static getLastId() {
        let lastId = 0
        if (arrayTags.length > 0) {
            lastId = arrayTags[arrayTags.length - 1]._tagId;
        }
        return lastId;
    }


}

// CLASS BOOK
class Book {
    constructor(title, cover, autor, synopsis, releaseDate, category, tags, publisher, numberPages, condition, donerName, donationDate, libraryId, scores, comment) {
        this.title = title;
        this.cover = cover;
        this.autor = autor;
        this.synopsis = synopsis;
        this.releaseDate = releaseDate;
        this.category = category;
        this.tags = tags;
        this.publisher = publisher;
        this.numberPages = numberPages;
        this.condition = condition;
        this.donerName = donerName;
        this.donationDate = donationDate;
        this.libraryId = libraryId;
        this._bookId = Book.getLastId() + 1;
        this.scores = scores;
        this.comment = comment;

        // this._fullScore = calculateFullScore();
    }


    // TITLE PROPERTY
    set title(newTitle) {
        this._title = newTitle;
    }
    get title() {
        return this._title;
    }

    // COVER PROPERTY
    set cover(newCover) {
        this._cover = newCover;
    }
    get cover() {
        return this._cover;
    }

    // AUTOR PROPERTY
    set autor(newAutor) {
        this._autor = newAutor;
    }
    get autor() {
        return this._autor;
    }

    // SYNOPSIS PROPERTY
    set synopsis(newSynopsis) {
        this._synopsis = newSynopsis;
    }
    get synopsis() {
        return this._synopsis;
    }

    // RELEASEDATE PROPERTY
    set releaseDate(newDate) {
        this._releaseDate = newDate;
    }
    get releaseDate() {
        return this._releaseDate;
    }

    // CATEGORY PROPERTY
    set category(newCategory) {
        this._category = newCategory;
    }
    get category() {
        return this._category;
    }

    // TAGS PROPERTY
    set tags(newTags) {
        this._tags = newTags;
    }
    get tags() {
        return this._tags;
    }

    // PUBLISHER PROPERTY
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    get publisher() {
        return this._publisher;
    }

    // NUMBERPAGES PROPERTY
    set numberPages(newNumber) {
        this._numberPages = newNumber;
    }
    get numberPages() {
        return this._numberPages;
    }

    // CONDITION PROPERTY
    set condition(newCondition) {
        this._condition = newCondition;
    }
    get condition() {
        return this._condition;
    }

    // DONERNAME PROPERTY
    set donerName(newDoner) {
        this._donerName = newDoner;
    }
    get donerName() {
        return this._donerName;
    }

    // DONATIONDATE PROPERTY
    set donationDate(newDate) {
        this._donationDate = newDate;
    }
    get donationDate() {
        return this._donationDate;
    }

    // LIBRARYID PROPERTY
    set libraryId(newId) {
        this._libraryId = newId;
    }
    get libraryId() {
        return this._libraryId;
    }

    // SCORES PROPERTY
    set scores(newScore) {
        this._scores = newScore;
    }
    get scores() {
        return this._scores;
    }

    // COMMENT PROPERTY
    set comment(newComment) {
        this._comment = newComment;
    }
    get comment() {
        return this._comment;
    }

    // ID PROPERTY
    get bookId() {
        return this._bookId;
    }

    // ID GENERATOR
    static getLastId() {
        let lastId = 0
        if (arrayLivros.length > 0) {
            lastId = arrayLivros[arrayLivros.length - 1]._bookId;
        }
        return lastId;
    }


}


// CLASS REQUISITION
class Requisition {
    constructor(bookId, userId) {
        this.bookId = bookId;
        this.userId = userId;
        this._requisitionId = Requisition.getLastId() + 1;
        this._requisitionDate = Requisition.getRequisitionDate();
        this._fine = 0;
        this._requisitionDateFull = new Date().getTime();


    }
    // REQUISITIONDATEFULL PROPERTY
    get requisitionDateFull() {
        return this._requisitionDateFull;
    }

    // FINE PROPERTY
    set fine(newFine) {
        this._fine = newFine;
    }
    get fine() {
        return this._fine;
    }

    // REQUISITIONDATE PROPERTY
    get requisitionDate() {
        return this._requisitionDate;
    }

    // BOOKID PROPERTY
    set bookId(newBookId) {
        this._bookId = newBookId;
    }
    get bookId() {
        return this._bookId;
    }

    // USERID PROPERTY
    set userId(newUserId) {
        this._userId = newUserId;
    }
    get userId() {
        return this._userId;
    }

    // ID PROPERTY
    get requisitionId() {
        return this._requistionId;
    }

    // ID GENERATOR
    static getLastId() {
        let lastId = 0
        if (arrayRequisitions.length > 0) {
            lastId = arrayRequisitions[arrayRequisitions.length - 1]._requisitionId;
        }
        return lastId;
    }
    //DETERMINAR DATA DE REQUISIÇÃO
    static getRequisitionDate() {
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
        return new_dataAtual;
    }
}


class Comment {
    constructor(txtComment, userId, bookId) {
        this.txtComment = txtComment;
        this.userId = userId;
        this.bookId = bookId;
        this._commentId = Comment.getLastId() + 1;

    }

    // TXTCOMMENT PROPERTY
    set txtComment(newTxtComment) {
        this._txtComment = newTxtComment;
    }

    get txtComment() {
        return this._txtComment;
    }

    // USERID PROPERTY
    set userId(newUserId) {
        this._userId = newUserId;
    }

    get userId() {
        return this._userId;
    }

    // BOOKID PROPERTY
    set bookId(newBookId) {
        this._bookId = newBookId;
    }

    get bookId() {
        return this._bookId;
    }


    // COMMENTID PROPERTY
    get commentId() {
        return this._commentId;
    }

    // ID GENERATOR
    static getLastId() {
        let lastId = 0
        if (arrayComments.length > 0) {
            lastId = arrayComments[arrayComments.length - 1]._commentId;
        }
        return lastId;
    }


}

class BookNotification {
    constructor(userId, bookTitle) {
        this.userId = userId;
        this.bookTitle = bookTitle;
        this._notificationId = BookNotification.getLastId() + 1;

    }
    // USERID PROPERTY
    get userId() {
        return this._userId;
    }
    set userId(newUserId) {
        this._userId = newUserId;
    }

    // BOOKTITLE PROPERTY
    get bookTitle() {
        return this._bookTitle;
    }
    set bookTitle(newBookTitle) {
        this._bookTitle = newBookTitle;
    }

    // ID GENERATOR
    static getLastId() {
        let lastId = 0
        if (arrayNotifications.length > 0) {
            lastId = arrayNotifications[arrayNotifications.length - 1]._notificationId;
        }
        return lastId;
    }
}


// // HARD CODED ADMIN
// let firstAdmin = new User("adminMiguel","mutts30", "d.miguel.melo@gmail.com", 0 );
// arrayUsers.push(firstAdmin);
// localStorage.userStorage = JSON.stringify(arrayUsers);
// if(localStorage.userStorage){
//     arrayUsers = JSON.parse(localStorage.userStorage);
// }
getStoredTags();
getStoredCategorias();
getStoredUsers();
getStoredBibliotecas();
getStoredBooks();

window.onload = function() {



}
