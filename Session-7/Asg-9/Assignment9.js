console.log("created promise:")
let project=true;
let pro=new Promise((fulfilled,rejected)=>{
    setTimeout(() => {
        if(project===true){
            fulfilled("Project completed");
        }
        else{
        rejected("Project not completed");
        }
    }, 5000);
})
pro.then((m)=>{
    console.log(m)
})
pro.catch((m)=>{
    console.log(m)
})