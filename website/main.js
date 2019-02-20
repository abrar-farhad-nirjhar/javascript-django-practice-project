const call = new API()

const ui = new UI()

call.get()
.then(data=>{

    ui.CreateList(data)
    let buttonArray = document.getElementsByTagName('button')
    console.log(buttonArray[1].value)

})




// buttonArray.forEach(element => {
    
// });


