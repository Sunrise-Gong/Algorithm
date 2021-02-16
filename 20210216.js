// 시저 암호

function solution(s, n) {

    let aCode = 'a'.charCodeAt()
    let zCode = 'z'.charCodeAt()
    let ACode = 'A'.charCodeAt()
    let ZCode = 'Z'.charCodeAt()
    console.log(aCode, zCode, ACode, ZCode) //97 122 65 90
    
    let answer = '';

    let sArr = s.split('') // 문자열 s 를 배열로 변환

    sArr.forEach(el => { // 배열을 순회하면서 각 값들을 n씩 밀어내기
        
        let elCode = el.charCodeAt() // 요소의 유니코드
        let elPlusN = elCode + n // 요소의 유니코드에 n을 더한 값 = n만큼 이동한 값
        
        // 소문자 범주에 있는 값인 경우
        if (aCode <= elCode && elCode <= zCode) {

            // n을 더한 값이 소문자 범주에서 벗어난다면
            if (elPlusN > zCode) {
                answer += String.fromCharCode(elPlusN - zCode + aCode - 1)

                // n을 더한 값이 소문자 범주라면
            } else {
                answer += String.fromCharCode(elPlusN)
            }

        // 대문자 범주에 있는 값인 경우
        } else if (ACode <= elCode && elCode <= ZCode) {
            
            // n을 더한 값이 대문자 범주에서 벗어난다면 
            if (elPlusN > 90) {
                answer += String.fromCharCode(elPlusN - ZCode + ACode - 1)
                // n을 더한 값이 대문자 범주라면
            } else {
                answer += String.fromCharCode(elPlusN)
            }
        } else {
            answer += ' '
        }

    })
    return answer;
}

/*
문제 설명

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 
다른 알파벳으로 바꾸는 암호화 방식을 
시저 암호라고 합니다. 

예를 들어 AB는 1만큼 밀면 BC가 되고, 
3만큼 밀면 DE가 됩니다. 
z는 1만큼 밀면 a가 됩니다. 

문자열 s와 
거리 n을 입력받아 
s를 n만큼 민 암호문을 만드는 함수를 완성해 보세요.

제한 조건

공백은 아무리 밀어도 공백입니다.

s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.

s의 길이는 8000이하입니다.

n은 1 이상, 25이하인 자연수입니다.

입출력 예
s	n	result
AB	1	BC
z	1	a
a B z	4	e F d

*/