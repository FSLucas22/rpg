import coordinatesAround from './coordinates.js';


const unlockedFilter = (node) => ! node.locked;
const lockedFilter = (node) => node.locked;


export function absAround(filter = () => true) {
    return (nodeSpace, coordinate) => {
        return coordinatesAround(nodeSpace, coordinate).map(
            (value) => nodeSpace.node[value[0]][value[1]]
        ).filter(filter);
    }
}


export const all = absAround();
export const unlocked = absAround(unlockedFilter);
export const locked = absAround(lockedFilter);