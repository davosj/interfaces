loadedInterfaceName = "template"; 

interfaceOrientation = "portrait";

pages = [[
{
    "name": "Actuaizar",
    "type": "Button",
    "bounds": [.6, .9, .2, .1],
    "startingValjavascript:;ue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "#aaa",
    "label": "actualizar",
},
{
    "name": "tabButton",
    "type": "Button",
    "bounds": [.8, .9, .2, .1],
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
},

]

];
