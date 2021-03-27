class block {
    //Block is an entity that only ocupies one unity of space in the map
    constructor(drawMethod) {
        this.draw = drawMethod;
    }
}


export default function blockFactory(blockData) {
    return new block(
        blockData.width,
        blockData.height,
        blackData.showMethod
        );
}
