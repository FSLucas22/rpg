export function range(start, end, step=1) {
    if (isNaN(end)) {
        return range(0, start, step);
    }
    if (start >= end) {
        return [];
    }
    return [start].concat(range(start + step, end, step));
}