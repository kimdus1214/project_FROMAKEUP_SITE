# 프로젝트명(개인): FROMAKEUP SITE   
간단한 화장품 쇼핑몰 사이트 제작   

- 시작일: 10/20
- 개발언어: JavaScript
- 개발 라이브러리: React.js
- 벡엔드 : Node.js 사용
  <br />    
  <br />    


## ✔ 기능구현
- 로그인/ 로그아웃/ 회원가입
- 파일 업로드
 <br />   
 <br />   
 




## ✔ 알게된 점   
mongodb- limit(), skip()를 사용한 데이터에서 불러올 갯수와 더 불러오고 싶을 때 어디서부터 가져올 건지 지정해줌
axios로 보낼 때, limit과 skip에 대한 정보도 같이 보냄
↓
node에서 받음
let limit = req.body.limit ? parseInt(req.body.limit) : 20;
let skip = req.body.skip ? parseInt(req.body.skip) : 0;
몽구스 모델.skip(skip).limit(limit)