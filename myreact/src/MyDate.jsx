import React from 'react'

const MyDate = () => {

    //현재 시간 가져오기
    let day = new Date();
    console.log(day)

    let myYear = day.getFullYear();
    let myMonth = day.getMonth()+1;
    let myDay = day.getDate();

    console.log(myYear, myMonth, myDay);

    let name = prompt('이름을 말해주세요');

    let sea = '';

    if(2<myMonth && myMonth<6){
      sea = '봄';
    }
    else if(5<myMonth && myMonth<9){
      sea = '여름';
    }
    else if(8<myMonth && myMonth<12){
      sea = '가을';
    }
    else{
      sea = '겨울';
    }

  return (
    <div>
        <h1>{myYear}년{myMonth}월{myDay}일</h1>
        <hr></hr>
        <p>{name}님 지금은 {sea}입니다. 좋은 하루 보내세요.</p>
    </div>
  )
}

export default MyDate