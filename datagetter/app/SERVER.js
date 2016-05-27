/**
 * @public
 */
define('SERVER', 'orm', function (Orm, ModuleName) {

    var model = Orm.loadModel(ModuleName);
    
    return function () {
        
        var self = this;
        
        // TODO : place constructor code here
        /**
         * @get /get_data
         */
        this.get_data = function(callBack) {
            model.requery(function(){
                callBack(model.q_SELECT);
                
            });
        };
        
        
    };
});
