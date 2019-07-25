const bcrypt = require("bcrypt");

module.export = function hashInput(data) {
    bcrypt.hash(data, 15)
        .then((hash) => {
            addItem.email = hash
            addItem.save()
            res.status(200).send("Added New Item")
        })
        .catch(err => res.status(555).json({ "Fault": `${err}` }))



// module.exports = function hashInput(data) {

//     const createPromise = new Promise(
//         function (resolve, reject) {
//             let payload = {};
//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(data, salt, (err, hash) => {
//                     if (err) throw err;
//                     payload = hash;
//                     // console.log(payload);
//                 });
//             });
//             if (payload != {}) {
//                 resolve(payload);
//             }
//             else {
//                 reject(Error("It broke"));
//             }
//         }
//     );
//     return createPromise
//     .then(result => console.log(result))
//     .catch(error => error) 
//     // return output
// }





// let hashInput = new Promise(function (resolve, reject) {
//     // do a thing, possibly async, then…
//     let payload = {};
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(resolve, salt, (err, hash) => {
//             if (err) throw err;
//             payload = hash;
//             console.log(payload);
//         });
//     });

//     if (payload!={}) {
//         resolve(payload);
//     }
//     else {
//         reject(Error("It broke"));
//     }
// });

// module.exports = hashInput(data);

// module.exports = function hashInput(data) {
//     let payload = {};
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(data, salt, (err, hash) => {
//             if (err) throw err;
//             payload = hash;
//             console.log(payload);
//         });
//     });
//     console.log(payload);
//     return payload;
// }