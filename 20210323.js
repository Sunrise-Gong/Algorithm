/* 알파벳을 유니코드로 바꿔주는 메소드 필요
'A'.charCodeAt() -> 65
'Z'.charCodeAt() -> 90
*/

// 방향키를 위로 올렸을 때 가까울 수도 있고 (A -> Z)
// 방향키를 아래로 내렸을 때 가까울 수도 있을 것입니다.(A <- Z)

// 방향키를 좌로 갸야 할 경우를 판별
// 예시를 참고 했을 때 두번째 요소부터 하나 이상의 A가 있는 경우 좌측으로 이동 하는 것이 좋을 것 같지만
// ex) -> 'BADCAAAA' 이건 우측으로 돌아야
// ex) -> 'BADCA' 이건 좌측이나 우측이나 동일
// ex) -> 'BAADCA' 이건 좌측으로 
// ex) -> 'BADACA' 좌측 우측 동일

// 마지막에 뭉쳐있는 A가 더 길면 우로 
// 1번 인덱스부터 뭉쳐있는 A가 더 길면 좌로
function solution(name) {
    var answer = 0;
    const leftCycle = () => {
        
    }
    
    const rightCycle = () => {
        
    }
    if (name[1] === 'A') { // (좌A)
        if (name[name.length-1] === 'A') { // (좌A && 우A)
            let lA
            let rA
            if (lA > rA) { // 좌순회
                leftCycle
            } else { // 우순회
                rightCycle
            }
        } else { // 좌순회 좌A
            leftCycle
        }
    } else { // 우순회 (우A or 무A)
        rightCycle
    }
    return answer;
}

function solution(name) {
    var answer = 0;
    const leftCycle = () => {
        
    }
    
    const rightCycle = () => {
        
    }
    if (name[1] === 'A') { // (좌A)
        if (name[name.length-1] === 'A') { // (좌A && 우A)
            let lA
            let rA
            lA > rA ? leftCycle : rightCycle
        } else { // 좌순회 (좌A)
            leftCycle
        }
    } else { // 우순회 (우A or 무A)
        rightCycle
    }
    return answer;
}
/*
문제 설명

조이스틱으로 알파벳 이름을 완성하세요. 
맨 처음엔 A로만 이루어져 있습니다.

ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동

예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.

따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.

만들고자 하는 이름 name이 매개변수로 주어질 때, 
이름에 대해 조이스틱 조작 횟수의 최솟값을 return 
하도록 solution 함수를 만드세요.

제한 사항
name은 알파벳 대문자로만 이루어져 있습니다.
name의 길이는 1 이상 20 이하입니다.

입출력 예
name	return
"JEROEN"	56
"JAN"	23

*/