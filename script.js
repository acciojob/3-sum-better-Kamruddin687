var threeSum = function (a) {
    let n = a.length;

    a.sort((a, b) => a - b);

    let aa = [];
    for (let i = 0; i < n; i++) {
        // optimization 1
        if (a[i] > 0) break;

        let t = -a[i]; // target;
        for (let L = i + 1, R = n - 1; L < R; ) {
            let sum = a[L] + a[R];
            if (sum === t) {
                aa.push([a[i], a[L], a[R]]);
                // optimization 2
                while (a[L] === a[L + 1]) L++;
                L++;
            } else if (sum < t) {
                L++;
            } else {
                R--;
            }
        }

        // optimization 3
        while (a[i] === a[i + 1]) i++;
    }

    return aa;

};
