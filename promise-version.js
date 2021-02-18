const http = require('http');

export function getClue() {
    return fetch('https://jservice.xyz/api/random-clue"')
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.status)
                    }
                res.json()
                .then((res) => res);
                
            })
            .catch(err => console.log(err));
}

