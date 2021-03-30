import { range, mdList, inAxis } from "./utility";
import { NoneBlock } from './block.js';


class Camera {
    constructor(position=[0, 0], extension=[100, 100]) {
        this[0] = position[0];
        this[1] = position[1];
        this.extension = extension;
    }
    get width() {
        return this.extension[0];
    }
    get height() {
        return this.extension[1];
    }
    move(x, y) {
        this[0] += x;
        this[1] += y;
    }
}


class OnScreen {
    constructor(camera=new Camera([0, 0]), defaultBlock=NoneBlock) {
        this.camera = camera;
        this.screen = this.clear();
    }
    get width() {
        return this.camera.width;
    }
    get height() {
        return this.camera.height;
    }
    clear() {
        const screen = new DrawMap([], [], [], []);
        for (let x of range(this.width)) {
            const block = this.defaultBlock;
            for (let y of range(this.height)) {
                screen.map.push(new block(x, y).draw()[0]);
            }
        }
        return screen;
    }
    register(obj) {
        const toDraw = obj.draw();
        for (let x of toDraw) {
            if (this.filter(x)) {
                this.screen[x.category].push(x);
            }
        }
    }
    filter(drawThingObj) {
        const x = drawThing[0] + this.camera[0];
        const y = drawThing[1] + this.camera[1];
        return inAxis([[0, this.width], [0, this.height]])([x, y]);
    }
}


class DrawMap {
    constructor(map, players, npcs, objects) {
        this.map = map;
        this.players = players;
        this.npcs = npcs;
        this.objects = objects;
    }
    draw() {
        return [
            this.map,
            this.objects,
            this.npcs,
            this.players,
        ];
    }
}


class DrawScreen {
    constructor(canvas, blockLength, defaultBlock=NoneBlock()) {
        this.canvas = canvas;
        this.blockLength = blockLength;
        this.screen = this.clear();
        this.defaultBlock = defaultBlock;
    }
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.height;
    }
    clear() {
        const map = new DrawMap(
            mdList([this.width, this.height]),
            [],
            [],
            [],
        );
        for (let x of range(this.width)) {
            for (let y of range(this.height)) {
                map.grid[x][y] = this.defaultBlock.draw(x, y)[0];
            }
        }
        return map;
    }
    register(drawableObject) {

    }
    setToScreen(obj) {
        
    }
}


function renderScreen(onScreen) {
    
}