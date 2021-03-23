import range from './utility.js'


class Map {
    constructor(width, height, blockGrid) {
        this.width = width;
        this.height = height;
        this.block = blockGrid;
    }
    show(x, y, canvas) {
        let xindex = x;
        let yindex = y;
        for (let i of range(this.width)) {
            block = this.block[xindex][yindex];
            for (let j of range(this.height)) {
                block.draw(xindex, yindex, canvas);
                yindex += block.height;
            }
            xindex += block.width;
        }
    }
}


export default function mapFactory(mapData) {
    return new Map(
        mapData.width,
        mapData.height,
        mapData.blockGrid,
        );
}