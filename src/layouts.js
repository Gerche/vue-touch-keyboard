module.exports = {

	"normal": {

		_meta: {
			"tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
			"shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control"},
			"space": { key: " ", text: "Space", width: 180},
			"enter": { func: "accept", text: "Enter", width: 80, classes: "green"},
			"backspace": { func: "backspace", classes: "control backspace", width: 65},
			"accept": { func: "accept", text: "Minimize", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"}
		},

		default: [
			"@ 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} q w e r t y u i o p [ ] \\",
			"{caps} a s d f g h j k l ; ' {enter}",
			"{shiftl} z x c v b n m , . / {shiftr}",
			"{next} {space} {accept}"
		],
		shifted: [
			"' é è @ à ç ^ ë * ( ) _ + {backspace}",
			"{tab} Q W E R T Y U I O P { } |",
			"{caps} A S D F G H J K L : \" {enter}",
			"{shiftl} Z X C V B N M < > ? {shiftr}",
			"{next} {space} {accept}"
		],
		
		capsed: [
			"@ 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} Q W E R T Y U I O P [ ] \\",
			"{caps} A S D F G H J K L ; ' {enter}",
			"{shiftl} Z X C V B N M , . / {shiftr}", 
			"{next} {space} {accept}"
		]		
	},

	"email_qwerty": {

		_meta: {
			"tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
			"shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control"},
			"space": { key: " ", text: "Space", width: 180},
			"enter": { func: "accept", text: "Enter", width: 80, classes: "green"},
			"backspace": { func: "backspace", classes: "control backspace", width: 65},
			"accept": { func: "accept", text: "Minimize", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"}
		},

		default: [
			"@ 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} q w e r t y u i o p [ ] \\",
			"{caps} a s d f g h j k l ; ' {enter}",
			"{shiftl} z x c v b n m , . / {shiftr}",
			"{next} @hotmail.com @gmail.com @yahoo.com {accept}"
		],
		shifted: [
			"' é è @ à ç ^ ë * ( ) _ + {backspace}",
			"{tab} Q W E R T Y U I O P { } |",
			"{caps} A S D F G H J K L : \" {enter}",
			"{shiftl} Z X C V B N M < > ? {shiftr}",
			"{next} {space} {accept}"
		],
		
		capsed: [
			"@ 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} Q W E R T Y U I O P [ ] \\",
			"{caps} A S D F G H J K L ; ' {enter}",
			"{shiftl} Z X C V B N M , . / {shiftr}", 
			"{next} {space} {accept}"
		]		
	},

	"azerty": {

		_meta: {
			"tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
			"shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control"},
			"space": { key: " ", text: "Space", width: 180},
			"enter": { key: "\r\n", text: "Enter", width: 80, classes: "control"},
			"backspace": { func: "backspace", classes: "control backspace", width: 65},
			"accept": { func: "accept", text: "Minimize", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"}
		},

		default: [
			"' é è @ à ç ^ ë ! \" ( ) - {backspace}",
			"{tab} a z e r t y u i o p ^ $",
			"{caps} q s d f g h j k l m ù µ {enter}",
			"{shiftl} w x c v b n , . : = {shiftr}",
			"{next} {space} {accept}"
		],
		shifted: [
			"³ 1 2 3 4 5 6 7 8 9 0 ° _ {backspace}",
			"{tab} A Z E R T Y U I O P ¨ *",
			"{caps} Q S D F G H J K L M % £ {enter}",
			"{shiftl} W X C V B N ? ; / + {shiftr}",
			"{next} {space} {accept}"
		],
		capsed: [
			"³ 1 2 3 4 5 6 7 8 9 0 ° _ {backspace}",
			"{tab} A Z E R T Y U I O P ¨ *",
			"{caps} Q S D F G H J K L M % £ {enter}",
			"{shiftl} W X C V B N ? ; / + {shiftr}",
			"{next} {space} {accept}"
		]	
	},

	"email_azerty": {

		_meta: {
			"tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
			"shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control"},
			"space": { key: " ", text: "Space", width: 180},
			"enter": { key: "\r\n", text: "Enter", width: 80, classes: "control"},
			"backspace": { func: "backspace", classes: "control backspace", width: 65},
			"accept": { func: "accept", text: "Minimize", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"}
		},

		default: [
			"' é è @ à ç ^ ë ! \" ( ) - {backspace}",
			"{tab} a z e r t y u i o p ^ $",
			"{caps} q s d f g h j k l m ù µ {enter}",
			"{shiftl} w x c v b n , . : = {shiftr}",
			"{next} @hotmail.fr @gmail.com @yahoo.fr {accept}"
		],
		shifted: [
			"³ 1 2 3 4 5 6 7 8 9 0 ° _ {backspace}",
			"{tab} A Z E R T Y U I O P ¨ *",
			"{caps} Q S D F G H J K L M % £ {enter}",
			"{shiftl} W X C V B N ? ; / + {shiftr}",
			"{next} {space} {accept}"
		],
		capsed: [
			"³ 1 2 3 4 5 6 7 8 9 0 ° _ {backspace}",
			"{tab} A Z E R T Y U I O P ¨ *",
			"{caps} Q S D F G H J K L M % £ {enter}",
			"{shiftl} W X C V B N ? ; / + {shiftr}",
			"{next} {space} {accept}"
		]	
	},

	"compact": {

		_meta: {
			"default": { keySet: "default", text: "abc", classes: "control"},
			"alpha": { keySet: "default", text: "Abc", classes: "control"},
			"shift": { keySet: "shifted", text: "ABC", classes: "control"},
			"numbers": { keySet: "numbers", text: "123", classes: "control"},
			"space": { key: " ", text: "Space", width: 200},
			"backspace": { func: "backspace", classes: "control"},
			"accept": { func: "accept", text: "Minimize", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "featured"},
			"zero": { key: "0", width: 130}
		},

		default: [
			"q w e r t y u i o p",
			" a s d f g h j k l ",
			"{shift} z x c v b n m {backspace}",
			"{numbers} , {space} . {next} {accept}"
		],

		shifted: [
			"Q W E R T Y U I O P",
			" A S D F G H J K L ",
			"{default} Z X C V B N M ",
			"{numbers} _ {space} {backspace} {next} {accept}"
		],

		numbers: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"  {alpha} . {zero} {backspace} {next} {accept}"
		]
	},

	"numeric": {

		_meta: {
			"backspace": { func: "backspace", classes: "control"},
			"enter": { func: "accept", text: "Enter", width: 84, classes: "green"},
			"accept": { func: "accept", text: "Minimize", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"},
			"zero": { key: "0", width: 128}
		},

		default: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"+ ( ) {zero} {backspace} {enter}"
		]
	}

};