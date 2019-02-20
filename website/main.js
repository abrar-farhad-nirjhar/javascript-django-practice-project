const call = new API()

const ui = new UI()

call.get()
.then(data=>{

    ui.CreateList(data)
    let buttonArray = document.getElementsByTagName('button')
    // console.log(buttonArray)
    for(let i=1; i<buttonArray.length;i++){
        document.getElementById(buttonArray[i].value).addEventListener('click',(e)=>{
            e.preventDefault()
            call.delete(buttonArray[i].value)
            .then(data=>{
                console.log(data)
                location.reload()
            })

            
        });
    }
    

})

document.getElementById('task').addEventListener('click',(e)=>{
    e.preventDefault()
    value = document.getElementById('task-text').value

    data = {
        task:value
    }
    call.post(data)
    .then(data=>{
        console.log(data)
        location.reload()
    })
    .catch(err=>console.log("There was an error"))

    document.getElementById('task-text').value = ""
})




// buttonArray.forEach(element => {
    
// });


