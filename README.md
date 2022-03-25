# wanted-codestates-project-10

원티드 프리온보딩 코스 - 개인 기업 과제

## ⚡️ 실행 방법

1. 배포된 웹 사이트에 접속한다 (링크: [바로가기](https://jiho31-wanted-codestates-project-10.netlify.app/))
2. 검색창에 질환명을 입력한다
3. 추천 검색어 목록에 뜨는 질환명을 마우스로 클릭하거나, 키보드의 화살표키로 선택해서 엔터를 누르면 검색어가 자동완성 되면서, 해당 질환을 기반으로 한 임상시험 정보를 제공하는 웹 사이트로 이동한다

## ⚡️ 구현 방법과 이유

### 1️⃣ 키보드를 통해 추천 검색어들로 이동하는 기능

- 화살표 위/아래 방향키를 누르면 추천 검색어 목록의 단어를 위 아래로 이동하며 조회할 수 있다
- `activeIndex` 상태를 useState로 관리하며, 배열에 담긴 추천 검색어들의 인덱스 값을 비교해서 현재 활성화된 추천 검색어의 배경색을 회색으로 표시한다

### 2️⃣ 로컬 캐싱 구현

- localStorage 를 이용해서 구현
- api를 호출할 때 마다 해당 키워드에 대한 추천 검색어들을 로컬 스토리지에 저장해놓고, 다음에 같은 키워드를 사용자가 입력하면 api를 새로 호출하지 않고, 로컬 스토리지의 데이터를 활용해서 추천 검색어 목록을 렌더링한다
- 추가할 점: 로컬 스토리지는 사용자가 삭제하지 않으면 데이터가 만료되지 않기 때문에 불필요하게 많은 데이터가 브라우저에 남아 있게 될 수 있다. `redux-toolkit`에서 제공하는 RTK query를 사용하면 비동기로 api를 호출하고, 데이터를 캐싱하는 기능을 구현할 수 있다고 하는데 나중에 적용해보면 좋을 것 같다

## ⚡️ Error Handling Log
### 1. 화살표 위/아래 키 입력에 따라 추천 검색어 목록의 결과 조회
`keypress` 이벤트 vs `keydown` 이벤트
- keypress는 숫자, Tab, Space, Enter 키나 화살표키 입력을 감지하지 않는다
- keydown 이벤트 사용!
- +) 추가로, 키보드이벤트에 대해서 이전에 e.keyCode를 사용했었는데 가독성을 위해 더 이상 사용되지 않는다고 한다. `e.key` 값을 사용하는 것을 권장함

- 내용 추가 예정
