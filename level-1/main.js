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
// 페이지가 로드되면 지출 목록을 가져와서 화면에 렌더링합니다.
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
// form의 submit 이벤트를 처리합니다.
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
// 삭제 버튼 클릭을 처리합니다.
// 힌트: 이벤트 위임(Event Delegation)을 사용하세요
//       document.getElementById('expense-list')에 click 이벤트를 걸고,
//       e.target.classList.contains('btn-delete')로 삭제 버튼인지 확인하세요
async function handleDelete(e) {
  if (!e.target.classList.contains('btn-delete')) return;

  const id = Number(e.target.dataset.id);

  try {
    await deleteExpense(id);
    init();
  } catch (error) {
    console.error('지출 삭제 실패:', error);
  }
}

// ===== 이벤트 리스너 등록 =====
expenseForm.addEventListener('submit', handleSubmit);
expenseList.addEventListener('click', handleDelete);

// ===== 앱 시작 =====
init();