
window.onload = function() {
    var btn = document.getElementById('Addbtn');
    var input = document.getElementById('inp');




        btn.onclick = function () {
        var value = input.value;
        var row= document.createElement('tr');
        var add_column = document.createElement('td');


        var delbut = document.createElement('Button');
        delbut.innerHTML="Delete";
        var col=document.createElement('td');
        col.appendChild(delbut);
        delbut.setAttribute('onclick','delete2()');
        delbut.onclick=function(){
            console.log(add_column.innerText);
            delet(add_column.innerText);
            displayItem();
        }


        var markbut=document.createElement('Button');
        markbut.innerHTML="markascomplete";
        var col_mark=document.createElement('td');
        col_mark.appendChild(markbut);
        markbut.onclick=function(){
          console.log("komal");
          markup(add_column.innerText);
          displayItem();
      }
        add_column.innerHTML=value;

        var updatebut = document.createElement('Button');
        updatebut.innerHTML="update";
        var col_update=document.createElement('td');
        col_update.appendChild(updatebut);

        updatebut.onclick=function () {
            var uptxt = document.getElementById("updatespace");
            uptxt.style.visibility = 'visible';
            var field = document.getElementById('inp2');

            //var updateinput = document.createElement('input');
            //updateinput.setAttribute("type","text");
            var row1 =document.createElement('tr');
            //updateinput.innerHTML = "updateinput";
            row1.appendChild(uptxt);
            console.log("hello in update");
            //update(field.value);
            displayItem();
            todo.appendChild(row1);

        }



        addItem(value,true);
        displayItem(value);
        row.appendChild(add_column);
        row.appendChild(col);
        row.appendChild(col_mark);
        row.appendChild(col_update);
        todo.appendChild(row);



    };



}

//function delete2() {
    //console.log('delete')



