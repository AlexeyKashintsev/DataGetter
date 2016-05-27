/**
 * @public
 */
define('SERVER', 'orm', function (Orm, ModuleName) {

    return function () {
        var dataAccelerationTable = [
        {name: 'Time'},
        {name: 'X'},
        {name: 'Y'},
        {name: 'Z'}
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
