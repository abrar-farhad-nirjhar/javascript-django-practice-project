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




// buttonArray.forEach(element => {
    
// });


