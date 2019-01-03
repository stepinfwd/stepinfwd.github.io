var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);

function putindiv() {
    branches = document.getElementById("branches");
    var database = firebase.database().ref().child('events/');

    database.once('value', snap => {
        snap.forEach(snapshot => {
            var div = document.createElement('div');
            var elem = div;
            elem.setAttribute("class", "col-lg-4")
// Set color to purple
            elem.style.color = 'purple';

// Set the background color to a light gray
            elem.style.backgroundColor = '#e5e5e5';

// Set the height to 150px
            elem.style.height = '10vw';

            div.id = snapshot.key;
            div.innerHTML = "<p>" + snapshot.key + "</p>";
            console.log("showevents('" + snapshot.key + "');");
            div.setAttribute("onclick", "showevents('" + snapshot.key + "');");
            branches.appendChild(div)
        });
    });

}


function showevents(branch) {
    localStorage.setItem('branch-selector', branch);
    document.location = "evetransition.html"


}