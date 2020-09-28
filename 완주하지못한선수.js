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

// 3번째 생각한 - 정확성 통과/효율성 실패
function solution(participant, completion) {
    var answer = '';
    completion.forEach(x => {
        const idx = participant.indexOf(x);
        participant.splice(idx, 1)
    })


    for(let r of participant) {
        answer = r;
    }

    return answer;
}

// 이후 질문하기 보고 
function solution(participant, completion) {
    var answer = '';
    var participants = participant.sort();
    var completions = completion.sort();

    for(let p=0; p < participant.length; p++) {
      if (participants[p] !== completions[p]) {
        if (participants[p-1] === participants[p]) {
            answer = participants[p-1];
            break;
        } else {
            answer = participants[p];
            break;
        }

      }

    }

    return answer;
}
