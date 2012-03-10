/**
 * This function will return a Fruit Tree
 * @param {Number} yield The number of fruits provided will be the available yield of the tree
 * @param {String} type The type will be the type of fruit the tree provides
 * @return {Object} returns a fruit tree of the type provided
 */
var getFruitTree = function (yield, type) {
    var fruits = fruits || 3,
        /**
         * Create fruit for the tree
         * @param {String} the type of fruit to create
         * @return {Object} the fruit object to be returned
         */
        fruitMaker = function (type) {
            var eaten = false;
            return {
                getType : function() {
                    return type;
                },
                eat  :  function(){
                    if (!eaten) {
                        eaten = true;
                        console.log('mmm, good ' + type);
                    }
                    else {
                        console.log('all gone. already ate ' + type);
                    }
                }
            };
        },
        /**
         * get the fruit object from the tree
         * @return {Object}
         */
        getFruit = function () {
            if (fruits < 1){
                console.log('no more ' + type);
                return null;
            }
            fruits--;
            return fruitMaker(type);
        };

    return {
        'pick' : getFruit
    };
};
