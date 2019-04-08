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
   "x" : .84, "y" : .89,
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
     "width" : .15, "height" : .10,
    
  
},
 {
     "name" : "UNO",
     "type" : "Button",
     "x" : 0, "y" : 0,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
      "label": "1",
     "midiNumber" : 1,
    
},
    
    
     {
     "name" : "DOS",
     "type" : "Button",
     "x" : 0, "y" : .11,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
      "label": "2",
     "midiNumber" : 2,
    
},
    
         {
     "name" : "TRES",
     "type" : "Button",
     "x" : 0, "y" : .22,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
      "label": "3",
     "midiNumber" : 3,
    
},
    
            {
     "name" : "CUATRO",
     "type" : "Button",
     "x" : 0, "y" : .33,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
      "label": "4",
     "midiNumber" : 4,
    
},
    
                {
     "name" : "CINCO",
     "type" : "Button",
     "x" : 0, "y" : .44,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
      "label": "5",
     "midiNumber" : 5,
    
},

    
                {
     "name" : "SEIS",
     "type" : "Button",
     "x" : 0, "y" : .55,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
      "label": "6",
     "midiNumber" : 6,
    
},
    
                  {
     "name" : "SIETE",
     "type" : "Button",
     "x" : 0, "y" : .66,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
      "label": "7",
     "midiNumber" : 7,
    
},
    
    
     {
     "name" : "Nueve",
     "type" : "Button",
     "x" : .89, "y" : 0,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "9",
     "midiNumber" : 9,
    
},
    
    
    

    
    
    
    
]

];
