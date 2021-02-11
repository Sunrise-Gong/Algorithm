
/*
전체 학생의 수 n, 
체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
*/
function solution(n, lost, reserve) {
    /*
    체육복을 도난당했지만 여유분을 가지고 있는 학생의 경우
    -> 체육에 참가할수 있지만 체육복을 빌려줄 수 없는 학생과 동등한 입장
    -> lost, reserve 배열 모두에서 제거하도록 하겠습니다.

    전체학생수 - 잃어버린 학생수 + 체육복을 빌린학생 수 in lost = 체육을 할 수 있는 인원 수
     */
    //
    lost.forEach(el => {
        if(reserve.includes(el)) {
            lost = lost.filter(lostEl => el !== lostEl)
            reserve = reserve.filter(reserveEl => el !== reserveEl)
        }
    })

    // 체육복을 잃어버린 학생이 체육복을 빌릴 수 있는 경우는
    // -> 자신의 번호 -1 또는 +1 한 값이 리저브 배열에 있는 경우
    // -> 전체학생 수에 1식 더하도록 하겠습니다. 그 1은 빌린 학생수 입니다.
    // -> 그리고 마지막에 도난당한 전체 학생 수를 빼서
    // -> 전체학생 - 도난당한 전체 학생 수 + 빌린 학생
    // -> 전체학생 + 빌린 학생 - 도난당한 전체학생수 
    // -> 전체학생 - (도난당한 전체 학생수 - 빌린학생수)

    lost.forEach(el => {
        if(reserve.includes(el-1)){
            n += 1
            reserve = reserve.filter(reserveEl => el-1 !== reserveEl)
        }else if(reserve.includes(el+1)){
            n += 1
            reserve = reserve.filter(reserveEl => el+1 !== reserveEl)
        }
    })
    
    return n - lost.length;
}
//--------------------------------------------------
/*
전체 학생의 수 n, 
체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
*/
function solution(n, lost, reserve) {
    //lost 와 reserve 에 모두 포함되는 학생은 제거
    //lost -> 체육복 0개, reserve -> 체육복 2개 인 인원만 남기도록 하겠습니다.
    lost.forEach(el => {
        if(reserve.includes(el)){
            lost = lost.filter(lostEl => el !== lostEl)
            reserve = reserve.filter(reserveEl => el !== reserveEl)
        }
    })
    //전체학생수 - 체육복이 0개인 인원
    var answer = n - lost.length;
    
    // answer + 체육복을 빌린 인원수
    lost.forEach(el => {
        if (reserve.includes(el-1)){
            answer +=1
            reserve = reserve.filter( reserveEl => el-1 !== reserveEl)
        } else if (reserve.includes(el+1)){
            answer +=1
            reserve = reserve.filter( reserveEl => el+1 !== reserveEl)
        }
    })
    
    return answer;// 체육수업을 들을 수 있는 최대인원 수
}
/* 
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 

학생들의 번호는 체격 순으로 매겨져 있어, 
바로 앞번호의 학생이나 
바로 뒷번호의 학생에게만 
체육복을 빌려줄 수 있습니다. 

예를 들어, 
4번 학생은 
3번 학생이나 
5번 학생에게만 
체육복을 빌려줄 수 있습니다. 

체육복이 없으면 수업을 들을 수 없기 때문에 
체육복을 적절히 빌려 
최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 
체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 
매개변수로 주어질 때, 

체육수업을 들을 수 있는 학생의 최댓값을 return 
하도록 solution 함수를 작성해주세요.

제한사항

전체 학생의 수는 2명 이상 30명 이하입니다.

체육복을 도난당한 학생의 수는 
1명 이상 n명 이하이고 중복되는 번호는 없습니다.

여벌의 체육복을 가져온 학생의 수는 
1명 이상 n명 이하이고 중복되는 번호는 없습니다.

여벌 체육복이 있는 학생만 
다른 학생에게 체육복을 빌려줄 수 있습니다.

여벌 체육복을 가져온 학생이 
체육복을 도난당했을 수 있습니다. 

이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 
남은 체육복이 하나이기에 
다른 학생에게는 체육복을 빌려줄 수 없습니다.

입출력 예

n	lost	reserve  	return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	        4
3	[3]	    [1]	        2
입출력 예 설명

예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 
3번 학생이나 5번 학생이 
4번 학생에게 체육복을 빌려주면 
학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 
학생 4명이 체육수업을 들을 수 있습니다.
*/