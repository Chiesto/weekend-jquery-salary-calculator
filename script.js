$(document).ready(onReady);
let sumTotal = 0;
let sal = 0;
function onReady(){
    console.log('in onReady');//making sure my code appears in the right order
    $('#submit-button').on('click', clickFunction);
    $('#table').on('click', '#delete-button',removeRow);
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
    $('#totalSalary').text(sumSalary);
    


    $('#firstname').val('');
    $('#lastname').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');

    $('#table-row').append('<tr><td>'+firstName+'</td>'+'<td>'+lastName+'</td>'+'<td>'+id+'</td>'+'<td>'+title+'</td>'+'<td class="dataRow">'+'$'+salary+'</td>'+'<td>'+'<button id="delete-button">Delete</button>'+'</td>'+'</tr>');

}

function sumSalary(){
    
    sal = Number($('#salary').val());
    sumTotal+=sal;
    console.log(sumTotal);//making sure my sumTotal calculator is working properly
    // if(sumTotal/12>20000){
    //     $('#footer').css("background-color", "red");
    // }
    let monthlyTotal = sumTotal/12;
    // if(monthlyTotal<20,000){
    //     $('#footer').css("background-color", "bisque");
    //    }
    colorChang(monthlyTotal)
    return monthlyTotal;

    

}
function removeRow(){
   const row = $(this).closest('tr'); 
   //targets the row i clicked on
   
   let salary = Number(row.find('.dataRow').text().replace('$', ''));//had to remove the '$' i added in that row otherwise it would return NaN...
   //target's the value of that row (i gave it a class name 'dataRow') and assigns it to the variable 'salary'
   
   row.remove();
   sumTotal-=salary;
   let monthlyTotal = sumSalary();//bringing in the monthlyTotal variable from my sumSalary function.
   console.log("in remove function",monthlyTotal);//making sure my remove function is activating properly. 
   
   let bleh = $('#totalSalary').text(monthlyTotal.toFixed(2));//set the value of my total monthly cost to the updated monthlyTotal fixed to 2 decimal places (wasn't sure if 2 decimals was required or not)
   colorChang(bleh);
   return bleh
}

function colorChang(monthlyTotal1){

    if(monthlyTotal1<20000){
    $('#footer').css("background-color", "bisque");
   }else if(monthlyTotal1>20000){
    $('#footer').css("background-color", "red");
    }
}
