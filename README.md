# Bears Goods

> 두산베어스 굿즈 상품을 판매하는 작은 쇼핑몰 웹 사이트입니다.

## 설치 방법

```
npm i
```

## 개발 환경 세팅

- Client: /client 디렉토리로 이동 후, 아래 명령어 실행
- Server: /server 디렉토리로 이동 후, 아래 명령어 실행

```
npm run dev
```

## 프로젝트 리뷰

> 기간: 2022.5.15 ~

### 프로젝트 구조

```
└──src
    ├──components
    ├──context
    ├──layouts
    ├──lib
    │  ├──api
    │  └──hooks
    ├──pages
    ├──reducers
    ├──styles
    └──typings
```

- pages: 페이지의 최상위 라우트를 담당하는 컴포넌트
- layouts: 레이아웃을 담당하는 컴포넌트 ex) `App`, `AppLayout`, `Header`
- styles: emotion Global styles, reset css, media query 파일 정의
- typings: 여러 컴포넌트에 자주 쓰이는 타입 정의

### 구현 기능

- fake API를 통해 서버로부터 받아온 데이터를 페이지별로 화면에 렌더링
- 쿼리스트링 값을 이용한 상품 분류 (카테고리별, 가격별)
- 선택한 상품 옵션에 따른 상품 금액 및 총 주문금액 계산
- 장바구니 추가 및 새로고침시 장바구니 목록 유지 (Local Storage 사용)
- 로딩 상태 진행 바
- 장바구니 추가 완료, 상품 삭제 확인 팝업창

### 오답 노트

- [사용자가 선택한 옵션을 장바구니에 추가할 때, 중복성 처리하기](https://github.com/eenaree/dev_log/blob/main/BearsGoods/checkDuplicate.md)
- [장바구니 아이템을 모두 삭제했는데, 전체 선택 박스가 체크되어 있어요!](https://github.com/eenaree/dev_log/blob/main/BearsGoods/AllSelectedBug.md)
- [사용자 입력을 활성화한 수량 변경 방식, 어디까지 사용자에게 입력을 허용해야 할까?](https://github.com/eenaree/dev_log/blob/main/BearsGoods/UserInputQuantity.md)
- [사용자가 A, B, C를 모두 클릭했더라도 마지막으로 클릭한 C만 보여주고 싶어요!](https://github.com/eenaree/dev_log/blob/main/BearsGoods/cancelPromise.md)
- [로딩상태를 나타내는 진행바 만들기](https://github.com/eenaree/dev_log/blob/main/BearsGoods/LoadingBar.md)

### 부족했던 점

<details>
    <summary>전반적인 상태 관리</summary>

옵션, 장바구니 같은 상태값을 다룰 때, 이 상태값에 기인하여 계산할 수 있는 총 가격, 전체 선택 여부 같은 값들을  
파생값으로 두지 않고 상태값으로 정하여 이를 액션마다 계산하는 로직을 불필요하게 작성해야 했다.

또한, 장바구니 상태를 다룰 때, 여러 페이지에 걸쳐 사용되기 때문에 이를 전역 상태로 파악하고 무심코 context api를 사용했다.  
장바구니의 상태가 수량 변경, 선택, 삭제 등의 여부에 따라 상태의 변화가 자주 발생했다.  
가령, 수량의 변화가 발생할 때, 전체 아이템의 개수는 변하지 않기 때문에 아이템의 개수를 보여주는 영역은 렌더링되지 않아야 한다.  
렌더링을 방지하려면, 그 상태값에 기인하여 파생적인 값으로 만들고, 새로운 컨텍스트를 생성하여 컨텍스트를 중첩시켜야 하는 문제가 발생한다.  
만약 그러한 값이 또 존재한다면, 여러 개의 컨텍스트가 중첩되기 때문에 컨텍스트의 흐름을 파악하기가 쉽지 않다.

컨텍스트는 상태 관리를 하는 곳이 아니다. 중첩된 컴포넌트 구조에서 props 전달을 피하기 위해 만들어졌다.  
다만 전역 상태로 사용하고자 할 경우에는, 상대적으로 변화가 적은 상태값을 사용해야 그 이점이 있는 것 같다.

</details>
