/*jshint esversion: 8 */
const Mode = document.querySelector('#mode');
Mode.addEventListener('click', (e) => 
{
    e.preventDefault();
    document.body.classList.toggle('dark');
    document.querySelector('nav').classList.toggle('dark');
    document.querySelector('.table').classList.toggle('dark');
    document.querySelector('.display').classList.toggle('dark');
    document.querySelector('.form').classList.toggle('dark');
});

function saveRecord()
{
    var name = document.getElementById('name_input').value;
    var date = document.getElementById('date_input').value;
    var calories = document.getElementById('calories_input').value;
    //to check if all boxes is filled up
    if(!name || !date || !calories)
    {
        alert('Please Fill All The Boxes');
        return;
    }
    if(localStorage.getItem('data') == null)
    {
        localStorage.setItem('data','[]');
    }

    var recordArray = [name,date,calories];
    console.log(recordArray);

    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(recordArray);

    localStorage.setItem('data', JSON.stringify(old_data));

    window.location.reload();
}

var i = 0;
const item = JSON.parse(window.localStorage.getItem('data'));
if(item != null)
{
    for (i=0;i < item.length && i < 19; i++)
    {
        var record = document.getElementById('records');
        var newRow = record.insertRow(i+1);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = item[i][0];
        cell2.innerHTML = item[i][1];
        cell3.innerHTML = item[i][2];
    }
    
}


const sForm = document.querySelector('form');
let sQuery = '';

sForm.addEventListener('submit', (e) => 
{
    e.preventDefault();
    sQuery = e.target.querySelector('input').value;
    const item = JSON.parse(window.localStorage.getItem('data'));
    if(item != null)
    {
        for (i=0; i<item.length; i++)
        {
            if(item[i][0] == sQuery)
            {
                $('#records').empty();
                var record = document.getElementById('records');
                var newRow = record.insertRow(0);
                var newRoww = record.insertRow(0);
                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var celll1 = newRoww.insertCell(0);
                var celll2 = newRoww.insertCell(1);
                var celll3 = newRoww.insertCell(2);
                celll1.innerHTML = 'Name';
                celll2.innerHTML = 'Date';
                celll3.innerHTML = 'Calories';
                cell1.innerHTML = item[i][0];
                cell2.innerHTML = item[i][1];
                cell3.innerHTML = item[i][2];
            }
        }
    }
});

function deleteRecords()
{
    if (item != null)
    {
        localStorage.removeItem('data');
        window.location.reload();
    }
}