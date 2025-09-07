const showListBtn = document.getElementById("showListBtn");
const expenseListContainer = document.getElementById("expenseListContainer");
const tbody = document.querySelector("#expenseTable tbody");

let isListVisible = false;

showListBtn.addEventListener("click", () => {
  if (!isListVisible) {
    // Fetch and show list
    fetch("/expenses")
      .then(res => res.json())
      .then(data => {
        tbody.innerHTML = ""; // clear old rows
        data.forEach(exp => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${exp.description}</td>
            <td>₹${exp.amount}</td>
            <td>${new Date(exp.date).toLocaleDateString()}</td>
          `;
          tbody.appendChild(row);
        });
        expenseListContainer.style.display = "block";
        showListBtn.textContent = "🙈 Hide Expense List";
        isListVisible = true;
      })
      .catch(err => console.error("❌ Fetch error:", err));
  } else {
    // Hide list
    expenseListContainer.style.display = "none";
    tbody.innerHTML = ""; // clear rows
    showListBtn.textContent = "📋 Show Expense List";
    isListVisible = false;
  }
});
