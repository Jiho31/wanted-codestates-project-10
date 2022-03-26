# wanted-codestates-project-10

> 원티드 프리온보딩 코스 - 개인 기업 과제

### ✨ 배포 링크 ✨

[바로가기](https://jiho31-wanted-codestates-project-10.netlify.app/)

### ⚒ 기술 스택

- Javascript
- React
- Redux
- Styled Components

## ⚡️ 실행 방법

1. 배포된 웹 사이트에 접속한다
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

### 3️⃣ styled-component로 반복되는 스타일 재사용하기

- flex 속성을 이용해서 요소를 페이지 가운데에 정렬하는 css가 계속 반복적으로 사용된다
- `styled-component의` css helper function을 사용하면 컴포넌트 안에서 스타일 값들을 재사용할 수 있어서 적용해봤다

<details>
  <summary>수정 전 코드</summary>
  
  ```scss
  const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #cae9ff;
  align-items: center;
`;

const Container = styled.section`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 20px;
`;
  ```
</details>

<details>
  <summary>수정 후 코드</summary>
  
  ```scss
  const flexLayoutCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  ${flexLayoutCenter}

  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: #cae9ff;
`;

const Container = styled.section`
  ${flexLayoutCenter}

  width: 800px;
  flex-direction: column;
`;
  ```
</details>


## ⚡️ Error Handling Log

### 1. 화살표 위/아래 키 입력에 따라 추천 검색어 목록의 결과 조회

`keypress` 이벤트 vs `keydown` 이벤트
- keypress 이벤트에 대한 핸들러를 추가했는데 화살표 키가 입력이 감지되지 않았다
- 검색 결과, keypress는 화살표키 입력을 감지하지 않는다
- keydown 이벤트 사용!
  - 추가로, 키보드이벤트에 대해서 이전에 e.keyCode 값을 사용했었는데 가독성을 위해 더 이상 사용되지 않는다고 한다. `e.key` 값을 사용하는 것을 권장한다

### 2. Netlify 배포시 api 주소 오류

![image](https://user-images.githubusercontent.com/32476867/160224763-63aef01f-6109-499a-9d23-3b110a81e741.png)

- 배포를 하고 나니까 proxy로 설정한 api의 주소가 제대로 매핑되지 않았다
- 프로젝트의 루트 디렉토리에 `netlify.toml` 파일을 생성하고 다음의 내용 입력해서 저장하니 문제가 해결되었다 ([참고 자료](https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service))
```
[[redirects]]
  from = "/proxy/*"
  to = "https://api.clinicaltrialskorea.com/:splat"
  status = 200
  force = true
```

### 3. 디바운싱 함수가 적용 되지 않는 문제

<img src="https://user-images.githubusercontent.com/32476867/160224883-df72812d-6284-470a-8e53-c935ffd7eda9.png" width="500px" />

- 검색어를 입력할 때 api 호출을 최적화하기 위해 setTimeout으로 250ms 의 시간을 두고 디바운싱을 적용했으나, 제대로 디바운싱 기능이 적용되지 않았다
- timerID 값을 inputChangeHandler 내부에서 콘솔창으로 출력해보니, api를 호출한 이후에도 `undefined` 값만 출력되었다. 컴포넌트가 리렌더링 되면서 timerID가 계속 새로 선언되었기 때문인 것으로 추정된다. inputChangeHandler를 useCallback으로 감싸주니 디바운싱이 올바르게 적용되었다
