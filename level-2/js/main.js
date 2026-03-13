import { getExpenses, createExpense, deleteExpense } from './api.js';
import { renderExpenses } from './render/list.js';
import { renderTotalAmount } from './render/stats.js';

// ===== DOM 요소 가져오기 =====
const expenseForm = document.getElementById('expense-form');
const dateInput = document.getElementById('date');
const categorySelect = document.getElementById('category');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');

// ===== 앱 초기화 함수 =====
async function init() {
  try {
    const expenses = await getExpenses();
    renderExpenses(expenses);
    renderTotalAmount(expenses);
  } catch (error) {
    console.error('초기화 실패:', error);
  }
}

// ===== 지출 추가 처리 =====
async function handleSubmit(e) {
  e.preventDefault();

  const newExpense = {
    date: dateInput.value,
    category: categorySelect.value,
    description: descriptionInput.value,
    amount: Number(amountInput.value),
  };

  try {
    await createExpense(newExpense);
    expenseForm.reset();
    init();
  } catch (error) {
    console.error('지출 추가 실패:', error);
  }
}

// ===== 삭제 처리 =====
async function handleDelete(e) {
  if (!e.target.classList.contains('btn-delete')) return;

  const id = Number(e.target.dataset.id);

  try {
    await deleteExpense(id);