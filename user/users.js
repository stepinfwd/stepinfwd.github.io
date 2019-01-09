var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        uid = user.uid;
        var username = document.getElementById('name');
        var database = firebase.database().ref().child('users/' + uid);
        database.once('value', function (snap) {
            username.innerText = "Hi " + snap.val().name;
        });
        var table = document.querySelector('#usertable tbody');
        var events = firebase.database().ref().child('users/' + uid + '/events');
        events.on('value', function (snap) {
            while (table.hasChildNodes()) {
                table.removeChild(table.firstChild);
            }

            snap.forEach(function (snapshot) {
                var eve = snapshot.val();
                var row = table.insertRow(-1);
                cell = row.insertCell(-1);
                cell.innerHTML = snapshot.key;
                cell = row.insertCell(-1);
                cell.innerHTML = eve;


            })
        });
    }
    else {
        document.location = "../signup/index.html"
    }
});

function signout() {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
    }, function(error) {
        console.error('Sign Out Error', error);
    });

}