var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);

// var branch = localStorage['branch'];
// localStorage.removeItem( 'branch' );
//
// Clear the localStorage


function showevents(branch) {
    box = document.getElementsByClassName("container")[0];
    branches = document.createElement("div");
    branches.setAttribute("class", "row sec-container");

    var storage = firebase.storage();
    var database = firebase.database().ref().child('events/' + branch);
    number = 0;

    database.once('value', function (snap) {
        snap.forEach(function (snapshot) {
            var div = document.createElement('div');
            div.setAttribute("class", "col-lg-4 ind-events col-xs-12 ");


            div.id = snapshot.key;

            div.innerHTML = "<p>" + snapshot.key + "</p>";


            div.setAttribute("onclick", "showdetails('" + snapshot.key + "');");

            branches.appendChild(div);
            number += 1;
            if (number === 3) {
                number = 0;
                box.appendChild(branches);
                branches = document.createElement("div");
                branches.setAttribute("class", "row sec-container");

            }

            storage.ref('events/' + branch +"/"+snapshot.key + "/event.svg").getDownloadURL().then(function (url) {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:

                // Or inserted into an <img> element:
                var im = document.createElement('img');
                im.src = url;
                div.appendChild(im)
            }).catch(function (error) {
                console.log(error)
                // Handle any errors
            });

        });

        box.appendChild(branches);
    });

}


function showdetails(event) {
    localStorage.setItem('event-selector', event);
    document.location = "eve-details.html"


}