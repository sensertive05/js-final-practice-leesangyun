# Level 2: 지출 관리 앱 (중급)

## 목표

기본 HTML 골격과 최소 CSS만 제공됩니다. **HTML 구조를 직접 작성**하고, **JavaScript로 완전한 CRUD 기능**을 구현하세요.

## 제공되는 파일

| 파일 | 상태 |
|------|------|
| `index.html` | 기본 골격만 (head, body, script 태그) |
| `style.css` | 최소 리셋만 |
| `db.json` | 최소 데이터 (2건) |
| `package.json` | json-server 설정 |

## 실행 방법

```bash
npm install
npm start
```

브라우저에서 `index.html`을 열어 앱을 확인하세요.
json-server는 `http://localhost:4000/expenses`에서 실행됩니다.

## 구현 요구사항

### 1. HTML 구조 작성

`index.html`에 다음 요소들을 직접 작성하세요:
- 지출 추가/수정 폼 (날짜, 카테고리, 설명, 금액, 제출 버튼)
- 카테고리 필터링 UI (select 또는 버튼)
- 총 지출 합계 표시 영역
- 지출 목록 표시 영역 (테이블 또는 리스트)

### 2. JavaScript 모듈 분리

다음과 같은 폴더 구조로 모듈을 분리하세요:

```
js/
├── main.js          ← 앱 초기화 및 이벤트 처리
├── api.js           ← 서버 통신 함수 (GET, POST, PATCH, DELETE)
└── render/
    ├── list.js      ← 지출 목록 렌더링
    └── stats.js     ← 총 합계 등 통계 렌더링
```

### 3. 완전한 CRUD 구현

- **Create**: form submit으로 새 지출 추가 (POST)
- **Read**: 지출 목록 조회 및 렌더링 (GET)
- **Update**: 지출 수정 기능 (PATCH) - 폼을 수정 모드로 전환
- **Delete**: 지출 삭제 (DELETE)

### 4. 카테고리별 필터링

- 전체 / 식비 / 교통 / 쇼핑 / 문화 / 기타 필터
- `filter` 메서드를 사용하여 구현하세요

### 5. 총 지출 합계

- `reduce`를 사용하여 총 지출 합계를 계산하고 표시하세요
- 필터링 시 필터링된 항목의 합계를 표시하세요

### 6. 필수 문법 요구사항

- **배열 메서드**: `forEach`, `filter`, `reduce` 필수 사용
- **구조분해할당**: 객체에서 값을 추출할 때 사용
- **템플릿 리터럴**: HTML 문자열 생성 시 사용
- **import/export**: 모듈 간 연결 (폴더 경로 포함)

## 핵심 학습 포인트

- CRUD 전체 흐름 이해
- 배열 메서드 활용 (`forEach`, `filter`, `reduce`)
- 폴더 기반 모듈 구조 설계
- DOM 동적 생성
- 구조분해할당, 템플릿 리터럴

## API 엔드포인트

| 메서드 | URL | 설명 |
|--------|-----|------|
| GET | `http://localhost:4000/expenses` | 전체 지출 조회 |
| POST | `http://localhost:4000/expenses` | 지출 추가 |
| PATCH | `http://localhost:4000/expenses/:id` | 지출 수정 |
| DELETE | `http://localhost:4000/expenses/:id` | 지출 삭제 |

## 힌트

- 수정 기능 구현 시, 폼에 기존 데이터를 채워넣고 submit 시 POST 대신 PATCH를 보내는 방식을 고려하세요
- 수정 중인 항목의 id를 변수에 저장해두면 편리합니다
- 카테고리 필터링은 전체 데이터를 먼저 가져온 뒤, 클라이언트에서 `filter`로 처리하세요
- `{ date, category, description, amount } = expense` 형태로 구조분해할당을 활용하세요
- 폴더 안의 모듈을 import할 때는 `import { renderExpenses } from './render/list.js'` 형태로 경로를 지정하세요
