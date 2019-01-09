var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
    if(user) {
        uid = user.uid
        var username = document.getElementById('name');
        var database = firebase.database().ref().child('users/' + uid);
        database.once('value', snap => {
            username.innerText = "Hi " + snap.val().name
    })
    }
});
