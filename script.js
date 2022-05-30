const worker = new Worker('worker.js');
const sumButton = document.querySelector('#sumButton');
const bgButton = document.querySelector('#bgButton');

sumButton.addEventListener('click', (event) => {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) 
        sum += i;

    alert(`The final sum is ${sum}`);
})

bgButton.addEventListener('click', event => {
    if(document.body.style.background !== 'green')
        document.body.style.background = 'green';
    else 
        document.body.style.background = 'blue';
});