function solution(nums) {
    var answer = 0;
    
    // 소수 판별 함수
    // 1과 자신을 제외한 수로 나누었을 때 나누어 떨어지지 않으면 소수
    const discern = (num) => { 
        for (let i = 2; i < num; i++) { 
            if (num % i === 0) return false;
        }
        return true
    }
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (discern(nums[i] + nums[j] + nums[k])) {
                    answer++
                }
            }
        }
    }
    return answer; //소수가 되는 경우의 개수
}
/*
문제 설명

nums = 숫자들이 들어있는 배열
nums 에서 서로 다른 3개를 골라 더했을 때
소수가 되는 경우의 개수 를 return 하도록
solution 함수를 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

입출력 예
nums	result
[1,2,3,4]	1
[1,2,7,6,4]	4
입출력 예 설명

입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.
*/