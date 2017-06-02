function queuesPseudo () { 
        this.queue = {};
        this.rearIndex = 0;
        this.frontIndex = 0;
}

queuesPseudo.prototype.push = function (item) {
                this.queue[this.rearIndex] = item;
                this.rearIndex++;
};

queuesPseudo.prototype.shift = function () {
                var temp = this.queue[this.frontIndex];
                delete this.queue[this.frontIndex];
                this.frontIndex++;
                return temp;
};

module.exports = queuesPseudo;