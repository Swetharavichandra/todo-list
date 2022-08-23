let input=document.querySelector(".enterlist");
let button=document.querySelector(".addtask");
let tasks=document.querySelector(".tasks");

//adding Task
button.addEventListener('click',(e)=>{
    if(input.value.trim()!=0){
        let newtask=document.createElement("div");
        newtask.classList.add('addedlist')
        newtask.innerHTML=`
        <p>${input.value}</p>
            <div class="buttons">
                <button class="delete">Delete</button>

            </div>
        
        
        `
        tasks.appendChild(newtask);
        input.value="";
    }
    else{
        alert("Enter a Task")
    }
})

//deleting the tasks
tasks.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
    }
   

}
)

