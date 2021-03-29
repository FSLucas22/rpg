export function defVal(x, y) {
    if (x === undefined) {
        return y;
    }
    return x;
}


export function inRange(region) {
    return (number) => (number >= region[0]) && (number < region[1])
}


export function inAxis(AxisList) {
    if (! isNaN(AxisList[0])) {
        return inRange(AxisList)
    }
    return (mdNumber) => inAxis(AxisList[0])(mdNumber[0]) && inAxis(AxisList[1])(mdNumber[1]);
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