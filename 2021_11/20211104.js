/* 
배달

문제 설명

N개의 마을로 이루어진 나라가 있습니다. 

이 나라의 각 마을에는 
1부터 N까지의 번호가 각각 하나씩 부여되어 있습니다. 

각 마을은
양방향으로 통행할 수 있는 도로로 연결되어 있는데, 

서로 다른 마을 간에 이동할 때는 
이 도로를 지나야 합니다. 

도로를 지날 때 걸리는 시간은 도로별로 다릅니다. 

현재 1번 마을에 있는 음식점에서 
각 마을로 음식 배달을 하려고 합니다. 

각 마을로부터 음식 주문을 받으려고 하는데, 
N개의 마을 중에서 
K 시간 이하로 배달이 가능한 마을에서만 
주문을 받으려고 합니다. 

다음은 N = 5, K = 3인 경우의 예시입니다.

예시 그림 : https://programmers.co.kr/learn/courses/30/lessons/12978

위 그림에서 
1번 마을에 있는 음식점은 
[1, 2, 4, 5] 번 마을까지는 
3 이하의 시간에 배달할 수 있습니다. 

그러나 
3번 마을까지는 
3시간 이내로 배달할 수 있는 경로가 없으므로 3번 
마을에서는 주문을 받지 않습니다. 

따라서 1번 마을에 있는 음식점이 
배달 주문을 받을 수 있는 마을은 4개가 됩니다.

마을의 개수 N, 
각 마을을 연결하는 도로의 정보 road, 
음식 배달이 가능한 시간 K가 매개변수로 주어질 때, 
음식 주문을 받을 수 있는 마을의 개수를 return 
하는 함수를 구현하시요.

제한사항
마을의 개수 N은 
1 이상 50 이하의 자연수

road의 길이(도로 정보의 개수)는 
1 이상 2,000 이하

road의 각 원소는 
마을을 연결하고 있는 각 도로의 정보를 나타냅니다.

road는 길이가 3인 배열
이며, 순서대로 (a, b, c)를 나타냅니다.

a, b ( 1 ≤ a, b ≤ N, a != b )는 
도로가 연결하는 두 마을의 번호이며, 

c( 1 ≤ c ≤ 10,000, c는 자연수 )는 도로를 지나는데 걸리는 시간입니다.

두 마을 a, b를 연결하는 도로는 
여러 개가 있을 수 있습니다.

한 도로의 정보가 여러 번 중복해서 주어지지 않습니다.

K는 음식 배달이 가능한 시간을 나타내며, 
1 이상 500,000 이하입니다.

임의의 두 마을간에 
항상 이동 가능한 경로가 존재합니다.

1번 마을에 있는 음식점이 
K 이하의 시간에 배달이 가능한 마을의 개수를 return 하면 됩니다.


입출력 예
N	 road	                                                    K	result
6	 [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]]	4	4

*/

// 접근조차 못한 나의 풀이
function solution(N, road, K) {
    var answer = 1; // 1 자신이 포함됨
    // K 거리를 초과하는 요소들을 제거


    // 1과 직접 연결된 마을과의 거리를 K 와 비교해 answer에 카운팅한다.
    let oneDirect = [...road]
        .filter((e) => e[0] === 1) // 1 과 연결되고
        .filter((e) => e[2] <= K); // K 거리를 넘지 않는 도시만
    console.log('1과 직접 연결된', oneDirect); // [ [ 1, 2, 1 ], [ 1, 3, 2 ] ]

    // 1 과 직접 연결되지 않은 요소를 찾는다.
    // 그요소와 연결된 다른 요소의 거리 + 다른 요소와 1과의 거리 <= K -> answer 카운팅
    let oneNotDirect = [...road]
        .filter((e) => e[0] !== 1);
    console.log('1과 직접 연결안된', oneNotDirect); // [ [ 2, 3, 2 ], [ 3, 4, 3 ], [ 3, 5, 2 ], [ 3, 5, 3 ], [ 5, 6, 1 ] ]


    return answer + oneDirect.length;
}

// 다른 사람 풀이
function solution(N, road, K) {
    /*
    let N = 6;
    let road = [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]];
    let K = 4;
    */

    const dist = Array(N + 1).fill(Infinity); //노드별 거리를 무한으로 하는 배열 생성 (1부터 사용하기 위해 N+1의 배열 생성) 
    dist[1] = 0; 
    console.log(dist); // [Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity]

    const adj = Array.from({ length: N + 1 }, () => []); // 인접한 노드별 시간(가중치)의 정보를 담고 있는 배열 생성
    console.log(adj) // [Array(0), Array(0), Array(0), Array(0), Array(0), Array(0), Array(0)]

    road.forEach(([a, b, c]) => { // 인접한 노드별 시간(가중치)의 정보를 담고 있는 배열에 데이터 추가
        adj[a].push({ to: b, time: c });
        adj[b].push({ to: a, time: c });
    });
    console.log(adj);
    /*
    road : [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]];

    adj[0] : []
    adj[1] : [{to: 2, time: 1}, {to: 3, time: 2}]
    adj[2] : [{to: 1, time: 1}, {to: 3, time: 2}]  
    adj[3] : [{to: 1, time: 2}, {to: 2, time: 2}, {to: 4, time: 3}, {to: 5, time: 2}, {to: 5, time: 3}]
    adj[4] : [{to: 3, time: 3}]
    adj[5] : [{to: 3, time: 2}, {to: 3, time: 3}, {to: 6, time: 1}]
    adj[6] : [{to: 5, time: 1}]
    */

    
    const pq = [{ to: 1, time: 0 }]; // 1번 마을에서부터 우선순위 큐 시작 및 초기값 0 할당(시작점이기 때문에)

    
    while (pq.length) { // 3. 우선순위 큐 배열에 값이 없을 때까지 반복

        let { to, time } = pq.pop(); // to: 3, time: 2, pq: [{to: 2, time: 1}] 

    // 4.연결된 노드에서의 값이 현재의 값 + 해당 노드의 시간(가중치) 보다 클 경우, 값을 대체하고 우선순위 큐에 데이터 추가
        adj[to].forEach(next => {
            
            if (dist[next.to] > dist[to] + next.time) { // 1 과 next.to 의 거리 > 1과 to의 거리 + to 와 next.to의 거리
                dist[next.to] = dist[to] + next.time; // dist[2] : 1;
                pq.push(next); // pq: [{to: 2, time: 1}]
            }
        })
    }
    /* console.log(pq, dist)
    
    pq [{ to: 1, time: 0 }]
    dist [Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity]
    
    to 1
    next [{to: 2, time: 1}, {to: 3, time: 2}] 
    pq [{to: 2, time: 1}, {to: 3, time: 2}]
    dist [Infinity, 0, 1, 2, Infinity, Infinity, Infinity]
    
    to 3
    next [{to: 1, time: 2}, {to: 2, time: 2}, {to: 4, time: 3}, {to: 5, time: 2}, {to: 5, time: 3}]
    pq [{to: 2, time: 1}, {to: 4, time: 3}, {to: 5, time: 2}]
    dist (7) [Infinity, 0, 1, 2, 5, 4, Infinity]
    
    to 5 
    next [{to: 3, time: 2}, {to: 3, time: 3}, {to: 6, time: 1}]
    pq [{to: 2, time: 1}, {to: 4, time: 3}, {to: 6, time: 1}]
    dist [Infinity, 0, 1, 2, 5, 4, 5]
    
    to 6
    next [{to: 5, time: 1}]
    pq [{to: 2, time: 1}, {to: 4, time: 3},]
    dist [Infinity, 0, 1, 2, 5, 4, 5]
    
    to 4
    next [{to: 3, time: 3}]
    pq [{to: 2, time: 1}]
    dist [Infinity, 0, 1, 2, 5, 4, 5]
    
    to 2
    next [{to: 1, time: 1}, {to: 3, time: 2}] 
    pq []
    dist [Infinity, 0, 1, 2, 5, 4, 5]
    */

    // 5.
    return dist.filter((item) => item <= K).length;
}

// 주석제거
// function solution(N, road, K) {

//     const dist = Array(N + 1).fill(Infinity);
//     dist[1] = 0;

//     const adj = Array.from({ length: N + 1 }, () => []);

//     road.forEach(([a, b, c]) => {
//         adj[a].push({ to: b, time: c });
//         adj[b].push({ to: a, time: c });
//     });

//     const pq = [{ to: 1, time: 0 }]; // 우선순위 큐 배열

//     while (pq.length) {

//         let { to, time } = pq.pop(); // 우선순위 큐의 마지막 요소 추출

//         adj[to].forEach(next => { 
//             if (dist[next.to] > dist[to] + next.time) { 
//                 dist[next.to] = dist[to] + next.time;
//                 pq.push(next); 
//             }
//         })
//     }
//         return dist.filter((item) => item <= K).length;
// }



