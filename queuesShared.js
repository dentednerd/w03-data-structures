function queuesShared () { 
    const obj = {
        queue: {},
        rearIndex: 0,
        frontIndex: 0,
        push: sharedMethods.push,
        shift: sharedMethods.shift
    }; return obj;
}

const sharedMethods = {
        push: function (item) {
                this.queue[this.rearIndex] = item;
                this.rearIndex++;
        },
          shift: function () {
                var temp = this.queue[this.frontIndex];
                delete this.queue[this.frontIndex];
                this.frontIndex++;
                return temp;
        }
};

module.exports = queuesShared;