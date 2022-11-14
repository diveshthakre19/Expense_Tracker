const btn = document.getElementById("addBtn");
btn.addEventListener("click", addExpense);

// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
  let namee = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let type = document.getElementById("type").value;
  let amount = document.getElementById("amount").value;

  if (type != "chooseOne" && namee.length > 0 && date != 0 && amount > 0) {
    const expense = {
      type,
      namee,
      date,
      amount,
      id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
    };

    expenses.push(expense);
    // localStorage
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
  document.querySelector("form").reset();
  showExpenses();
}

const showExpenses = () => {
  const table = document.querySelector("tbody");
  console.log(table);
  table.innerHTML = " ";
  for (let i = 0; i < expenses.length; i++) {
    table.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${expenses[i].namee}</td>
        <td>${expenses[i].date}</td>
        <td>${expenses[i].type}</td>
        <td>₹${expenses[i].amount}</td>
        <td class="delete"><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})"
        >Delete
        </td>
        </tr>`;
  }
//   let editbtn = document.querySelectorAll("#editbtn");

};

showExpenses();

const deleteExpense = (id) => {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id == id) {
      expenses.splice(i, 1);
    }
  }

  // localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));
  showExpenses();
};
