# 📖 WinkBook 

## 🎈 프로젝트 소개 
도서구매자들을 위한 <b>도서 사이트</b> 입니다.

![Wink_logo](https://github.com/hahahaday12/WinkBook/assets/101441685/6d2171ea-1cd0-447d-8131-336d31c233c9)

WinkBook은 e-book을 판매하는 컨셉의 쇼핑몰 사이트 입니다. <br/>
다양한 미디어가 발달함 으로서 책에 멀어지는 현대인들을 위해, 조금더 친숙 하게 책에 다가갈수 있도록 e-book의 컨셉을 잡게 되었습니다.<br/>
지루하지 않은 느낌을 주기 위해 만화책 처럼 채도가 있는 사이트 UI를 만들게 되었습니다. <br/>
총 5개의 도서별 카테고리가 나눠져 있으며 실제 도서 사이트에서 사용하는 상세 설명을 나타내도록 했습니다.<br/>
쇼핑몰을 만들 때 충분히 활용할 수 있는 사이트를 개설하자는 목표를 가지고 진행 되었으며, 실제 오픈 Api를 활용하여 기능을 구현하였습니다.<br/>

-----

## 📅 프로젝트 기간

2023.05.30 ~ 2023.07.02

--------

## 📍 배포 URL

[WinkBook](https://master--wink-book.netlify.app/) (윙크북 쇼핑몰 페이지 )

[WinkBook-Admin](https://winkbook-admin.netlify.app) (윙크북 관리자 페이지)

--------

## 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js 16.14.1](https://nodejs.org/ca/blog/release/v16.14.1/)
- [Npm 8.5.0](https://www.npmjs.com/package/npm/v/8.5.0)

### Installation
``` bash
$ git clone git@github.com:hahahaday12/WinkBook.git
$ cd client
```
#### Frontend
```
$ cd client
$ npm install 
$ npm run dev
```

--------

## 🖥전체 화면 구성 

| **메인 페이지** | **메인 페이지** | **메인 페이지** |
| :--------------------------------------------: | :--------------------------------------------: | :--------------------------------------------: |
| <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/30643991-2a22-4565-9c50-b549daeebe86" width=1600px alt="메인" /> | <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/b5e14c96-7a9f-4fa3-b9fc-5a8eaf912615g" width=1600px alt="어바웃" /> | <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/6952518f-5c30-422d-ab21-dd8f7f0fd130" width=1800px alt="어바웃" /> |

| **회원가입 페이지** | **로그인 페이지** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/11482651-0e1d-4f3e-bc69-97501408adab" width=500px alt="회원가입" /> | <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/18cc06f9-de73-4333-830c-c19caa7b4141" width=500px alt="로그인" /> |

| **상세정보 페이지** | **상세정보 페이지** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/dab45cf6-a1a7-4ac6-a357-1b63a4bc4e47" width=472px alt="상세정보 페이지" /> | <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/5b95565f-058d-4f10-9744-bb11c9b0e4c8" width=470px alt="마이페이지 주문 상세" />

| **장바구니 페이지** | **주문 페이지** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/cc7ae625-110e-47b5-907f-2cf88cd11462" width=472px alt="상세정보 페이지" /> | <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/cde3bbe8-8f7f-4af4-ad10-be2a54c0ea79" width=470px alt="마이페이지 주문 상세" />

| **제품검색 페이지** | **마이 페이지** |
| :--------------------------------------------: | :--------------------------------------------: |
| <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/0b34f52a-70a0-481c-8095-53532170a92b" width=500px alt="제품검색페이지" /> | <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/976abb3c-7a36-4833-8a04-dc61023b12d5" width=600px heigth=600px alt="마이페이지 주문 상세" />

| **회원정보 수정 페이지** | **결과 모달** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/bed2f139-6cd0-4148-a65b-e032ca74f6de" width=620px alt="회원정보 수정" /> | <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/bfdaa760-b8bd-4682-97e7-a890dabd06d9" width=600px alt="결과 모당창" />

| **관리자 페이지 (상품 관리)** | **관리자 페이지 (상품등록 관리)** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="https://github.com/KDT1-FE/KDT5-M5/assets/101441685/0c3af749-03ab-4495-9569-ac23563ef0db" width=520px alt="관리자페이지 상품관리" /> | <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/165f17c5-f16d-443f-973c-0ea375296bdc" width=500px alt="사용자 관리" />

| **관리자 페이지 (회원정보 관리)** | **관리자 페이지 (구매정보 관리)** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/e9413e24-6c8b-4b25-96a8-23841c346117" width=820px alt="마이페이지 개인정보 수정" /> | <img src="https://github.com/hahahaday12/WinkBook/assets/101441685/0812bc0b-9e0c-4747-bfd5-3d6038e55314" width=800px alt="b관리자페이지 사용자 관리uy" />

<br />

------

##  프로젝트 구현중 마주친 문제점 과 해결방안  

### 🔥 문제 1. 서로 다른 도메인으로 인한 cors 오류<br/>
-> <b>corse 오류란?</b><br/>
corse는 "교차 출처 리소스 공유" 이며, 웹 브라우저에서 실행되는 스크립트가 다른 출처(도메인, 프로토콜, 포트)의 리소스에 접근할 때 보안 상의 이유로 발생하는 오류 입니다. <br/>
( url 앞부분을 보면 protocol, host, port가 적혀있는데, 이 부분이 다르게 요청이 들어가면 CORS에러가 발생 합니다.) <br/>
#### corse 동작 방식
<img width="593" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/4b938432-8668-4fc2-8d53-e7228f21b687">

### 🎇해결
-> Vite 환경에서의 Proxy 설정. 프로젝트 환경에 맞게 Proxy를 설정 해주었습니다. Proxy는 API로 네트워크 요청/응답을 주고 받는 client와 server 사이를 중개하는 중간자 역할 입니다.<br/>
Proxy 설정을 한다면 요청을 날릴 때 origin을 바꿔서 server에 날릴 수 있기때문에 해당 방법을 선택했습니다.<br/>
<b>Vite에서 Proxy 설정 방법 -> vite.config.json에서 Proxy 경로를 설정. </b> <br/>
<img width="407" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/df14e96f-234a-4eee-8fb6-a7ccba52a908">

### 🔥 문제2. 카페24에서 제품조회 api를 이용하여 상세 페이지를 나타내고있으며  구매, 대여 버튼 클릭에 따라 장바구니에서도 다르게 담겨야 한다.<br/>
-> 제품 조회 할때 오는 데이터의 property에 구매, 대여를 구분해줄수 있는 값이 없었습니다. <br/> 
(# 상세 페이지에 나오는 제품 property 사진)<br/>
<img width="207" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/edc51fd2-8265-466f-8fb6-a87a9aad23ce">

### 🎇해결
-> 상세 페이지에서 구매, 대여를 클릭할때 제품 조회해 오는 api의 데이터에 key값,property를 추가 하였습니다.<br/> 
책구매하기 버튼을 클릭시 detail의 정보에 property gubun 값을 추가 하였습니다.<br/> 
따라 책 구매하기 버튼 클릭시 gubun 값이 buy 로 추가 됩니다.  장바구니 담기의 gubun 값은 rent 로 추가 됩니다.<br/>
#### 구매
<img width="1035" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/117329b8-05da-4877-8735-ed1dbf50eb68">

#### 대여
<img width="1097" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/15311b2f-0186-452d-bb48-176eefbe4bf8">

### 🔥 문제3. cafe24에서 Admin 권한을 어떻게 받을 수 있을까? 
-> [어드민 권한을 위한 참고한 api 문서](https://developers.cafe24.com/app/front/app/develop/customeraccesstoken/oauthcode) 
<img width="863" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/ce24599d-6bf1-4394-91aa-e4b32d085f6c">
<img width="785" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/2fb8ae9c-0721-466c-8d8f-5a7a599324de">

<b>정리</b>:
어드민 페이지 접속 하기 위해선 token이 필요한데, token에는 code값이 필요하다.<br/>
해당 값을 발급 받기 위해선 카페24의 특정 url에서 로그인을 하면 주소창에 code값이 생성되고 이를 바탕으로 token 요청 api를 보낸다.<br/>
이후 받은 응답으로 access token은 쿠키, refresh token은 local storage에 저장하게 되므로 배포된 페이지로 접속을 하면 refresh token을 갖고 토큰을 요청하므로 어드민 권한이 부여된다.<br/>

### 🎇해결
-> 위에 설명된 인증 코드 Request 형식 redirect_uri 부분에 팀이 배포한 Admin 배포 url을 넣어 해당 페이지에 인증코드가 발급되고 인증 받은 token값이 저장되며 배포된 어드민 페이지가 나타나게 됩니다.

#### 개발 정보 관리 Redirect URI(s) 주소
<img width="476" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/c2532ad3-734b-4179-824c-3742930bc9da">

#### 주소창에 url 입력후 보이는 AdminPage
![ezgif com-video-to-gif (10)](https://github.com/hahahaday12/WinkBook/assets/101441685/f3df9b11-7a14-4993-9c97-2180f13734f7)


### 🔥 문제4. 로그인이 되어있는 상태에서 token이 만료 되면, 헤더의 로그아웃 부분이 클릭되지 않으며 '유효하지 않는 사용자' 라고 401 의 상태값이 나타납니다.<br/>

#### 에러 모습
-> 로그아웃이 클릭되지 않고 오류 메세지가 계속 나타납니다.
![ezgif com-video-to-gif (11)](https://github.com/hahahaday12/WinkBook/assets/101441685/94f1ce31-472d-4a32-aa50-b25c190ebfad)

### 🎇해결
-> header 부분에 에러 상태값에 대한 조건식을 넣어 에러 상태값이 401 일시 token을 제거하는 코드를 작성해주었다. 

#### 수정전 코드 
<img width="512" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/938cc7be-2b4c-43ca-9ebd-2453b60e5609">

#### 수정후 코드
<img width="479" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/9d07e4ba-753e-48a7-838e-9ff916c3694d">

#### 수정 결과 
![ezgif com-video-to-gif (12)](https://github.com/hahahaday12/WinkBook/assets/101441685/0cb4684e-21be-48b1-b4d9-bcb5b0c1d1b7)

## 프로젝트 회고
-> 기존에 주어진 Api 가 아닌, 실제 openApi 를 사용해서 상품을 등록하고, 등록한 상품의 데이터를 나타내는 작업이 재미밌기도 하면서 어려운 부분도 있었습니다. <br/>
덕분에 개발 문서를 보는법을  알게 되었고, 팀원들과 함께 api를 직접 정리해봄으로서 restApi 에 대한 이해도가 생겼습니다. <br/>
장바구니를 담는 api나 , 구매 조회에 대한 api 가 따로 있는것이 아니여서 이 부분에 대해 어떻게 풀어 나갈지, 데이터를 활용할수 있는 방법에 대해서 많은 고민을 해볼수 있는 계기가 되었습니다.<br/>
생활 하면서  결제 모듈로 결제를 해야할 상황이 꽤나 많이 있기 때문에 실거래 openApi (Import) 를 이용하며 조금더 실서비스에 가까운 기능을 구현해볼수 있었던것 같아서 뿌듯 하였습니다. <br/>
각 기능들에서 데이터 핸들링을 하며, 어떻게 하면 조금더 가독성이 좋고, 성능 좋은 코드를 작성할수 있을까 고민해 볼수 있는 계기가 되었습니다.<br/>
이번 프로젝트를 하면서 다양한 기능적 구현을 경험 할수 있었으며, 다음번엔 실서비스를 할수 있을만한 퀄리티의 프로젝트를 만들어 보고 싶은 욕심도 생기게 되었습니다. <br/>

# ✨✨✨ refactoring ✨✨✨

## 1차 성능 검진 (PageSpeed Insights 활용)
<img width="398" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/ccd75ed8-28ec-4d14-95db-8cc5b37635df"> <br/>
-> 코드 구조 수정 X , 맨처음 배포된 성능 점수 표 입니다. 

## 2차 성능 검진 코드 리팩토링 후 (PageSpeed Insights 활용)
<img width="413" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/cd9053d4-88e4-4373-bc3e-3d6166264bdb">  <br/>
-> header searchInput 컴포넌트 모듈화 , 필요없는 이미지, 코드 삭제후 성능 검사 점수 표입니다. 성능 점수가 올라갔으며, 각각의 성능 속도가 조금 빨라 진것이 보입니다. <br/>

## 3차 성능 검진 코드 리팩토링 후 (PageSpeed Insights 활용)

-> 프로젝트 특성상 이미지가 많은 부분을 차지 하기 때문에 이미지부분에서 어떻게 하면 성능을 개선할수 있을지 고민 하였습니다. <br/>
기존 openApi 에서 받아오는 이미지 형식이 jpg 로 지정이 되어있기 때문에 이미지 형식 변환이 어려웠고, 데이터에 저장된 이미지가 아닌 현 프로젝트 public에 저장되어 있는 이미지의 형식을 변환해 보도록 하였습니다.<br/> 
PageSpeed Insights에서 이미지를 변환하는 방식에 WenP, AVIF 의 형식이 기존 JPEG 보다 압축률이 놓고 다운로드가 빠르다는 정보를 주었습니다. 따라 프로젝트에 저장된 이미지의 형식을 AVIF 형식으로 변환하였습니다. <br/>
<img width="338" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/b82627ff-3365-4f4f-b04f-a8eb0a4bfc2d"><br/>

변환된 파일 사진 
<img width="143" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/e8d8f9cd-b037-4bab-b6e1-a944f6281bd4">

### 변환후 성능 검진
<img width="396" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/0417a193-bca7-40af-9f70-6139367649d1">  <br/>

-> 2차 성능 검진 보다 로딩 속도도 빠르고 , 성능 점수도 올라간것 이 보이며 페이지를 처음들어올때 화면 로딩이 조금 빨라진것도 느끼게 되었습니다.<br/>
 조그만 부분에서도 성능 개선이 이뤄지는 것을 보면서, 성능에 대해 신경쓰며 기능 구현 하는것이 중요하다는 것을 느끼게 되었습니다.
 또한 성능 개선을 위해 자료를 찾아보며 다양한 방법으로 개선이 이뤄지는 것을 깨닫게 되었습니다. 
 앞으로 다양한 방법으로 성능 개선을 해볼 생각입니다. 

## 4차 코드 리팩토링
📌 Mainpage lazyloading 적용



📌 로그인 react-hook-form 적용


 

------

## 🌟 프로젝트 구현 담당 기능 설명  

### 🎈 1) 로그인<br/>
-> 회원가입한 정보로 로그인 정보를 입력하게 되고 , 입력후 등록 하게 되면 Signin 이라는 함수가 실행되고, 만약 입력창에 지정한 조건이 입력되지 않으면 가입이 되지않게 return false로 지정해 두었습니다.<br/>
조건에 맞게 입력이 되면 서버에 로그인 정보를 보내게 되고 , 서버에서 token 값을 받아 localStorage 에 저장하도록 구현 하였습니다.<br/>
<b>token 을 사용하여 사용자를 식별하고 , 사용자의 세션유지, 접근권한 부여를 하도록 구현하였습니다.</b>
#### 구현코드
<img width="557" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/3d946aeb-22fa-414c-a162-ed06ed243ab9">

#### 🌟최종 로그인 구현모습

-> <사진 첨부 필요>

### 🎈2) 회원가입<br/>
-> <b> form 태그를 이용하여 사용자 친화적인 인터페이스를 만들고 , 안의 데이터 요소들을 그룹화 하여 서버에게 데이터를 간소화 하여 전달 하게 구현하였습니다.</b> <br/>
-> 비밀번호 유효성 검사에 대한 상태값을 저장할수 있도록 isEmail 의 state 를 생성했고, 상태에 따른 오류 메세지를 저장할수 있는 오류 상태의 emailMessage 의 state 를 생성 하였습니다. <br/>
이후, 조건식으로 이메일 유효성 검사를 하여 지정된 조건식에 맞으면 그에 따른 상태 메세지를 setIsEmail안에 저장해두고 , 상태값을 setEmailMessage 안에 저장해두었습니다. <br/> 
따라 사용자가 이메일을 입력중에 있을때 조건식에 맞지 않으면 아래에 해당 상태값에 대한 오류 메세지가 출력됩니다. <br/>

#### 구현코드
<img width="404" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/b11db4a9-4d46-4a54-8df9-216a74b9f929"><br/>
<img width="494" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/3ca8e1fc-187f-41f4-a160-b84c42654354"><br/>

-> 회원정보를 입력후 등록 버튼을 누르면 type 이 submit 인 {signUp} 이라는 함수가 실행되고 조건식으로 적혀지지 않은 기입 란이 존재하면 return false로 진행을 멈춥니다. <br/>
가입 조건이 맞으면 서버로 입력정보들을 전달하고 token값을 받아와 성공 여부의 알림이 뜹니다.<br/> 예외 처리로는 서버에서 오는 상태값에 따라 알림, 콘솔 창에 나타나도록 구현하였습니다. <br/>

#### 구현코드
<img width="500" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/54ebdcf8-f650-467a-a98e-ad751ae60a6f"><br/>
<img width="500" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/f621a320-dcd6-4f94-8639-01967bea779e"><br/>
<img width="500" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/dbe4cbf7-aaa1-4a8e-905f-7c7a1deb5de6"><br/>
<img width="500" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/d98dfbcc-3840-4065-a333-2d34da7195f3"><br/>

#### 🌟최종 회원가입 구현모습
<img width="404" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/beed2a55-477b-482f-bece-16c642f63671">

### 🎈3) 상세페이지
-> data라는 변수 안에 제품을 조회하는 함수 getList 를 실행후 , productList 제품리스트 정보의, product_no 제품 숫자를 입력받아 해당 아이템의 정보를 가져오게끔 구현하였습니다.<br/>
<b> < Link > 태그를 사용하여 각 아이템에 대한 링크를 생성후 , 경로가 .product_no 값의 따라 생성되게 구현하였습니다.</b> <br/>   
#### 구현코드<br/>
<img width="421" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/1f6559b5-f855-4e4e-92b3-6ae2d85f023d"><br/>

-> <b> useParams 훅을 사용하여 현재 경로의 파라미터 값을 가져오고, 해당 값으로 productNo 변수를 초기화 하여 getDetails함수 에서 productNo값을 활용하여  해당 상품에 대한 세부 정보를 가져오게끔 구현하였습니다. </b> <br/>
#### 구현코드
<img width="475" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/35522ea4-00ad-4659-b5aa-0e21f1c90006">

#### 🌟최종 상세페이지 구현모습
<img width="479" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/ddc25cb9-1ae2-42c7-acff-6388eaebc410"><br/>


### 🎈4)장바구니<br/>
-> 구매, 대여 버튼 클릭시 detail에 담아져 있는 데이터와, 추가할 property 값을 매개 변수로 넘겨주었습니다. <br/>
<b>장바구니에 담을때, 중복된 상품을 제거 하기위해 javascript의 Set 객체를 사용하고,  Spread Oprator 를 활용하여 중복 제거된 값이 배열로 변환되게 구현하였습니다.<br/>
JSON 형태의 문자열로 변환하여 로컬 스토리지에 'cart' 키로 저장하였고 이를 통해 장바구니 데이터가 유지 됩니다. </b> 그후 상태값의 alert 창을 띄어 주었습니다. <br/>
#### 구현코드<br/>
<img width="450" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/25b9ea2d-f1ed-44f1-80a0-2bbf62f460f5">
<img width="350" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/441c2a13-93a2-4d01-9052-c30f57f6ee7a"><br/>

-> 예외처리로 some()  메서드를 사용하여 하나 이상 요소가 조건을 만족하면 true 값이 나옵니다. 따라 , 장바구니에 있는 상품번호와 현재 상세페이지 상품정보가 같으면 true가 되어 중복이라는 알림창이 나타나게 됩니다.<br/> 
#### 구현코드<br/>
<img width="539" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/ee071e3b-e496-4abc-ba0c-57c00da5d555">

### 🎈5) 결제페이지
->  Import open Api 를 이용해서 결제 정보를 props로 넘겨 주었습니다. 결제가 완료된후 마이페이지에 출력하기위해 결제 번호를 localStorage 에 저장하였습니다. <br/>
(# 로컬에 저장한 이유 = 제품 구매 내역을 구현하기 위해선 구매내역을 저장할수 있는 DB,Api 가 따로 있어야 했습니다. 하지만 해당 Api가 설계되어있지 않았기 때문에 기능구현을 위해 localStorage에 저장하도록 구현하였습니다.)
이후 결제가 성공되면, "mypayment" 키 값으로 로컬스토리지에 해당 키 값이 저장되어있으면, JSON.Parse 를 하여 변수에 할당해주었고, 없으면 주문번호를 담은 배열을 만들어 "mypayment" 키 값에 저장되게 구현하였습니다.
#### 구현코드
<img width="611" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/5237f4a0-b7eb-4404-ad72-8ab74910124c">

-----

##  팀원

|            [서동욱](https://github.com/foodeco)            |            [김하은](https://github.com/hahahaday12)             |             [김세연](https://github.com/saeyeonKim)             |              [문대현](https://github.com/dhmoon11)              |          [박진영](https://github.com/jinyoungpark231)          |
| :--------------------------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------: | :------------------------------------------------------------: |
| ![](https://avatars.githubusercontent.com/u/106901147?v=4) | ![](https://avatars.githubusercontent.com/u/101441685?s=96&v=4) | ![](https://avatars.githubusercontent.com/u/118176015?s=96&v=4) | ![](https://avatars.githubusercontent.com/u/128357255?s=96&v=4) | ![](https://avatars.githubusercontent.com/u/76546374?s=96&v=4) |
| 메인페이지, 어드민페이지, 카페24&아임포트 토큰 발행 및 api | 장바구니, 마이페이지, 상세페이지, 회원가입, 인증, 결제 및 조회, 디자인 및 레이아웃  |                        검색페이지, 결제                         |                    마이페이지, 회원정보 수정                    |                      검색페이지, 목록조회                      |



---------

## ✨ 기술스택

<img src="https://github.com/hahahaday12/WinkBook/assets/101441685/83729917-238e-48d5-b5e4-a546ad08cf46" width=600px alt="기술스택 이미지" />

### Develoment
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

### Config

  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Enviroment

  <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

### Deployment

  <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">

------

## 📇 사용된 오픈 Api

커머스: ![](https://img.cafe24.com/images/common/cafe24.svg)

결제: ![](https://www.gitbook.com/cdn-cgi/image/width=100,dpr=1,height=40,fit=contain,format=auto/https%3A%2F%2F3026939543-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FwWX2hlvRZLZrXeH1aacF%252Flogo%252FdtaZNeSUqL59mzfDm6jC%252FPortOne_Logo_Black.png%3Falt%3Dmedia%26token%3Dd66f72ec-8826-4be6-8e09-b0b32ff9a482)

* 결제 가능한 카드사 
 - 비씨 
 - 현대

* 안되는 카드 
 - 국민 
 - 삼성 

(테스트 결제 모듈이기 때문에 연결된 카드사만 결제가 됩니다. 주후 추가적인 결제 모듈도 도입해볼 생각입니다.)

------

## 👨🏻‍🤝‍👨🏻 협업 방식 

### 1) Zoom
- 주말 및 특별한 사유가 있는 경우를 제외하고 1시에 회의 <br/>
- 데일리스크럼을 통해 각자의 진행상황과 작업 목표를 확인 <br/>
    -> 대략적인 목표에 구체적인 요청사항을 추가하는 시간 <br/>
    -> 오류 발생 시 화면을 공유하여 해결 방안을 함께 모색 <br/>

### 2) discord
-> 그룹원 간 작업 내용과 구현 내용의 구체적인 요구를 할 때 사용<br/>
-> 진행 중 막히는 부분에 대한 방법 공유<br/>

-----

## 🎈 작업 진행 

### 1) Notion
-> 그라운드 룰, 커밋 컨벤션, api 문서 등 프로젝트에서 필요한것들을 기록해두었습니다. 

#### ✅ Api 문서 정리 
<img width="500" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/d9b52548-872f-4253-80bb-f478a20a5382">

#### ✅ git commit 컨벤션 정리  
 <img width="500" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/e9f0c03c-afea-4a06-97cd-729542d797f3">
 
### 2) Github
#### 깃허브 전략 Github Flow<br/>
-> develop branch 생성.<br/>
-> develop branch 에서 각자 이름의 branch 생성.<br/> 
-> 각자 branch 에서 기능 개발이 완료되면 develop branch 로  PR 생성.<br/> 
-> 깃허브 담당자가 올라온 Pull request 확인후 develop branch 로 merge.<br/>
-> 모든 기능 구현 완료후 최종적으로  develop branch 를 master branch 로 merge.<br/>

<img width="350" height="500" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/7ae366b4-a077-4d3b-9609-64296bdd52ca">

-----

## ⚙ 프로젝트 설계 

### use case
<img width="800" height="400" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/b3fd68fa-1b17-49ff-abeb-081531a3a009">
<br/>

### 폴더 구성(초안)
<img width="800" height="400" alt="image" src="https://github.com/hahahaday12/WinkBook/assets/101441685/6f434069-4618-474b-82b7-b4ca7b5d38cc">

-----

## 📌 프로젝트 주요 기능

### 메인

- 제품 검색
- 추천 도서
- sticky 안내바

### 상세페이지

- 구매, 대여 버튼
- 장바구니 자동 이동

### 검색

- 구매, 대여 버튼
- 검색 결과 미리보기

### 마이페이지

- 개인 구매 내역
- 회원 정보 수정

### 어드민페이지

- 물건 등록/수정/삭제
- 전체 회원 목록
- 전체 결제 내역

-----
