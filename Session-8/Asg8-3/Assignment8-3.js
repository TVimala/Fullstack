const f=document.querySelector('form');
const first=f.children[0]
const second=f.children[1]
const btn=document.querySelectorAll('button')
btn.forEach(i=>{
i.addEventListener('click',event=>{
    event.preventDefault();
    console.log(event)
    const n1=Number(f.first.value)
    const n2=Number(f.second.value)
    let temp=0;
    if(i.id==="add"){
        temp=n1+n2
    }
    else if(i.id==="sub"){
        temp=n1-n2
      }
    else if(i.id==="mul"){
        temp=n1*n2
      }
    else if(i.id==="div"){
        temp=n1/n2
      }
    else if(i.id==="mod"){
        temp=n1%n2
    }
    console.log(temp)
    let h2=document.querySelector('h2')
    h2.textContent=temp;    
})
})