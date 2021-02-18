export function getClue(callback) {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        // Step 2.2
        if (xhr.status !== 200) callback(xhr.status);

        // Step 2.3
        else (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(null, data);
        };
    })    
    xhr.open('GET', 'https://jservice.xyz/api/random-clue');
    xhr.send();
}
