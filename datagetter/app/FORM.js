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
        form.button.onActionPerformed = function() {
            var db = {
                time: form.textField.text,
                x: form.textField1.text,
                y: form.textField2.text,
                z: form.textField3.text
            };
            module.push_data(db, function(result){
                console.log(result);
            });
        };
        form.button1.onActionPerformed = function() {
            module.get_data(dataRecieved);
            
                        
        };       
        function dataRecieved (recievedData) {
          //  console.log(module.get_data());
            form.modelGrid.data = recievedData;
            //model.q_SELECT.push({colX:reciveData[0].Time});
        };
        
    }
    return module_constructor;
});
