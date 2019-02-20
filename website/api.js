

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

    async post(data){
        
        const response = await fetch(this.api,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })


        const resData = await response.json()
        return resData
    }
}