function solution(dartResult) {
    var answer = 0;

    const abcd = (string) => {
        let SScore = 0;
        let DScore = 0;
        let TScore = 0;

        for (let i = 0; i < string.length; i++) {
            if (string[i + 1] === '#') {
                if (string[i] === 'S') {
                    SScore += string[i - 2] !== '1' ? string[i - 1] * (-1) : 10 * (-1)
                }
                if (string[i] === 'D') {
                    DScore += string[i - 2] !== '1' ? (string[i - 1] ** 2) * (-1) : 10 ** 2 * (-1)
                }
                if (string[i] === 'T') {
                    TScore += string[i - 2] !== '1' ? string[i - 1] ** 3 * (-1) : 10 ** 3 * (-1)
                }
            } else {
                if (string[i] === 'S') {
                    SScore += string[i - 2] !== '1' ? string[i - 1] * 1 : 10
                }
                if (string[i] === 'D') {
                    DScore += string[i - 2] !== '1' ? string[i - 1] ** 2 : 10 ** 2
                }
                if (string[i] === 'T') {
                    TScore += string[i - 2] !== '1' ? string[i - 1] ** 3 : 10 ** 3
                }

            }
        }
        // console.log('SDT', SScore, DScore, TScore)
        return SScore + DScore + TScore;
    }
    let arr = dartResult.split('*')
    console.log(arr)
    // 별이 적용된 개수 -> arr.length - 1
    // 배열의 마지막 요소는 * 옵션을 적용하지 않는다.
    if (arr.length >= 2) { // 별이 1개 이상 있는 상태
        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) { // 마지막 요소는 별을 적용하지 않고
                answer += abcd(arr[arr.length - 1])
            } else {
                if (arr[i].length > 4) {
                    if (arr[i].indexOf('#') === -1) { // # 이 없다면
                        if (arr[i][1] === '0' && arr.length === 6) {
                           answer += abcd(arr[i]) * 2
                        } else if (arr[i][1] === '0' && arr[i].length === 5) {
                           answer += abcd(arr[i]) * 2
                        } else if (arr[i][3]=== '0' && arr[i].length === 5) {
                           answer += abcd(arr[i]) * 2
                        } else if (arr[i].length === 9) {
                            let first = arr[i].split('').slice(0, 3)
                            let second = arr[i].split('').slice(-6)
                            answer += abcd(first)
                            answer += abcd(second) * 2
                        } else if (!arr[i].includes('0')){
                            let first = arr[i].split('').slice(0, 2)
                        let second = arr[i].split('').slice(-4)
                        answer += abcd(first)
                        answer += abcd(second) * 2
                        }
                    } else { // # 이 있다면
                        answer += abcd(arr[i]) * 2
                    }
                } else {
                    if (arr[i].length < 4) {// 현재 요소의 길이가 4보다 작다면
                        if (arr[i - 1]) { // 전 인덱스에 요소가 있다면
                            if (arr[i - 1].length === 4) { // 전 인덱스의 길이가 4라면
                                answer += abcd(arr[i - 1].split('').slice(-2)) * 2
                                answer += abcd(arr[i]) * 2
                            } else {
                                answer += abcd(arr[i - 1]) * 2
                                answer += abcd(arr[i]) * 2
                            }
                        } else { // 전 인덱스에 요소가 없다면
                            // answer += arr[i-1] ? abcd(arr[i-1])*2 : 0
                            answer += abcd(arr[i]) * 2
                        }
                    } else { // 현재 요소의 길이가 4와 같다면
                        answer += abcd(arr[i]) * 2
                    }
                }
            }
        }
    } else { // 별이 없는 상태
        answer += abcd(arr[0])
    }

    return answer;
}