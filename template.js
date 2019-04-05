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
    
    {
    "name":"Boton1",
    "type":"Button",
    "x" : 0, "y" : 0,
    "width" : .25, "height" : .15,
    "mode" : "toggle",
    "min":-1, "max":1,
    "midiMin":0, "midiMax":64,
    "address"  : "/negPos",
    "midiType" : "noteon",
    "channel":10,
    "midiNumber" : 1,
    "ontouchstart" : "buttonLabel.setValue(this.value);",
    "ontouchend"   : "buttonLabel.setValue(this.value);",
}
 {
    "name":"Boton2",
    "type":"Button",
    "x" : 10, "y" : 0,
    "width" : .25, "height" : .15,
    "mode" : "toggle",
    "min":-1, "max":1,
    "midiMin":0, "midiMax":64,
    "address"  : "/negPos",
    "midiType" : "noteon",
    "channel":10,
    "midiNumber" : 1,
    "ontouchstart" : "buttonLabel.setValue(this.value);",
    "ontouchend"   : "buttonLabel.setValue(this.value);",
}

]

];
