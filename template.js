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
     "name" : "uno",
     "type" : "Button",
     "x" : 0, "y" : 0,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
      "label": "1",
     "midiNumber" : 1,
    
},

     {
     "name" : "dos",
     "type" : "Button",
     "x" : .88, "y" : 0,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "2",
     "midiNumber" : 2,
    
},
]

];
