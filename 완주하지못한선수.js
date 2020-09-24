// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript#

// 처음생각한 - 정확성/효율성 실패
function solution(participant, completion) {
    var answer = '';
    const duplicateName = participant.filter((item, pos) => {
        return participant.indexOf(item) !== pos
    });
    
    answer = participant.filter(x => !completion.some(c => c === x));
    
    Object.assign(answer, duplicateName)
    
    for (let value of Object.values(answer)) {
      answer = value;
    };
    
    return answer;
}


// 2번째 생각한 - 정확성 통과/효율성 실패
function solution(participant, completion) {
    var answer = '';
    completion.forEach(x => {
        const idx = participant.indexOf(x);
      delete participant[idx]
    })

    for(let value of participant) {
        if(value) {
            answer = value  
      }
    }
    return answer;
}
