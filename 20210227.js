// [Programmers] 소수찾기

function solution_1(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(1)
    }
    for(let i = 2; i <=Math.sqrt(n); i++) {
        if(arr[i]) {
            for(let j = i*i; j <= n; j += i) {
                arr[j] = 0;
            }
        }
    }
    
    return arr.filter(el=> el === 1).length -1
}

function solution_2(n) {
    var answer = n
    let arr = []
    for (let i = 0; i <=n; i++) {
        arr.push(1)
    }
    for(let i = 2; i <=Math.sqrt(n); i++) {
        if(arr[i]) {
            for(let j = i*i; j <= n; j += i) {
                if(arr[j] !==0) {
                    arr[j]=0
                    answer--
                }
            }
        }
    }
    return answer -1
}

/*
문제 설명
1부터 입력받은 숫자 n 사이에 있는
소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.

입출력 예
예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/