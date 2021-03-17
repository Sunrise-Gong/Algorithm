// [Programmers] 카펫

function solution(brown, yellow) {
    let row = 0;
    let col = 0;
    let total = brown + yellow
    for (let i = Math.floor(total/2); i > 0; i--) {
        if (total % i !== 0) continue;
        row = i;
        col = total/i
        if ((row-2)* (col-2) === yellow) {
            return [row, col]
        }
        
    }
}

/*
문제 설명
https://programmers.co.kr/learn/courses/30/lessons/42842
*/