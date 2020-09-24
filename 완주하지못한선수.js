// 처음생각한 
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
