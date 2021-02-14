// 문자열 내 마음대로 정렬하기

function solution(strings, n) {

    return strings.sort((one, two) => {

        // 비교 대상인 두 요소의 n번째 인덱스의 값이

        // 서로 같은 경우 두요소를 비교해서 사전순으로 정렬
        if (one[n] === two[n]) {
            return (one > two) - (one < two)

            // 서로 다른 경우 n번째 인덱스 값을 비교해서 정렬    
        } else {
            return (one[n] > two[n]) - (one[n] < two[n])
        }
    })

    /*
    sort 메소드로 배열 strings를 오름차순 정렬을 해보겠습니다.

    배열의 각 요소는 알파벳 소문자 이므로
    유니코드를 기준으로 대소관계를 파악할 수 있습니다. 
    ex) 'a' > 'b' ==== false ('a'.charCodeAt() === 97, 'b'.charCodeAt() === 98 )

    sort 메소드의 인자로 비교함수를 만들겠습니다.
    */

    /*
    이 문제에서 오름차순 정렬을 하는 기준은 두가지 입니다.
    
    비교대상인 두 요소의 n번째 인덱스 값이

    서로 같은 경우 
    n번째 인덱스를 기준으로 정렬하지 말고
    요소를 사전순으로 정렬하라고 했기 때문에
    one 과 two 를 비교해서 정렬합니다.
    
    서로 다른 경우
    n번째 인덱스 값을 비교해서 정렬합니다.
    */
    
    /*
    sort 메소드가 각 요소를 순회하면서 
    비교를 해 나갈텐데 오름차순 정렬을 하려면
    
    첫번째인자 > 두번째인자 의 경우는 1
    첫번째인자 < 두번째인자 의 경우는 -1
    을 리턴해줘야 오름차순 정렬이 이루어 집니다.

    if문을 두번 사용해서 작성할수도 있겠지만
    오름차순 정렬에서 필요한 
    1 또는 -1 이 리턴되는 식을 만들어 보겠습니다.
    
    true는 숫자 1 과 같고 
    false는 숫자 0과 같습니다. 그래서

    true - false = 1
    false - true = -1 
    이 됩니다. 

    그래서 아래와 같이 if문을 사용하지 않고 한줄로 작성할 수 있습니다.
    (one > two) - (one < two)
    */

}

/*
문제 설명

문자열로 구성된 리스트 strings와,
정수 n이 주어졌을 때,

각 문자열의 인덱스 n번째 글자를 기준으로
오름차순 정렬하려 합니다.

예를 들어
strings가 [sun, bed, car]이고
n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우,
사전순으로 앞선 문자열이 앞쪽에 위치합니다.

입출력 예

strings	= [sun, bed, car]
n = 1
return = [car, bed, sun]

strings = [abce, abcd, cdx]
n = 2
return = [abcd, abce, cdx]

입출력 예 설명
입출력 예 1
sun, bed, car의 1번째 인덱스 값은 각각 u, e, a 입니다.
이를 기준으로 strings를 정렬하면 [car, bed, sun] 입니다.

입출력 예 2
abce와 abcd, cdx의 2번째 인덱스 값은 c, c, x입니다.
따라서 정렬 후에는 cdx가 가장 뒤에 위치합니다.
abce와 abcd는 사전순으로 정렬하면
abcd가 우선하므로, 답은 [abcd, abce, cdx] 입니다.
*/