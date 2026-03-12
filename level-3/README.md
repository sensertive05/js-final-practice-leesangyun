# Level 3: 지출 관리 앱 (고급)

## 목표

`package.json`만 제공됩니다. **HTML, CSS, JavaScript 모두 직접 작성**하여 완전한 지출 관리 앱을 만드세요.

## 제공되는 파일

| 파일 | 상태 |
|------|------|
| `package.json` | json-server dependency만 포함 |

## 실행 방법

```bash
npm install
npm start
```

> `db.json`을 직접 만들어야 json-server가 정상 작동합니다.

## 구현 요구사항

### 1. 프로젝트 설정

- `db.json` 직접 설계 및 초기 데이터 작성 (최소 5건)
- `index.html` 직접 작성
- `style.css` 직접 작성
- JS 모듈 구조 직접 설계

### 2. 모듈 구조

다음과 같은 폴더 구조로 모듈을 분리하세요:

```
js/
├── main.js          ← 앱 초기화 및 이벤트 처리
├── api.js           ← 서버 통신 (GET, POST, PATCH, DELETE)
├── utils.js         ← 유틸리티 함수 (정렬, 통계 계산 등)
└── render/
    ├── list.js      ← 지출 목록 렌더링
    ├── stats.js     ← 통계 렌더링 (총합, 카테고리별, 평균)
    └── ui.js        ← 에러/성공 메시지 표시
```

### 3. 완전한 CRUD

- **Create**: form submit으로 지출 추가 (POST)
- **Read**: 지출 목록 조회 (GET)
- **Update**: 지출 수정 (PATCH)
- **Delete**: 지출 삭제 (DELETE)

### 4. 카테고리별 필터링

- 카테고리를 선택하여 지출 목록을 필터링
- `filter` 메서드 활용

### 5. 정렬 기능

- 금액순 정렬 (오름차순/내림차순)
- 날짜순 정렬 (최신순/오래된순)
- `sort` 메서드 활용

### 6. 통계 기능

- **총 지출 합계**: `reduce` 활용
- **카테고리별 합계**: `reduce`로 카테고리별 그룹핑 후 `Object.entries`로 표시
- **평균 지출**: 총합 / 항목 수

### 7. 에러 핸들링

- 모든 API 호출에 `try-catch` 적용
- 사용자에게 에러 메시지 표시 (예: "서버 연결에 실패했습니다")
- 성공 시 피드백 표시 (예: "지출이 추가되었습니다")
- `render/ui.js` 모듈에서 메시지 표시 함수를 관리하세요

### 8. 필수 문법 요구사항

- **스프레드 연산자**: 객체/배열 복사 또는 병합 시 사용
- **옵셔널 체이닝**: 안전한 프로퍼티 접근에 사용
- **구조분해할당**: 객체 및 배열에서 값 추출 시 사용
- **배열 메서드**: `forEach`, `filter`, `reduce`, `sort`, `map` 활용
- **`Object.entries`**: 카테고리별 통계 표시 시 사용
- **try-catch**: 에러 핸들링
- **import/export**: 모듈 시스템 (폴더 구조 포함)

## 핵심 학습 포인트

- 프로젝트 구조를 처음부터 직접 설계
- 폴더 기반 모듈 분리 (렌더링 역할별 분리)
- 고급 배열/객체 메서드 종합 활용
- 에러 핸들링 패턴
- 정렬 및 통계 로직 구현

## API 엔드포인트

| 메서드 | URL | 설명 |
|--------|-----|------|
| GET | `http://localhost:4000/expenses` | 전체 지출 조회 |
| POST | `http://localhost:4000/expenses` | 지출 추가 |
| PATCH | `http://localhost:4000/expenses/:id` | 지출 수정 |
| DELETE | `http://localhost:4000/expenses/:id` | 지출 삭제 |

## db.json 구조

아래 구조를 참고하여 `db.json`을 직접 작성하세요:

```json
{
  "expenses": [
    {
      "id": 1,
      "date": "2024-03-01",
      "category": "식비",
      "description": "점심 식사",
      "amount": 12000
    }
  ]
}
```

## 힌트

- 정렬 시 원본 배열을 변경하지 않도록 `[...expenses].sort()`처럼 스프레드 연산자로 복사 후 정렬하세요
- 카테고리별 합계는 `reduce`로 `{ 식비: 30000, 교통: 15000 }` 형태의 객체를 만든 후, `Object.entries()`로 배열로 변환하여 렌더링하세요
- 에러/성공 메시지는 `render/ui.js`에서 `showMessage(type, text)` 같은 함수로 관리하면 깔끔합니다
- 옵셔널 체이닝은 `response?.data`, `expense?.category` 등에서 활용할 수 있습니다
