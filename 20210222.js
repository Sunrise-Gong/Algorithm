function solution(s) {

    let sLength = s.length;
    if (sLength === 4 || sLength === 6) {
        return s
            .split('')
            .every(el => !isNaN(el))
    }
    return false
}
    /*
    문자열을 순회했을 때 
    통과되지 않는 테스트가 있어서 
    배열로 시도했습니다.
    
    왜 배열로 해야지 통과가 되는 것인지는 모르겠습니다.

    배열.every( 판별함수 ) 메서드는 
    배열 안의 모든 요소가 
    주어진 판별 함수를 통과하는지 테스트합니다.

    isNaN() 함수는 어떤 값이 NaN인지 판별합니다. 
    
    isNaN 함수는 몇몇 일반적이지 않은 규칙을 가지고 있으므로, 
    ECMAScript 2015에서 추가한 Number.isNaN()으로 바꾸는 편이 좋을 수도 있습니다.

    하지만 이 문제에서는 
    Number.isNaN 을 사용하면 통과가 안됩니다.(이유 모르겠음)
    */


/*
문제 설명

문자열 s의 길이가 4 혹은 6이고, 
숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 

예를 들어 s가 
a234이면 False를 리턴하고 
1234라면 True를 리턴하면 됩니다.

제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.

입출력 예

s = a234	
return = false

s = 1234 
return = true
*/