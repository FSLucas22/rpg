export default class DrawThing {
    constructor(coordinate, image, category='map') {
        this.position = coordinate;
        this.image = image;
        this.category = category;
    }
    get 0() {
        return this.position[0];
    }
    get 1() {
        return this.position[1];
    }
    draw() {
        return [this];
    }
}