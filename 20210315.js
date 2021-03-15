// [Programmers] 큰 수 만들기
function solution(number, k) {
    let stack = [];
    
    for (let i = 0; i < number.length; i++){
        while (k > 0 && stack[stack.length-1] < number[i]) {
            stack.pop()
            k--
        }
        stack.push(number[i])
    }
    // stack.splice(stack.length-k, k);
    // return stack.join('')
    return stack.slice(0, number.length-k).join('')
}
/*
k 가 0 이상일 경우 ex) 9999(같은 숫자가 반복되는 경우 제거가 안됨)
k 만큼 stack의 뒤의 요소를 없애서 리턴해야 한다.
slice 를 이용할 수도 있고
splice를 이용할 수도 있다.
splice 사용예시
stack = [1, 2, 3, 4, 5, 6, 7] 
stack.splice(3,2) -> [4, 5]
stack.splice(3번 인덱스를 포함해서, 총 2개의 요소를 제거한다.)

문제 링크
https://programmers.co.kr/learn/courses/30/lessons/42883
*/