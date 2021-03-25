export default class IComparable {
    compare(comparable){}
    constructorCompare(comparable) {
        return this.constructor == comparable.constructor;
    }
}
