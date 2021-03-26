import {mdList} from './utility.js';
import nodeList from './node.js';
import { coordinatesAround } from './coordinates.js';
import * as around from './aroundNodes.js';


class NodeSpace {
    constructor(width, height, nodeList=[]) {
        this.width = width;
        this.height = height;
        this.node = mdList([width, height]);
        nodeList.map(this.register);
    }
    register(node) {
        this.node[node.x][node.y] = node;
    }
    allAround(coordinate) {
        return around.all(this, coordinate);
    }
    unlockedAround(coordinate) {
        return around.unlocked(this, coordinate);
    }
}


export function nodeSpaceFactory(nodeSpaceData) {
    width = nodeSpaceData.width;
    height = nodeSpaceData.height;
    return new NodeSpace(width, height, nodeList({width, height}));
}