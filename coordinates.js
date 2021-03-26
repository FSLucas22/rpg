import IComparable from './comparableInterface.js';
import range from './utility.js';


export class Coordinate extends IComparable{
    contructor(coordinate) {
        self[0] = coordinate[0];
        self[1] = coordinate[1];
    }
    compare(comparable) {
        if (! this.constructorCompare(comparable)) {
            return false;
        }
        return (this[0] == comparable[0]) && (this[1] == comparable[1]);
    }
}


export function coordinateIndex(coordinate, coordinateList) {
    for (let x of range(coordinateList.length)) {
        if (coordinate.compare(coordinateList[x])) {
            return x;
        }
    }
    return -1;
}


export function coordinatesAround(nodeSpace, coordinate) {
    let w = nodeSpace.width;
    let h = nodeSpace.height;
    coords = [];
    for (let x of range(-1, 2)) {
        for (let y of range(-1, 2)) {
            if (Math.abs(x) == Math.abs(y)) {continue;}
            rowValue = coordinate[0] + x;
            colValue = coordinate[1] + y;
            if ((rowValue < 0) || (colValue < 0)) {continue;}
            if ((rowValue >= w) || (colValue >= h)) {continue;}
            coords.push(coordinateFactory([rowValue, colValue]));
        }
    }
    return coords;
}


export function coordinateFactory(coordinate) {
    return new Coordinate(coordinate);
}