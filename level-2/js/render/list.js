export function renderExpenses(expenses) {
  const expenseList = document.getElementById('expense-list');

  if (!expenseList) return;

  if (expenses.length === 0) {
    expenseList.innerHTML = `
      <li class="empty-message">지출 내역이 없습니다.</li>
    `;
    return;
  }

  expenseList.innerHTML = expenses
    .map(
      (expense) => `
        <li class="expense-item">
          <div class="expense-info">
            <p class="expense-date">${expense.date}</p>
            <p class="expense-category">${expense.category}</p>
            <p class="expense-description">${expense.description}</p>
          </div>

          <div class="expense-actions">
            <p class="expense-amount">${Number(expense.amount).toLocaleString()}원</p>
            <button
              type="button"
              class="btn-delete"
              data-id="${expense.id}"
            >
              삭제
            </button>
          </div>
        </li>
      `
    )
    .join('');
}