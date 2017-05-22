function stacksProto () { 
    const obj = Object.create(stacksProto.prototype);
        obj.stack = {};
        obj.index = 0;
        return obj;
}

stacksProto.prototype.push = function (item) {
            this.stack[this.index] = item;
            this.index++;
};

stacksProto.prototype.pop = function () {
            this.index--;
            var temp = this.stack[this.index];
            delete this.stack[this.index];
            return temp;
};

module.exports = stacksProto;