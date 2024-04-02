const p1 = () => {
    return new Promise((res, rej) => {
        let a = 87878;
        res(a)
    })
}
const p2 = () => {
    return new Promise((res, rej) => {
        let a = 87887;
        res(a)
    })
}

async function promiseMerge(p1, p2) {
    const result = await Promise.allSettled([p1, p2]);
    return new Promise((resolve, reject) => {
        const status1 = result[0].status;
        const status2 = result[1].status;
        // 1st case 1st promise is failing
        if (status1 === 'rejected') {
            reject(result[0].reason);
            return;
        }
        // 2nd case 2nd promise is failing
        else if (status2 === 'rejected') {
            reject(result[1].reason);
            return;
        }
        // 3rd case both are passing
        else {
            const value1 = result[0].value;
            const value2 = result[1].value;
            // case 1 -> both are objects
            // arrays
            // null
            if (typeof value1 === 'object' && typeof value2 === 'object') {
                // if both are arrays
                if (Array.isArray(value1) && Array.isArray(value2)) {
                    resolve([...value1, ...value2]);
                    return;
                }
                else if (Array.isArray(value1) || Array.isArray(value2)) {
                    reject('Unsupported data types');
                    return;
                }
                // if value1 or value2 are set
                else if (value1 instanceof Set || value2 instanceof Set) {
                    reject('Unsupported data types');
                    return;
                }
                // value1 && value2 should be non null values
                else if (value1 && value2) {
                    resolve({ ...value1, ...value2 });
                    return;
                }
                else {
                    reject('Unsupported data types');
                    return;
                }
            }
            // case 2 -> string and number
            else if (typeof value1 === typeof value2) {
                // either both are string
                // or both are numbers
                resolve(value1 + value2);
                return;
            }
            else {
                reject('Unsupported data types');
                return;
            }
        }
    })
}

promiseMerge(p1(), p2()).then(d => console.log(d)).catch(e => console.log(e))