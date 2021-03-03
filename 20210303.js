/*
최소공배수 Least common multiple
최대공약수 Greatest common factor

유클리드 호제법

최대공약수 구하기
큰수를 작은수로 나누었을 때 나누어 떨어지면 작은 수가 최대공약수이고
ex) 12 % 3 =0 -> 최대공약수 3

나누어 떨어지지 않는다면
ex) 12 % 5 = 2
그 나머지로 전의 작은수를 나누고 나누어 떨어지지 않는다면
    5 % 2 = 1
그 나머지로 전의 작은수를 나누고...(를 반복해서 나머지가 0이 되면 리턴)
    2 % 1 = 0 -> 최대공약수 1

최소공배수 구하기
두수를 곱하고 최대공약수로 나누면 최소 공배수가 나옴.
*/
function solution(n, m) {
    var answer = [];
    
    const GCF = (big,small) => { 
        return small === 0? big : GCF(small, (big % small))
    }

    let big = Math.max(n, m)
    let small = Math.min(n, m)
    
    answer.push(GCF(big,small))
    answer.push(n*m/answer[0])
    
    return answer;
}

/* 
문제 설명

두 수의 
최대공약수와 
최소공배수를 반환하는 함수, solution을 완성해 보세요. 

배열의 맨 앞에 최대공약수, 
그다음 최소공배수를 넣어 반환하면 됩니다. 

예를 들어 
두 수 3, 12의 
최대공약수는 3, 
최소공배수는 12이므로 
solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.

입출력 예
n	m	return
3	12	[3, 12]
2	5	[1, 10]

예 #1
위의 설명과 같습니다.
예 #2
자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.
*/