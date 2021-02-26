// [Programmers] 문자열 내 p와 y의 개수

// 가장 오래 걸린 것 0.09ms
function solution(s){
    var answer = true;

    let Counter=0;
    let lowSpell =s.toLowerCase()
    
    for(let i =0; i < lowSpell.length; i++){
        if(lowSpell[i]==="p") Counter++
        if(lowSpell[i]==="y") Counter--
    }
    
    if (Counter !== 0) answer = false;

    return answer;
}

// 가장 오래 걸린 것 0.07ms
function solution(s){
    let low = s.toLowerCase()
    
    return low.split('p').length === low.split('y').length
}


/*
문제 설명

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 
'p'의 개수와 'y'의 개수를 비교해 
같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 

'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.

입출력 예
s = pPoooyY	
answer = true
s = Pyy	
answer = false

입출력 예 설명

입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
*/