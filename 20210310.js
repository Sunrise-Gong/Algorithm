//[Programmers] 실패율

// 전체 스테이지의 개수 N
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
function solution(N, stages) {
    var answer = [];

    let allP = stages.length; // 현 스테이지를 통과한 인원수

    for (let i = 1; i <= N; i++) { // 각 스테이지를 순회
        let curP = stages.filter(el => el === i).length;//현 스테이지에 도달한 인원수

        answer.push({ stageNum: i, failureLate: curP / allP || 0 });

        allP -= curP
    }

    return answer
        .sort((a, b) => {
            return a.failureLate === b.failureLate ?
                (a.stageNum > b.stageNum ? 1 : -1) :
                (a.failureLate < b.failureLate ? 1 : -1)
        })
        .map(el => el.stageNum)
    /*
    스테이지넘버와 실패율을 담은 객체
    를 요소로 가지는 배열을 생성
    
    도달한 인원이 없는 스테이지의 경우 
    0을 || 연산자로 처리한 이유는
    0/0 = NaN 이기 때문에
    sort 할 때 문제가 생김
    
    실패율이 같은 경우 스테이지 기준, 오름차순 정렬
    실패율이 다른 경우 실패율 기준,  내림차순 정렬
    */
}

/*
문제 설명 및 입출력 예
https://programmers.co.kr/learn/courses/30/lessons/42889#
*/
