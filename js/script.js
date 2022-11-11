const btn = document.getElementById("addBtn");
btn.addEventListener("click", addExpense)

// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(){
    let namee = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let type = document.getElementById("type").value;
    let amount = document.getElementById("amount").value;
  
    if(type != 'chooseOne' 
        && namee.length > 0 
        && date != 0 
        && amount > 0){
            const expense = {
                type, 
                namee, 
                date,
                amount, 
                id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
            }
            
            expenses.push(expense);
        // localStorage 
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
    document.getElementsByClassName('form').reset();
    showExpenses()
}

const showExpenses=()=>{
    console.log("divesh");
    const table = document.querySelector("table");
    table.innerHTML=" bgvhgg"

}

// deleteExpense()