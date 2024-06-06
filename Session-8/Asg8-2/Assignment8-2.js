const form = document.querySelector("form");
const ul = document.querySelector('.factor');
form.addEventListener('submit', event => {
    event.preventDefault();
    ul.innerHTML=" ";
    const num = Number(form.children[0].value)
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
            let liElement = document.createElement('li');
            liElement.textContent = i;
            ul.appendChild(liElement);
        }
    }
});
