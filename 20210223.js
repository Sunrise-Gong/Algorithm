

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant
// 완주한 선수들의 이름이 담긴 배열 completion
// 완주하지 못한 선수의 이름을 return 

// 시간복잡도에서 통과하지 못한 풀이
function solution_1(participant, completion) {
    var answer = '';
    for (let i =0; i <participant.length; i++) {
        if(completion.indexOf(participant[i]) === -1) {
            answer += participant[i]
            break;
        } else {
            // 완주자 명단에 이름이 있다면 지워줘야 동명이인의 경우 체크가 가능
            completion.splice(completion.indexOf(participant[i]),1)
        }
    }
    return answer;

    /*
    테스트 1 〉	통과 (0.06ms, 30MB)
    테스트 2 〉	통과 (0.09ms, 30MB)
    테스트 3 〉	통과 (0.21ms, 30.1MB)
    테스트 4 〉	통과 (1.03ms, 30.5MB)
    테스트 5 〉	통과 (0.76ms, 30.4MB)
    */
}

// 다른 사람 풀이

function solution_2(participant, completion) {
    participant.sort()
    completion.sort()
    
    for (let i = 0; i < participant.length; i++) {
        if( participant[i] !== completion[i]) {
            return participant[i]
        }
    }
    /* 
    sort() 메소드는 compareFunction 을 생략하면 
    배열은 각 요소의 문자열 변환에 따라 
    각 문자의 유니 코드 코드 포인트 값에 따라 정렬
    */
    
    /* 
    sort() 는 시간복잡도 어떻게 되길래 
    2번이나 실행하고 for문을 한번더 실행했음에도 불구하고
    더 빠른 속도가 나온 걸까
    */
    
    /*
    테스트 1 〉	통과 (0.06ms, 29.8MB)
    테스트 2 〉	통과 (0.06ms, 30MB)
    테스트 3 〉	통과 (0.47ms, 30MB)
    테스트 4 〉	통과 (0.82ms, 30.3MB)
    테스트 5 〉	통과 (0.79ms, 30.3MB)
    */
}

function solution_3(participant, completion) {
        /*
        배열은 객체와 같이 키와 값을 추가할 수 있습니다. 이점을 생각해서
        맵 메소드로 원본 배열을 객체의 역할도 겸하도록 만들어보겠습니다.
        그러면 순회하지 않아도 되니까 복잡도가 감소할 것입니다.
        
        속성은 선수의 이름이고 그 이름을 가진 인원 수를 값으로 넣겠습니다.
        동명이인이 없다면 -> 바보: 1  이런식으로 키값쌍이 배열에 추가 됩니다.
        */
        completion.map(name=>completion[name]=(completion[name]|0)+1)
        /*
        completion[name]|0 의 의미는 
        completion[name]의 값이 있다면 거기에 +1
        없다면 0에 +1
        문제에서 말하는 동명이인이 있다면 그 인원수 만큼 더해집니다.
        
        위의 map 함수 부분이 
        find 메소드의 두번째 인자로 들어간 식이 다른 분의 풀이 였으나
        가독성을 위해서 분리를 해보았습니다.
        (find 메소드의 두번째 인자로 들어가는 경우 첫번째 인자보다 먼저 실행됩니다.)
        */
        return participant.find(name=> {
            return !completion[name]-- 
        })
        /*
        find의 콜백함수는 객체처럼 완주명단을 조회해서 그 속성의 값을 1씩 빼는데
        주의할 점은 리턴 값이 빼기전의 값이 나온다는 것입니다. 
        
        예를들어 1 - 1 을 했는데 리턴 값은 1 이 됩니다. 
        하지만 그다음 조회시에는 0 - 1 이 되서 0 이 리턴 되죠.
        
        0은 falsy 한 값이니까 그 값에 not 연산자를 걸어서
        find가 그 값(name)을 리턴 하도록 하는 것으로 마무리 됩니다.
        
        아예 완주자 명단에 있지도 않은 이름이라면 
        undefined 가 not 연산자에 의해서 리턴되면서
        find가 그 값(name)을 리턴 하도록 하는 것으로 마무리 됩니다.
        */

    /*
    테스트 1 〉	통과 (0.12ms, 29.8MB)
    테스트 2 〉	통과 (0.11ms, 30.1MB)
    테스트 3 〉	통과 (0.40ms, 30.2MB)
    테스트 4 〉	통과 (0.59ms, 30.2MB)
    테스트 5 〉	통과 (0.60ms, 30.3MB)
    */
}




/* 
문제 설명

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 
모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항

마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

입출력 예
participant	completion	return
[leo, kiki, eden]	[eden, kiki]	leo
[marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
[mislav, stanko, mislav, ana]	[stanko, ana, mislav]	mislav

입출력 예 설명
예제 #1
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

출처
*/
