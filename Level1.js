
const checkURType = (survey, choices) => {
    const scores = { "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0 };
    for (let i in survey) {
        if (choices[i] === 4) continue;
        const [t1, t2] = survey[i];
        if (choices[i] < 4) scores[t1] += (4 - choices[i]);
        else scores[t2] += (choices[i] - 4);
    }
    let result = "";
    const { R, T, C, F, J, M, A, N } = scores;
    result += R >= T ? "R" : "T";
    result += C >= F ? "C" : "F";
    result += J >= M ? "J" : "M";
    result += A >= N ? "A" : "N";
    return result;
}

checkURType(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);