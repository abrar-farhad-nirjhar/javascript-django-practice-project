
class UI{

    constructor(){
        this.area = document.getElementById('items')
        this.display = '<table class="ui celled table"><thead><tr><tr><th>ID</th><th>TASK</th><th>ACTION</th></tr></thead><tbody>'
        this.api = new API()
    }
    alertt() {
        alert("test")
    }

    CreateList(data) {

        // console.log(data)

        

        let self = this
        
        

        data.data.forEach(element => {
            // console.log(element)

            
            self.display+=`
                <tr>
                    <td>${element.id}</td>
                    <td>${element.task}</td>
                    <td><button class="ui button primary" value=${element.id} id=${element.id}>Done</button></td>
                
                </tr>
            `;
            
        });

        this.display+='</tbody></table>'

        // console.log(this.display)
        this.area.innerHTML = this.display
        
    }


}