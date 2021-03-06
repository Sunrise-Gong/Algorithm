function solution(n)
{
    return n
        .toString() // 숫자열 -> 문자열
        .split('') // 문자열 -> 배열
        .reduce((ac,cu)=> ac + cu*1, 0) // 배열의 요소들 숫자열로 더하기
        
        /* 
        reducer의 초기값을 0으로 설정한 이유
        배열의 길이가 1인 경우 
        
        초기값이 있으면
        초기값과 연산이 한번이라도 이루어지겠지만
        ex) 0 + '1'*1 === 1
        
        초기값이 없으면  
        값이 하나이기 때문에 연산이 이루어질 수 없고
        배열의 요소가 그대로 반환됩니다.
        */
        
        /*
        숫자열을 문자열로 바꾸는 방법
        0 + ''
        String(0)
        n.toString() -> 할당되어 있는 경우 가능
        */
        
        /*
        문자열을 숫자열로 바꾸는 방법
        parseInt('0')
        Number('0')
        '0'*1
        */    
}

/*
문제설명

자연수 N이 주어지면, 
N의 각 자릿수의 합을 구해서 
return 하는 solution 함수를 만들어 주세요.

제한사항

N의 범위 : 100,000,000 이하의 자연수

입출력 예

#1
N = 123이면 
1 + 2 + 3 = 6 이므로 6을 return 하면 됩니다.

#2
N = 123이면 
9 + 8 + 7 = 24 이므로 24를 return 하면 됩니다.
*/