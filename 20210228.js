// [Programmers] 이상한 문자 만들기
function solution(s) {
    var answer = '';
    let arr = s.split(' ')

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        let newWord = ''
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                newWord += word[j].toUpperCase()
            } else {
                newWord += word[j].toLowerCase()
            }
        }
        answer += newWord
        if (arr[i + 1] || arr[i + 1] === '') answer += ' ' 
    }
    return answer;
}
    /* 
    문자열을 공백 한칸을 기준으로 split 하고
    각 단어를 순회하면서
    단어의 스펠링을 순회 (짝수인덱스 -> 대문자, 홀수인덱스 -> 소문자 처리)
    처리한 단어(newWord)를 answer에 더하는데
    만약 배열에 다음인덱스가 존재하는 경우에만 공백을 더한다.

    이 문제의 포인트는 
    띄어쓰기가 연속으로 붙어 있을 수 있다는 점
    
    split() 메소드를 사용할 때 
    빈 문자열 요소가 추가되는 규칙을 찾으면 수월합니다.
    
    아례 예시는 언더바를 띄어쓰기 라고 생각해도 무방합니다.
    "_a__b_c".split('_') 는 
    ["", "a", "", "b", "c"] 입니다.
    
    잘 살펴보면
    '_'와 다른 요소가 양쪽에 위치해 있지 않은 경우는 두가지 입니다.
    '__' 언더바가 두개이상 연속으로 붙어 있는 경우
    문자열의 가장 앞에 위치하거나 가장 뒤에 위치하는 경우
    이 두가지 상황에서 빈 문자열을 요소로 추가합니다.
    */

/*
문제 설명

문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
각 단어의 짝수번째 알파벳은 대문자로,
홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라,
단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.

첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

입출력 예
s = "try hello world"
return = "TrY HeLlO WoRlD"

입출력 예 설명
"try hello world"는 세 단어
"try", "hello", "world"
로 구성되어 있습니다.

각 단어의 짝수번째 문자를 대문자로,
홀수번째 문자를 소문자로 바꾸면
"TrY", "HeLlO", "WoRlD"입니다.
따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
*/