import { title } from 'process';
import * as getClueFromPromise from 'promise-version.js';

const usePromiseButton = document.getElementById('use-promise');
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







})
