async function getposts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    let t = document.querySelector('table');
    let tab = document.querySelector('table tbody');
    let g = document.querySelector('#grid');
    data.forEach(i =>{
        let div = document.createElement('div');
        div.classList.add('card');
        let p = document.createElement('p');
        p.textContent=i.userId;
        div.appendChild(p);
        let h3Id = document.createElement('p');
        h3Id.textContent=i.id;
        div.appendChild(h3Id);
        let h3Title = document.createElement('p');
        h3Title.textContent=i.title;
        div.appendChild(h3Title);
        g.appendChild(div);
    });
    for (let i = 0; i < data.length; i++){
        let tr = document.createElement('tr');
        for (let k = 0; k < 3; k++){
            let td = document.createElement('td');
            if (k == 0)
                td.textContent = data[i].userId;
            else if (k == 1)
                td.textContent = data[i].id;
            else
                td.textContent = data[i].title;
            tr.appendChild(td);
        }
        tab.appendChild(tr);
    }
}
getposts();
