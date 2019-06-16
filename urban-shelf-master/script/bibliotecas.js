window.onload = function () {
    getLoggedUser(getTokenStorage()).then(result => {

        loggedUserToken = result.data;
        console.log(loggedUserToken)
        changesLogedUser(loggedUserToken)
    })
    getLibraries().then(result => {
        libraries=result.data;
        displayMapMarkes();
    })
    
    loginUser();
    allowLogout();
    getStoredRequisitions();
    showUserNotifications();
}