/**
 * @public
 */
define('SERVER', 'orm', function (Orm, ModuleName) {

    var model = Orm.loadModel(ModuleName);
    
    return function () {
        var dataAccelerationTable = [
        {Time: model.q_SELECT_data_time_period},
        {X: 'X'},
        {Y: 'Y'},
        {Z: 'Z'}
    ];
        var self = this;
        
        // TODO : place constructor code here
        /**
         * @get /get_data
         */
        this.get_data = function() {
            return dataAccelerationTable;
        };
    };
});
