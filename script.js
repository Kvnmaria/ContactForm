var firebaseConfig = {
    apiKey: "AIzaSyCHWu-h9wh6Elc0n4zhbNK2_fek9eg7Db4",
    authDomain: "fir-1af4a.firebaseapp.com",
    databaseURL: "https://fir-1af4a-default-rtdb.firebaseio.com",
    projectId: "fir-1af4a",
    storageBucket: "fir-1af4a.appspot.com",
    messagingSenderId: "187704191189",
    appId: "1:187704191189:web:9e4e5f0d6dfdc7c9721a5c",
    measurementId: "G-TNGVRFX497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let contactInfo = firebase.database().ref("infos");

// Listen for a submit
// addEventListener("submit", submitForm);
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {

    e.preventDefault();

    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    console.log(name, email, message);

    saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();
}

// Save infos to Firebase

function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });
}

//retrieveInfos();

// Retrieve Information

// function retrieveInfos() {
//     let ref = firebase.database().ref("infos");
//     ref.on("value", gotData);
// }



// function gotData(data) {

//     let info = data.val();
//     let keys = Object.keys(info);

//     for (let i = 0; i < keys.length; i++) {

//         let infoData = keys[i];
//         let name = info[infoData].name;
//         let email = info[infoData].email;
//         let message = info[infoData].message;

//         console.log(name, email, message);


//         let infosResult = document.querySelector(".infosResult");

//         infosResult.innerHTML += `<table border="2" width ="240" height="400">

//         <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Message</th>
//         </tr>

//         <tr>
//             <td>${name}</td>
//             <td style = "padding-left:30px">${email}</td>
//             <td>${message}</td>
//         </tr>


//         </table>`





//     }
// }

