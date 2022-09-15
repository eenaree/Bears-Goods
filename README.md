# Bears Goods

## 소개

두산베어스 굿즈 상품을 판매하는 웹 애플리케이션입니다.

- 배포 링크: https://bears-goods.vercel.app

<br />

## :white_check_mark: Demo 페이지

|                                                                                                       메인페이지                                                                                                        |                                                                                                      상품 상세페이지                                                                                                      |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![main](https://user-images.githubusercontent.com/37580351/190294948-27230105-ec24-43b1-8d6b-1f57d0b21b98.png)](https://user-images.githubusercontent.com/37580351/190294948-27230105-ec24-43b1-8d6b-1f57d0b21b98.png) | [![detail](https://user-images.githubusercontent.com/37580351/190294945-ecd3b8b4-4b50-4f86-8c7d-068254d92825.png)](https://user-images.githubusercontent.com/37580351/190294945-ecd3b8b4-4b50-4f86-8c7d-068254d92825.png) |

|                                                                                                     장바구니 페이지                                                                                                     |                                                                                                     찜 목록 페이지                                                                                                      |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![cart](https://user-images.githubusercontent.com/37580351/190294939-f16e9bb1-71d7-453e-8cd5-9275614bb6ba.png)](https://user-images.githubusercontent.com/37580351/190294939-f16e9bb1-71d7-453e-8cd5-9275614bb6ba.png) | [![wish](https://user-images.githubusercontent.com/37580351/190294956-d1649e5a-ac15-46f4-85d1-e9fff32eec88.png)](https://user-images.githubusercontent.com/37580351/190294956-d1649e5a-ac15-46f4-85d1-e9fff32eec88.png) |

<br />

## :bug: 개발 이슈

|     | 이슈                                                                                              | 개선사항                                                                                                                                                                 |
| :-: | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  1  | 데이터를 가져올 때, 페이지에 흰 화면만 표시되는 문제                                              | [사용자가 로딩 상태를 인지할 수 있도록 로딩 상태바 표시](https://velog.io/@eenaree/loading-progress-bar)                                                                 |
|  2  | A 카테고리의 데이터를 가져오기 전에, <br />다른 카테고리를 클릭함으로써 발생하는 화면 깜빡임 이슈 | [http 클라이언트를 이용하여 완료되지 않은 비동기 요청을 취소하여 개선](https://velog.io/@eenaree/javascript-cancel-promise)                                              |
|  3  | 각각의 컴포넌트에서 일일이 처리해줘야 하는 로딩, 에러 처리                                        | [axios Interceptor 기능을 이용해 일괄적으로 처리 후, 중복된 코드 일부 제거](https://github.com/eenaree/bears-goods-shop/commit/b9ab86e4965d12b9f06ae5fdb4f64aebe58ce593) |
|  4  | 모달창 토글시, 페이지가 미세하게 움직여 좋지 않은 사용자 경험을 보여줌                            | [페이지의 스크롤바 width 값을 body padding 값에 추가하여, 페이지 움직임 최소화](https://github.com/eenaree/bears-goods-shop/pull/31)                                     |
|  5  | 상품 상세페이지에서 이미지 1개만 단조롭게 나열되어 있는 UI                                        | [이미지에 마우스 이벤트를 추가하여 마우스 움직임만으로 이미지 확대 기능 추가](https://velog.io/@eenaree/react-image-zoom-in)                                             |

<br />

## :books: 사용 기술

<p>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</p>

- **React**의 선언형 UI를 통해 사용자와 상호작용이 많은 웹 애플리케이션 코드를 보다 효율적으로 구축하려고 했습니다.
- **Typescript**를 도입하여 타입을 구체적으로 명시함으로써, 코드 실행시 발견할 수 있는 오류를 최소화하려고 했습니다.
- **Emotion.js**은 컴포넌트별로 스타일 코드를 관리할 수 있고, 상태에 따라 동적 스타일을 표현할 수 있어 사용했습니다.
- **Redux**는 자주 변경되는 전역 상태에 대한 렌더링 최적화를 고려하여, 리액트의 Context API 대신 전역 상태를 관리했습니다.
