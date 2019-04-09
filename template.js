loadedInterfaceName = "template";

interfaceOrientation = "portrait";

pages = [[
    
    {
    "name":"PAN",
    "type":"Knob",
    "x":.25, "y":.11,
    "width":.25, "height":.25,
        "midiNumber"   : 19,
        "usesRotation" : false,
},
    
        {
    "name":"TILT",
    "type":"Knob",
    "x":.51, "y":.11,
    "width":.25, "height":.25,
        "midiNumber"   : 20,
        "usesRotation" : false,
},
    
{
    "name":"MAIN",
    "type":"Slider",
    "x":.11, "y":.05,
    "width":.1, "height":.82,
    "isVertical" : true,
    "midiNumber"   : 17,
},
    
 {
    "name":"VOL",
    "type":"Slider",
    "x":.78, "y":.05,
    "width":.1, "height":.82,
    "isVertical" : true,
     "midiNumber"   : 18,
},
    {
    "name": "Referencia",
    "type": "Label",
    "x": .22, "y": .97,
    "width": .8, "height": .8,
    "value": "          Interfaz diseñada por Jorge Davo Sainz, con recursos de Charles Roberts",
    "backgroundColor": "rgba(0,0,0,0)",
    "verticalCenter": false,
    "align": "left",
},
    
    {
    "name": "Actuaizar",
    "type": "Button",
    
    "startingValue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "#aaa",
     "x" : 0, "y" : .895,
    "label": "refrsh",
    "width" : .15, "height" : .10,
},
{
    "name": "tabButton",
    "type": "Button",
   "x" : .84, "y" : .895,
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
     "name" : "OCHO",
     "type" : "Button",
     "x" : 0, "y" : .77,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
      "label": "8",
     "midiNumber" : 8,
    
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
    
        
     {
     "name" : "DIEZ",
     "type" : "Button",
     "x" : .89, "y" : .11,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "10",
     "midiNumber" : 10,
    
},
    
    
        
     {
     "name" : "ONCE",
     "type" : "Button",
     "x" : .89, "y" : .22,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "11",
     "midiNumber" : 11,
    
},
    
    
        
     {
     "name" : "DOCE",
     "type" : "Button",
     "x" : .89, "y" : 0.33,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "12",
     "midiNumber" : 12,
    
},
    
    
        
     {
     "name" : "TRECE",
     "type" : "Button",
     "x" : .89, "y" : .44,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "13",
     "midiNumber" : 13,
    
},
    
    
        
     {
     "name" : "CATORCE",
     "type" : "Button",
     "x" : .89, "y" : .55,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "14",
     "midiNumber" : 14,
    
},
    
    
        
     {
     "name" : "QUINCE",
     "type" : "Button",
     "x" : .89, "y" : .66,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "15",
     "midiNumber" : 15,
    
},
    
    
        
     {
     "name" : "DIECISEIS",
     "type" : "Button",
     "x" : .89, "y" : .77,
     "width" : .10, "height" : .10,
     "mode" : "toggle",
       "label": "16",
     "midiNumber" : 16,
    
},
    
    
    

    
    
    
    
]

];
