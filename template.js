loadedInterfaceName = "template";

interfaceOrientation = "portrait";

pages = [[
{
    "name": "Actuaizar",
    "type": "Button",
    "bounds": [.6, .9, .2, .1],
    "startingValue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "#aaa",
    "label": "refrsh",
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
 {
     "name" : "myButton",
     "type" : "Button",
     "x" : 0, "y" : 0,
     "width" : .25, "height" : .25,
     "mode" : "toggle",
}

]

];
