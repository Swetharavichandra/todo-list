let input=document.querySelector(".enterlist");
let button=document.querySelector(".addtask");
let tasks=document.querySelector(".tasks");
let editme=document.querySelector("edit")

//adding Task
button.addEventListener('click',(e)=>{
    if(input.value.trim()!=0){
        let newtask=document.createElement("div");
        newtask.classList.add('addedlist')
        newtask.innerHTML=`
        <p>${input.value}</p>
            <div class="buttons">
            <button class="edit">Edit</button>
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

// Completed task

// tasks.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("edit")){
//         e.target.parentElement.parentElement.classList.toggle("completed");  
//     }
   

// }
// )

tasks.addEventListener("click",(e)=>{
    if(e.target.classList.contains("edit")){
        let curinput=document.createElement("input")
        
        curinput.type="text"
        curinput.value=input.value
        curinput.innerHTML=`
        <p>${input.value}</p>
        
            
        
        
        `
        
        tasks.appendChild(curinput);
        curinput.parentElement.add(curinput.innerHTML=`
        <p>${input.value}</p>
        
            
        
        
        `
        );
        
        
    } 
     
    })
   






