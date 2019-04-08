loadedInterfaceName = "template";

interfaceOrientation = "portrait";

pages = [[
{
    "name": "Actuaizar",
    "type": "Button",
    
    "startingValue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "#aaa",
     "x" : 0, "y" : .89,
    "label": "refrsh",
    "width" : .15, "height" : .10,
},
{
    "name": "tabButton",
    "type": "Button",
   "x" : .85, "y" : .89,
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
     "width" : .15, "height" : .10,
    
  
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
     "x" : .89, "y" : 0,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "2",
     "midiNumber" : 2,
    
},
]

];
