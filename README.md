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

### 발생했던 문제들

