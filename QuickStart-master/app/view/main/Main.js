Ext.define('QuickStart.view.main.Main', {
    requires:['QuickStart.view.main.ListViewController'],
    extend: 'Ext.tab.Panel',
    controller: 'listview',

    items: [{
        title: 'Employee Directory',
        xtype: 'grid',
        iconCls: 'x-fa fa-users',
        grouped: true,
       
        store: {
            type: 'employees',
            autoLoad: true,
            sorters: ['firstName', 'lastName', 'officeLocation'],
            grouper: 'officeLocation'
        },
        columns: [{
            text: 'First Name',
            dataIndex: 'firstName',
            flex: 1,
           
        }, {
            text: 'Last Name',
            dataIndex: 'lastName',
            flex: 1
        }, {
            text: 'Phone Number',
            dataIndex: 'phoneNumber',
            flex: 1
        }, {
            text: 'See the values',
          //  dataIndex: 'phoneNumber',
             listeners: {
                //iemtap: 'onPopupForm'
                  click: 'onPopupForm'
               },
        }
    
    ]
    },{
        title: 'Contact US',
        padding: 20,
        iconCls: 'x-fa fa-info-circle',
        html: '<h1>About Author</h1><br/><h4>darshan.vishnu95@gmail.com</h4>'
    },
  {  title: 'Admin',
    padding: 20,
    iconCls: 'x-fa fa-info-circle',
    listeners: {
        itemtap: 'onPopupForm'
    }
}
]
});
