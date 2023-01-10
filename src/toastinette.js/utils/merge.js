export function merge(obj1, obj2) {
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
                merge(obj1[key], obj2[key]);
            } else {
                obj1[key] = obj2[key];
            }
        }
    }

    return obj1;
}
