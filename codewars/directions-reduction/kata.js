// find a very nice, cleaner solution for this kata here:
// https://www.codewars.com/kata/reviews/551075dcaacf809d25000248/groups/5516e513a5808bc4a2000074

const isOpposite = (dir1, dir2) => {
    const opposites = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST"
    };
    return opposites[dir1] == dir2;
};

const dirReduc = (dirs, pos = 0) => {
    if (dirs.length == pos) return dirs;
    const dir1 = dirs[pos];
    const dir2 = dirs[pos+1];
    if (isOpposite(dir1, dir2)) {
        const newDirs = dirs.filter((dir, idx) => idx != pos && idx != pos+1);
        return dirReduc(newDirs, 0);
    }
    return dirReduc(dirs, pos+1);
};

// tests

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
console.log(dirReduc(['NORTH', 'SOUTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'NORTH', 'EAST', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'EAST', 'WEST']), ['NORTH', 'EAST']);
