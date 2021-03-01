// [Programmers] 자연수 뒤집어 배열로 만들기 
function solution_1(n) {
    
    return (n+'').split('').reverse().map(el => el*1);
}

function solution_2(n) {
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
/* 
do ~ while
코드를 먼저 실행한 후에 조건을 비교합니다. 
(while 은 조건을 먼저 비교한 후에 코드를 실행)
do ~ while 은 코드가 최소 1번은 실행
*/

/* 
문제 설명

자연수 n을 뒤집어 
각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 

예를들어 
n이 12345이면 
[5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.

입출력 예
n = 12345
return = [5,4,3,2,1]
*/