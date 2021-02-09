// function solution(numbers) {
//     var answer = [];
//     // 배열 numbers의 길이가 2 이상일때까지
//     while(numbers.length > 1) {
//         //첫번째 인덱스를 변수에 할당하고
//         let num = numbers[0]
//         // 첫번째 인덱스의 요소를 삭제하고 순회
//         numbers.shift()
//         for(let j = 0; j < numbers.length; j++){
//             //첫번째 인덱스와 j 인덱스 의 값을 더해서
//             let num2 = num + numbers[j]
//             //answer 에 num2에 없다면 추가
//             if(!answer.includes(num2)){
//                 answer.push(num2)
//             }
//         }   
//     }
//     //answer 를 오름차순으로 정렬
//     answer.sort((a,b)=> a-b)
//     return answer;
// }
//------------------------------------------------------------------------
//재귀로 리팩토링
function solution2(numbers) {
    let answer = [];
    //재귀함수 작성
    let recur = (numbersArr) => {
        if (numbersArr.length < 2) {
            return
        }
        let num = numbersArr[0]
        numbersArr.shift()
        for (let i = 0; i < numbersArr.length; i++) {
            let num2 = num + numbersArr[i]
            if (!answer.includes(num2)) {
                answer.push(num2)
            }
        }
        recur(numbersArr)
    }
    recur(numbers)
    return answer.sort((a, b) => a - b)
}
//------------------------------------------------------------------------
//재귀 리팩토링2
function solution(numbers) {
    let answer = [];
    //배열을 순회하면서 해당인덱스를 다른 요소와 더하는 과정이 필요할 것 같은데
    //해당인덱스는 다른 요소들과 한번씩 더해졌기 때문에 다시 더할 필요가 없으므로
    //인덱스 값을 1식 증가시켜서
    //다음 인덱스의 요소와 중복해서 더해지지 않도록 하는 
    //재귀함수를 작성해 보겠습니다.
    
    // 2. 재귀함수 인자 -> 인덱스를 0부터 시작해서 1식 증가
    // 3. 탈출조건 -> 증가시킨 인덱스의 값이 주어진 배열의 길이 -1 과 같은 경우 리턴 -> 마지막 인덱스에서는 더할 필요가 없기 때문에
    // 4. for문을 순회하면서 인자로 받은 인덱스 값을 기준으로
    let recur = (firstIndex) => {
        if (firstIndex === numbers.length - 1) {
            return
        }
        let num = numbers[firstIndex]
        for (let i = firstIndex + 1; i < numbers.length; i++) {
            let num2 = num + numbers[i]
            if (!answer.includes(num2)) {
                answer.push(num2)
            }
        }
        recur(firstIndex + 1)
    }
    recur(0)
    return answer.sort((a, b) => a - b)
}


/*

문제 설명
정수 배열 numbers가 주어집니다.
numbers에서 서로 다른 인덱스에 있는
두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

입출력 예
numbers	     result
[2,1,3,4,1]	 [2,3,4,5,6,7]
[5,0,2,7]	 [2,5,7,9,12]

입출력 예 설명
입출력 예 #1
2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
3 = 2 + 1 입니다.
4 = 1 + 3 입니다.
5 = 1 + 4 = 2 + 3 입니다.
6 = 2 + 4 입니다.
7 = 3 + 4 입니다.
따라서 [2,3,4,5,6,7] 을 return 해야 합니다.

입출력 예 #2
2 = 0 + 2 입니다.
5 = 5 + 0 입니다.
7 = 0 + 7 = 5 + 2 입니다.
9 = 2 + 7 입니다.
12 = 5 + 7 입니다.
따라서 [2,5,7,9,12] 를 return 해야 합니다.
*/