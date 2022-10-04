# 프로젝트명(개인): FROMAKEUP SITE   
간단한 화장품 쇼핑몰 사이트 제작   

- 시작일: 10/20
- 개발언어: JavaScript
- 개발 라이브러리: React.js
- 벡엔드 : Node.js 사용
- 데이터 : 몽고디비 활용
  <br />    
  <br />    


## ✔ 기능구현
- 로그인/ 로그아웃/ 회원가입
- 파일 업로드
- 장바구니
 <br />   
 <br />   
 


## ✔ 정리 or 알게된 점    
mongodb- limit(), skip()를 사용한 데이터에서 불러올 갯수와 더 불러오고 싶을 때 어디서부터 가져올 건지 지정해줌 <br />
axios로 보낼 때, limit과 skip에 대한 정보도 같이 보냄<br />
↓<br />
node에서 받음<br />
let limit = req.body.limit ? parseInt(req.body.limit) : 20; <br />
let skip = req.body.skip ? parseInt(req.body.skip) : 0; <br />
몽구스 모델.skip(skip).limit(limit)   
<br />

클릭시 삭제되는 기능 구현시,   
- filter 사용: 부여된 id값이 있다면 누른 id에 해당하는 값이 아닌 값들만 출력해줄 수 있다.   
```javaScript
const [users, setUsers]  = useState ([
        {
            id:1,
            username:'test1',
            email:'test1@test.com',
            active: true
        }
    ])
const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
}
```

- indexOf 사용: 눌러진 index의 값을 구해서 해당 index의 지점해서 1개만 제거 되게 해준다.   
```javaScript
const [Images, setImages] = useState([]);
const deleteHandler = image => {
        const currentIdx = Images.indexOf(image);
        let newImgs = [...Images];
        newImgs.splice(currentIdx, 1);
        setImages(newImgs);
```

