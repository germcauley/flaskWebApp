$(document).ready(function () {
    console.log("test");


    $("button").click(function () {
        var url = 'https://randomuser.me/api/';
        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                var firstname = data.results[0].name.first;
                var lastname = data.results[0].name.last;
                var usernametxt = data.results[0].login.username;
                var emailtxt = data.results[0].email;
                var citytxt = data.results[0].location.city;
                var pic = data.results[0].picture.medium;
                console.log(firstname);
                console.log(lastname);
                console.log(usernametxt);
                console.log(emailtxt);
                console.log(citytxt);
                console.log(pic);
            })
            .catch(function (err) {
                console.log(err);
            });
    });


});