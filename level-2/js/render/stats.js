export function renderTotalAmount(expenses) {
  const totalAmountEl = document.getElementById('total-amount');

  if (!totalAmountEl) return;

  const total = expenses.reduce((sum, expense) => {
    return sum + Number(expense.amount);
  }, 0);

  totalAmountEl.textContent = `${total.toLocaleString()}원`;
}