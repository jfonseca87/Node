const jwt = require("jsonwebtoken");

const jwtGenerator = (id, name, email) => {
    return new Promise((resolve, reject) => {
        const payload = { id, name, email };

        jwt.sign( payload, process.env.JWT_KEY, {
            expiresIn: "2h"
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("An error ocurred creating the jwt token");
            }

            resolve(token);
        })
    })
}

module.exports = { jwtGenerator };