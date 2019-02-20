

class API{
    constructor(){
        this.api = 'http://localhost:8000/task/';
    }

    async get(){
        const response = await fetch(this.api)
        const data = await response.json()
        return {
            data:data
        }
    }

    async delete(id){
        const url = this.api+id
        console.log(url)
        const response = await fetch(this.api+id,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        })

       

        return "Data has been deleted"
    }
}