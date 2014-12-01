{"changed":true,"filter":false,"title":"messageboard.js","tooltip":"/2-labbymezzage/messageboard.js","value":"\"use strict\";\n\n\nfunction MessageBoard(boardId) //kan slänga in boardId för flera brädor\n{\n    // Skapar array för meddelanden\n    var messages = [];\n    \n    this.getMessages = function()\n    {\n        return messages;\n    };\n    \n    this.addMessage = function(message)\n    {\n        messages.push(message);\n    };\n    \n    this.removeMessage = function (messageId)\n    {\n        messages.splice(messageId, 1);\n    };\n    \n    \n    var main = document.getELementById(\"main\");\n    \n    // Laddar MessageBoard\n    this.renderMessageBoard(main, boardId);\n    \n    // Laddar antal meddelanden\n    this.updateNumberofMessages();\n    \n    // Laddar meddelanden\n    this.renderMessages();\n}\n\nMessageBoard.prototype.renderMessageBoard = function(main, _boardId)\n{\n    var that = this;\n    \n    // Skapar meddelandetavla\n    var boardNode = document.createElement(\"div\");\n    boardNode.id = _boardId;\n    boardNode.className = \"messageBoard\";\n    \n    // Skapar behållare för meddelanden\n    var messageContainerNode = document.createElement(\"div\");\n    messageContainerNode.className=\"messageContainer\";\n    \n    // Skapar element som räknar antal meddelanden\n    var numberOfMessages = document.createElement(\"div\");\n    numberOfMessages.className = \"numberOfMessages\";\n    \n    // Skapar plats för input\n    var textArea = document.createElement(\"textArea\");\n    textArea.className = \"textAreaInput\";\n    textArea.keypress = function(e)\n    {\n        that.textAreaEventHandler();\n        return false;\n    };\n    \n    // Skapar knapp för att sända meddelande\n    var submitButton = document.createElement(\"button\");\n    submitButton.className = \"messageButton\";\n    submitButton.innerHTML = \"Many Message\";\n    submitButton.onclick = function(e)\n    {\n        that.submitButtonOnClick(textArea); \n        return false;\n    };\n    \n    // Lägger till noder till DOMen\n    main.appendChild(boardNode);\n    boardNode.appendChild(messageContainerNode);\n    boardNode.appendChild(numberOfMessages);\n    boardNode.appendChild(textArea);\n    boardNode.appendChild(submitButton);\n};\n\nwindow.onload = function(){\n  \n    new MessageBoard(\"board1\");\n    \n\n};\n\n\n","undoManager":{"mark":99,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":75,"column":14},"end":{"row":75,"column":15},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":15},"end":{"row":75,"column":16},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":16},"end":{"row":75,"column":17},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":17},"end":{"row":75,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":18},"end":{"row":75,"column":19},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":19},"end":{"row":75,"column":20},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":20},"end":{"row":75,"column":21},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":21},"end":{"row":75,"column":22},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":22},"end":{"row":75,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":23},"end":{"row":75,"column":24},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":24},"end":{"row":75,"column":25},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":25},"end":{"row":75,"column":27},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":26},"end":{"row":75,"column":27},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":27},"end":{"row":75,"column":28},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":28},"end":{"row":75,"column":29},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":29},"end":{"row":75,"column":30},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":30},"end":{"row":75,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":31},"end":{"row":75,"column":32},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":26},"end":{"row":75,"column":32},"action":"remove","lines":["number"]},{"start":{"row":75,"column":26},"end":{"row":75,"column":42},"action":"insert","lines":["numberOfMessages"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":43},"end":{"row":75,"column":44},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":44},"end":{"row":76,"column":0},"action":"insert","lines":["",""]},{"start":{"row":76,"column":0},"end":{"row":76,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":4},"end":{"row":76,"column":5},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":5},"end":{"row":76,"column":6},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":6},"end":{"row":76,"column":7},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":7},"end":{"row":76,"column":8},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":8},"end":{"row":76,"column":9},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":9},"end":{"row":76,"column":10},"action":"insert","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":10},"end":{"row":76,"column":11},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":11},"end":{"row":76,"column":12},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":12},"end":{"row":76,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":13},"end":{"row":76,"column":14},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":14},"end":{"row":76,"column":15},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":15},"end":{"row":76,"column":16},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":16},"end":{"row":76,"column":17},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":17},"end":{"row":76,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":18},"end":{"row":76,"column":19},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":19},"end":{"row":76,"column":20},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":20},"end":{"row":76,"column":21},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":21},"end":{"row":76,"column":22},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":22},"end":{"row":76,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":23},"end":{"row":76,"column":24},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":24},"end":{"row":76,"column":25},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":25},"end":{"row":76,"column":27},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":26},"end":{"row":76,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":26},"end":{"row":76,"column":27},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":26},"end":{"row":76,"column":27},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":27},"end":{"row":76,"column":28},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":28},"end":{"row":76,"column":29},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":28},"end":{"row":76,"column":29},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":27},"end":{"row":76,"column":28},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":26},"end":{"row":76,"column":27},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":26},"end":{"row":76,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":27},"end":{"row":76,"column":28},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":28},"end":{"row":76,"column":29},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":29},"end":{"row":76,"column":30},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":30},"end":{"row":76,"column":31},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":31},"end":{"row":76,"column":32},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":32},"end":{"row":76,"column":33},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":32},"end":{"row":76,"column":33},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":31},"end":{"row":76,"column":32},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":30},"end":{"row":76,"column":31},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":30},"end":{"row":76,"column":31},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":26},"end":{"row":76,"column":31},"action":"remove","lines":["textA"]},{"start":{"row":76,"column":26},"end":{"row":76,"column":34},"action":"insert","lines":["textArea"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":35},"end":{"row":76,"column":36},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":36},"end":{"row":77,"column":0},"action":"insert","lines":["",""]},{"start":{"row":77,"column":0},"end":{"row":77,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":4},"end":{"row":77,"column":5},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":5},"end":{"row":77,"column":6},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":6},"end":{"row":77,"column":7},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":7},"end":{"row":77,"column":8},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":8},"end":{"row":77,"column":9},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":9},"end":{"row":77,"column":10},"action":"insert","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":10},"end":{"row":77,"column":11},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":11},"end":{"row":77,"column":12},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":12},"end":{"row":77,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":13},"end":{"row":77,"column":14},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":14},"end":{"row":77,"column":15},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":15},"end":{"row":77,"column":16},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":16},"end":{"row":77,"column":17},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":17},"end":{"row":77,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":18},"end":{"row":77,"column":19},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":19},"end":{"row":77,"column":20},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":20},"end":{"row":77,"column":21},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":21},"end":{"row":77,"column":22},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":22},"end":{"row":77,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":23},"end":{"row":77,"column":24},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":24},"end":{"row":77,"column":25},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":25},"end":{"row":77,"column":27},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":26},"end":{"row":77,"column":27},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":27},"end":{"row":77,"column":28},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":28},"end":{"row":77,"column":29},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":29},"end":{"row":77,"column":30},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":30},"end":{"row":77,"column":31},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":31},"end":{"row":77,"column":32},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":32},"end":{"row":77,"column":33},"action":"insert","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":33},"end":{"row":77,"column":34},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":34},"end":{"row":77,"column":35},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":35},"end":{"row":77,"column":36},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":36},"end":{"row":77,"column":37},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":37},"end":{"row":77,"column":38},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":39},"end":{"row":77,"column":40},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":1},"end":{"row":78,"column":2},"action":"insert","lines":[";"]}]}]]},"ace":{"folds":[],"scrolltop":491,"scrollleft":0,"selection":{"start":{"row":60,"column":6},"end":{"row":60,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":34,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1417446326084}