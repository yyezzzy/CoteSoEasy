const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['kai', 'kai', 'mine', 'mine'];

function solution(players, callings) {
  callings.forEach((behindPerson) => {
    const currentRank = players.indexOf(behindPerson); // 현재 선수의 인덱스
    if (currentRank > 0) {
      // 앞에 선수와 스왑할 수 있을 때
      const frontPlayer = players[currentRank - 1]; // 앞 선수
      // 스왑
      players[currentRank - 1] = behindPerson;
      players[currentRank] = frontPlayer;
    }
  });
  return players;
}

console.log(solution(players, callings));
