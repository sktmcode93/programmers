const fibonacchi = n => {
    // const process = (prev1, prev2, left) => left > 0 ? process((prev1 + prev2) % 1234567, prev1, --left) : (prev1 + prev2) % 1234567;
    const fibos = new Array(n).fill(0);
    fibos[1] = 1;
    for (let i = 2; i < n + 1; i++) fibos[i] = (fibos[i - 1] + fibos[i - 2]) % 1234567;
    return fibos[n];
}

const nextBig = n => {
    const ones = n.toString(2).split("1").length - 1;
    let find = n + 1;
    while (ones !== (find.toString(2).split("1").length - 1)) ++find;
    return find;
}

const lCM = arr => {
    const gCM = (a, b) => {
        while (b > 0) {
            const rest = a % b;
            a = b;
            b = rest;
        }
        return a;
    }
    return arr.reduce((acc, cur) => acc * cur / gCM(acc, cur), 1);
}

const calParkings = (fees, records) => {
    const [standTime, standFee, overTime, overFee] = fees;
    const parking = {};
    const calTime = (carNums, time) => {
        const it = parking[carNums]["inTime"].split(":");
        const ot = time.split(":");
        const stayTime = (Number(ot[0]) - Number(it[0])) * 60 + Number(ot[1]) - Number(it[1]);
        const prevTime = parking[carNums]["stayTime"] || 0;
        return stayTime + prevTime;
    }
    for (let r of records) {
        const [time, carNums, type] = r.split(" ");
        if (type === "IN") parking[carNums] = { ...parking[carNums], "status": type, "inTime": time };
        else {
            parking[carNums]["status"] = type;
            parking[carNums]["stayTime"] = calTime(carNums, time);
        }
    }
    return Object.entries(parking).sort((p1, p2) => Number(p1[0]) - Number(p2[0])).reduce((acc, [carNums, { status, stayTime }]) => {
        const accTime = status === "OUT" ? stayTime : calTime(carNums, "23:59");
        acc.push(accTime <= standTime ? standFee : standFee + (Math.ceil((accTime - standTime) / overTime) * overFee));
        return acc;
    }, []);
}

const camouFlage = (clothes) => {
    const sorting = {};
    let result = 0;
    for (let [value, key] of clothes) {
        if (!sorting[key]) sorting[key] = [];
        sorting[key].push(value);
    }
    const process = (cloArr, method,) => {

    }

    const arr = Object.entries(sorting);
    for (let i = arr.length - 1; i > 0; i--) {
        result += process(arr, i,)
    }


}

const findPrime = numbers => {
    const combi = [];

    const process = (numLength, str, arr, idx) => {
        if (numLength === str.length) {
            console.log(str);
        } else {

        }
    }
    const spl = numbers.split("");
    for (let i = 1; i <= numbers.length; i++) {
        for (let j = 0; j < i; j++) {
            process(i, "", spl, j);
        }
    }
}

const whenFight = (N, A, B) => {
    // let answer = 1;
    // let meet = false;
    // let people = new Array(N).fill(false);
    // people[A - 1] = true;
    // people[B - 1] = true;
    // while (!meet) {
    //     const pick = [];
    //     for (let i = 0; i < people.length - 1; i += 2) {
    //         if (people[i] && people[i + 1]) {
    //             meet = true;
    //             break;
    //         } else if (people[i] && !people[i + 1]) pick.push(people[i]);
    //         else if (!people[i] && people[i + 1]) pick.push(people[i + 1]);
    //         else pick.push(i % 2 ? people[i] : people[i + 1]);
    //     }
    //     if (meet) continue;
    //     people = pick;
    //     answer++;
    // }
    // console.log(answer);
    let answer = 0;
    while (A !== B) {
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);
        answer++;
    }
    console.log(answer);
}

const multiplyMatrix = (arr1, arr2) => {
    const answer = [];
    arr1.map((arr, idx) => {
        answer.push([]);
        for (let i in arr2) answer[idx].push(arr.reduce((a, c, j) => a + c * arr2[j][i], 0));
    })
    console.log(answer);
}

const jumpOrTeleport = n => {
    if(n<3) return 1;
    const shorts = new Array(n+1).fill(-1);
    shorts[0] = 0;
    shorts[1] = 1;
    shorts[2] = 1;
    

}

jumpOrTeleport(5);

