window.onload = function () {


     //HARD CODE OVER-DUE REQUISITION
     if(localStorage.requisitionStorage == false){
        let newReq = new Requisition(1,3)
        newReq._requisitionDateFull -= (1000 * 3600 * 24 * 40)
        newReq._fine = ((new Date().getTime()-(1000 * 3600 * 24 * 40) - newReq._requisitionDateFull - (1000 * 3600 * 24 * 30))/ (1000 * 3600 * 24)).toFixed(2) + "€"
        arrayRequisitions.push(newReq)

        let newReq1 = new Requisition(2,3)
        newReq1._requisitionDateFull -= (1000 * 3600 * 24 * 10)
        newReq1._fine = ((new Date().getTime()-(1000 * 3600 * 24 * 10) - newReq._requisitionDateFull - (1000 * 3600 * 24 * 30))/ (1000 * 3600 * 24)).toFixed(2) + "€"
        arrayRequisitions.push(newReq1)

        localStorage.requisitionStorage = JSON.stringify(arrayRequisitions)
    }


    loginUser(); //EFETUAR LOGIN SE ESTE ESTIVER EM MEMÓRIA
    allowLogout();
    getStoredRequisitions();
    getStoredBooks();
    showUserNotifications();

    //1. INSERIR NOME DO UTILIZADOR NA NAVBAR E NO CABEÇALHO
    let requisitionsHeader = document.getElementById("requisitionsHeader")
    let navbarDropdown = document.getElementById("navbarDropdown")

    requisitionsHeader.innerHTML = navbarDropdown.innerText + requisitionsHeader.innerHTML //ATUALIZAR TITULO DA TABELA COM O NOME DO UTILIZADOR

    //2. ALIMENTAR TABELA COM OS LIVROS ATUALMENTE REQUISITADOS PELO USER
    let tblRequisitions = document.getElementById("tblRequisitions")


    let daysLeft = ""
    let displayFine

    for (let i = 0; i < arrayRequisitions.length; i++) {
        if (arrayRequisitions[i]._userId == login.id) { //REFERENCIAR USER ATUAL
            //2.1 CALCULAR DIAS ATÉ A ENTREGA/ PASSADOS DESDE A DATA ESTABLECIDA PARA ENTREGA
            if (new Date().getTime() < arrayRequisitions[i]._requisitionDateFull + (1000 * 3600 * 24 * 30)) {
                dateDifference = arrayRequisitions[i]._requisitionDateFull + (1000 * 3600 * 24 * 30) - new Date().getTime()
                console.log(dateDifference)
                daysLeft = (dateDifference / (1000 * 3600 * 24)).toFixed() + " dias até entrega"
            }
            else {
                dateDifference = new Date().getTime() - arrayRequisitions[i]._requisitionDateFull - (1000 * 3600 * 24 * 30)
                daysLeft = (dateDifference / (1000 * 3600 * 24)).toFixed() + " dias em atraso"
            }
            //2.2 CALCULAR MULTAS
            if ((new Date().getTime() - arrayRequisitions[i]._requisitionDateFull) / (1000 * 3600 * 24) >= 30) {
                arrayRequisitions[i]._fine = ((new Date().getTime() - arrayRequisitions[i]._requisitionDateFull - (1000 * 3600 * 24 * 30)) / (1000 * 3600 * 24)).toFixed(2) + "€"
                displayFine = arrayRequisitions[i]._fine
                localStorage.requisitionStorage = JSON.stringify(arrayRequisitions)
                getStoredRequisitions()
            }
            else {
                displayFine = "-"
            }
            console.log(arrayRequisitions[i]._requisitionId)

            let tblBookTitle
            for (let j = 0; j < arrayLivros.length; j++) {
                if (arrayRequisitions[i]._bookId == arrayLivros[j]._bookId) {
                    tblBookTitle = arrayLivros[j]._title
                }

            }

            tblRequisitions.getElementsByTagName("tbody")[0].innerHTML += "<tr>" +
                "<td class='id'>" + arrayRequisitions[i]._requisitionId + "</td>" +
                "<td class='title'>" + tblBookTitle + "</td>" + //RETORNAR TITULO DO LIVRO COM O ID CORRESPONDENTE
                "<td class='reqDate'>" + arrayRequisitions[i]._requisitionDate + "</td>" +
                "<td class='daysLeft'>" + daysLeft + "</td>" +  //NECESSÁRIO ALTERAR PARA MOSTRAR DIAS ATÉ A ENTREGA / DIAS PASSADOS DA ENTREGA
                "<td class='fine'>" + displayFine + "</td>" +
                '<td><button id="' + tblRequisitions.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length + '" type="button" class="reqButton btn btn-primary" style="width: 140px;" data-toggle="modal" data-target="#bookReturnModal"> Devolver/ Pagar</button></td>' //BOTÃO PARA DEVOLVER LIVRO/ PAGAR MULTA ////////////////////////
                + "</tr>"
        }
    }

    //3. ATUALIZAR CONTADOR DE LIVROS REQUISITADOS
    let currentRequisitions = document.getElementById("currentRequisitions")
    let tblRequisitionsBookCount = tblRequisitions.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length
    console.log(tblRequisitionsBookCount)


    currentRequisitions.innerHTML = currentRequisitions.innerHTML.replace('X', tblRequisitionsBookCount)

    //4. BOTÃO ENTREGA DE LIVRO/ PAGAMENTO DE MULTA
    //ADICIONAR EVENT LISTENER A TDS OS BOTÕES
    for (let i = 0; i < tblRequisitionsBookCount; i++) {
        document.getElementById(i).addEventListener("click", function () {
            document.getElementById("modalTitle").innerHTML = "Título"
            document.getElementById("modalRequisitionDate").innerHTML = "Data de requisição: "
            document.getElementById("modalDaysLeft").innerHTML = "Dias até entrega: "
            document.getElementById("modalFine").innerHTML = "Multa a pagar: "
            document.getElementById("modalRequisitionId").innerHTML = "ID da requisição: "

            document.getElementById("modalTitle").innerHTML = tblRequisitions.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i].getElementsByClassName("title")[0].innerHTML
            document.getElementById("modalRequisitionDate").innerHTML += "" + tblRequisitions.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i].getElementsByClassName("reqDate")[0].innerHTML
            document.getElementById("modalDaysLeft").innerHTML += "" + tblRequisitions.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i].getElementsByClassName("daysLeft")[0].innerHTML
            document.getElementById("modalFine").innerHTML += "" + tblRequisitions.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i].getElementsByClassName("fine")[0].innerHTML
            document.getElementById("modalRequisitionId").innerHTML += "" + tblRequisitions.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i].getElementsByClassName("id")[0].innerHTML
        })
    }
    //5. ESCOLHER BIBLIOTECA ONDE ENTREGAR O LIVRO
    //5.1 ALIMENTAR O SELECT DA MODAL COM AS BIBLIOTECAS EXISTENTES
    let tblBibliotecaSelect = document.getElementById("tblBibliotecaSelect")



    for (let i = 0; i < arrayBibliotecas.length; i++) {
        tblBibliotecaSelect.innerHTML += "<option value='" + arrayBibliotecas[i]._libraryId + "'>" + arrayBibliotecas[i]._adress + "</option>"
    }

    //5.2 IMPEDIR SELEÇÃO DE BIBLIOTECAS SOBRELOTADAS
    let btnReturn = document.getElementById("btnReturn")
    let count

    btnReturn.addEventListener("click", function () {


        count = 0

        for (let i = 0; i < arrayLivros.length; i++) {
            if (arrayLivros[i]._libraryId == tblBibliotecaSelect.value) {
                count++;
            }
        }


        for (let i = 0; i < arrayBibliotecas.length; i++) {
            if (tblBibliotecaSelect.value == arrayBibliotecas[i]._libraryId) {
                if (count >= arrayBibliotecas[i]._capacity) {
                    alert("A biblioteca já se encontra na sua capacidade máxima!")
                }
                else {
                    //ALTERAR PROPRIEDADES DO LIVRO EM QUESTÃO
                    //ID DO LIVRO EM QUESTÃO
                    let currentRequisitionId = document.getElementById("modalRequisitionId").innerHTML.replace("ID da requisição: ", "")
                    console.log(currentRequisitionId)
                    for (let i = 0; i < arrayRequisitions.length; i++) {
                        if (arrayRequisitions[i]._requisitionId == currentRequisitionId) {
                            for (let j = 0; j < arrayLivros.length; j++) {
                                if (arrayLivros[j]._bookId == arrayRequisitions[i]._bookId) {
                                    arrayLivros[j]._libraryId = tblBibliotecaSelect.value
                                    //COMETER LIVRO À LOCALSTORAGE
                                    localStorage.bookStorage = JSON.stringify(arrayLivros)
                                }
                            }
                            //REMOVER REQUISIÇÂO
                            arrayRequisitions.splice(i, 1);
                            console.log(currentRequisitionId)
                            console.log("abc")
                            //REMOVER REQUISIÇÃO DA LOCALSTORAGE
                            localStorage.requisitionStorage = JSON.stringify(arrayRequisitions)
                            //DAR REFRESH À PÁGINA
                            location.reload()
                        }


                    }





                }
            }
        }

    })

}
