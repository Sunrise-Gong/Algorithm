// [Programmers] 복서 정렬하기 

//(링크 : https://programmers.co.kr/learn/courses/30/lessons/85002 )


function solution(weights, head2head) {
    // 경기횟수
    const numOfGames = (i) => head2head[i]
        .split('')
        .filter((v) => v !== 'N').length;

    // 승리 횟수
    const numOfWins = (i) => head2head[i]
        .split('')
        .reduce((ac, cu, i) => cu === "W" ? ac + 1 : ac, 0);

    // 자기보다 무거운 사람 이긴 횟수
    const goliath = (i) => head2head[i]
        .split('')
        .reduce((ac, cu, j) => (cu === "W" && weights[i] < weights[j]) ? ac + 1 : ac, 0);

    // 플레이어 정보(번호, 몸무게, 승률, 무거운놈이긴수)를 객체로 묶은 배열 리턴
    const playersInfo = weights.map((v, i) => {
        return {
            player: i + 1,
            weight: v,
            winRate: numOfWins(i) / numOfGames(i) * 100,
            goliath: goliath(i)
        }
    });

    // 문제 설명 1,2,3,4 대로 정렬
    const sortPlayersInfo = playersInfo.sort((a, b) => {

        //전체 승률이 높은 복서의 번호가 앞쪽으로 갑니다. 
        //아직 다른 복서랑 붙어본 적이 없는 복서의 승률은 0%로 취급합니다.
        if (a.winRate > b.winRate) return -1;
        if (a.winRate < b.winRate) return 1; // 승률 내림차순

        //승률이 동일한 복서의 번호들 중에서는 
        //자신보다 몸무게가 무거운 복서를 이긴 횟수가 많은 복서의 번호가 앞쪽으로 갑니다.
        if (a.goliath > b.goliath) return -1;
        if (a.goliath < b.goliath) return 1; // 무거운놈 이긴횟수 내림차순

        //자신보다 무거운 복서를 이긴 횟수까지 동일한 복서의 번호들 중에서는 
        //자기 몸무게가 무거운 복서의 번호가 앞쪽으로 갑니다.
        if (a.weight > b.weight) return -1;
        if (a.weight < b.weight) return 1; // 몸무게 내림차순

        //자기 몸무게까지 동일한 복서의 번호들 중에서는 작은 번호가 앞쪽으로 갑니다.
        if (a.player > b.player) return 1;
        if (a.player < b.player) return -1; // 플레이어 번호 오름차순
        return 0;
    });

    return sortPlayersInfo.map((v) => v.player);
}