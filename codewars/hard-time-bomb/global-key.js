const wireCode = Object.keys(global).filter(key => (typeof global[key] == 'number'))[0];
Bomb.CutTheWire(global[wireCode]);
