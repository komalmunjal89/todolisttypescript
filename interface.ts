interface todo {
    items: string ,
    status: string,

}

class todolist {
    public items: string[] ;
    public status: string[];
    constructor(items: string[] ,status:string[] ) {
        this.items = items;
        this.status = status;

    }
    add(list : todo) {
        this.items.push(list.items);
        this.status.push(list.status);

    }

    display() {
        console.log(`items ${this.items} `);
        console.log(`status ${this.status}`)
    }
    markUpdate(name:string){
        for(var i=0;i<=this.items.length;i++)
        {
            if(name==this.items[i]){
                this.status[i]="complete";
            }
        }
    }
    delet(items:string){

        for(var i=0;i<this.items.length;i++){
            if(items==this.items[i]){
                this.status[i]="False";
            }
        }
    }
    cupdate(items:string)

    {
        console.log("thankyou");


    }

}

var list = new todolist(["dd"],["true"]);

function addItem(items: string,status:string) {
    list.add({
        items:  items,
        status: status

    });
}



function displayItem() {
    list.display();
}
function delet(col:string)
{
    console.log("komal"+col);
    list.delet(col);
}
function markup(col:string){
    console.log("Cool komal"+col);
    list.markUpdate(col);

}
function update(col:string){
    console.log("update working"+col);
    list.cupdate(col);
}
// Task name
// done