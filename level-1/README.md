# Level 1: 지출 관리 앱 (기초)

## 목표

제공된 HTML, CSS 템플릿과 JS 파일 구조를 활용하여 **지출 관리 앱**을 완성하세요.

## 제공되는 파일

| 파일 | 상태 |
|------|------|
| `index.html` | 완성됨 (수정 불필요) |
| `style.css` | 완성됨 (수정 불필요) |
| `db.json` | 초기 데이터 포함 |
| `js/main.js` | 진입점 - 가이드 주석 포함 |
| `js/api.js` | 함수 시그니처만 제공 |
| `js/render/list.js` | 함수 시그니처만 제공 |
| `js/render/stats.js` | 함수 시그니처만 제공 |

## 실행 방법

```bash
npm install
npm start
```

브라우저에서 `index.html`을 열어 앱을 확인하세요.
json-server는 `http://localhost:4000/expenses`에서 실행됩니다.

## 구현 요구사항

### 1. `js/api.js` - API 통신 함수 구현

`fetch`와 `async/await`를 사용하여 다음 함수를 구현하세요:

- **`getExpenses()`**: 모든 지출 목록을 가져옵니다 (GET)
- **`createExpense(expenseData)`**: 새로운 지출을 추가합니다 (POST)
- **`deleteExpense(id)`**: 지출을 삭제합니다 (DELETE)

> 모든 함수는 `export`로 내보내야 합니다.

### 2. `js/render/list.js` - 목록 렌더링 함수 구현

- **`renderExpenses(expenses)`**: 지출 배열을 받아 목록을 DOM에 렌더링합니다
  - 각 항목에 날짜, 카테고리, 설명, 금액을 표시
  - 삭제 버튼 포함

> `export`로 내보내야 합니다.

### 3. `js/render/stats.js` - 통계 렌더링 함수 구현

- **`renderTotalAmount(expenses)`**: 총 지출 합계를 화면에 표시합니다

> `export`로 내보내야 합니다.

### 4. `js/main.js` - 앱 초기화 및 이벤트 연결

- `api.js`와 `render/list.js`, `render/stats.js`에서 필요한 함수를 `import`
- 페이지 로드 시 지출 목록을 가져와서 화면에 렌더링
- form의 `submit` 이벤트로 새 지출 추가
- 삭제 버튼 클릭 시 지출 삭제

## 핵심 학습 포인트

- `fetch` 기본 사용법
- `async/await` 비동기 처리
- DOM 렌더링
- `import/export` 모듈 기초 (폴더 구조 포함)

## API 엔드포인트

| 메서드 | URL | 설명 |
|--------|-----|------|
| GET | `http://localhost:4000/expenses` | 전체 지출 조회 |
| POST | `http://localhost:4000/expenses` | 지출 추가 |
| DELETE | `http://localhost:4000/expenses/:id` | 지출 삭제 |

## 힌트

- `fetch`로 POST 요청 시 `headers`에 `Content-Type: application/json`을 설정하세요
- `JSON.stringify()`로 body 데이터를 변환하세요
- `response.json()`으로 응답 데이터를 파싱하세요
- `innerHTML`이나 `insertAdjacentHTML`을 사용하여 DOM에 렌더링하세요
- 삭제 후에는 목록을 다시 불러와서 화면을 갱신하세요
- 폴더 안의 모듈을 import할 때는 `import { renderExpenses } from './render/list.js'` 형태로 경로를 지정하세요
