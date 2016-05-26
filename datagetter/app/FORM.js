/**
 * 
 * @author Виталий
 */
define('FORM', ['orm', 'forms', 'ui', 'rpc'], function (Orm, Forms, Ui, rpc, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        var module = new Rpc.Proxy('SERVER');
        self.show = function () {
            form.show();
        };
        // TODO : place your code here
        form.button.onActionPerformed = function() {
                module.get_data(1, 2,3);
                //console.log(model.q_SELECT[i].x, model.q_SELECT[i].y, model.q_SELECT[i].z);
        };
        model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
