import { title } from 'process';
import * as getClueFromPromise from 'promise-version.js';
import * as getClueFromAsyncFunction from 'async-await-version.js';
import * as getClueFromCallback from 'callback-version.js';


const usePromiseButton = document.getElementById('use-promise');
const useAsyncButton = document.getElementById('use-async-await');
const useCallbackButton = document.getElementById('use-callback');
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const valueDiv = document.getElementById('value');
const categoryTitleDiv = document.getElementById('category-title');
const invalidCountDiv = document.getElementById('invalid-count');
function htmlUpdate(clue) {
    questionDiv.innerHTML = clue.question;
    answerDiv.innerHTML = clue.answer;
    valueDiv.innerHTML = clue.value;
    categoryTitleDiv.innerHTML = clue.category.title;
    if (clue.invalidCount && clue.invalidCount > 0) {
        invalidCountDiv.innerHTML = 'invalid';
    }
    else {
        invalidCountDiv.innerHTML = 'valid';
    }
}

window.addEventListener("DOMContentLoaded", () => {
    usePromiseButton.addEventListener('click', () => {
        getClueFromPromise()
            .then(htmlUpdate)
            .catch(err => {
                console.error(err.message);
            })
    })

    useAsyncButton.addEventListener('click', async () => {
        try {
            let clue = await getClueFromAsyncFunction();
            htmlUpdate(clue);
        } catch (error) {
            console.log(error.message)
        }
    })

    useCallbackButton.addEventListener('click', () => {
        getClueFromCallback((error, clue) => {
            if (error !== null) {
                console.error(error);
            }
            else {
                htmlUpdate(clue);
            }
        })
    })





})
