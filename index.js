let data = [
    {id: 1, task: "Charge Mobile"},
    {id: 2, task: "Coding"}
]


function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");


    var  object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => (
        elements += `<tr>
        <td>${record.task}</td>
        
        <td>
            <button class="edit" onclick={edit(${record.id})}>Edit</button>
            <button class="delete" onclick={delet(${record.id})}>Delete</button>
        </td>
        </tr>`
    ))

    tabledata.innerHTML = elements;

}
function create(){
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}

    function add(){
        var task = document.querySelector(".task").value;

        var newObj = {id: 3, task: task};
        data.push(newObj);

        document.querySelector(".create_form").style.display = "none";
        document.querySelector(".add_div").style.display = "block";

        readAll();

    }

    function edit(id){
        document.querySelector('.update_form').style.display = "block";
        var obj = data.find(rec => rec.id === id);
        document.querySelector('.utask').value = obj.task;
        document.querySelector('.id').value = obj.id;


    }

    function update(){
        var id = parseInt(document.querySelector('.id').value);
        var task = document.querySelector('.utask').value;

        var index = data.findIndex(rec => rec.id === id);
        data[index] = {id, task};
        document.querySelector('.update_form').style.display = "none";

        readAll();

    }

    function delet(id) {
        data = data.filter(rec => rec.id !== id);
        readAll();
    }   