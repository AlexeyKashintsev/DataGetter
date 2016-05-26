/**
 * @public
 * @author Виталий
 */
define('SERVER', ['orm'], function (Orm, ModuleName) {
    function module_constructor() {
        var self = this, model = Orm.loadModel(ModuleName);
        
        // TODO : place constructor code here
        /**
         * @get /get_data
         * @param {int} x1
         * @param {int} y1
         * @param {int} z1
         * @returns {undefined}
         */
        self.get_data = function(x1, y1, z1) {
            model.q_SELECT.push({
                x: x1,
                y: y1,
                z: z1
            });
            model.save();
        };
        self.execute = function () {
            // TODO : place application code here
        };
    }
    return module_constructor;
});
