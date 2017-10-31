var todolist = /** @class */ (function () {
    function todolist(items, status) {
        this.items = items;
        this.status = status;
    }
    todolist.prototype.add = function (list) {
        this.items.push(list.items);
        this.status.push(list.status);
    };
    todolist.prototype.display = function () {
        console.log("items " + this.items + " ");
        console.log("status " + this.status);
    };
    todolist.prototype.markUpdate = function (name) {
        for (var i = 0; i <= this.items.length; i++) {
            if (name == this.items[i]) {
                this.status[i] = "complete";
            }
        }
    };
    todolist.prototype.delet = function (items) {
        for (var i = 0; i < this.items.length; i++) {
            if (items == this.items[i]) {
                this.status[i] = "False";
            }
        }
    };
    return todolist;
}());
var list = new todolist(["dd"], ["true"]);
function addItem(items, status) {
    list.add({
        items: items,
        status: status
    });
}
function displayItem() {
    list.display();
}
function delet(col) {
    console.log("komal" + col);
    list.delet(col);
}
function markup(col) {
    console.log("Cool komal" + col);
    list.markUpdate(col);
}
// Task name
// done 
