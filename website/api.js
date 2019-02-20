

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
        const response = await fetch(this.api+id,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        })

        const resData = await response.json()

        return "Data has been deleted"
    }
}