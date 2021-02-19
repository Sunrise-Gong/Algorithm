// [Programmers] 행렬의 덧셈

function solution_1(arr1, arr2) {
    /* 
    1. 배열을 순회하면서 빈 배열(resultEl)을 하나 만들고
    2. 각 인덱스의 요소(배열)를 순회
    3. arr2 와 같은 위치의 값을 더해서 1번 과정에서 생성한 빈배열(resultEl)에 추가
    4. 2번 for문이 끝나면 
    5. answer 배열에 resultEl 배열을 추가
    6. 1번 for 문이 끝나면 answer 배열 리턴
    */
    var answer = [];
    for (let i = 0; i < arr1.length; i++) { 
        let el1 = arr1[i]
        let el2 = arr2[i]
        let resultEl = []
        for (let j = 0; j < el1.length; j++) {
            resultEl.push(el1[j] + el2[j])
        }
        answer.push(resultEl)
    }
    return answer;
}
//-----------------------------------------------------------------------------
function solution_2(arr1, arr2) {
    /* 
    1. arr1 을 map 으로 순회 
    2. 첫번째 인자는 arr1 요소가 들어오는데 배열이니까 이름을 arrEl로
    3. 두번째 인자는 인덱스 정보가 들어오고 그 이름을 i 로 정하고
    
    4. arrEl 을 map 으로 순회
    5. 첫번째 인자로 arrEl의 요소가 들어오는데 숫자니까 이름을 num
    6. 두번째 인자로 인덱스 정보가 들어오는데 밖의 map 의 i와 다르게 j 로 이름을 정하고
    5. num 과 더할 arr2 의 값의 위치를 인데스 정보를 이용해서 구하기
    */

    return arr1.map((arrEl,i) => {
        arrEl.map((num, j) => num + arr2[i][j])
    });
}
//-----------------------------------------------------------------------------
/*
문제 설명

행렬의 덧셈은 
행과 열의 크기가 같은 두 행렬의 
같은 행, 
같은 열의 값을 
서로 더한 결과가 됩니다. 

2개의 행렬 arr1과 arr2를 입력받아, 
행렬 덧셈의 결과를 반환하는 함수, 
solution을 완성해주세요.

제한 조건

행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

입출력 예

arr1	arr2	return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	[[3],[4]]	[[4],[6]]

*/