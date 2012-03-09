
var getFruitTree = function (fruits, type) {
    var fruits = fruits || 10,
        fruitMaker = function (type) {
            var eaten = false;
            return {
                    type : type,
                    eat  :  function(){
                            if (!eaten) {
                                eaten = true;
                                console.log('mmm, good ' + this.type); 
                            }
                            else {
                                console.log('all gone. already ate ' + this.type);
                            }
                        }
            };
        },
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
