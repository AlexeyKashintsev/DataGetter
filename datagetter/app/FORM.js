/**
 * 
 */
define('FORM', ['orm', 'forms', 'ui', 'rpc'], function (Orm, Forms, Ui, rpc, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        var module = new rpc.Proxy('SERVER');
        
        self.execute = function(aValue, onSuccess, onFailure){
            model.documents.params.documentCategory = aValue;
            model.requery(function(){
                var report = form.generateReport();
                onSuccess(report);
            }, onFailure);
        };
        
        self.show = function () {
            form.show();
        };
        // TODO : place your code here
        form.button1.onActionPerformed = function() {
            var reciveData = module.get_data();
            //console.log(module.get_data());              
            form.textField.text = reciveData[0].name;
            form.textField1.text = reciveData[1].name;
            form.textField2.text = reciveData[2].name;
            form.textField3.text = reciveData[3].name;

               
        };
        
    }
    return module_constructor;
});
