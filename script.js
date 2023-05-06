$(document).ready(onReady);
let sumTotal = 0;
function onReady(){
    console.log('in onReady');//making sure my code appears in the right order
    $('#submit-button').on('click', clickFunction);
    $('#table').on('click', '#delete-button',remove);
}
function clickFunction(event){
    console.log('submit click');//double checking that my submit button works
    event.preventDefault();
    let firstName = $('#firstname').val();
    let lastName = $('#lastname').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let salary = $('#salary').val();

    console.log('first:', firstName, 'last:', lastName, 'ID:',id,'Job Title:',title, 'Salary:', salary );
    //making sure my input's and the value's assigned to them are working properly
    // $('#totalSalary').append(sumSalary);
    $('#totalSalary').text(sumSalary);
    


    $('#firstname').val('');
    $('#lastname').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');

    $('#table-row').append('<tr><td>'+firstName+'</td>'+'<td>'+lastName+'</td>'+'<td>'+id+'</td>'+'<td>'+title+'</td>'+'<td class="dataRow">'+'$'+salary+'</td>'+'<td>'+'<button id="delete-button">Delete</button>'+'</td>'+'</tr>');

}

function sumSalary(){
    let sal = Number($('#salary').val());
    sumTotal+=sal;
    console.log(sumTotal);//making sure my sumTotal calculator is working properly
    if(sumTotal>20000){
        $('#totalSalary').css("background-color", "red");
    }
    return sumTotal;
    

}
function remove(){
    $(this).closest('tr').remove();
    
}