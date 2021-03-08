function solution(dartResult) {
    let arr = [];
    for (let i = 0; i < dartResult.length; i++) {
        let str = dartResult[i];
        if (0 <= str * 1 && str * 1 <= 9) {
            if (str === '1' && dartResult[i + 1] === '0') {
                arr.push(10)
                i++
            } else {
                arr.push(str * 1)
            }
        }
        if (str === 'D') {
            arr[arr.length - 1] = arr[arr.length - 1] ** 2
        }
        if (str === 'T') {
            arr[arr.length - 1] = arr[arr.length - 1] ** 3
        }
        if (str === '#') {
            arr[arr.length - 1] = arr[arr.length - 1] * (-1)
        }
        if (str === '*') {
            arr[arr.length - 1] = arr[arr.length - 1] * 2
            if (arr[arr.length - 2]) {
                arr[arr.length - 2] = arr[arr.length - 2] * 2
            }
        }
    }
    return arr.reduce((ac, cu) => ac + cu, 0);
}

/*
문제설명과 입출력 예시는 링크로 대체 합니다.
https://programmers.co.kr/learn/courses/30/lessons/17682
*/