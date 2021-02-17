import * as getClueFromPromise from 'promise-version.js';

const usePromiseButton = document.getElementById('use-promise');
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const valueDiv = document.getElementById('value');
const categoryTitleDiv = document.getElementById('category-title');


window.addEventListener("DOMContentLoaded", () => {
    usePromiseButton.addEventListener('click', () => {
        getClueFromPromise()
            .then()
    })







})