// [Programmers] 직사각형 별찍기

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); // ex) -> ['5','3']
    const a = Number(n[0]), b = Number(n[1]); // 이렇게 연달아 쓰기도..
    
    // repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
    let width = "*".repeat(a) + "\n" // \n은 줄바꿈의 역할
    
    console.log(width.repeat(b))
    /*    
    스트림을 소비하려면 읽기 스트림인 process.stdin 을 사용한다.
    process.stdin으로 입력한 것은 
    outStream과 console.log를 이용해 에코되어 나온다.
    */
});

/*

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 
세로의 길이가 m인 
직사각형 형태를 출력해보세요.

제한 조건
n과 m은 각각 1000 이하인 자연수입니다.

예시

입력
5 3

출력
*****
*****
*****
*/