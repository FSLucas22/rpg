class block {
    constructor(width, height, showMethod) {
        this.width = width;
        this.height = height;
        this.show = showMethod;
    }
}


export default function blockFactory(blockData) {
    return new block(
        blockData.width,
        blockData.height,
        blackData.showMethod
        );
}
