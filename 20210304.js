// [Programmers] 크레인 인형뽑기 게임

function solution(board, moves) {
    var answer = 0;
    let basket = [];

    for (let i = 0; i < moves.length; i++) { //moves 배열을 순회
        let col = moves[i]

        if (board[board.length - 1][col - 1] !== 0) {// 바닥이 0 인 경우 기계를 내릴 필요 없음
            for (let j = 0; j < board.length; j++) {
                let target = board[j][col - 1]
                if (target !== 0) { // 요소가 0이 아니라면
                    if (basket[basket.length - 1] === target) { // basket의 마지막 요소와 같다면 
                        basket.pop()
                        board[j][col - 1] = 0;
                        answer += 2
                    } else { // basket의 마지막 요소와 다르다면
                        basket.push(target)
                        board[j][col - 1] = 0;
                    }
                    break; // 한번 뽑았으면 기계를 stop
                }
            }
        }
    }
    return answer;
}
/*
그림이 많고 장문이어서 문제설명과 입출력 예시는 링크로 대체합니다.
https://programmers.co.kr/learn/courses/30/lessons/64061
*/