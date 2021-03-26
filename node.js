import {Coordinate} from './coordinates.js';
import {range, mdList, defVal} from './utility.js';


class Node extends Coordinate {
    constructor(coordinate, locked=false) {
        super(coordinate);
        this.locked = locked;
    }
    lock() {
        this.locked = true;
    }
}


export function nodeList(data) {
    list = mdList([data.width, data.height]);
    for (let x of range(data.width)) {
        for (let y of range(data.height)) {
            list[x][y] = nodeFactory({coordinate: [x, y]});
        }
    }
    return list;
}


export function nodeFactory(nodeData) {
    return new Node(
        nodeData.coordinate,
        defVal(nodeData.locked, false),
    );
}