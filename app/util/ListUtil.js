export function init() {
    Array.prototype.indexOf = function (val) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };

    Array.prototype.remove = function (val) {
        let index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };

    Array.prototype.flatMap = function (iter, context) {
        let results = [];
        this.forEach(function(value, index, list) {
            let res = iter.call(context, value, index, list);
            if (Array.isArray(res)) {
                results.push.apply(results, res);
            } else if (res != null) {
                results.push(res);
            }
        });
        return results;
    }
}
