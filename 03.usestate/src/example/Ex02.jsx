import React, {useState} from 'react'
import pic from '../img/karina1.jpg'

const Ex02 = () => {
    // useState의 초기값은 다양한 데이터 자료형이 가능
    const [likeEmoji, setLikeEmoji] = useState("♡")
    const [likeNum, setLikeNum] = useState(0)

    // 빈 하트 클릭 시, => 채워진 하트로 변경
    // 빈 하트 클릭 시, => 숫자 0을 1로 변경
    // 채워진 하트 클릭 시 => 빈 하트로 변경
    // 채워진 하트 클릭 시 => 숫자 1을 0으로 변경
    const handleLike = () =>{
        if(likeEmoji=="♡"){
            setLikeEmoji("♥")
            setLikeNum(1)
        }
        else{
            setLikeEmoji("♡")
            setLikeNum(0)
        }
    }

  return (
    <div>
        {/* src폴더 내 접근 */}
        {/* import 이미지변수 from '경로' */}
        <img width='300px' src={pic}></img>
        {/* 외부 주소값 접근 */}
        <img width='300px' src='https://photo.jtbc.co.kr/news/jam_photo/202505/15/ffb1e03b-cf8d-41c7-9ef9-4c4d9cc01b2b.jpg'></img>
        <br></br>
        {/* public폴더에 이미지가 있다면
            http://localhost:5173/img/img1.jpg
            public폴더는 서버와 통신 중 => 이곳에 저장하는 것만으로도 고유한 주소값이 생김
        */}
        <img width='300px' src='/img/img1.jpg'></img>
        <br></br>
        <p>
            <span onClick={handleLike}>{likeEmoji}</span>
            <span>{" "} 좋아요 {likeNum}개</span>
        </p>
    </div>
  )
}

export default Ex02