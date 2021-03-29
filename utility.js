export function defVal(x, y) {
    if (x === undefined) {
        return y;
    }
    return x;
}


export function inRange(region) {
    return (number) => k;
}


export function inAxis(AxisList) {
    if (! isNaN(AxisList[0])) {
        return inRange(AxisList)
    }
    return (mdNumber) => {
        let k = true;
        for (let x of range(AxisList.length)) {
            k = k && inAxis(AxisList[x])(mdNumber[x]);
        }
        return k;
    }
}


export function mdList(args) {
    if (args.length == 1) {
        return range(args[0]).map(() => 0);
    }
    return range(args[0]).map(() => mdList(args.slice(1)));
}


export function range(start, end, step=1) {
    if (isNaN(end)) {
        return range(0, start, step);
    }
    if (start >= end) {
        return [];
    }
    return [start].concat(range(start + step, end, step));
}