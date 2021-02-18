import { title } from 'process';
import * as getClueFromPromise from 'promise-version.js';
import * as getClueFromAsyncFunction from 'async-await-version.js';

const usePromiseButton = document.getElementById('use-promise');
const useAsyncButton = document.getElementById('use-async-await')
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const valueDiv = document.getElementById('value');
const categoryTitleDiv = document.getElementById('category-title');
const invalidCountDiv = document.getElementById('invalid-count');

window.addEventListener("DOMContentLoaded", () => {
    usePromiseButton.addEventListener('click', () => {
        getClueFromPromise()
            .then(res => {
                questionDiv.innerHTML = res.question;
                answerDiv.innerHTML = res.answer;
                valueDiv.innerHTML = res.value;
                categoryTitleDiv.innerHTML = res.category.title;
                if (res.invalidCount && res.invalidCount > 0) {
                    invalidCountDiv.innerHTML = 'invalid';
                }
                else {
                    invalidCountDiv.innerHTML = 'valid';
                }
            })
            .catch(err => {
                console.error(err.message);
            })
    })

    useAsyncButton.addEventListener('click', async () => {
        try {
            let clue = await getClueFromAsyncFunction();
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
        } catch (error) {
            console.log(error.message)
        }
    })







})
