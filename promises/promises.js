function intro() {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            setTimeout(() => {
                resolve('hii my name is jony')
            }, 1110)
        } else {
            reject('rejected')
        }
    })
}
function work() {
    return new Promise((res, rej) => {
        const condition = false;
        if (condition) {
            setTimeout(() => {
                res('workplace failed')
            }, 1110)
        } else {
            rej('rejected')
        }
    })
}
function city() {
    let condition = true;
    return new Promise((res, rej) => {
        if (condition) {
            setTimeout(() => {
                res('i lives in at chandausi')
            }, 1110)
        } else {
            rej('something went wrong')
        }
    })
}


intro().then((result) => {
    console.log(result)
    return work()
}).then(result => {
    console.log(result)
    return city()
}).then(result => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});