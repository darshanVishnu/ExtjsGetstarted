Ext.define('QuickStart.view.main.ListViewController', {
    extend: 'Ext.app.ViewController',
    requires:['QuickStart.view.main.PopupForm'],
    alias: 'controller.listview',

    onPopupForm: function (view, index, item, record) {
      console.log('darsha');
      //var view = this.getView();
    //  view.destroy();
     // record = view.getRecord();

    // Ext.Msg.alert(this.name, record);
      
     /*   var window = Ext.create('Ext.window.Window',{
            title:'update',
            width:300,
            centered: true,
            modal: true,
            items: [{
                xtype:'popupform',
                viewModel : {
                    data: {
                        employee: record
                    }
                }
            }]
         
         });
         window.show();

    }*/
   Ext.create('Ext.container.Viewport', {

    
    items: [{
        title: 'Contact Us',
       
       
        xtype: 'form-login',
        
        
           
        }]
    });
    this.view.destroy();
}});
