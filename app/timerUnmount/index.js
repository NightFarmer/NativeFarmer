
function timerUnmount(target) {
    let intervalList = [];
    let timeOutList = [];
    let superUnmount = target.prototype.componentWillUnmount;

    target.prototype.componentWillUnmount = () => {
        intervalList.forEach((it) => {
            clearInterval(it)
        });
        timeOutList.forEach((it)=>{
            clearTimeout(it)
        });
        superUnmount && superUnmount.bind(target.prototype)()
    };

    target.prototype.setInterval = (code, delay, ...args) => {
        let interval = setInterval(code, delay, ...args);
        intervalList.push(interval);
        return interval
    };
    target.prototype.setTimeout = (code, delay, ...args) => {
        let timeOut = setTimeout(code, delay, ...args);
        timeOutList.push(timeOut);
        return timeOut
    }
}

export default timerUnmount