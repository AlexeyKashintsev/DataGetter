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
        /**
         * @get /push_data
         */
        this.push_data = function(data, callback) {
            model.q_SELECT.push({
                time: data.time,
                x: data.x,
                y: data.y,
                z: data.z
            });
            model.save();
            callback("123");
        };
        
        
    };
});
