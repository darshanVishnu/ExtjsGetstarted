Ext.define('QuickStart.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',


    proxy: {
        type: 'ajax',
      /*  headers:['Access-Control-Allow-Origin: *',
'Access-Control-Allow-Methods: GET, POST, OPTIONS',
'Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with'
    ],*/
    method: 'GET',
    
        url: 'data/data.json'
  
    },

    listeners: {

        update: function(store, record , operation , modifiedFieldNames) {
            if (!modifiedFieldNames) {
                return;
            }

            // Ensure that select field is being set to a value, not the entire record
            var modField = modifiedFieldNames.toString(),
                mod = record.get(modField);

            if (mod && mod.isModel) {
                record.set(modField, mod.get('text'));
            }
        }
    }
});
