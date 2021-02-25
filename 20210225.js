// 테스트 14개 평균속도 -> 1.21 ms
function solution(answers) {
    let players =[
        [1, 2, 3, 4, 5], 
        [2, 1, 2, 3, 2, 4, 2, 5], 
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]

   let a = players 
   .map((el)=> answers        
        .reduce((ac,cu,i)=> (cu === el[i % el.length]? ac++ : ac ,ac),0)
)
   let score = Math.max(...a)

    return a.reduce((ac,cu,i)=> (cu === score? ac.push(i+1): ac,ac),[])
    
    /*
    맵 메소드로 각 수포자의 정답개수를 배열로 만듭니다. [1의 정답개수, 2의 정답개수, 3의 정답개수]
    (reduce 메소드로 수포자가 문제를 맞힌 개수를 하나로 합쳐서 map 메소드 리턴 값이 되도록 합니다.)
    , 콤마 오퍼레이터는 좌측의 연산이 끝난뒤 ac의 값을 리턴한다는 의미
    
    가장 높은 점수 -> Math.max() 를 이용해서 구합니다.

    가장 높은 점수를 가진 사람(들)을 오름차순 정렬 해야 하는데
    이미 a는 오름차순 정렬 되어 있는 상태이기 때문에 
    reduce 메소드를 순회 하면서 가장 높은 점수와 같은 인덱스에 1을 더해서 리턴
    */
    
}

// 다른 사람 풀이
// 테스트 14개 평균 속도 -> 1.57 ms
function solution(answers) {
    var answer = [];
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == man1[i % man1.length]) count[0]++;
        if(answers[i] == man2[i % man2.length]) count[1]++;
        if(answers[i] == man3[i % man3.length]) count[2]++;
    }

    const max = Math.max(count[0], count[1], count[2]);
    for(let i = 0; i < count.length; i++) {
        if(max == count[i]) answer.push(i + 1);
    }

    return answer;
    /*

    */
}

/*
문제 설명

수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 
순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 
배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]
입출력 예 설명

입출력 예 #1
수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2
모든 사람이 2문제씩을 맞췄습니다.
*/