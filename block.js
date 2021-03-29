import DrawThing from './drawThing.js';
import Coordinate from './coordinates.js';


const NONE_IMAGE = '';


export class Block extends DrawThing {
    constructor(coordinate, image) {
        super(coordinate, image);
    }
}


export class NoneBlock extends Block {
    constructor(coordinate) {
        super(coordinate, NONE_IMAGE);
    }
}
