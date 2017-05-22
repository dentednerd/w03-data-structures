function queuesFunc () { 
   
    const obj = {
            queue: {},
            rearIndex: 0,
            frontIndex: 0,
            push: function (item) {
                obj.queue[obj.rearIndex] = item;
                obj.rearIndex++;
            },
            shift: function () {
                var temp = obj.queue[obj.frontIndex];
                delete obj.queue[obj.frontIndex];
                obj.frontIndex++;
                return temp;
        }
    }; return obj;
 }

 module.exports = queuesFunc;