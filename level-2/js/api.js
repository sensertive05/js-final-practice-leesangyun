const BASE_URL = 'http://localhost:4000/expenses';

/**
 * 모든 지출 목록을 가져옵니다.
 * @returns {Promise<Array>}
 */
export async function getExpenses() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error('지출 목록을 불러오지 못했습니다.');
  }

  return await response.json();
}

/**
 * 새로운 지출을 추가합니다.
 * @param {Object} expenseData
 * @returns {Promise<Object>}
 */
export async function createExpense(expenseData) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(expenseData),
  });

  if (!response.ok) {
    throw new Error('지출을 추가하지 못했습니다.');
  }

  return await response.json();
}

/**
 * 지출을 삭제합니다.
 * @param {number} id
 * @returns {Promise<Object>}
 */
export async function deleteExpense(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('지출을 삭제하지 못했습니다.');
  }

  return { success: true };
}