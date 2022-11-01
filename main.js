let taskData = [];
let i = null;
function Submit() {
    if (taskData.length > 0) {
        let mascota = document.getElementById('tarea').value;
        let nombretenedor = document.getElementById('nombretenedor').value;
        let edad = document.getElementById('edad').value;
        let raza = document.getElementById('raza').value;
        const obj = { "mascota": mascota, "nombretenedor": nombretenedor, "edad": edad, "raza": raza, }
        let stored = JSON.parse(localStorage.getItem("task"));
        stored.push(obj);
    }
    let mascota = document.getElementById('mascota').value;
    let nombretenedor = document.getElementById('nombretenedor').value;
    let edad = document.getElementById('edad').value;
    let raza = document.getElementById('raza').value;
    const obj = { "mascota": mascota, "nombretenedor": nombretenedor, "edad": edad, "raza": raza, }
    taskData.push(obj);

    localStorage.setItem("task", JSON.stringify(taskData));
    document.getElementById("result").innerHTML = localStorage.getItem("task");

    if (i == null) {
        i = 0;
    }

    for (i = i; i < taskData.length; ++i) {

        let rowCount = table.rows.length;
        let row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML = i + 1;
        row.insertCell(1).innerHTML = taskData[i].mascota;
        row.insertCell(2).innerHTML = taskData[i].nombretenedor;
        row.insertCell(4).innerHTML = taskData[i].edad;
        row.insertCell(5).innerHTML = taskData[i].raza;
        i = i;
    }
}