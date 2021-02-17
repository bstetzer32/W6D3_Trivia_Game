const http = require('http');

export function getClue() {
    return fetch('https://jservice.xyz/api/random-clue"')
            .then((res) => {
                if (res.ok) {
                    res.json()
                    .then((res) => res);
                } else {
                    throw Error(res.status)
                }
            })
            .catch(err => console.log(err));
}

