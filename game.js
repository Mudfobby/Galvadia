/*	NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES 
1. Update UI to flexbox
2. Have energy and mana for special attacks?
3. Make a visual inventory on the right side and allow unpacking slot numbers like "unpack 1" or "unpack 2"





*/

let noMove = 'you cannot move in that direction'
let commandLine = document.getElementById('commandLine')
commandLine.focus()
let pushMonster = []
let directionMoved
let dialogueSpeed = 25
//classes
let yellow = 'yellow'
let red = 'red'
let blue = 'blue'
let orange = 'orange'
let green = 'green'
let purple = 'purple'
let white = 'white'
let brown = 'brown'
let pink = 'pink'
//HTML elements
//____________________________________________________++SWING VOCABULARY++__________________________________________
//expertise, swing, weapon, enemy, number damage
let rustedSwordSwing = function (expertise, swingType, weapon, atIntoOnto, enemy, numberDamage, playerPen, damage) {
	if (damage == 0) {
		const messageP = document.createElement('div')
		messageP.appendChild(words('You '))
		messageP.appendChild(expertise)
		messageP.appendChild(swingType)
		messageP.appendChild(words('your '))
		messageP.appendChild(weapon)
		messageP.appendChild(words('at the ')) //atIntoOnto
		messageP.appendChild(enemy)
		messageP.appendChild(words('and '))
		messageP.appendChild(numberDamage)
		masterArea.appendChild(messageP)
	} else {
		const messageP = document.createElement('div')
		messageP.appendChild(words('You '))
		messageP.appendChild(expertise)
		messageP.appendChild(swingType)
		messageP.appendChild(words('your '))
		messageP.appendChild(weapon)
		messageP.appendChild(atIntoOnto)
		messageP.appendChild(enemy)
		messageP.appendChild(words('for '))
		messageP.appendChild(numberDamage)
		messageP.appendChild(playerPen)
		messageP.appendChild(words('damage!'))
		masterArea.appendChild(messageP)
	}
}
let rustedClaymoreSwing = function (expertise, swingType, weapon, atIntoOnto, enemy, numberDamage, playerPen, damage) {
	if (damage == 0) {
		const messageP = document.createElement('div')
		messageP.appendChild(words('You '))
		messageP.appendChild(expertise)
		messageP.appendChild(swingType)
		messageP.appendChild(words('your '))
		messageP.appendChild(weapon)
		messageP.appendChild(words('at the '))
		messageP.appendChild(enemy)
		messageP.appendChild(words('and '))
		messageP.appendChild(numberDamage)
		masterArea.appendChild(messageP)
	} else {
		const messageP = document.createElement('div')
		messageP.appendChild(words('You '))
		messageP.appendChild(expertise)
		messageP.appendChild(swingType)
		messageP.appendChild(words('your '))
		messageP.appendChild(weapon)
		messageP.appendChild(atIntoOnto)
		messageP.appendChild(enemy)
		messageP.appendChild(words('for '))
		messageP.appendChild(numberDamage)
		messageP.appendChild(playerPen)
		messageP.appendChild(words('damage!'))
		masterArea.appendChild(messageP)
	}
}
let unarmedSwing = function (expertise, swingType, weapon, atIntoOnto, enemy, numberDamage, playerPen, damage) {
	console.log(damage, 'DAMAGE')
	if (damage == 0) {
		const messageP = document.createElement('div')
		messageP.appendChild(words('You '))
		messageP.appendChild(expertise)
		messageP.appendChild(swingType)
		messageP.appendChild(words('your '))
		messageP.appendChild(weapon)
		messageP.appendChild(words('at the '))
		messageP.appendChild(enemy)
		messageP.appendChild(words('and '))
		messageP.appendChild(numberDamage)
		masterArea.appendChild(messageP)
	} else {
		const messageP = document.createElement('div')
		messageP.appendChild(words('You '))
		messageP.appendChild(expertise)
		messageP.appendChild(swingType)
		messageP.appendChild(words('your '))
		messageP.appendChild(weapon)
		messageP.appendChild(atIntoOnto)
		messageP.appendChild(enemy)
		messageP.appendChild(words('for '))
		messageP.appendChild(numberDamage)
		messageP.appendChild(playerPen)
		messageP.appendChild(words('damage!'))
		masterArea.appendChild(messageP)
	}
}
function words(wordOrWords, color) {
	const messageSpan = document.createElement('span')
	messageSpan.textContent = wordOrWords
	messageSpan.classList.add(color)
	return messageSpan
}

function quickMessage(message, classChange) {
	const messageDiv = document.createElement('div')
	messageDiv.appendChild(words(message, classChange))
	masterArea.appendChild(messageDiv)
}

function dialogue(gameDialogue) {
	const text = gameDialogue
	let timer
	let i = 0
	let textBox = document.createElement('span')
	textBox.classList.add('dialogue-message')
	masterArea.appendChild(textBox)
	if (dialogueSpeed == 0 || dialogueSpeed == 'instant') {
		let textNode = document.createTextNode(text)
		textBox.appendChild(textNode)
	} else {
		function dialogueInterval() {
			let textNode = document.createTextNode(text[i])
			textBox.appendChild(textNode)
			updateScroll()
			i++
			if (i >= text.length) clearInterval(timer)
		}
		timer = setInterval(dialogueInterval, dialogueSpeed)
	}
}

function atIntoOnto() {
	let words
	if (playerPenetrationName == 'slashing ') {
		words = 'at the '
	} else if (playerPenetrationName == 'piercing ') {
		words = 'into the '
	} else if (playerPenetrationName == 'blunt ') {
		words = 'onto the '
	} else if (playerPenetrationName == 'unarmed ') {
		words = 'into the '
	} else if (playerPenetrationName == 'miss') {
		words = 'at the '
	}
	const messageSpan = document.createElement('span')
	messageSpan.textContent = words
	messageSpan.classList.add(white)
	return messageSpan
}
function sellItemDialog(itemName, sellValue) {
	const messageP = document.createElement('div')
	messageP.appendChild(words('You '))
	messageP.appendChild(words('sell ', 'blue'))
	messageP.appendChild(words('your '))
	messageP.appendChild(words(itemName + ' '))
	messageP.appendChild(words('for '))
	messageP.appendChild(words(sellValue + ' ', 'gold'))
	messageP.appendChild(words('gold'))
	masterArea.appendChild(messageP)
}
function weaponDescription(itemId, bottomDamage, topDamage, itemName, mods, description) {
	const messageP = document.createElement('div')
	messageP.appendChild(words(`_____________________________________________________________`))
	masterArea.appendChild(messageP)

	const messageP2 = document.createElement('div')
	messageP2.appendChild(words(`ID: ${itemId}`))
	masterArea.appendChild(messageP2)

	const messageP3 = document.createElement('div')
	messageP3.appendChild(words(`${itemName}`, 'darkGold'))
	masterArea.appendChild(messageP3)

	const messageP4 = document.createElement('div')
	messageP4.appendChild(words(`Damage: ${bottomDamage} - ${topDamage}`))
	masterArea.appendChild(messageP4)

	showItemDescription(mods)

	quickMessage(description, 'wrap')
}
function armorDescription(itemId, itemName, mods, description) {
	const messageP = document.createElement('div')
	messageP.appendChild(words(`_____________________________________________________________`))
	masterArea.appendChild(messageP)

	const messageP2 = document.createElement('div')
	messageP2.appendChild(words(`ID: ${itemId}`))
	masterArea.appendChild(messageP2)

	const messageP3 = document.createElement('div')
	messageP3.appendChild(words(`${itemName}`, 'darkGold'))
	masterArea.appendChild(messageP3)

	showItemDescription(mods)

	quickMessage(description, 'descriptions')
}
function shieldDescription(itemId, itemName, mods, description) {
	const messageP = document.createElement('div')
	messageP.appendChild(words(`_____________________________________________________________`))
	masterArea.appendChild(messageP)

	const messageP2 = document.createElement('div')
	messageP2.appendChild(words(`ID: ${itemId}`))
	masterArea.appendChild(messageP2)

	const messageP3 = document.createElement('div')
	messageP3.appendChild(words(`${itemName}`, 'darkGold'))
	masterArea.appendChild(messageP3)

	showItemDescription(mods)

	quickMessage(description, 'descriptions')
}
//____________________________________SWING VARIABLES AND FUNCTIONS TO INJECT_________________
let playerPenetrationName
function playerPenetrationNameFunc(playerPenetrationName) {
	let penetrationName = playerPenetrationName
	const messageSpan = document.createElement('span')
	messageSpan.textContent = penetrationName
	messageSpan.classList.add(white)
	return messageSpan
}

function expertise(weapon) {
	console.log('expertise ran')
	let playerExpertiseLevel
	let playerExpertiseAdjective
	if (weapon.type.oneHanded == true) {
		playerExpertiseLevel = player.oneHanded.level
	} else if (weapon.type.twoHanded == true) {
		playerExpertiseLevel = player.twoHanded.level
	} else if (weapon.type.unarmed == true) {
		playerExpertiseLevel = player.unarmed.level
	}

	if (playerExpertiseLevel <= 4) {
		playerExpertiseAdjective = 'clumsily '
	} else if (playerExpertiseLevel <= 7) {
		playerExpertiseAdjective = 'novicely '
	}
	const messageSpan = document.createElement('span')
	messageSpan.textContent = playerExpertiseAdjective
	messageSpan.classList.add('wobbly')
	console.log(playerExpertiseAdjective, 'player expertise adjective')
	return messageSpan
}
function playerSwingType() {
	let swingType
	if (playerPenetrationName == 'slashing ') {
		swingType = 'slash '
	} else if (playerPenetrationName == 'piercing ') {
		swingType = 'thrust '
	} else if (playerPenetrationName == 'blunt ') {
		swingType = 'slam '
	} else if (playerPenetrationName == 'unarmed ') {
		swingType = 'slam '
	}
	const messageSpan = document.createElement('span')
	messageSpan.textContent = swingType
	messageSpan.classList.add(red)
	return messageSpan
}
function playerWeaponName(weapon) {
	let swingType = weapon.name.toLowerCase() + ' '
	const messageSpan = document.createElement('span')
	messageSpan.textContent = swingType
	messageSpan.classList.add('brown')
	return messageSpan
}
function enemyName(monster) {
	//if monster == monster return 'at the' - if monster == person return 'at'
	let enemyName = monster
	const messageSpan = document.createElement('span')
	messageSpan.textContent = enemyName.toLowerCase() + ' '
	messageSpan.classList.add(red)
	return messageSpan
}
function damageNumber(damage) {
	let damageNumber = damage
	const messageSpan = document.createElement('span')
	messageSpan.textContent = damageNumber != 0 ? `[${damageNumber}] ` : 'miss!'
	messageSpan.classList.add(white)
	return messageSpan
}
//area specific classes
let galvadianGreen = 'galvadian-green'
let castleGrey = 'castle-grey'
let dirtPath = 'dirt-path'
let town = 'town'
//

let descriptions = 'descriptions'
let masterArea = document.getElementById('masterArea')
let descName = document.getElementById('descName')
let zoneExits = document.getElementById('zoneExits')
let additional = document.getElementById('additional')
let monsters = document.getElementById('monsters')
let scrollable = document.getElementById('scrollable')
let allDirections = ['north', 'n', 'northeast', 'ne', 'east', 'e', 'southeast', 'se', 'south', 's', 'southwest', 'sw', 'west', 'w', 'northwest', 'nw', 'up', 'u', 'down', 'd']
let pushItem = []

let backpack = 'backpack'
let equipped = 'equipped'
let wielded = 'wielded'
let slot1 = 'right hand'
let slot2 = 'left hand'
let slot3 = 'head'
let slot4 = 'necklace'
let slot5 = 'shoulders'
let slot6 = 'chest'
let slot7 = 'back'
let slot8 = 'arms'
let slot9 = 'hands'
let slot10 = 'waist'
let slot11 = 'legs'
let slot12 = 'feet'
let slot13 = 'ring 1'
let slot14 = 'ring 2'
let empty = 'empty'
let armor = 'armor'
let weapon = 'weapon'
let shield = 'shield'
let oneHanded = 'oneHanded'
let twoHanded = 'twoHanded'
let unarmed = 'unarmed'
let bow = 'bow'
let dualWield = 'dual wield'
let drink = 'drink'
let oneSecond = 1
let twoSeconds = 2
let threeSeconds = 3
let fourSeconds = 4
let swingTimer
let learnedSkillName
let learnedSpellname
const regExp = /[a-zA-Z]/g
//player classes
const warrior = 'warrior'

let currentCommand = function (firstCommand, secondCommand, thirdCommand) {
	let twoWords = firstCommand + ' ' + secondCommand
	console.log(twoWords, ' TWO WORDS')
	let threeWords = firstCommand + ' ' + secondCommand + ' ' + thirdCommand
	if (currentArea.questKeywords != undefined && currentArea.questKeywords.find(keyword => keyword == firstCommand)) {
		console.log(1)
		currentArea.questComplete(firstCommand, secondCommand, thirdCommand)
	} else if (currentArea.questKeywords != undefined && currentArea.questKeywords.find(keyword => keyword == twoWords)) {
		console.log(2)
		currentArea.questComplete(twoWords)
	}
}
function pushItemByRoomId(roomIdCommand) {
	let roomIdItem = pushItem.find(item => item.roomId == roomIdCommand)
	if (roomIdItem != undefined) {
		return roomIdItem
	} else if (player.rightHand == empty) {
		return player.unarmed1
	} else {
		return empty
	}
}
function pushItemByKeyword(secondCommand) {
	return pushItem.find(({ keywords, roomId }) => keywords.some(keyword => secondCommand === keyword && roomId === currentArea.id))
}

function pushItemAllItemsInRoom() {
	let allItems = pushItem.filter(allItemsInRoom => allItemsInRoom.roomId == currentArea.id)
	if (allItems != undefined) {
		return allItems
	} else {
		return undefined
	}
}
function pushItemInBackpack() {
	return pushItem.filter(allItems => allItems.roomId == backpack)
}

let spacer = `\u00A0`
let spacer5 = `\u00A0\u00A0\u00A0\u00A0\u00A0`
let spacer10 = `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0` // spacer10 is 10 spaces long
let spacer20 = spacer10 + spacer10
let spacer30 = spacer20 + spacer10
let spacer40 = spacer20 + spacer20
let spacer50 = spacer40 + spacer10
let spacer100 = spacer50 + spacer50
let spacer200 = spacer100 + spacer100

//allows you to press enter to submit commands

let currentArea = {
	hostile: null,
	id: 0,
	x: 0,
	y: 0,
	npc: null,
	descriptions: {
		areaName: null,
		desc: null,
		zoneExits: null,
		zoneExitsBool: {
			north: null,
			northwest: null,
			west: null,
			southwest: null,
			south: null,
		},
	},
	interactables: {
		mushrooms: {
			pick: null,
			stomp: null,
			eat: null,
		},
	},
	monsters: {
		blob: {
			name: null,
			health: null,
			visual: null,
			spawnChance: null,
		},
	},
}
commandLine.addEventListener('keypress', function (event) {
	if (event.keyCode === 13 && commandLine.value.length !== 0) {
		if (player.combat === false && player.stasis === false) {
			handleInputs(commandLine.value)
		} else if (player.combat === true && player.stasis === false) {
			handleCombatInputs(commandLine.value)
		} else if (player.stasis === true) {
			handleStasisInputs(commandLine.value)
		}
		event.preventDefault()
	}
})
//stasis commands
const handleStasisInputs = function (commandLineInput) {
	const inputsLowerCase = commandLineInput.toLowerCase()
	const inputsSplitBySpace = inputsLowerCase.split(' ')
	const command = inputsSplitBySpace[0]
	const secondCommand = inputsSplitBySpace[1]
	let thirdCommand = inputsSplitBySpace[2]
	currentCommand = command
	for (let i = 3; i < inputsSplitBySpace.length; i++) {
		thirdCommand += inputsSplitBySpace[i]
	}
	currentCommand(command, secondCommand, thirdCommand)

	switch (command) {
		case 'look':
		case 'l':
			look(command)
			break
		case 'examine':
		case 'ex':
			examine(secondCommand, thirdCommand)
			break
		case 'in':
		case 'ins':
		case 'insp':
		case 'inspect':
			inspect(secondCommand, thirdCommand)
			break
		case 'i':
		case 'inv':
			showInventory(player.inventory)
			break
		case 'clean':
			clean()
			break
		case 'get':
		case 'g':
			pickupItem(secondCommand, thirdCommand)
			break
		case 'drop':
			dropItem(secondCommand, thirdCommand)
			break
		case 'pack':
		case 'p':
			pack(secondCommand)
			break
		case 'unpack':
			unpack(secondCommand)
			break
		case 'swap':
			swap()
			break
		case 'recall':
			recall(secondCommand, thirdCommand)
			break
		case 'dialogue':
			dialogueSpeedFunc(secondCommand)
			break
		default:
			quickMessage(`you are exhausted and must wait before taking another action [${swingTimer}]`)
	}
	commandLine.value = ''
	commandLine.focus()
	updateScroll()
}
//combat commands
const handleCombatInputs = commandLineInput => {
	const inputsLowerCase = commandLineInput.toLowerCase()
	const inputsSplitBySpace = inputsLowerCase.split(' ')
	const command = inputsSplitBySpace[0]
	const secondCommand = inputsSplitBySpace[1]
	let thirdCommand = inputsSplitBySpace[2]
	currentCommand = command

	for (let i = 3; i < inputsSplitBySpace.length; i++) {
		thirdCommand += inputsSplitBySpace[i]
	}
	currentCommand(command, secondCommand, thirdCommand)

	const directionCheck = allDirections.find(noMove => noMove === command)
	switch (command) {
		//combat functions
		case 'a':
		case 'attack':
			attack(secondCommand)
			break
		case 'ad':
			quickMessage('you are already engaged with a monster')
			break
		case 're':
		case 'retreat':
			retreat(secondCommand)
			break
		case 'get':
		case 'g':
			pickupItem(secondCommand, thirdCommand)
			break
		//normal functions
		case directionCheck:
			quickMessage('you cannot move while engaged in combat!')
			break
		case 'look':
		case 'l':
			look(command)
			break
		case 'examine':
		case 'ex':
			examine(secondCommand, thirdCommand)
			break
		case 'in':
		case 'ins':
		case 'insp':
		case 'inspect':
			inspect(secondCommand, thirdCommand)
			break
		case 'i':
		case 'inv':
		case 'show inventory':
			showInventory(player.inventory) //fix
			break
		case 'speak':
		case 'talk':
			speak(secondCommand)
			break
		case 'quest':
			showQuest(secondCommand)
			break
		case 'offer':
			offerQuest(secondCommand)
			break
		case 'show':
			show(secondCommand, thirdCommand)
			break
		case 'stats':
			stats()
			break
		case 'skills':
			skills()
			break
		case 'exp':
			exp()
			break
		case 'spawn':
			itemRoll()
			break
		case 'clean':
			clean()
			break
		case 'get':
		case 'g':
			pickupItem(secondCommand, thirdCommand)
			break
		case 'drop':
			dropItem(secondCommand, currentArea)
			break
		case 'pack':
		case 'p':
			pack(secondCommand)
			break
		case 'unpack':
			unpack(secondCommand)
			break
		case 'swap':
			swap()
			break
		case 'recall':
			recall(secondCommand, thirdCommand)
			break
		case 'dialogue':
			dialogueSpeedFunc(secondCommand)
			break
		default:
			invalidCommand(commandLineInput)
	}
	commandLine.value = ''
	commandLine.focus()
	updateScroll()
}
//Out of combat commands
const handleInputs = commandLineInput => {
	const inputsLowerCase = commandLineInput.toLowerCase()
	const inputsSplitBySpace = inputsLowerCase.split(' ')
	const command = inputsSplitBySpace[0]
	const secondCommand = inputsSplitBySpace[1]
	let thirdCommand = inputsSplitBySpace[2]

	for (let i = 3; i < inputsSplitBySpace.length; i++) {
		thirdCommand += inputsSplitBySpace[i]
	}
	currentCommand(command, secondCommand, thirdCommand)

	switch (command) {
		case 'n':
		case 'north':
			moveNorth()
			break
		case 'ne':
		case 'northeast':
			moveNortheast()
			break
		case 'e':
		case 'east':
			moveEast()
			break
		case 'se':
		case 'southeast':
			moveSoutheast()
			break
		case 's':
		case 'south':
			moveSouth()
			break
		case 'sw':
		case 'southwest':
			moveSouthwest()
			break
		case 'w':
		case 'west':
			moveWest()
			break
		case 'nw':
		case 'northwest':
			moveNorthwest()
			break
		case 'up':
		case 'u':
			moveUp()
			break
		case 'down':
		case 'd':
			moveDown()
			break
		case 'attack':
		case 'a':
			quickMessage('you must be engaged with a monster to attack')
			break
		case 'look':
		case 'l':
			look(command, secondCommand, currentArea)
			break
		case 'examine':
		case 'ex':
			examine(secondCommand, thirdCommand)
			break
		case 'in':
		case 'ins':
		case 'insp':
		case 'inspect':
			inspect(secondCommand, thirdCommand)
			break
		case 'i':
		case 'inv':
		case 'show inventory':
			showInventory(player.inventory) //fix
			break
		case 'spawn':
			itemRoll()
			break
		case 'clean':
			clean()
			break
		case 'get':
		case 'g':
			pickupItem(secondCommand, currentArea)
			break
		case 'drop':
			dropItem(secondCommand, currentArea)
			break
		case 'pack':
		case 'p':
			pack(secondCommand)
			break
		case 'unpack':
			unpack(secondCommand)
			break
		case 'swap':
			swap()
			break
		case 'ad':
		case 'advance':
			advance()
			break
		case 'speak':
		case 'talk':
			speak(secondCommand)
			break
		case 'quest':
			showQuest(secondCommand)
			break
		case 'offer':
			offerQuest(secondCommand)
			break
		case 'show':
			show(secondCommand, thirdCommand)
			break
		case 'trade':
			tradeDialog(secondCommand)
			break
		case 'stats':
			stats()
			break
		case 'skills':
			skills()
			break
		case 'exp':
			exp()
			break
		case 'don':
		case 'wear':
		case 'equip':
			donWearEquip(secondCommand)
			break
		case 'unequip':
		case 'remove':
			unequipRemove(secondCommand)
			break
		case 'drink':
			statDrink(secondCommand)
			break
		case 'buy':
			buy(secondCommand, thirdCommand)
			break
		case 'sell':
			sell(secondCommand, thirdCommand)
			break
		case 'learn':
			learnSkill(secondCommand, thirdCommand)
			break
		case 'read':
			read(secondCommand)
			break
		case 'recall':
			recall(secondCommand, thirdCommand)
			break
		case 'god':
			godMode()
		case 'dialogue':
			dialogueSpeedFunc(secondCommand)
			break
		default:
			invalidCommand(commandLineInput)
			break
	}
	commandLine.value = ''
	commandLine.focus()
	updateScroll()
}

function combatCount(seconds) {
	let ticker = setInterval(() => {
		swingTimer = Math.round(seconds * 10) / 10
		seconds = seconds - 0.1
		if (seconds <= 0) {
			clearInterval(ticker)
			combatCounter = 4
		}
	}, 100)
}
//////////////////////////////////////////////////++COMBAT FUNCTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++COMBAT FUNCTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++COMBAT FUNCTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++COMBAT FUNCTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++COMBAT FUNCTIONS++//////////////////////////////////////////////////
function advance() {
	const targetedMonster = pushMonster.find(monster => monster.roomId === currentArea.id)
	if (targetedMonster) {
		quickMessage('you engage the ' + targetedMonster.name)
		player.combat = true
		targetedMonster.combat = player.combat
		targetedMonster.hostile = true
		player.stasis = true
		combatCount(oneSecond)
		setTimeout(() => {
			player.stasis = false
		}, 1000)
	} else {
		quickMessage('there must be a monster in the room for you to advance')
	}
}

function retreat(secondCommand) {
	const retreatDirection = allDirections.find(reDir => reDir === secondCommand)
	//use filter then foreach to do something to a group of monsters
	pushMonster.forEach(monster => (monster.combat = false)) //if this line works, delete the pushMonster.combat = player.combat below
	if (secondCommand === retreatDirection && secondCommand !== undefined) {
		quickMessage('you quickly retreat to the ' + secondCommand)
		handleInputs(secondCommand)
		player.combat = false
		pushMonster.combat = player.combat //change this to find the monsters to change combat otherwise this is dead code
		player.stasis = true
		combatCount(twoSeconds)
		setTimeout(() => {
			player.stasis = false
		}, 2000)
	} else {
		quickMessage('you step back from the monster')
		player.stasis = true
		combatCount(twoSeconds)
		setTimeout(() => {
			player.stasis = false
		}, 2000)
		player.combat = false
		pushMonster.combat = player.combat //change this to find the monsters to change combat otherwise this is dead code
	}
}

function combatCheck() {
	const monsterCombatCheck = pushMonster.find(monster => monster.roomId === player.roomId && monster.combat === true)
	if (monsterCombatCheck) {
		player.combat = true
	} else {
		player.combat = false
	}
}

//////////////////////////////////////////////////++DIRECTION AND MOVEMENT FUNCTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++DIRECTION AND MOVEMENT FUNCTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++DIRECTION AND MOVEMENT FUNCTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++DIRECTION AND MOVEMENT FUNCTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++DIRECTION AND MOVEMENT FUNCTIONS++//////////////////////////////////////////////////
function look(command, secondCommand) {
	let grey = 'grey'
	if (secondCommand == 'nw') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookNorthwest(grey)
	} else if (secondCommand == 'n') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookNorth(grey)
	} else if (secondCommand == 'ne') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookNortheast(grey)
	} else if (secondCommand == 'e') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookEast(grey)
	} else if (secondCommand == 'se') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookSoutheast(grey)
	} else if (secondCommand == 's') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookSouth(grey)
	} else if (secondCommand == 'sw') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookSouthwest(grey)
	} else if (secondCommand == 'w') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookWest(grey)
	} else if (secondCommand == 'u' || secondCommand == 'up') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookWest(grey)
	} else if (secondCommand == 'd' || secondCommand == 'down') {
		quickMessage(`glancing to the ${secondCommand} you see...`)
		lookWest(grey)
	} else if (command === 'l' || command === 'look') {
		quickMessage(`>${command}`)
		setTimeout(() => {
			areaCompiler(currentArea)
			updateScroll()
		}, 100)
	}
}

function lookNorthwest(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.x == currentArea.x - 1 && areaToLook.y == currentArea.y + 1)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}
function lookNorth(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.y == currentArea.y + 1 && areaToLook.x == currentArea.x)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}
function lookNortheast(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.x == currentArea.x + 1 && areaToLook.y == currentArea.y + 1)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}
function lookEast(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.x == currentArea.x + 1 && areaToLook.y == currentArea.y)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}
function lookSoutheast(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.x == currentArea.x + 1 && areaToLook.y == currentArea.y - 1)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}
function lookSouth(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.y == currentArea.y - 1 && areaToLook.x == currentArea.x)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}
function lookSouthwest(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.x == currentArea.x - 1 && areaToLook.y == currentArea.y - 1)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}
function lookWest(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.x == currentArea.x - 1 && areaToLook.y == currentArea.y)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}
function lookUp(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.z == currentArea.z + 1 && areaToLook.x == currentArea.x && areaToLook.y == currentArea.y)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}
function lookDown(addClass) {
	const area = allAreas.find(areaToLook => areaToLook.z == currentArea.z - 1 && areaToLook.x == currentArea.x && areaToLook.y == currentArea.y)
	if (area == undefined) {
		quickMessage(`you cannot look in that direction`)
	} else {
		setTimeout(() => {
			areaCompiler(area, addClass)
			updateScroll()
		}, 100)
	}
}

const youMoveToThe = (input, area, classChange) => {
	//move direction block
	const moveDiv = document.createElement('div')
	const moveNode = document.createTextNode(input)
	moveDiv.classList.add(classChange)
	moveDiv.appendChild(moveNode)
	masterArea.appendChild(moveDiv)
	if (input === directionMoved) {
		setTimeout(() => {
			areaCompiler(area)
			roll()
			updateScroll()
		}, 100)
	}
}

//////////////////////////////////////////////////++HTML DISPLAY++//////////////////////////////////////////////////
//////////////////////////////////////////////////++HTML DISPLAY++//////////////////////////////////////////////////
//////////////////////////////////////////////////++HTML DISPLAY++//////////////////////////////////////////////////
//////////////////////////////////////////////////++HTML DISPLAY++//////////////////////////////////////////////////
//////////////////////////////////////////////////++HTML DISPLAY++//////////////////////////////////////////////////
function displayArea(area, addClass) {
	const areaNameDiv = document.createElement('div')
	const areaNameNode = document.createTextNode(area.descriptions.areaName)
	const areaDescDiv = document.createElement('div')
	const areaDescNode = document.createTextNode(area.descriptions.desc)
	const areaNestedExitsAndDirections = document.createElement('div')
	const areaExitsDiv = document.createElement('div')
	const areaExitsNode = document.createTextNode('Obvious Exits: ')
	const areaDirectionsDiv = document.createElement('div')
	const areaDirectionsNode = document.createTextNode(area.descriptions.zoneExits)
	areaNameDiv.classList.add(area.descriptions.areaNameClass)
	areaNameDiv.classList.add('area-name')
	areaDescDiv.classList.add('area-desc')
	areaNestedExitsAndDirections.classList.add('nested-exits-directions')
	areaExitsDiv.classList.add('area-exits')
	areaDirectionsDiv.classList.add('area-directions')
	areaNameDiv.appendChild(areaNameNode)
	areaDescDiv.appendChild(areaDescNode)
	areaExitsDiv.appendChild(areaExitsNode)
	areaDirectionsDiv.appendChild(areaDirectionsNode)
	areaNestedExitsAndDirections.appendChild(areaExitsDiv)
	areaNestedExitsAndDirections.appendChild(areaDirectionsDiv)
	masterArea.appendChild(areaNameDiv)
	masterArea.appendChild(areaDescDiv)
	masterArea.appendChild(areaNestedExitsAndDirections)
	if (addClass != undefined) {
		areaNameDiv.classList.add('grey')
		areaDescDiv.classList.add('grey')
		areaExitsDiv.classList.add('grey')
		areaDirectionsDiv.classList.add('grey')
	}
}

function displayNpc(area) {
	const findNpc = area.npc
	if (findNpc[0]) {
		const npcDiv = document.createElement('div')
		const npcName = findNpc.map(npc => npcToNode(npc))
		const npcNode = document.createTextNode('People: ')
		npcDiv.appendChild(npcNode)
		npcName.forEach(npcNode => {
			npcDiv.appendChild(npcNode)
		})
		npcDiv.classList.add('npc')
		masterArea.appendChild(npcDiv)
	}
}
function displayItems(area) {
	const findItem = pushItem.filter(({ roomId }) => roomId === area.id)
	const findItemName = pushItem.filter(({ roomId }) => roomId === area.id)
	if (findItem.length > 0) {
		const itemsDiv = document.createElement('div')
		const itemNames = findItemName.map(item => itemToNode(item))
		const itemsNode = document.createTextNode(`Items: `)
		itemsDiv.appendChild(itemsNode)
		itemNames.forEach(itemNode => {
			itemsDiv.appendChild(itemNode)
		})
		itemsDiv.classList.add('items')
		masterArea.appendChild(itemsDiv)
	}
}

function displayGold(area) {
	if (area.gold > 0) {
		const goldDiv = document.createElement('div')
		const goldNumberSpan = document.createElement('span')
		const goldNode = document.createTextNode(`Gold: `)
		const goldNumberNode = document.createTextNode(`${area.gold}`)
		goldNumberSpan.classList.add('yellow')
		goldDiv.appendChild(goldNode)
		goldNumberSpan.appendChild(goldNumberNode)
		goldDiv.appendChild(goldNumberSpan)
		masterArea.appendChild(goldDiv)
	}
}

function displayMonsters(area) {
	const monsterMapMe = pushMonster.filter(({ roomId }) => roomId === area.id)
	if (monsterMapMe.length > 0) {
		const monsterDiv = document.createElement('div')
		const monsterNames = monsterMapMe.map(monster => monsterToNode(monster))
		const monstersNode = document.createTextNode('Monsters: ')
		monsterDiv.appendChild(monstersNode)
		monsterNames.forEach(monsterNode => {
			monsterDiv.appendChild(monsterNode)
		})
		monsterDiv.classList.add('monsters')
		masterArea.appendChild(monsterDiv)
	}
}

function displayPlaceholder() {
	const placeholder = document.createElement('p')
	masterArea.appendChild(placeholder)
	masterArea.appendChild(placeholder)
}
//compiles functions to display the area, items, and monsters if they exist
function areaCompiler(area, addClass) {
	displayArea(area, addClass)
	displayNpc(area, addClass)
	displayItems(area, addClass)
	displayGold(area, addClass)
	displayMonsters(area, addClass)
	displayPlaceholder()
}
function itemToNode(item) {
	let spanNode = document.createElement('span')
	spanNode.classList.add('item')
	let newTextNode = document.createTextNode(`${item.name} `)
	spanNode.appendChild(newTextNode)
	return spanNode
}
function npcToNode(npc) {
	let spanNode = document.createElement('span')
	spanNode.classList.add('npc')
	let newTextNode = document.createTextNode(`${npc.displayName} `)
	spanNode.appendChild(newTextNode)
	return spanNode
}
function npcItemsToNode(item) {
	let spanNode = document.createElement('span')
	let breakNode = document.createElement('br')
	let newTextNode = document.createTextNode(`${item.name} `)
	spanNode.appendChild(newTextNode)
	spanNode.appendChild(breakNode)
	return spanNode
}
function npcSkillsToNode(skill) {
	let spanNode = document.createElement('span')
	let breakNode = document.createElement('br')
	let newTextNode = document.createTextNode(`${skill} `)
	spanNode.appendChild(newTextNode)
	spanNode.appendChild(breakNode)
	return spanNode
}
function monsterToNode(monster) {
	let monsterSpanNode = document.createElement('span')
	monsterSpanNode.classList.add('monster-name')
	let newTextNode = document.createTextNode(`${monster.name} `)
	monsterSpanNode.appendChild(newTextNode)
	return monsterSpanNode
}

function stats() {
	quickMessage('STATS', 'yellow')
	quickMessage(`You are currently a level -player.guildLevel- -insert guild rank- of the -insert guild name- guild`)
	quickMessage(`You are currently world level ${player.level}`)
	quickMessage(`You are x percent of the way to level x`)
	quickMessage(`You have gained a total of ${player.experience} experience points in your adventures`)
	quickMessage(`You have x skill points to spend`)
	quickMessage(`You have x attribute points to spend`)
	quickMessage(`Currently wielding ${player.rightHand == empty ? 'nothing' : 'a ' + player.rightHand} in your right hand and ${player.leftHand == empty ? 'nothing' : 'a ' + player.leftHand} in your left hand`)
	quickMessage(`STR: ${player.str}`)
	quickMessage(`DEX: ${player.dex}`)
	quickMessage(`AGI: ${player.agi}`)
	quickMessage(`INT: ${player.int}`)
	quickMessage(`WIS: ${player.wis}`)
	quickMessage(`CON: ${player.con}`)
	quickMessage(`Max HP: ${player.maxHealth}`)
	quickMessage(`Max MP: ${player.maxMana}`)
}
function skills() {
	quickMessage(`Onehanded weapon skill`)
	quickMessage('\xa0' + `- Level: ${player.oneHanded.level}`)
	quickMessage('\xa0' + `- Attack power: ${player.oneHanded.attackPower}`)
	quickMessage('\xa0' + `- Attack speed: ${player.oneHanded.speed}`)
	quickMessage(`Twohanded weapon skill`)
	quickMessage('\xa0' + `- Level: ${player.twoHanded.level}`)
	quickMessage('\xa0' + `- Attack power: ${player.twoHanded.attackPower}`)
	quickMessage('\xa0' + `- Attack speed: ${player.twoHanded.speed}`)
	quickMessage(`Unarmed combat skill`)
	quickMessage('\xa0' + `- Level: ${player.unarmed.level}`)
	quickMessage('\xa0' + `- Attack power: ${player.unarmed.attackPower}`)
	quickMessage('\xa0' + `- Attack speed: ${player.unarmed.speed}`)
}
function exp() {
	const levelDiv = document.createElement('div')
	const levelNode = document.createTextNode(`Level: ${player.level}`)
	levelDiv.appendChild(levelNode)

	const expDiv = document.createElement('div')
	const expNode = document.createTextNode(`Your total experience gained: ${player.experience}`)
	expDiv.appendChild(expNode)

	const expTilLevelDiv = document.createElement('div')
	const expTilLevelNode = document.createTextNode(`You are ${experienceNeededToLevel()}% of the way to level ${player.level + 1}`)
	expTilLevelDiv.appendChild(expTilLevelNode)

	const buildPointsDiv = document.createElement('div')
	const buildPointsNode = document.createTextNode(`You have ${player.buildPoints} build points to spend`)
	buildPointsDiv.appendChild(buildPointsNode)

	masterArea.appendChild(levelDiv)
	masterArea.appendChild(expDiv)
	masterArea.appendChild(expTilLevelDiv)
	masterArea.appendChild(buildPointsDiv)
}

function experienceNeededToLevel() {
	return Math.floor(((100 * player.experience) / player.experienceNeededToLevel) * 100) / 100
}

function updateInventory() {
	const pushItemCheck = pushItem.filter(items => items.roomId == 'backpack')
	player.backpack = pushItemCheck.map(items => items.name)
	player.backpack.sort()
}
//////////////////////////////////////////////////++ACTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++ACTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++ACTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++ACTIONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++ACTIONS++//////////////////////////////////////////////////

function dialogueSpeedFunc(speed) {
	dialogueSpeed = speed
}

function read(objectThatIsRead) {
	//for reading books, pages, signs, scrolls, etc
	console.log(objectThatIsRead)
	if (currentArea.descriptions.sign && objectThatIsRead == 'sign') {
		quickMessage(currentArea.descriptions.sign)
	} else if (!currentArea.descriptions.sign && objectThatIsRead == 'sign') {
		quickMessage(`You do not see a ${objectThatIsRead} to read - first`)
	} else if (objectThatIsRead == undefined) {
		quickMessage(`You must specify what you want to read`)
	} else if (objectThatIsRead != 'sign') {
		quickMessage(`You do not see a ${objectThatIsRead} to read`)
	}
	updateScroll()
}
function recall(playerX, playerY) {
	//parameters are the x, y values of the targeted room to recall to
	const recallRoom = allAreas.find(area => area.x == playerX && area.y == playerY)
	if (recallRoom != undefined) {
		currentArea.isPlayerHere = false
		currentArea = recallRoom
	} else {
		quickMessage(`Room not found`)
	}
	console.log(recallRoom, ' recall room')
	player.x = recallRoom.x
	player.y = recallRoom.y
	player.z = recallRoom.z
	newLocation()
	areaCompiler(recallRoom)
	updateScroll()
}

function clean() {
	for (let i = 0; i < pushItem.length; i++) {
		if (currentArea.id === pushItem[i].roomId) {
			pushItem.splice(i, 1)
			i--
		}
	}
	quickMessage('you clean the room')
}

function pickupItem(secondCommand, thirdCommand) {
	let allItems = pushItemAllItemsInRoom()
	let itemPickedUp = pushItemByKeyword(secondCommand)
	const backpackObjects = pushItem.filter(items => items.roomId == 'backpack')
	if (secondCommand == 'all') {
		if (currentArea.gold <= 0 && allItems[0] == undefined) {
			quickMessage('there is nothing in the room for you to pick up', 'quick-message')
		} else if (currentArea.gold > 0 && allItems[0] !== undefined) {
			quickMessage(`you pick up all the items in the room and ${currentArea.gold} gold piece(s)`, 'quick-message')
			allItems.forEach(item => (item.roomId = 'backpack'))
			player.backpack = backpackObjects.map(items => items.name)
			player.gold = player.gold + currentArea.gold
			currentArea.gold = 0
		} else if (currentArea.gold > 0 && allItems[0] == undefined) {
			quickMessage(`you pick up ${currentArea.gold} gold piece(s) - no items are in the room to pick up`, 'quick-message')
			player.gold = player.gold + currentArea.gold
			currentArea.gold = 0
		} else if (currentArea.gold <= 0 && allItems[0] !== undefined) {
			quickMessage(`you pick up all items in the room and ${currentArea.gold} gold piece(s)`, 'quick-message')
			allItems.forEach(item => (item.roomId = 'backpack'))
			player.backpack = backpackObjects.map(items => items.name)
		}
	} else if (secondCommand !== 'all') {
		if (itemPickedUp) {
			quickMessage('you pick up the ' + itemPickedUp.name)
			itemPickedUp.roomId = 'backpack'
			player.backpack = backpackObjects.map(items => items.name)
		} else if (itemPickedUp == undefined) {
			quickMessage('there is no ' + secondCommand + ' to pick up')
		}
		if (currentArea.gold > 0 && secondCommand == 'gold') {
			quickMessage(`you pick up ${currentArea.gold} gold piece(s)`)
			player.gold = player.gold + currentArea.gold
			currentArea.gold = 0
		}
	}
	updateInventory()
}

function dropItem(secondCommand) {
	let itemDropped = pushItem.find(({ keywords, roomId }) => keywords.some(keyword => secondCommand === keyword && roomId === 'backpack'))
	let itemDroppedFromRightHand = pushItem.find(({ keywords, roomId }) => keywords.some(keyword => secondCommand == keyword && roomId == 'right hand'))
	let itemDroppedFromLeftHand = pushItem.find(({ keywords, roomId }) => keywords.some(keyword => secondCommand == keyword && roomId == 'left hand'))
	if (itemDropped != undefined) {
		quickMessage('you drop a ' + itemDropped.name)
		itemDropped.roomId = currentArea.id
		updateInventory()
	} else if (itemDroppedFromLeftHand != undefined) {
		quickMessage('you drop a ' + itemDroppedFromLeftHand.name)
		itemDroppedFromLeftHand.roomId = currentArea.id
		player.leftHand = empty
	} else if (itemDroppedFromRightHand != undefined) {
		quickMessage('you drop a ' + itemDroppedFromRightHand.name)
		itemDroppedFromRightHand.roomId = currentArea.id
		player.rightHand = empty
	} else {
		quickMessage('You do not have a ' + secondCommand + ' to drop')
	}
}
//PACK components
function packTwoHanded(twoHandedItem) {
	if (player.rightHand != empty || player.leftHand != empty) {
		console.log('packing two handed weapon function ran')
		twoHandedItem.roomId = backpack
		player.rightHand = empty
		player.leftHand = empty
		weaponOrShieldRemovePlayerAttribute(twoHandedItem)
		quickMessage(`you pack your ${twoHandedItem.name}`)
	}
}
function packRight(rightItem) {
	if (player.rightHand != empty) {
		rightItem.roomId = backpack
		player.rightHand = empty
		weaponOrShieldRemovePlayerAttribute(rightItem)
		quickMessage(`you pack your ${rightItem.name}`)
	} else {
		quickMessage(`you don't have anything in your right hand to pack`)
	}
}
function packLeft(leftItem) {
	if (player.leftHand != empty) {
		leftItem.roomId = backpack
		player.leftHand = empty
		weaponOrShieldRemovePlayerAttribute(leftItem)
		quickMessage(`you pack your ${leftItem.name}`)
	} else {
		quickMessage(`you don't have anything in your left hand to pack`)
	}
}
//PACK function
function pack(secondCommand) {
	const selectedItemRight = pushItem.find(allItems => allItems.roomId == slot1)
	const selectedItemLeft = pushItem.find(allItems => allItems.roomId == slot2)
	//for packing away two handed item - only coded to have a roomId of 'right hand' / slot1
	const selectedItemTwoHandedBoolean = function () {
		if (selectedItemRight == undefined) {
			return false
		} else if (selectedItemRight.type.twoHanded) {
			return true
		} else {
			return false
		}
	}
	if (secondCommand == 'right') {
		if (selectedItemTwoHandedBoolean() == true) {
			console.log('packTwoHanded ran')
			packTwoHanded(selectedItemRight)
			weaponOrShieldAddPlayerAttribute(player.unarmed1)
			weaponOrShieldAddPlayerAttribute(player.unarmed2)
		} else {
			console.log('packRight ran')
			packRight(selectedItemRight)
			weaponOrShieldAddPlayerAttribute(player.unarmed1)
		}
	}
	if (secondCommand == 'left') {
		if (selectedItemTwoHandedBoolean() == true) {
			console.log('packTwoHanded ran')
			//two handers are coded in right hand only
			packTwoHanded(selectedItemRight)
			weaponOrShieldAddPlayerAttribute(player.unarmed1)
			weaponOrShieldAddPlayerAttribute(player.unarmed2)
		} else {
			console.log('packLeft ran')
			packLeft(selectedItemLeft)
			weaponOrShieldAddPlayerAttribute(player.unarmed2)
		}
	}
	playerStatsUpdate()
	displayPlayerStats()
}

//UNPACK components
function unpackTwoHanded(twoHandedItem) {
	console.log('unpackTwoHanded invoked')
	if (twoHandedItem.type.twoHanded && player.rightHand == empty && player.leftHand == empty) {
		twoHandedItem.roomId = slot1
		player.rightHand = twoHandedItem.name
		player.leftHand = twoHandedItem.name
		weaponOrShieldAddPlayerAttribute(twoHandedItem)
		weaponOrShieldRemovePlayerAttribute(player.unarmed1)
		weaponOrShieldRemovePlayerAttribute(player.unarmed2)
		quickMessage(`you wield your ${twoHandedItem.name} using both hands`)
	} else if (player.rightHand != empty && player.leftHand != empty) {
		quickMessage(`both hands must be free in order to wield a two handed weapon`)
	} else {
		quickMessage(`you cannot dual wield two handed weapons`)
	}
}
function unpackOneHanded(oneHandedItem) {
	console.log('unpackOneHanded invoked')
	if (player.rightHand == empty) {
		oneHandedItem.roomId = slot1
		player.rightHand = oneHandedItem.name
		weaponOrShieldAddPlayerAttribute(oneHandedItem)
		weaponOrShieldRemovePlayerAttribute(player.unarmed1)
		quickMessage(`you wield your ${oneHandedItem.name} in your ${oneHandedItem.roomId}`)
	} else if (player.leftHand == empty && player.rightHand !== empty) {
		oneHandedItem.roomId = slot2
		player.leftHand = oneHandedItem.name
		weaponOrShieldAddPlayerAttribute(oneHandedItem)
		weaponOrShieldRemovePlayerAttribute(player.unarmed2)
		quickMessage(`you wield your ${oneHandedItem.name} in your ${oneHandedItem.roomId}`)
	} else if (player.rightHand != empty && player.leftHand != empty) {
		quickMessage(`you cannot unpack anything else with your hands full`)
	}
}
function unpackFail(selectedItem, secondCommand) {
	console.log('unpackFail invoked')
	if (secondCommand == undefined) {
		quickMessage(`you must specify something to unpack`)
	} else if (selectedItem == undefined) {
		quickMessage(`you do not have ${secondCommand} to unpack`)
	} else {
		console.log('unpackFail invoked, but nothing executed')
	}
}
//UNPACK function
function unpack(secondCommand, thirdCommand) {
	const backpackFilter = pushItem.filter(allItems => allItems.roomId === 'backpack')
	const allSpecifiedItems = backpackFilter.filter(({ keywords }) => keywords.some(keyword => keyword == secondCommand))
	const selectedItem = backpackFilter.find(({ keywords }) => keywords.some(keyword => secondCommand === keyword))
	if (thirdCommand != undefined && isNaN(thirdCommand == false)) {
		if (allSpecifiedItems[thirdCommand - 1] != undefined) {
			if (allSpecifiedItems[thirdCommand - 1].type.twoHanded) {
				unpackTwoHanded(allSpecifiedItems[thirdCommand - 1])
			} else {
				unpackOneHanded(allSpecifiedItems[thirdCommand - 1])
			}
		}
	} else if (selectedItem != undefined) {
		if (selectedItem.type.twoHanded) {
			unpackTwoHanded(selectedItem)
		} else {
			unpackOneHanded(selectedItem)
		}
	} else {
		unpackFail(selectedItem, secondCommand)
	}
	playerStatsUpdate()
}
function swap() {
	//gets slot1 weapon
	let rightWeapon = getWeapon1()
	//gets slot2 weapon
	let leftWeapon = getWeapon2()
	//let rightWeapon = pushItemByRoomId(slot1);
	//let leftWeapon = pushItemByRoomId(slot2);
	let holdR = rightWeapon
	let holdL = leftWeapon
	if (rightWeapon.type.twoHanded) {
		quickMessage(`you cannot swap a two handed weapon`)
	} else if (rightWeapon.type.weapon == unarmed && leftWeapon.type.weapon == unarmed) {
		quickMessage('you have nothing in your hands to swap!')
	} else if (rightWeapon.roomId == slot1 && leftWeapon.roomId == slot2) {
		quickMessage(`you swap the items that in your hands`)
		rightWeapon.roomId = slot2
		leftWeapon.roomId = slot1
		player.rightHand = holdL.name
		player.leftHand = holdR.name
	} else if (rightWeapon.id == 'hand1') {
		quickMessage(`you move your ${player.leftHand} to your right hand`)
		player.rightHand = player.leftHand
		leftWeapon.roomId = slot1
		player.leftHand = empty
	} else if (leftWeapon.id == 'hand2') {
		quickMessage(`you move your ${player.rightHand} to your left hand`)
		player.leftHand = player.rightHand
		rightWeapon.roomId = slot2
		player.rightHand = empty
	} else {
		quickMessage(`none of these`)
	}
	playerStatsUpdate()
}

//-------------------
const invalidCommand = input => {
	const invalidCommandDiv = document.createElement('div')
	const invalidCommandNode = document.createTextNode(input + ' is not a proper command')
	invalidCommandDiv.classList.add('output-text')
	invalidCommandDiv.appendChild(invalidCommandNode)
	masterArea.appendChild(invalidCommandDiv)
}

//Inventory
const showInventory = () => {
	updateInventory()
	const equipmentAndBackpackContainer = document.createElement('div')
	const equipmentContainer = document.createElement('div')
	const equipmentHeading = document.createElement('h2')
	const equipmentHeadingTextNode = document.createTextNode('Equipment')
	const equipmentRowsContainer = document.createElement('div')
	const equipmentRow1 = document.createElement('div') //LH RH and rings
	const equipmentRow2 = document.createElement('div') // upper body
	const equipmentRow3 = document.createElement('div') // lower body
	const equipmentRow4 = document.createElement('div') // gold
	const equipmentRow5 = document.createElement('div') // just here in case I need to add another row
	const equipmentSlotAndItemContainer1 = document.createElement('div')
	const equipmentSlotAndItemContainer2 = document.createElement('div')
	const equipmentSlotAndItemContainer3 = document.createElement('div')
	const equipmentSlotAndItemContainer4 = document.createElement('div')
	const equipmentSlotAndItemContainer5 = document.createElement('div')
	const equipmentSlotAndItemContainer6 = document.createElement('div')
	const equipmentSlotAndItemContainer7 = document.createElement('div')
	const equipmentSlotAndItemContainer8 = document.createElement('div')
	const equipmentSlotAndItemContainer9 = document.createElement('div')
	const equipmentSlotAndItemContainer10 = document.createElement('div')
	const equipmentSlotAndItemContainer11 = document.createElement('div')
	const equipmentSlotAndItemContainer12 = document.createElement('div')
	const equipmentSlotAndItemContainer13 = document.createElement('div')
	const equipmentSlotAndItemContainer14 = document.createElement('div')
	const equipmentSlotAndItemContainer15 = document.createElement('div') // just here in case I need to add another row
	const LHSlot = document.createTextNode('Left Hand: ')
	const LHItem = document.createTextNode(`${player.leftHand}`)
	const RHSlot = document.createTextNode('Right Hand: ')
	const RHItem = document.createTextNode(`${player.rightHand}`)
	const LHRingSlot = document.createTextNode(`Left Ring: `)
	const LHRingItem = document.createTextNode(`${player.leftHandRing}`)
	const RHRingSlot = document.createTextNode(`Right Ring: `)
	const RHRingItem = document.createTextNode(`${player.rightHandRing}`)
	const headSlot = document.createTextNode(`Head: `)
	const headItem = document.createTextNode(`${player.head}`)
	const necklaceSlot = document.createTextNode(`Necklace: `)
	const necklaceItem = document.createTextNode(`${player.necklace}`)
	const shouldersSlot = document.createTextNode(`Shoulders: `)
	const shouldersItem = document.createTextNode(`${player.shoulders}`)
	const chestSlot = document.createTextNode(`Chest: `)
	const chestItem = document.createTextNode(`${player.chest}`)
	const backSlot = document.createTextNode(`Back: `)
	const backItem = document.createTextNode(`${player.back}`)
	const armsSlot = document.createTextNode(`Arms: `)
	const armsItem = document.createTextNode(`${player.arms}`)
	const handsSlot = document.createTextNode(`Hands: `)
	const handsItem = document.createTextNode(`${player.hands}`)
	const waistSlot = document.createTextNode(`Waist: `)
	const waistItem = document.createTextNode(`${player.waist}`)
	const legsSlot = document.createTextNode(`Legs: `)
	const legsItem = document.createTextNode(`${player.legs}`)
	const feetSlot = document.createTextNode(`Feet: `)
	const feetItem = document.createTextNode(`${player.feet}`)

	/////////////////////////////////////////////////////////////////////////////////
	//EQ ROW 1
	equipmentSlotAndItemContainer1.appendChild(LHRingSlot)
	equipmentSlotAndItemContainer1.appendChild(LHRingItem)
	equipmentSlotAndItemContainer2.appendChild(LHSlot)
	equipmentSlotAndItemContainer2.appendChild(LHItem)
	equipmentSlotAndItemContainer3.appendChild(RHSlot)
	equipmentSlotAndItemContainer3.appendChild(RHItem)
	equipmentSlotAndItemContainer4.appendChild(RHRingSlot)
	equipmentSlotAndItemContainer4.appendChild(RHRingItem)
	equipmentRow1.appendChild(equipmentSlotAndItemContainer1)
	equipmentRow1.appendChild(equipmentSlotAndItemContainer2)
	equipmentRow1.appendChild(equipmentSlotAndItemContainer3)
	equipmentRow1.appendChild(equipmentSlotAndItemContainer4)
	//EQ ROW 2
	equipmentSlotAndItemContainer5.appendChild(headSlot)
	equipmentSlotAndItemContainer5.appendChild(headItem)
	equipmentSlotAndItemContainer6.appendChild(necklaceSlot)
	equipmentSlotAndItemContainer6.appendChild(necklaceItem)
	equipmentSlotAndItemContainer7.appendChild(shouldersSlot)
	equipmentSlotAndItemContainer7.appendChild(shouldersItem)
	equipmentRow2.appendChild(equipmentSlotAndItemContainer5)
	equipmentRow2.appendChild(equipmentSlotAndItemContainer6)
	equipmentRow2.appendChild(equipmentSlotAndItemContainer7)
	//EQ ROW 3
	equipmentSlotAndItemContainer8.appendChild(chestSlot)
	equipmentSlotAndItemContainer8.appendChild(chestItem)
	equipmentSlotAndItemContainer9.appendChild(backSlot)
	equipmentSlotAndItemContainer9.appendChild(backItem)
	equipmentSlotAndItemContainer10.appendChild(armsSlot)
	equipmentSlotAndItemContainer10.appendChild(armsItem)
	equipmentSlotAndItemContainer11.appendChild(handsSlot)
	equipmentSlotAndItemContainer11.appendChild(handsItem)
	equipmentRow3.appendChild(equipmentSlotAndItemContainer8)
	equipmentRow3.appendChild(equipmentSlotAndItemContainer9)
	equipmentRow3.appendChild(equipmentSlotAndItemContainer10)
	equipmentRow3.appendChild(equipmentSlotAndItemContainer11)
	//EQ ROW 4
	equipmentSlotAndItemContainer12.appendChild(waistSlot)
	equipmentSlotAndItemContainer12.appendChild(waistItem)
	equipmentSlotAndItemContainer13.appendChild(legsSlot)
	equipmentSlotAndItemContainer13.appendChild(legsItem)
	equipmentSlotAndItemContainer14.appendChild(feetSlot)
	equipmentSlotAndItemContainer14.appendChild(feetItem)
	equipmentRow4.appendChild(equipmentSlotAndItemContainer12)
	equipmentRow4.appendChild(equipmentSlotAndItemContainer13)
	equipmentRow4.appendChild(equipmentSlotAndItemContainer14)
	//EQ row container (orange box)
	equipmentRowsContainer.appendChild(equipmentRow1)
	equipmentRowsContainer.appendChild(equipmentRow2)
	equipmentRowsContainer.appendChild(equipmentRow3)
	equipmentRowsContainer.appendChild(equipmentRow4)
	equipmentHeading.appendChild(equipmentHeadingTextNode)
	equipmentContainer.appendChild(equipmentHeading)
	equipmentContainer.appendChild(equipmentRowsContainer)
	equipmentAndBackpackContainer.appendChild(equipmentContainer)
	///////////////////////////////////////CLASSES/////////////////////////////////////////
	equipmentAndBackpackContainer.classList.add('equipment-and-backpack')
	equipmentContainer.classList.add('equipment-container')
	equipmentHeading.classList.add('equipment-heading')
	equipmentRowsContainer.classList.add('equipment-row-container')
	equipmentRow1.classList.add('equipment-row-1')
	equipmentRow2.classList.add('equipment-row-2')
	equipmentRow3.classList.add('equipment-row-3')
	equipmentRow4.classList.add('equipment-row-4')

	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	const backpackContainer = document.createElement('div')
	const backpackHeading = document.createElement('h2')
	const backpackHeadingTextNode = document.createTextNode('Backpack')
	const backpackColumnsContainer = document.createElement('div')
	const backpackColumn1 = document.createElement('div')
	const backpackColumn2 = document.createElement('div')
	const backpackColumn3 = document.createElement('div')

	const backpack1Through20 = player.backpack.filter((item, index) => index <= 19)
	const backpack21Through40 = player.backpack.filter((item, index) => index >= 20 && index <= 39)
	const backpack41Through60 = player.backpack.filter((item, index) => index >= 40 && index <= 59)

	if (backpack1Through20[0]) {
		backpack1Through20.forEach((item, i, arr) => {
			let slotNumber = i + 1
			const backpackSlotAndItemContainer1 = document.createElement('div')
			const slot1 = document.createTextNode(`${slotNumber}. `)
			const item1 = document.createTextNode(`${item}`)

			backpackSlotAndItemContainer1.appendChild(slot1)
			backpackSlotAndItemContainer1.appendChild(item1)
			backpackColumn1.appendChild(backpackSlotAndItemContainer1) //
			backpackSlotAndItemContainer1.classList.add('backpack-slot-and-item-container')
		})
	}
	if (backpack21Through40[0]) {
		backpack21Through40.forEach((item, i, arr) => {
			let slotNumber = i + 21
			const backpackSlotAndItemContainer1 = document.createElement('div')
			const slot1 = document.createTextNode(`${slotNumber}. `)
			const item1 = document.createTextNode(`${item}`)

			backpackSlotAndItemContainer1.appendChild(slot1)
			backpackSlotAndItemContainer1.appendChild(item1)
			backpackColumn2.appendChild(backpackSlotAndItemContainer1) //
			backpackSlotAndItemContainer1.classList.add('backpack-slot-and-item-container')
		})
	}
	backpackContainer.appendChild(backpackHeading)
	backpackContainer.appendChild(backpackColumnsContainer)
	backpackColumnsContainer.appendChild(backpackColumn1)
	backpackColumnsContainer.appendChild(backpackColumn2)
	backpackColumn1.classList.add('backpack-column-1')
	backpackColumn2.classList.add('backpack-column-2')

	backpackHeading.appendChild(backpackHeadingTextNode)
	equipmentAndBackpackContainer.appendChild(backpackContainer)
	masterArea.appendChild(equipmentAndBackpackContainer)

	// const backpackColumn2 = document.createElement('div')
	// const backpackColumn3 = document.createElement('div')

	// const backpackSlotAndItemContainer2 = document.createElement('div')
	// const backpackSlotAndItemContainer3 = document.createElement('div')
	// const backpackSlotAndItemContainer4 = document.createElement('div')
	// const backpackSlotAndItemContainer5 = document.createElement('div')
	// const backpackSlotAndItemContainer6 = document.createElement('div')
	// const backpackSlotAndItemContainer7 = document.createElement('div')
	// const backpackSlotAndItemContainer8 = document.createElement('div')
	// const backpackSlotAndItemContainer9 = document.createElement('div')
	// const backpackSlotAndItemContainer10 = document.createElement('div')
	// const backpackSlotAndItemContainer11 = document.createElement('div')
	// const backpackSlotAndItemContainer12 = document.createElement('div')
	// const backpackSlotAndItemContainer13 = document.createElement('div')
	// const backpackSlotAndItemContainer14 = document.createElement('div')
	// const backpackSlotAndItemContainer15 = document.createElement('div')
	// const backpackSlotAndItemContainer16 = document.createElement('div')
	// const backpackSlotAndItemContainer17 = document.createElement('div')
	// const backpackSlotAndItemContainer18 = document.createElement('div')
	// const backpackSlotAndItemContainer19 = document.createElement('div')
	// const backpackSlotAndItemContainer20 = document.createElement('div')
	// const backpackSlotAndItemContainer21 = document.createElement('div')
	// const backpackSlotAndItemContainer22 = document.createElement('div')
	// const backpackSlotAndItemContainer23 = document.createElement('div')
	// const backpackSlotAndItemContainer24 = document.createElement('div')
	// const backpackSlotAndItemContainer25 = document.createElement('div')
	// const backpackSlotAndItemContainer26 = document.createElement('div')
	// const backpackSlotAndItemContainer27 = document.createElement('div')
	// const backpackSlotAndItemContainer28 = document.createElement('div')
	// const backpackSlotAndItemContainer29 = document.createElement('div')
	// const backpackSlotAndItemContainer30 = document.createElement('div')

	// const slot2 = document.createTextNode(`2. `)
	// const item2 = document.createTextNode(`${player.backpack[1]}`)
	// const slot3 = document.createTextNode(`3. `)
	// const item3 = document.createTextNode(`${player.backpack[2]}`)
	// const slot4 = document.createTextNode(`4. `)
	// const item4 = document.createTextNode(`${player.backpack[3]}`)
	// const slot5 = document.createTextNode(`5. `)
	// const item5 = document.createTextNode(`${player.backpack[4]}`)
	// const slot6 = document.createTextNode(`6. `)
	// const item6 = document.createTextNode(`${player.backpack[5]}`)
	// const slot7 = document.createTextNode(`7. `)
	// const item7 = document.createTextNode(`${player.backpack[6]}`)
	// const slot8 = document.createTextNode(`8. `)
	// const item8 = document.createTextNode(`${player.backpack[7]}`)
	// const slot9 = document.createTextNode(`9. `)
	// const item9 = document.createTextNode(`${player.backpack[8]}`)
	// const slot10 = document.createTextNode(`10. `)
	// const item10 = document.createTextNode(`${player.backpack[9]}`)
	// const slot11 = document.createTextNode(`11. `)
	// const item11 = document.createTextNode(`${player.backpack[10]}`)
	// const slot12 = document.createTextNode(`12. `)
	// const item12 = document.createTextNode(`${player.backpack[11]}`)
	// const slot13 = document.createTextNode(`13. `)
	// const item13 = document.createTextNode(`${player.backpack[12]}`)
	// const slot14 = document.createTextNode(`14. `)
	// const item14 = document.createTextNode(`${player.backpack[13]}`)
	// const slot15 = document.createTextNode(`15. `)
	// const item15 = document.createTextNode(`${player.backpack[14]}`)
	// const slot16 = document.createTextNode(`16. `)
	// const item16 = document.createTextNode(`${player.backpack[15]}`)
	// const slot17 = document.createTextNode(`17. `)
	// const item17 = document.createTextNode(`${player.backpack[16]}`)
	// const slot18 = document.createTextNode(`18. `)
	// const item18 = document.createTextNode(`${player.backpack[17]}`)
	// const slot19 = document.createTextNode(`19. `)
	// const item19 = document.createTextNode(`${player.backpack[18]}`)
	// const slot20 = document.createTextNode(`20. `)
	// const item20 = document.createTextNode(`${player.backpack[19]}`)
	// const slot21 = document.createTextNode(`21. `)
	// const item21 = document.createTextNode(`${player.backpack[20]}`)
	// const slot22 = document.createTextNode(`22. `)
	// const item22 = document.createTextNode(`${player.backpack[21]}`)
	// const slot23 = document.createTextNode(`23. `)
	// const item23 = document.createTextNode(`${player.backpack[22]}`)
	// const slot24 = document.createTextNode(`24. `)
	// const item24 = document.createTextNode(`${player.backpack[23]}`)
	// const slot25 = document.createTextNode(`25. `)
	// const item25 = document.createTextNode(`${player.backpack[24]}`)
	// const slot26 = document.createTextNode(`26. `)
	// const item26 = document.createTextNode(`${player.backpack[25]}`)
	// const slot27 = document.createTextNode(`27. `)
	// const item27 = document.createTextNode(`${player.backpack[26]}`)
	// const slot28 = document.createTextNode(`28. `)
	// const item28 = document.createTextNode(`${player.backpack[27]}`)
	// const slot29 = document.createTextNode(`29. `)
	// const item29 = document.createTextNode(`${player.backpack[28]}`)
	// const slot30 = document.createTextNode(`30. `)
	// const item30 = document.createTextNode(`${player.backpack[29]}`)
	// const goldSlot = document.createTextNode(`Gold: `)
	// const goldAmount = document.createTextNode(`${player.gold}`)

	// backpackSlotAndItemContainer2.appendChild(slot2)
	// backpackSlotAndItemContainer2.appendChild(item2)
	// backpackSlotAndItemContainer3.appendChild(slot3)
	// backpackSlotAndItemContainer3.appendChild(item3)
	// backpackSlotAndItemContainer4.appendChild(slot4)
	// backpackSlotAndItemContainer4.appendChild(item4)
	// backpackSlotAndItemContainer5.appendChild(slot5)
	// backpackSlotAndItemContainer5.appendChild(item5)
	// backpackSlotAndItemContainer6.appendChild(slot6)
	// backpackSlotAndItemContainer6.appendChild(item6)
	// backpackSlotAndItemContainer7.appendChild(slot7)
	// backpackSlotAndItemContainer7.appendChild(item7)
	// backpackSlotAndItemContainer8.appendChild(slot8)
	// backpackSlotAndItemContainer8.appendChild(item8)
	// backpackSlotAndItemContainer9.appendChild(slot9)
	// backpackSlotAndItemContainer9.appendChild(item9)
	// backpackSlotAndItemContainer10.appendChild(slot10)
	// backpackSlotAndItemContainer10.appendChild(item10)
	// backpackSlotAndItemContainer11.appendChild(slot11)
	// backpackSlotAndItemContainer11.appendChild(item11)
	// backpackSlotAndItemContainer12.appendChild(slot12)
	// backpackSlotAndItemContainer12.appendChild(item12)
	// backpackSlotAndItemContainer13.appendChild(slot13)
	// backpackSlotAndItemContainer13.appendChild(item13)
	// backpackSlotAndItemContainer14.appendChild(slot14)
	// backpackSlotAndItemContainer14.appendChild(item14)
	// backpackSlotAndItemContainer15.appendChild(slot15)
	// backpackSlotAndItemContainer15.appendChild(item15)
	// backpackSlotAndItemContainer16.appendChild(slot16)
	// backpackSlotAndItemContainer16.appendChild(item16)
	// backpackSlotAndItemContainer17.appendChild(slot17)
	// backpackSlotAndItemContainer17.appendChild(item17)
	// backpackSlotAndItemContainer18.appendChild(slot18)
	// backpackSlotAndItemContainer18.appendChild(item18)
	// backpackSlotAndItemContainer19.appendChild(slot19)
	// backpackSlotAndItemContainer19.appendChild(item19)
	// backpackSlotAndItemContainer20.appendChild(slot20)
	// backpackSlotAndItemContainer20.appendChild(item20)
	// backpackSlotAndItemContainer21.appendChild(slot21)
	// backpackSlotAndItemContainer21.appendChild(item21)
	// backpackSlotAndItemContainer22.appendChild(slot22)
	// backpackSlotAndItemContainer22.appendChild(item22)
	// backpackSlotAndItemContainer23.appendChild(slot23)
	// backpackSlotAndItemContainer23.appendChild(item23)
	// backpackSlotAndItemContainer24.appendChild(slot24)
	// backpackSlotAndItemContainer24.appendChild(item24)
	// backpackSlotAndItemContainer25.appendChild(slot25)
	// backpackSlotAndItemContainer25.appendChild(item25)
	// backpackSlotAndItemContainer26.appendChild(slot26)
	// backpackSlotAndItemContainer26.appendChild(item26)
	// backpackSlotAndItemContainer27.appendChild(slot27)
	// backpackSlotAndItemContainer27.appendChild(item27)
	// backpackSlotAndItemContainer28.appendChild(slot28)
	// backpackSlotAndItemContainer28.appendChild(item28)
	// backpackSlotAndItemContainer29.appendChild(slot29)
	// backpackSlotAndItemContainer29.appendChild(item29)
	// backpackSlotAndItemContainer30.appendChild(slot30)
	// backpackSlotAndItemContainer30.appendChild(item30)

	// backpackColumn1.appendChild(backpackSlotAndItemContainer2)
	// backpackColumn1.appendChild(backpackSlotAndItemContainer3)
	// backpackColumn1.appendChild(backpackSlotAndItemContainer4)
	// backpackColumn1.appendChild(backpackSlotAndItemContainer5)
	// backpackColumn1.appendChild(backpackSlotAndItemContainer6)
	// backpackColumn1.appendChild(backpackSlotAndItemContainer7)
	// backpackColumn1.appendChild(backpackSlotAndItemContainer8)
	// backpackColumn1.appendChild(backpackSlotAndItemContainer9)
	// backpackColumn1.appendChild(backpackSlotAndItemContainer10)

	// backpackColumn2.appendChild(backpackSlotAndItemContainer11)
	// backpackColumn2.appendChild(backpackSlotAndItemContainer12)
	// backpackColumn2.appendChild(backpackSlotAndItemContainer13)
	// backpackColumn2.appendChild(backpackSlotAndItemContainer14)
	// backpackColumn2.appendChild(backpackSlotAndItemContainer15)
	// backpackColumn2.appendChild(backpackSlotAndItemContainer16)
	// backpackColumn2.appendChild(backpackSlotAndItemContainer17)
	// backpackColumn2.appendChild(backpackSlotAndItemContainer18)
	// backpackColumn2.appendChild(backpackSlotAndItemContainer19)
	// backpackColumn2.appendChild(backpackSlotAndItemContainer20)

	// backpackColumn3.appendChild(backpackSlotAndItemContainer21)
	// backpackColumn3.appendChild(backpackSlotAndItemContainer22)
	// backpackColumn3.appendChild(backpackSlotAndItemContainer23)
	// backpackColumn3.appendChild(backpackSlotAndItemContainer24)
	// backpackColumn3.appendChild(backpackSlotAndItemContainer25)
	// backpackColumn3.appendChild(backpackSlotAndItemContainer26)
	// backpackColumn3.appendChild(backpackSlotAndItemContainer27)
	// backpackColumn3.appendChild(backpackSlotAndItemContainer28)
	// backpackColumn3.appendChild(backpackSlotAndItemContainer29)
	// backpackColumn3.appendChild(backpackSlotAndItemContainer30)

	// backpackColumnsContainer.appendChild(backpackColumn2)
	// backpackColumnsContainer.appendChild(backpackColumn3)

	//CLASSES ADDED
	// backpackSlotAndItemContainer2.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer3.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer4.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer5.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer6.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer7.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer8.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer9.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer10.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer11.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer12.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer13.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer14.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer15.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer16.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer17.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer18.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer19.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer20.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer21.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer22.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer23.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer24.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer25.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer26.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer27.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer28.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer29.classList.add('backpack-slot-and-item-container')
	// backpackSlotAndItemContainer30.classList.add('backpack-slot-and-item-container')
	backpackContainer.classList.add('backpack-container')
	backpackHeading.classList.add('backpack-heading')
	backpackColumnsContainer.classList.add('backpack-columns-container')
	// backpackColumn2.classList.add('backpack-column-2')
	// backpackColumn3.classList.add('backpack-column-3')
}

//weaponSwing is only for displaying the swing messages in the game
function weaponSwing(monster, damage1, damage2) {
	let weapon1 = getWeapon1()
	let weapon2 = getWeapon2()
	if (damage2 == undefined && damage1 != undefined) {
		weapon1.swing(weapon1, monster, damage1, playerPenetrationName)
	} else if (damage1 == undefined && damage2 != undefined) {
		weapon2.swing(weapon2, monster, damage2, playerPenetrationName)
	}
}
function dualWeaponSwing(monster, playerWeapon, playerDamage) {
	playerWeapon.swing(playerWeapon, monster, playerDamage, playerPenetrationName)
}
let playerSwingTimed = function () {
	let playerWeapon1 = getWeapon1()
	let playerWeapon2 = getWeapon2()
	if (playerWeapon1 != undefined && playerWeapon1.type.weapon) {
		console.log('WHO HA')
	}
}

function attack(secondCommand) {
	console
	//checks to see if combat == true for the player and monster
	playerStatsUpdate()
	combatCheck()
	//returns the weapon object in slot1/slot2 or returns unarmed if there is no weapon
	let playerWeapon1 = getWeapon1()
	let playerWeapon2 = getWeapon2()
	let playerDamage1
	let playerDamage2
	let playerSwingTime = playerWeapon1 != undefined ? player[playerWeapon1.skillUsed].speed : undefined

	let playerSwingTimeDelay = playerSwingTime * 1000
	let monsterByFirst = getMonsterByFirst()
	let monsterByNumber = getMonsterByNumber(secondCommand)
	let monsterByName = getMonsterByName(secondCommand)
	let monstersName = monsterByFirst.name
	function monsterTarget(targetedMonster, damage1, damage2) {
		//targetedMonster.itemDrops.map(x => x.name)
		//console.log(targetedMonster.health, 'MONSTER HEALTH 1')
		targetedMonster.health = damage2 != undefined ? targetedMonster.health - (damage1 + damage2) : targetedMonster.health - damage1
		//console.log(targetedMonster.health, 'MONSTER HEALTH 2')
		player.stasis = true
		combatCount(playerSwingTime)
		setTimeout(() => {
			player.stasis = false
		}, playerSwingTimeDelay)
		if (targetedMonster.health <= 0) {
			player.experience = player.experience + targetedMonster.experience
			playerLevelFunc()
			clearInterval(targetedMonster.blobBehaviorInterval)
			const removeThisMonster = pushMonster.findIndex(x => x.id == targetedMonster.id)
			quickMessage(`you gain [${targetedMonster.experience}] experience points`)
			quickMessage(`${targetedMonster.name} has been slain! ${targetedMonster.name} has dropped...`)
			quickMessage(`${targetedMonster.gold} gold piece(s)`)
			quickMessage(`${targetedMonster.itemDrops[0].name}`) //edit to show entire loot table
			targetedMonster.itemDrops.forEach(item => item.name)
			pushMonster.splice(removeThisMonster, 1)
			combatCheck()
			targetedMonster.itemDrops.forEach(droppedItem => (droppedItem.roomId = currentArea.id))
			targetedMonster.itemDrops.forEach(addItem => pushItem.push(addItem)) //add to combatCheck?
			currentArea.gold = currentArea.gold + targetedMonster.gold
		}
	}
	function dualWieldOrSingleSwing(damage1, damage2) {
		if (damage1 != undefined && damage2 != undefined) {
			if (!secondCommand) {
				monsterTarget(monsterByFirst, damage1, damage2)
			} else if (isNaN(secondCommand) == false && monsterByNumber != undefined) {
				monsterTarget(monsterByNumber, damage1, damage2)
			} else if (typeof secondCommand.toString() == 'string' && monsterByName != undefined && secondCommand == monsterByName.name) {
				monsterTarget(monsterByName, damage1, damage2)
			} else {
				quickMessage(`you must specificy a valid target name`)
			}
		} else if (damage2 == undefined) {
			if (!secondCommand) {
				monsterTarget(monsterByFirst, damage1)
			} else if (isNaN(secondCommand) == false && monsterByNumber != undefined) {
				monsterTarget(monsterByNumber, damage1)
			} else if (typeof secondCommand.toString() == 'string' && monsterByName != undefined && secondCommand == monsterByName.name) {
				monsterTarget(monsterByName, damage1)
			} else {
				quickMessage(`you must specificy a valid target name`)
			}
		} else if (damage1 == undefined) {
			if (!secondCommand) {
				monsterTarget(monsterByFirst, damage2)
			} else if (isNaN(secondCommand) == false && monsterByNumber != undefined) {
				monsterTarget(monsterByNumber, damage2)
			} else if (typeof secondCommand.toString() == 'string' && monsterByName != undefined && secondCommand == monsterByName.name) {
				monsterTarget(monsterByName, damage2)
			} else {
				quickMessage(`you must specificy a valid target name`)
			}
		} else {
			quickMessage('you missed!')
			player.stasis = true
			combatCount(playerSwingTime)
			setTimeout(() => {
				player.stasis = false
			}, playerSwingTimeDelay)
		}
	}
	if (!playerWeapon1.type.weapon && !playerWeapon2.type.weapon) {
		quickMessage(`you cannot attack with those items!`)
	} else if (!playerWeapon1.type.weapon) {
		playerDamage2 = damageCalculator(playerWeapon2)
		console.log('LH weapon swing with no weapon in right. RH should not be swinging')
		weaponSwing(monstersName, undefined, playerDamage2) //weapon swing description
	} else if (!playerWeapon2.type.weapon) {
		playerDamage1 = damageCalculator(playerWeapon1)
		console.log('RH weapon swing with no weapon in left')
		weaponSwing(monstersName, playerDamage1) //weapon swing description
	} else if (playerWeapon1.type.weapon && playerWeapon2.type.weapon) {
		if (playerWeapon1.type.weapon != unarmed && playerWeapon2.type.weapon != unarmed) {
			playerDamage1 = damageCalculator(playerWeapon1)
			playerDamage2 = damageCalculator(playerWeapon2)
			dualWeaponSwing(monstersName, playerWeapon1, playerDamage1)
			setTimeout(() => {
				dualWeaponSwing(monstersName, playerWeapon2, playerDamage2)
				updateScroll()
			}, 100)
		} else if (playerWeapon1.type.weapon != unarmed && playerWeapon2.type.weapon == unarmed) {
			playerDamage1 = damageCalculator(playerWeapon1)
			weaponSwing(monstersName, playerDamage1) //weapon swing description
		} else if (playerWeapon2.type.weapon != unarmed && playerWeapon1.type.weapon == unarmed) {
			playerDamage2 = damageCalculator(playerWeapon2)
			weaponSwing(monstersName, undefined, playerDamage2) //weapon swing description
		} else if (playerWeapon1.type.weapon == unarmed && playerWeapon2.type.weapon == unarmed) {
			playerDamage1 = damageCalculator(playerWeapon1)
			playerDamage2 = damageCalculator(playerWeapon2)
			dualWeaponSwing(monstersName, playerWeapon1, playerDamage1)
			setTimeout(() => {
				dualWeaponSwing(monstersName, playerWeapon2, playerDamage2)
				updateScroll()
			}, 100)
		}
	}
	dualWieldOrSingleSwing(playerDamage1, playerDamage2)
}

function getAllMonstersInRoom() {
	return pushMonster.filter(allMonstersInRoom => allMonstersInRoom.roomId == currentArea.id)
}
function getMonsterByName(secondCommand) {
	return getAllMonstersInRoom().find(x => x.name == secondCommand)
}
function getMonsterByNumber(number) {
	const singleTargetMonster = getAllMonstersInRoom()
	return singleTargetMonster[number - 1]
}
function getMonsterByFirst() {
	const allMonstersInRoom = getAllMonstersInRoom()
	const firstMonster = allMonstersInRoom[0]
	return firstMonster
}

function getWeapon1() {
	let weapon1 = pushItem.find(item => item.roomId == slot1)
	if (weapon1 != undefined) {
		return weapon1
	} else {
		return player.unarmed1
	}
}

function getWeapon2() {
	let weapon2 = pushItem.find(item => item.roomId == slot2)
	if (weapon2 != undefined) {
		return weapon2
	} else {
		return player.unarmed2
	}
}
//might not need to ever use this function
function weaponAndArmorModsCombiner() {
	const allMods = []
	let allEquippedArmor = pushItem.filter(item => isNaN(item.roomId) && item.roomId != backpack)
	allEquippedArmor.forEach(({ mods }) => {
		if (mods != undefined) {
			allMods.push(mods)
		}
	})
	const mergeMods = allMods.reduce((modObj, mod) => {
		for (const [modName, modValue] of Object.entries(mod)) {
			if (!modObj[modName]) {
				modObj[modName] = 0
			}
			modObj[modName] += modValue
		}
		return modObj
	}, {})
	return mergeMods
}

function damageCalculator(playerWeapon) {
	let playerWeaponSkill = playerWeapon.skillUsed
	console.log(playerWeaponSkill, ' playerWeaponSkill')
	let penTypes = []
	let monsterPenTypes = []
	let penRoll = []
	let monsterPenRoll = []
	let slashingPen = player.slashingPen
	let piercingPen = player.piercingPen
	let bluntPen = player.bluntPen
	let attackPower = function () {
		if (playerWeapon.skillUsed == oneHanded) {
			console.log(player.oneHanded.attackPower, ' player oneHanded attackpower')
			return player.oneHanded.attackPower
		} else if (playerWeapon.skillUsed == twoHanded) {
			console.log(player.twoHanded.attackPower, ' player twoHanded attackpower')
			return player.twoHanded.attackPower
		} else if (playerWeapon.skillUsed == unarmed) {
			console.log(player.unarmed.attackPower, ' player unarmed attackpower')
			return player.unarmed.attackPower
		}
	}
	//need to change this targetedMonster to match the actual attack target in the attack function
	let targetedMonster = pushMonster.find(monster => monster.roomId === currentArea.id)
	function findPenetration() {
		if (player.slashingPen != 0 && targetedMonster.slashingArmor != 0) {
			penTypes.push(slashingPen)
			monsterPenTypes.push(targetedMonster.slashingArmor)
		}
		if (player.piercingPen != 0 && targetedMonster.piercingArmor != 0) {
			penTypes.push(piercingPen)
			monsterPenTypes.push(targetedMonster.piercingArmor)
		}
		if (player.bluntPen != 0 && targetedMonster.bluntArmor != 0) {
			penTypes.push(bluntPen)
			monsterPenTypes.push(targetedMonster.bluntArmor)
		}
	}
	findPenetration(playerWeapon)
	let arrayNumber = () => Math.floor(Math.random() * penTypes.length)
	let rolled = arrayNumber()
	penRoll = penTypes[rolled]
	console.log(penRoll, 'PENROLL')
	if (penRoll == slashingPen) {
		playerPenetrationName = 'slashing '
	} else if (penRoll == piercingPen) {
		playerPenetrationName = 'piercing '
	} else if (penRoll == bluntPen) {
		playerPenetrationName = 'blunt '
	} else {
		playerPenetrationName = 'unarmed ' //only for unarmed so that atIntoOnto will return 'into the '
	}
	monsterPenRoll = monsterPenTypes[rolled]
	let hitRoll = Math.floor(Math.random() * 100) + 1
	let playerHitChance = Math.ceil(100 - (targetedMonster.dodge * 100) / player[playerWeaponSkill].accuracy)
	console.log(playerHitChance, ' playerHitChance')
	console.log(penTypes[0], ' penTypes[0]')
	if (playerHitChance >= hitRoll && targetedMonster.armor != 0) {
		if (targetedMonster != undefined && playerWeapon != undefined) {
			let botDamage = (attackPower() * player[playerWeaponSkill].botMultiplier + playerWeapon.bottomDamage) * (10 / (10 + targetedMonster.armor))
			let topDamage = (attackPower() * player[playerWeaponSkill].topMultiplier + playerWeapon.topDamage) * (10 / (10 + targetedMonster.armor))
			return randomNumberRange(botDamage, topDamage)
		} else {
			console.log('unarmed hit')
			let botDamage = attackPower() * player[playerWeaponSkill].botMultiplier * (10 / (10 + targetedMonster.armor)) //unarmed damage
			let topDamage = attackPower() * player[playerWeaponSkill].topMultiplier * (10 / (10 + targetedMonster.armor)) //unarmed damage
			return randomNumberRange(botDamage, topDamage)
		}
	} else if (playerHitChance >= hitRoll && penTypes[0] != undefined) {
		if (targetedMonster != undefined && playerWeapon != undefined) {
			console.log(penRoll, ' <- penRoll')
			let armorReducedTo = monsterPenRoll - penRoll <= 0 ? 0 : monsterPenRoll - penRoll
			let botDamage = (attackPower() * player[playerWeaponSkill].botMultiplier + playerWeapon.bottomDamage) * (10 / (10 + armorReducedTo))
			let topDamage = (attackPower() * player[playerWeaponSkill].topMultiplier + playerWeapon.topDamage) * (10 / (10 + armorReducedTo)) //substituting real formula. This just subtracts playerWeapon penetration from coresponding monster armor
			return randomNumberRange(botDamage, topDamage)
		}
	} else if (playerHitChance < hitRoll) {
		return 0
	} else {
		console.log('UNDEFINED')
		return undefined
	}
}

function slashingCalculation(weaponSlashing, monsterSlashingArmor) {
	if (playerWeapon.slashingPen != 0 && targetedMonster.slashingArmor != 0) {
		slashing = true
	}
}
function piercingCalculation(monsterPiercingArmor) {
	if (playerWeapon.piercingPen != 0 && targetedMonster.piercingArmor != 0) {
		piercing = true
	}
}
function bluntCalculation(monsterBluntArmor) {
	if (playerWeapon.bluntPen != 0 && targetedMonster.bluntArmor != 0) {
		blunt = true
	}
}

function levelUp() {
	if (player.playerClass == warrior) {
		player.str++
		player.con++
		quickMessage(`your strength has increased to ${player.str}!`)
		quickMessage(`your constitution has increased to ${player.con}!`)
	}
}
let playerLevel
function playerLevelFunc() {
	// run this EVERY time any experienced is gained
	let playerExp = player.experience
	if (playerExp <= 69) {
		player.level = 1
		player.experienceNeededToLevel = 70
	} else if (playerExp > 69 && playerExp <= 152 && player.level <= 1) {
		player.level = 2
		player.experienceNeededToLevel = 153
		quickMessage(`you have reached level ${player.level}!`)
		levelUp()
	} else if (playerExp > 152 && playerExp <= 263 && player.level <= 2) {
		player.level = 3
		player.experienceNeededToLevel = 264
		quickMessage(`you have reached level ${player.level}!`)
		levelUp()
	} else if (playerExp > 263 && playerExp <= 403 && player.level <= 3) {
		player.level = 4
		player.experienceNeededToLevel = 404
		quickMessage(`you have reached level ${player.level}!`)
		levelUp()
	} else if (playerExp > 403 && playerExp <= 570 && player.level <= 4) {
		player.level = 5
		player.experienceNeededToLevel = 571
		quickMessage(`you have reached level ${player.level}!`)
		levelUp()
	} else if (playerExp > 570 && playerExp <= 765 && player.level <= 5) {
		player.level = 6
		player.experienceNeededToLevel = 766
		quickMessage(`you have reached level ${player.level}!`)
		levelUp()
	} else if (playerExp > 765 && playerExp <= 986 && player.level <= 6) {
		player.level = 7
		player.experienceNeededToLevel = 987
		quickMessage(`you have reached level ${player.level}!`)
		levelUp()
	} else if (playerExp > 986 && playerExp <= 1234 && player.level <= 7) {
		player.level = 8
		player.experienceNeededToLevel = 1235
		quickMessage(`you have reached level ${player.level}!`)
		levelUp()
	} else if (playerExp > 1234 && playerExp <= 1508 && player.level <= 8) {
		player.level = 9
		player.experienceNeededToLevel = 1509
		quickMessage(`you have reached level ${player.level}!`)
		levelUp()
	} else if (playerExp > 1508 && playerExp <= 1807 && player.level <= 9) {
		player.level = 10
		player.experienceNeededToLevel = 1808
		quickMessage(`you have reached level ${player.level}!`)
		levelUp()
	}
}

let player = {
	//stats
	level: 1,
	str: 10,
	dex: 10,
	agi: 10,
	int: 10,
	wis: 10,
	con: 10,
	health: 0,
	maxHealth: 0,
	mana: 0,
	maxMana: 0,
	unarmedAttackPower: 0,
	oneHandedAttackPower: 0,
	twoHandedAttackPower: 0,
	accuracy: 0,
	armor: 0,
	slashingPen: 0,
	piercingPen: 0,
	bluntPen: 0,
	slashingArmor: 0,
	piercingArmor: 0,
	bluntArmor: 0,
	dodge: 0,
	crit: 0,
	//character information
	playerClass: warrior,
	race: 'human',
	experience: 0,
	experienceNeededToLevel: 70,
	buildPoints: 0,
	//location and state information
	roomId: currentArea.id,
	id: 0,
	x: -7,
	y: 2,
	z: 0,
	special: '',
	name: 'Zalbane',
	mount: false,
	combat: false,
	stasis: false,
	//inventory and equipment
	gold: 1000,
	backpack: [],
	rightHand: empty,
	leftHand: empty,
	rightHandRing: empty,
	leftHandRing: empty,
	head: empty,
	necklace: empty,
	shoulders: empty,
	chest: empty,
	back: empty,
	arms: empty,
	hands: empty,
	waist: empty,
	legs: empty,
	feet: empty,
	unarmed: {
		id: 1,
		refName: 'unarmed',
		level: 1,
		attackPower: 0,
		botMultiplier: 0.1,
		topMultiplier: 0.2,
		speed: 1.1,
		accuracy: 4,
	},
	oneHanded: {
		id: 2,
		refName: 'oneHanded',
		level: 1,
		attackPower: 0,
		botMultiplier: 0.1,
		topMultiplier: 0.5,
		speed: 6.1,
		accuracy: 4,
	},
	twoHanded: {
		id: 3,
		refName: 'twoHanded',
		attackPower: 0,
		level: 1,
		botMultiplier: 0.3,
		topMultiplier: 0.8,
		speed: 8.1,
		accuracy: 4,
	},
	unarmed1: {
		//change object name to rightHand
		id: 'hand1',
		roomId: currentArea.id,
		name: 'right hand',
		keywords: ['right hand'],
		skillUsed: 'unarmed',
		level: 1,
		topDamage: 2,
		bottomDamage: 1,
		speed: 3,
		accuracy: 4,
		mods: {
			slashingPen: 0,
			piercingPen: 0,
			bluntPen: 0,
		},
		type: {
			weapon: unarmed,
			unarmed: true,
		},
		desc: () => {
			quickMessage('You have a fairly soft right hand', 'descriptions')
		},
		swing: function (weapon, monster, damage) {
			unarmedSwing(expertise(weapon), playerSwingType(), playerWeaponName(weapon), atIntoOnto(), enemyName(monster), damageNumber(damage), playerPenetrationNameFunc(playerPenetrationName), damage)
		},
	},
	unarmed2: {
		//change object name to leftHand
		id: 'hand2',
		roomId: currentArea.id,
		name: 'left hand',
		keywords: ['left hand'],
		skillUsed: 'unarmed2',
		level: 1,
		topDamage: 2,
		bottomDamage: 1,
		speed: 3,
		accuracy: 4,
		mods: {
			slashingPen: 0,
			piercingPen: 0,
			bluntPen: 0,
		},
		type: {
			weapon: unarmed,
			unarmed: true,
		},
		skillUsed: unarmed,
		desc: () => {
			quickMessage('You have a fairly soft right hand', 'descriptions')
		},
		swing: function (weapon, monster, damage) {
			unarmedSwing(expertise(weapon), playerSwingType(), playerWeaponName(weapon), atIntoOnto(), enemyName(monster), damageNumber(damage), playerPenetrationNameFunc(playerPenetrationName), damage)
		},
	},
}

//---------------------------------------------------

function increaseUnarmedBotMultiplier() {
	//Used only for permanent increase of player.unarmed.botMultiplier
	player.unarmed.botMultiplier = player.unarmed.level / 100 + 0.1
}
function increaseUnarmedTopMultiplier() {
	//Used only for permanent increase of player.unarmed.topMultiplier
	player.unarmed.topMultiplier = player.unarmed.level / 100 + 0.1
}
function getUnarmedAttackPower(modifiers) {
	if (modifiers) {
		let attackPowerTotal = [...modifiers].reduce((a, b) => a + b) + player.unarmedAttackPower
		return attackPowerTotal
	} else {
		return player.unarmedAttackPower
	}
}
function getUnarmedBotMultiplier(modifiers) {
	if (modifiers) {
		let unarmedBotDamage = [...modifiers].reduce((a, b) => a + b) + player.unarmedBotMultiplier
		return unarmedBotDamage
	} else {
		return player.unarmed.botMultiplier
	}
}
function getUnarmedTopMultiplier(modifiers) {
	if (modifiers) {
		let unarmedTopDamage = [...modifiers].reduce((a, b) => a + b) + player.unarmedTopMultiplier
		return unarmedTopDamage
	} else {
		return player.unarmed.topMultiplier
	}
}
//-------------------------------------------------

function increaseOneHandedBotMultiplier() {
	//used for skill up / permanent increase of this stat
	player.oneHanded.botMultiplier = player.oneHanded.level / 100 + 0.1
}
function increaseOneHandedTopMultiplier() {
	player.oneHanded.topMultiplier = player.oneHanded.level / 100 + 0.5
	//used for skill up / permanent increase of this stat
}
function getOneHandedAttackPower(modifiers) {
	if (modifiers) {
		let attackPowerTotal = [...modifiers].reduce((a, b) => a + b) + player.oneHandedAttackPower
		return attackPowerTotal
	} else {
		return player.oneHandedAttackPower
	}
}
function getOneHandedWeaponSpeed() {
	if (player.oneHanded.speed > 2) {
		player.oneHanded.speed = player.oneHanded.speed - player.oneHanded.level / 10
		console.log(player.oneHanded.speed + 'player onehanded speed')
	} else {
		player.oneHanded.speed = 2
	}
}
//__________________________________________________________________________________________________________________________________
//__________________________________________________________________________________________________________________________________

function updateStrength() {
	player.str = 10
}
function updateDexterity() {
	player.dex = 10
}
function updateAgility() {
	player.agi = 10
}
function updateIntellect() {
	player.int = 10
}
function updateWisdom() {
	player.wis = 10
}
function updateConstitution() {
	player.con = 10
}
function updateHealth() {
	player.maxHealth = player.con * 3
	player.health = player.con * 3
}
function updateMana() {
	player.maxMana = player.int * 3
	player.mana = player.int * 3
}
updateStrength()
updateDexterity()
updateAgility()
updateIntellect()
updateWisdom()
updateConstitution()
updateHealth()
updateMana()
//________________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________________
//ONE HANDED SKILL INFORMATION
function updateOneHandedAttackPower() {
	//updates player one handed attack power
	player.oneHanded.attackPower = (player.str * 2) / 2 + player.dex + player.oneHanded.level
}
function updateOneHandedAccuracy() {
	player.oneHanded.accuracy = player.str + player.dex + player.oneHanded.level
}
function updateOneHandedAttackSpeed() {
	player.oneHanded.speed = 1 - Math.floor(player.oneHanded.level / 10)
}
function updateOneHandedBotMultiplier() {
	player.oneHanded.botMultiplier = 0.1 + player.oneHanded.level / 10
}
function updateOneHandedTopMultiplier() {
	player.oneHanded.topMultiplier = 0.5 + player.oneHanded.level / 10
}

//TWO HANDED SKILL INFORMATION
function updateTwoHandedAttackPower() {
	player.twoHanded.attackPower = player.str * 2 + player.agi + player.twoHanded.level
}
function updateTwoHandedAccuracy() {
	player.twoHanded.accuracy = player.str + player.agi + player.twoHanded.level
}
function updateTwoHandedAttackSpeed() {
	player.twoHanded.speed = 1 - Math.floor(player.twoHanded.level / 10)
}
function updateTwoHandedBotMultiplier() {
	player.twoHanded.botMultiplier = 0.3 + player.twoHanded.level / 10
}
function updateTwoHandedTopMultiplier() {
	player.twoHanded.topMultiplier = 0.8 + player.twoHanded.level / 10
}

//UNARMED SKILL INFORMATION
function updateUnarmedAttackPower() {
	//use at the start to initiate unarmed attP as well as to increase with each attribute increase
	player.unarmed.attackPower = player.str + player.dex + player.agi + player.unarmed.level
}
function updateUnarmedAccuracy() {
	player.unarmed.accuracy = player.agi + player.dex + player.unarmed.level
}
function updateUnarmedAttackSpeed() {
	player.unarmed.speed = 1 - Math.floor(player.unarmed.level / 10)
}
function updatedUnarmedBotMultiplier() {
	player.unarmed.botMultiplier = 0.1 + player.unarmed.level / 10
}
function updatedUnarmedTopMultiplier() {
	player.unarmed.topMultiplier = 0.2 + player.unarmed.level / 10
}

function updatePlayerArmor() {
	player.armor = player.str + player.con
}
function updatePlayerDodge() {
	player.dodge = player.dex
}
function updatePlayerCrit() {
	player.crit = player.agi
}

function playerStatsUpdate() {
	updateOneHandedAttackPower()
	updateOneHandedAccuracy()
	updateOneHandedAttackSpeed()
	updateOneHandedBotMultiplier()
	updateOneHandedTopMultiplier()
	updateTwoHandedAttackPower()
	updateTwoHandedAccuracy()
	updateTwoHandedAttackSpeed()
	updateTwoHandedBotMultiplier()
	updateTwoHandedTopMultiplier()
	updateUnarmedAttackPower()
	updateUnarmedAccuracy()
	updateUnarmedAttackSpeed()
	updatedUnarmedBotMultiplier()
	updatedUnarmedTopMultiplier()
	//
	//updatePlayerArmor()
	updatePlayerDodge()
	updatePlayerCrit()
}
playerStatsUpdate()
//___________________________________________________________________________________________
//___________________________________________________________________________________________

function unarmedBotMultiplier() {
	player.unarmed.botMultiplier = player.unarmed.botMultiplier + player.unarmed.level / 10
}
function unarmedTopMultiplier() {
	player.unarmed.topMultiplier = player.unarmed.topMultiplier + player.unarmed.level / 10
}
function unarmedSpeed() {
	//blank
}
function unarmedAccuracy() {
	//blank
}
function oneHandedBotMultiplier() {
	player.oneHanded.botMultiplier = player.oneHanded.botMultiplier + player.oneHanded.level / 10
}
function oneHandedTopMultiplier() {
	player.oneHanded.topMultiplier = player.oneHanded.topMultiplier + player.oneHanded.level / 10
}
function oneHandedWeaponSpeed() {
	//blank for now might just use a flat value to start
	//player.oneHanded.speed = player.oneHanded.speed - player.oneHanded.level / 10
}
function oneHandedWeaponAccuracy() {
	//blank for now might just use a flat value to start
}

function twoHandedBotMultiplier() {
	player.twoHanded.botMultiplier = player.twoHanded.botMultiplier + player.twoHanded.level / 10
}
function twoHandedTopMultiplier() {
	player.twoHanded.topMultiplier = player.twoHanded.topMultiplier + player.twoHanded.level / 10
}
function twoHandedWeaponSpeed() {
	//blank for now might just use a flat value to start
	//player.twoHanded.speed = player.twoHanded.speed - player.twoHanded.level / 10
}
function twoHandedWeaponAccuracy() {
	//blank for now might just use a flat value to start
}

//getOneHandedBotMultiplier()
//oneHandedTopMultiplier()
//twoHandedAttackPower()
//twoHandedWeaponSpeed()
//twoHandedBotMultiplier()
//twoHandedTopMultiplier()

function displayPlayerHealthFunc() {
	displayPlayerHealthDiv.innerHTML = `Health: ${player.health} / ${player.maxHealth}`
	displayPlayerManaDiv.innerHTML = `Mana: ${player.mana} / ${player.maxMana}`
}

let displayPlayerManaDiv = document.getElementById('player-mana')
let displayPlayerManaNode = document.createTextNode(`Mana: ${player.mana} / ${player.maxMana}`)
displayPlayerManaDiv.appendChild(displayPlayerManaNode)
let displayPlayerHealthDiv = document.getElementById('player-health')
let displayPlayerHealthNode = document.createTextNode(`Health: ${player.health} / ${player.maxHealth}`)
displayPlayerHealthDiv.appendChild(displayPlayerHealthNode)
let displayPlayerStrDiv = document.getElementById('player-str')
let displayPlayerStrNode = document.createTextNode(`Str: ${player.str}`)
displayPlayerStrDiv.appendChild(displayPlayerStrNode)
let displayPlayerConDiv = document.getElementById('player-con')
let displayPlayerConNode = document.createTextNode(`Con: ${player.con}`)
displayPlayerConDiv.appendChild(displayPlayerConNode)
let displayPlayerDexDiv = document.getElementById('player-dex')
let displayPlayerDexNode = document.createTextNode(`Dex: ${player.dex}`)
displayPlayerDexDiv.appendChild(displayPlayerDexNode)
let displayPlayerAgiDiv = document.getElementById('player-agi')
let displayPlayerAgiNode = document.createTextNode(`Agi: ${player.agi}`)
displayPlayerAgiDiv.appendChild(displayPlayerAgiNode)
let displayPlayerIntDiv = document.getElementById('player-int')
let displayPlayerIntNode = document.createTextNode(`Int: ${player.int}`)
displayPlayerIntDiv.appendChild(displayPlayerIntNode)
let displayPlayerWisDiv = document.getElementById('player-wis')
let displayPlayerWisNode = document.createTextNode(`Wis: ${player.wis}`)
displayPlayerWisDiv.appendChild(displayPlayerWisNode)

var playerProxy = new Proxy(player, {
	set: function (target, key, value) {
		target[key] = value
		return true
	},
})

function displayPlayerStats() {
	displayPlayerStrDiv.innerHTML = `Str ${player.str}`
	displayPlayerConDiv.innerHTML = `Con ${player.con}`
	displayPlayerDexDiv.innerHTML = `Dex ${player.dex}`
	displayPlayerAgiDiv.innerHTML = `Agi ${player.agi}`
	displayPlayerIntDiv.innerHTML = `Int ${player.int}`
	displayPlayerWisDiv.innerHTML = `Wis ${player.wis}`
}
displayPlayerStats()

//MOVE DIRECTION----------------MOVE DIRECTION----------------MOVE DIRECTION----------------MOVE DIRECTION----------------MOVE DIRECTION----------------MOVE DIRECTION----------------
const moveUp = () => {
	if (currentArea.descriptions.zoneExitsBool.up === true) {
		directionMoved = 'You move above'
		player.z++
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
const moveDown = () => {
	if (currentArea.descriptions.zoneExitsBool.down === true) {
		directionMoved = 'You move below'
		player.z--
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
const moveNorth = () => {
	if (currentArea.descriptions.zoneExitsBool.north === true) {
		directionMoved = 'You move to the north'
		player.y++
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
const moveNortheast = () => {
	if (currentArea.descriptions.zoneExitsBool.northeast === true) {
		directionMoved = 'You move to the northeast'
		player.y++
		player.x++
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
const moveEast = () => {
	if (currentArea.descriptions.zoneExitsBool.east === true) {
		directionMoved = 'You move to the east'
		player.x++
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
const moveSoutheast = () => {
	if (currentArea.descriptions.zoneExitsBool.southeast === true) {
		directionMoved = 'You move to the southeast'
		player.x++
		player.y--
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
const moveSouth = () => {
	if (currentArea.descriptions.zoneExitsBool.south === true) {
		directionMoved = 'You move to the south'
		player.y--
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
const moveSouthwest = () => {
	if (currentArea.descriptions.zoneExitsBool.southwest === true) {
		directionMoved = 'You move to the southwest'
		player.y--
		player.x--
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
const moveWest = () => {
	if (currentArea.descriptions.zoneExitsBool.west === true) {
		directionMoved = 'You move to the west'
		player.x--
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
const moveNorthwest = () => {
	if (currentArea.descriptions.zoneExitsBool.northwest === true) {
		directionMoved = 'You move to the northwest'
		player.x--
		player.y++
		newLocation(player.x, player.y, player.z, player.special)
		youMoveToThe(directionMoved, currentArea, yellow)
	} else {
		quickMessage(noMove, yellow)
	}
}
let kasia = {
	npc: true,
	id: 0,
	x: 3,
	y: 0,
	name: 'kasia',
	displayName: 'Young lass, Kasia',
	questItem: 'bright yellow flower',
	desc: () => quickMessage('A young woman wearing a lovely silk dress stands here smiling.', 'descriptions'),
	speak: function () {
		dialogue(`Kasia says, 'Ello! A fine day it is.`, 'descriptions')
	},

	quest: function (thisNpcName) {
		quickMessage(`As you approach the young lass, she greets you with a hearty hello! She tells you that she brings her child here whenever she can to play with the other children. She mentions something about some pretty flowers growing in the glade. Perhaps she would like one?`, 'descriptions')
	},
	offer: function () {
		let qItem = pushItem.find(x => x.name.toLowerCase() == this.questItem)
		let qItemIndex = pushItem.indexOf(qItem)
		if (player.backpack.map(x => x.toLowerCase()).find(y => y == kasia.questItem) == kasia.questItem) {
			quickMessage(`you hand a ${qItem.name} over to ${this.name}`, 'descriptions')
			pushItem.splice(qItemIndex, 1)
			player.backpack.splice(qItemIndex, 1)
			quickMessage(`Kasia steps forward, "Oh wow! is this for me? How kinda of you sir. I'd love to pick flowers myself, but if I take my eyes off little Nikolas for even a second he runs out of sight! Thanks again, sir. Please, take this as a thank you.`)
		} else {
			quickMessage(`you must have the proper item to turn in this quest`)
		}
	},
}
const joch = {
	npc: true,
	id: 0,
	x: 0,
	y: 0,
	z: 1,
	name: 'joch',
	displayName: 'Joch, shopkeeper',
	items: [rustedSword(10), oldMail(5)],
	desc: () => quickMessage('Joch stands here with a smile, looking ready to sell his wares!', 'descriptions'),
	speak: function () {
		quickMessage('Greetings! I am Joch the shopkeeper. If you would like to see what I have to sell, please trade with me.')
	},
	trade: thisNpcName => {
		tradeDialog(thisNpcName)
	},
}

let clyde = {
	npc: true,
	id: 0,
	x: 0,
	y: 0,
	z: 1,
	name: 'clyde',
	displayName: 'Clyde, shopkeeper',
	items: [],
	desc: () => quickMessage('Clyde stands here with a smile, looking ready to sell his wares!', 'descriptions'),
	speak: function () {
		quickMessage('Greetings! I am Clyde the shopkeeper - better than Joch! ;) - If you would like to see what I have to sell, please trade with me.', 'descriptions')
	},
	trade: thisNpcName => {
		tradeDialog(thisNpcName)
	},
}
const lordGalvadane = {
	npc: true,
	id: 0,
	x: 3,
	y: 0,
	z: -1,
	name: 'oldman',
	displayName: 'old man',
	skills: [unarmedCombatSkill, oneHandedWeaponSkill, twoHandedWeaponSkill],
	skillsOffered: ['unarmed combat', 'one handed weapon skill', 'two handed weapon skill'],
	skillsMaxLevel: {
		unarmed: 2,
		oneHanded: 2,
		twoHanded: 2,
	},
	desc: () => quickMessage('Joch stands here with a smile, looking ready to sell his wares!', 'descriptions'),
	speak: function () {
		quickMessage('Greetings! I am Joch the shopkeeper. If you would like to see what I have to sell, please trade with me.')
	},
	learn: thisNpcName => {
		learnDialog(thisNpcName)
	},
}

let allNpcsArray = ['kasia', 'joch', 'clyde', 'oldman']

//function learnSkill(secondCommand, thirdCommand) {
//	console.log(thirdCommand)
//	var regExp = /[a-zA-Z]/g //used to test if string contains letters. returns true or false
//	let npcName = thirdCommand == undefined ? undefined : thirdCommand.replace(/\s/g, '') //if thirdCommand contains any spaces, this removes them
//	npcName = npcName == undefined ? undefined : npcName.toLowerCase()
//	let targetNpc = currentArea.npc.find(npc => npc.name == npcName && npc.skills[0] != undefined)
//	const skillNumber = secondCommand - 1
//	if (!currentArea.npc[0]) {
//		quickMessage(`There is nobody here teaching anything.`)
//	} else if (secondCommand == undefined) {
//		quickMessage(`You must specify what skill or spell you wish to learn and who to learn it from`)
//	} else if (thirdCommand != npcName) {
//		quickMessage(`You do not see anyone named ${thirdCommand}`)
//	} else if (targetNpc.skills[skillNumber] == undefined) {
//		quickMessage(`This person cannot teach you that skill or spell`)
//	} else if (targetNpc.skills[skillNumber]) {
//		quickMessage(`You successfully train ${targetNpc.skills[skillNumber]}!`)
//	}
//}

function buy(itemNumberPre, npcNameInput) {
	const itemNumber = itemNumberPre - 1
	const npcName = npcNameInput != undefined ? npcNameInput.toLowerCase() : undefined
	const targetNpc = currentArea.npc.find(npc => npc.name == npcName)
	const itemsNpcDoesExist = currentArea.npc.find(npc => npc.items)
	function findNpc() {
		for (let x in currentArea.npc) {
			if (currentArea.npc[x].name == npcName) {
				return true
			} else {
				return false
			}
		}
	}

	if (!currentArea.npc[0]) {
		quickMessage(`There is nobody here to sell you anything`)
	} else if (!itemsNpcDoesExist) {
		quickMessage(`Nobody here is selling anything`)
	} else if (itemNumberPre == undefined || isNaN(itemNumberPre) == true) {
		quickMessage(`You must specify the number of the item you wish to buy`)
	} else if (findNpc() == false) {
		quickMessage(`There is no one here named ${npcName}`)
	} else if (targetNpc == undefined) {
		quickMessage(`You must specify who you wish to buy from`)
	} else if (targetNpc.items[itemNumber] == undefined) {
		quickMessage(`${targetNpc.name} does not have that item to sell`)
	} else if (targetNpc.name == undefined) {
		quickMessage(`${npcNameInput} is not in the room`)
	} else if (player.gold - targetNpc.items[itemNumber].buyValue < 0) {
		quickMessage(`you don't have enough gold to buy this`)
	} else if (targetNpc.items[itemNumber].type.weapon) {
		player.gold = player.gold - targetNpc.items[itemNumber].buyValue
		weaponGen(targetNpc.items[itemNumber])
		quickMessage(`You purchased a ${targetNpc.items[itemNumber].name} for ${pushItem[pushItem.length - 1].buyValue} gold`)
		const purchasedItem = pushItem[pushItem.length - 1]
		purchasedItem.roomId = backpack
	} else if (targetNpc.items[itemNumber].type.armor) {
		quickMessage(`You purchased a ${targetNpc.items[itemNumber].name}`)
		armorGen(targetNpc.items[itemNumber])
		const purchasedItem = pushItem[pushItem.length - 1]
		purchasedItem.roomId = backpack
	}
}

function sell(secondCommand, itemNumberPre) {
	//sell sword
	//sell 1
	//sell right/left
	if (currentArea.npc) {
		if (currentArea.npc[0] == undefined) {
			quickMessage(`There is nobody here to sell anything to`)
		} else if (currentArea.npc[0] && secondCommand == undefined) {
			quickMessage(`You must specify what you want to sell`)
		} else if (currentArea.npc[0]) {
			const itemNumber = itemNumberPre != undefined ? itemNumberPre - 1 : undefined
			const backpackArray = pushItem.filter(item => item.roomId == 'backpack')
			const itemSoldArray = backpackArray.filter(({ keywords }) => keywords.some(keyword => keyword == secondCommand))
			if (itemNumber != undefined) {
				let itemSold = itemSoldArray[itemNumber]
				if (itemSold == undefined) {
					quickMessage(`You do not have that item to sell`)
				} else {
					let removeThisItem = pushItem.find(item => item.id == itemSold.id)
					let removedItemIndex = pushItem.indexOf(removeThisItem)
					player.gold = player.gold + itemSold.sellValue
					pushItem.splice(removedItemIndex, 1)
					//quickMessage(`You sold your ${itemSold.name} for ${itemSold.sellValue} gold`)
					sellItemDialog(itemSold.name, itemSold.sellValue)
				}
			} else {
				let itemSold = itemSoldArray[0]
				if (itemSold == undefined) {
					quickMessage(`You do not have that item to sell`)
				} else {
					let removeThisItem = pushItem.find(item => item.id == itemSold.id)
					let removedItemIndex = pushItem.indexOf(removeThisItem)
					player.gold = player.gold + itemSold.sellValue
					pushItem.splice(removedItemIndex, 1)
					//quickMessage(`You sold your ${itemSold.name} for ${itemSold.sellValue} gold`)
				}
			}
		} else {
			console.log('nobody selling anything here')
		}
	}
}

function show(skillsSpellsOrItems, npcName) {
	const ssoi = skillsSpellsOrItems
	const targetNpc = currentArea.npc.find(npc => npc.name == npcName) != undefined ? currentArea.npc.find(npc => npc.name == npcName) : undefined
	const targetNpcName = targetNpc != undefined ? targetNpc.name : undefined
	const validSkillsNpc = currentArea.npc.filter(npc => npc.skills) != undefined ? currentArea.npc.filter(npc => npc.skills) : undefined
	const validSpellsNpc = currentArea.npc.filter(npc => npc.spells) != undefined ? currentArea.npc.filter(npc => npc.spells) : undefined
	const validItemsNpc = currentArea.npc.filter(npc => npc.items) != undefined ? currentArea.npc.filter(npc => npc.items) : undefined
	const validQuestNpc = currentArea.npc.filter(npc => npc.quest) != undefined ? currentArea.npc.filter(npc => npc.quest) : undefined
	if (npcName == undefined) {
		if (ssoi != 'skills' && ssoi != 'spells' && ssoi != 'items' && ssoi != 'quest' && ssoi != 'all') {
			quickMessage(`you must specify SKILLS, SPELLS, ITEMS, or QUEST after the SHOW command`)
		} else if (!currentArea.npc[0] && ssoi == 'items') {
			quickMessage(`There is nobody here selling any ${ssoi}`)
		} else if (!currentArea.npc[0] && (ssoi == 'skills' || ssoi == 'spells')) {
			quickMessage(`There is nobody here teaching any ${ssoi}`)
		} else if (!currentArea.npc[0] && ssoi == 'quest') {
			quickMessage(`There is nobody here offering any quests`)
		} else if (ssoi == 'skills') {
			if (!validSkillsNpc[0]) {
				quickMessage(`There is nobody here teaching any ${ssoi}`)
			} else {
				validSkillsNpc.forEach(npc => quickMessage(`${npc.name} is teaching skills`))
			}
		} else if (ssoi == 'spells') {
			if (!validSpellsNpc[0]) {
				quickMessage(`There is nobody here teaching any ${ssoi}`)
			} else {
				validSpellsNpc.forEach(npc => quickMessage(`${npc.name} is teaching spells`))
			}
		} else if (ssoi == 'items') {
			if (!validItemsNpc[0]) {
				quickMessage(`There is nobody here selling any ${ssoi}`)
			} else {
				validItemsNpc.forEach(npc => quickMessage(`${npc.name} is selling items`))
			}
		} else if (ssoi == 'quest') {
			if (!validQuestNpc[0]) {
				quickMessage(`There is nobody here offering any quests`)
			} else {
				validQuestNpc.forEach(npc => quickMessage(`${npc.name} is offering a quest`))
			}
		} else if (ssoi == 'all' && (validSkillsNpc[0] != undefined || validSpellsNpc[0] != undefined || validItemsNpc[0] != undefined || validQuestNpc[0] != undefined)) {
			validSkillsNpc.forEach(npc => quickMessage(`${npc.name} is teaching skills`))
			validSpellsNpc.forEach(npc => quickMessage(`${npc.name} is teaching spells`))
			validItemsNpc.forEach(npc => quickMessage(`${npc.name} is selling items`))
			validQuestNpc.forEach(npc => quickMessage(`${npc.name} is offering a quest`))
		} else if (ssoi == 'skills' || ssoi == 'spells') {
			quickMessage(`There is nobody here teaching anything`)
		} else if (ssoi == 'items') {
			quickMessage(`There is nobody here selling items`)
		} else {
			quickMessage(`There is nobody here offering any quests or services`)
		}
	} else if (ssoi == 'skills' && validSkillsNpc.find(npc => npc.name.replace(/ /g, '') == npcName)) {
		targetNpc.learn(npcName)
	} else if (ssoi == 'spells' && validSpellsNpc.find(npc => npc.name.replace(/ /g, '') == npcName)) {
		targetNpc.learn(npcName)
	} else if (ssoi == 'items' && validItemsNpc.find(npc => npc.name.replace(/ /g, '') == npcName)) {
		targetNpc.trade(npcName)
	} else if (ssoi == 'quest' && validQuestNpc.find(npc => npc.name.replace(/ /g, '') == npcName)) {
		targetNpc.quest(npcName)
	} else {
		quickMessage(`You must enter a valid npc name`)
	}
}
function learnSkill(secondCommand, thirdCommand) {
	console.log(secondCommand, thirdCommand)
	let playerKeys = Object.keys(player)
	let keyArray = []
	let skillToEnhance
	function findKey() {
		for (let i = 0; i < playerKeys.length; i++) {
			keyArray.push(player[playerKeys[i]])
		}
	}
	findKey()
	skillToEnhance = keyArray.find(skill => skill.id == secondCommand)
	//let skillToEnhance = keyArray.find(skill => skill.id == secondCommand)
	const skillNumber = secondCommand - 1
	const npcName = thirdCommand != undefined ? thirdCommand.toLowerCase() : undefined
	const targetNpc = currentArea.npc.find(npc => npc.name == npcName)
	const skillsNpcDoesExist = currentArea.npc.find(npc => npc.skills)
	const spellsNpcDoesExist = currentArea.npc.find(npc => npc.spells)
	if (!currentArea.npc[0]) {
		quickMessage(`There is nobody here to train you`)
	} else if (!skillsNpcDoesExist && !spellsNpcDoesExist) {
		quickMessage(`Nobody here can train you`)
	} else if (isNaN(secondCommand) == true) {
		quickMessage(`You must specify the skill number you wish to learn`)
	} else if (targetNpc == undefined) {
		quickMessage(`You must specify who you wish to learn from`)
	} else if (targetNpc) {
		if (targetNpc.name == npcName) {
			if (player.gold - targetNpc.skills[skillNumber](skillToEnhance.level, targetNpc.skillsMaxLevel[skillToEnhance.refName]) < 0) {
				quickMessage(`you don't have enough gold to learn this skill`)
			} else if (targetNpc.skills[skillNumber](skillToEnhance.level, targetNpc.skillsMaxLevel[skillToEnhance.refName]) == false) {
				quickMessage(`This npc cannot train you any further in ${targetNpc.skillsOffered[skillNumber]}`)
			} else {
				console.log(skillToEnhance)
				skillToEnhance.level++
				console.log(skillToEnhance.level, ' skill to enhance level')
				quickMessage(`You successfully train ${learnedSkillName}!`)
			}
		}
	}
}

function learnDialog(headerName) {
	const targetNpc = currentArea.npc ? currentArea.npc.find(x => x.name == headerName.toLowerCase()) : undefined
	let skillNumber = 1
	if (targetNpc != undefined) {
		if (targetNpc.skills[0]) {
			const targetNpcSkills = targetNpc.skillsOffered
			const topDiv = document.createElement('div')
			const topNode = document.createTextNode(`_____________________________________${targetNpc.displayName}________________________________________`)
			const skillsListDiv = document.createElement('div') //main div for skills
			const skillName = targetNpcSkills.map(skill => npcSkillsToNode(skill)) //array of all the skills the npc has
			skillName.forEach(skillsListNode => {
				const skillByNumberDiv = document.createTextNode(`Skill ${skillNumber}: `) //Ex. skill 1: skill 2: skill 3:
				skillNumber = skillNumber + 1
				skillsListDiv.appendChild(skillByNumberDiv)
				skillsListDiv.appendChild(skillsListNode)
			})
			skillsListDiv.classList.add('descriptions')
			//skillsListDiv.appendChild(itemsListNode)
			topDiv.appendChild(topNode)

			masterArea.appendChild(topDiv)
			masterArea.appendChild(skillsListDiv)
			updateScroll()
		} // else {
		//	quickMessage(`${targetNpc.name} has nothing to trade`)
		//}
	} //else {
	//quickMessage(`you do not see ${headerName} to trade with`)
	//}
}

function trade(secondCommand) {
	if (currentArea.npc) {
		const allNpcs = currentArea.npc.map(allNpc => allNpc)
		const findNpc = allNpcs.find(x => x.name == secondCommand)
		if (findNpc) {
			findNpc.trade()
		} else if (findNpc == undefined && secondCommand != undefined) {
			quickMessage(`you do not see anyone named ${secondCommand} to trade with`, 'descriptions')
		} else {
			quickMessage(`you must specify who you wish to trade with`, 'descriptions')
		}
	}
}

function tradeDialog(headerName) {
	const targetNpc = currentArea.npc ? currentArea.npc.find(x => x.name == headerName.toLowerCase()) : undefined
	let itemNumber = 1
	if (targetNpc != undefined) {
		if (targetNpc.items[0]) {
			const targetNpcItems = targetNpc.items
			const topDiv = document.createElement('div')
			const topNode = document.createTextNode(`_____________________________________${targetNpc.displayName}________________________________________`)

			const itemsListDiv = document.createElement('div') //main div for items

			const itemName = targetNpcItems.map(item => npcItemsToNode(item)) //array of all the items the npc has
			itemName.forEach(itemsListNode => {
				const itemByNumberDiv = document.createTextNode(`item ${itemNumber}: `) //Ex. item 1: item 2: item 3:
				itemNumber = itemNumber + 1
				itemsListDiv.appendChild(itemByNumberDiv)
				itemsListDiv.appendChild(itemsListNode)
			})
			itemsListDiv.classList.add('descriptions')
			//itemsListDiv.appendChild(itemsListNode)
			topDiv.appendChild(topNode)

			masterArea.appendChild(topDiv)
			masterArea.appendChild(itemsListDiv)
			updateScroll()
		} // else {
		//	quickMessage(`${targetNpc.name} has nothing to trade`)
		//}
	} // else {
	//quickMessage(`you do not see ${headerName} to trade with`)
	//}
}

function questItemOffer() {
	if (player.backpack.map(x => x.toLowerCase()).find(y => y == this.questItem)) {
		let qItem = pushItem.find(x => x.name.toLowerCase() == this.questItem)
		let qItemIndex = pushItem.indexOf(qItem)
		quickMessage(`you hand a ${qItem.name} over to ${this.name}`, 'descriptions')
		pushItem.splice(qItemIndex, 1)
		player.backpack.splice(qItemIndex, 1)
	}
}
//SKILLS++SKILLS++SKILLS++SKILLS++SKILLS++SKILLS++SKILLS++SKILLS
function oneHandedWeaponSkill(skillLevel, npcMaxTrainLevel) {
	learnedSkillName = 'one handed weapon skill'
	let weaponSkillModifier = 1.3 * skillLevel
	let weaponSkillCost = skillLevel * weaponSkillModifier
	if (skillLevel == npcMaxTrainLevel) {
		return false
	} else {
		return weaponSkillCost
	}
}
function twoHandedWeaponSkill(skillLevel, npcMaxTrainLevel) {
	learnedSkillName = 'two handed weapon skill'
	let weaponSkillModifier = 1.3 * skillLevel
	let weaponSkillCost = skillLevel * weaponSkillModifier
	if (skillLevel == npcMaxTrainLevel) {
		return false
	} else {
		return weaponSkillCost
	}
}
function unarmedCombatSkill(skillLevel, npcMaxTrainLevel) {
	learnedSkillName = 'unarmed combat skill'
	let weaponSkillModifier = 1.3 * skillLevel
	let weaponSkillCost = skillLevel * weaponSkillModifier
	if (skillLevel == npcMaxTrainLevel) {
		return false
	} else {
		return weaponSkillCost
	}
}
//////////////////////// AREAS AREAS AREAS AREAS AREAS AREAS AREAS AREAS AREAS

let areaIdGenerator = function () {
	//Not using currently. This creates a unique ID based on coordinates. It's not very good for keeping IDs organized though
	allAreas[0] = allAreas[0] + 1
	return allAreas[0]
}

let startingAreaCenter = {
	npc: [],
	hostile: true,
	id: -1,
	x: 3,
	y: 0,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: `Central Starting Area`,
		desc: `Hello! Here you will learn most of the basics that will get you started on your adventure. Each room will teach you something new, how exciting! For starters, try typing 'l' for look. This will refresh your view of the room. If there's too much clutter on the screen, it can be refreshing to type 'l' to clear your vision. Next, we have directions. Each room will display all possible directions that you can move. To travel in a specific direction, just type the abbreviation. Go ahead and try moving to the northwest by typing 'nw'. `,
		zoneExits: 'north northeast east southeast south southwest northwest up down',
		zoneExitsBool: {
			north: true,
			northeast: true,
			east: true,
			southeast: true,
			south: true,
			southwest: true,
			west: true,
			northwest: true,
			up: true,
			down: true,
		},
	},
	interactables: {},
}
// let startingAreaNorthwest = {
// 	npc: [],
// 	hostile: true,
// 	id: -2,
// 	x: 2,
// 	y: 1,
// 	z: 0,
// 	gold: 0,
// 	descriptions: {
// 		areaNameClass: galvadianGreen,
// 		areaName: `Northwest Starting Area`,
// 		desc: `You have entered the northwest section of the starting area! Next we will go over some simple commands. Just as you can type 'l' to look at the room you're currently in, you can also type 'l' and then any direction to look into the next room! This can be useful if you're avoiding monsters or just exploring and trying to figure out which direction you'd like to go. Typing 'stats' will give you an overview of all your primary stats, 'exp' will show all your information related to expierence points, skill points, and battle points, and skills will show a list of all your currently trained skills! Next, try going 'se' and then 'n'., `,
// 		zoneExits: 'southeast',
// 		zoneExitsBool: {
// 			north: false,
// 			northeast: false,
// 			east: false,
// 			southeast: true,
// 			south: false,
// 			southwest: false,
// 			west: false,
// 			northwest: false,
// 		},
// 	},
// 	interactables: {
// 		names: ['mushrooms', 'leaves'],
// 		mushrooms: {
// 			name: 'mushrooms',
// 			desc: function () {
// 				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
// 			},
// 		},
// 	},
// }
// let startingAreaNorth = {
// 	npc: [],
// 	hostile: true,
// 	id: -3,
// 	x: 3,
// 	y: 1,
// 	z: 0,
// 	gold: 0,
// 	descriptions: {
// 		areaNameClass: galvadianGreen,
// 		areaName: `North Starting Area`,
// 		desc: `Now we will go over inventory and equipment. Type 'i' to take a look at your inventory. The top portion displays all your equipped weapons and armor, while the bottom portion will show you all the items in your backpack . To take something out of your backpack, type 'unpack' followed by the item name. Some item names can be shortened. For instance, if you have a 'rusted sword' in your backback, you could type 'unpack rusted', 'unpack sword', or 'unpack rusted sword'. If you have multiple items with the same name, make sure to type 'i' again to make sure you're holding the item you wish to use or equip. Type 'swap' if you want to move the item in your right hand to your left hand, and the item in your left hand to your right hand. To equip a piece of armor, make sure to hold it in your right hand and then type 'equip', 'don', or 'wear' followed by the name of the item. A sword will be automatically wielded when you're holding it in your right hand while a shield will be automatically wielded when you're holding it in your left hand. You can wield a weapon in your left and right hand once you learn the skill 'dual wielding', if your class allows. To free your hands up to be able to handle something else, type 'pack right', 'pack left', or just 'p left' or 'p right'. To remove a piece of armor, type 'remove' followed by the armor piece you wish to remove. Unequipping a sword is as easy as putting it away in your backpack. Next, you'll want to make your way to the Northeast Starting Area!`,
// 		zoneExits: 'south',
// 		zoneExitsBool: {
// 			north: false,
// 			northeast: false,
// 			east: false,
// 			southeast: false,
// 			south: true,
// 			southwest: false,
// 			west: false,
// 			northwest: false,
// 		},
// 	},
// 	interactables: {
// 		names: ['mushrooms', 'leaves'],
// 		mushrooms: {
// 			name: 'mushrooms',
// 			desc: function () {
// 				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
// 			},
// 		},
// 	},
// }
// let startingAreaNortheast = {
// 	npc: [],
// 	hostile: true,
// 	id: -4,
// 	x: 4,
// 	y: 1,
// 	z: 0,
// 	gold: 0,
// 	descriptions: {
// 		areaNameClass: galvadianGreen,
// 		areaName: `Northeast Starting Area`,
// 		desc: `Next you'll be learning how to use consumable and magic items. Depending on the consumable, you'll want to use either the DRINK, EAT, or USE commands. EAT or DRINK is typically used for edibles, drinks, and potions while the USE command can be used for non-drinkables and non-edibles. USE is also more often used to interact with an area if that area has something to interact with. You will learn more about this in the next couple rooms. To use a magic item, type ACTIVATE followed by the item name. Once activated, use the TARGET command, or 't', followed by the name of the target. If you wish to attempt to target yourself, just type 't'. When in doubt, use the EXAMINE (or 'ex') command followed by the item name to find out more information about that item. You will often see if an item is edible, drinkable, activatable, or useable. To the east of the Starting Area, you will learn more about the EXAMINE command.`,
// 		zoneExits: 'southwest',
// 		zoneExitsBool: {
// 			north: false,
// 			northeast: false,
// 			east: false,
// 			southeast: false,
// 			south: false,
// 			southwest: true,
// 			west: false,
// 			northwest: false,
// 		},
// 	},
// }
// let startingAreaEast = {
// 	npc: [],
// 	hostile: true,
// 	id: -5,
// 	x: 4,
// 	y: 0,
// 	z: 0,
// 	gold: 0,
// 	descriptions: {
// 		areaNameClass: galvadianGreen,
// 		areaName: `East of the Starting Area`,
// 		desc: `Using the EXAMINE command, or 'ex', is useful for a variety of reasons. You can examine enemies, weapons, armor, and even people to learn more about them, though, some things may require you to have hightened perception to be able to see all of their properties (items) or strengths, weaknesses, or abilities (enemies). Sometimes rooms will contain interactable objects that aren't as apparent as monsters, items, or people. Examinable objects will never have a long list of words for you to examine such as, 'ex fallen tree trunk'. You would just type 'ex fallen', 'ex tree', or 'ex trunk'. Be careful of which word you use in case there are multiple objects with the same name that you can examine. Go ahead and try typing 'ex tree'. You will get a chance to practice all of these exmaining methods soon. Next you will want to head to the southeaast part of the Starting Area. `,
// 		zoneExits: 'west',
// 		zoneExitsBool: {
// 			north: false,
// 			northeast: false,
// 			east: false,
// 			southeast: false,
// 			south: false,
// 			southwest: false,
// 			west: true,
// 			northwest: false,
// 			up: false,
// 			down: false,
// 		},
// 	},
// 	interactables: {
// 		trees: {
// 			name: 'trees',
// 			desc: function () {
// 				quickMessage(`You look at the surrounding trees, and one 'fallen tree' catches your eye. Perhaps you should inspect it.`, 'grey')
// 			},
// 		},
// 		fallenTree: {
// 			name: 'fallen tree',
// 			desc: function () {
// 				quickMessage(`After taking a closer look at the fallen tree, you discover a hole in the ground beneath the trunk.`, 'grey')
// 				if (currentArea.descriptions.zoneExitsBool.down == false) {
// 					quickMessage(`You discover a secret way below!`)
// 				}
// 				let revert = currentArea.descriptions.zoneExits
// 				startingAreaEast.descriptions.zoneExitsBool.down = true
// 				startingAreaEast.descriptions.zoneExits += ' down'
// 				setTimeout(() => {
// 					startingAreaEast.descriptions.zoneExitsBool.down = false
// 					startingAreaEast.descriptions.zoneExits = revert
// 				}, 5000)
// 			},
// 		},
// 	},
// }
let startingAreaEastSecretDown = {
	npc: [],
	hostile: false,
	id: 's1',
	x: 4,
	y: 0,
	z: -1,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: `In a hole beneath a fallen tree`,
		desc: `Secret rooms like this will often disappear soon after you leave. You can always rediscover the entrance, so be sure to remember where and how you discovered it.`,
		zoneExits: 'up',
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: false,
			northwest: false,
			up: true,
			down: false,
		},
	},
	interactables: {},
}
let startingAreaSoutheast = {
	npc: [],
	hostile: true,
	id: -6,
	x: 4,
	y: -1,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: `Southeast of the Starting Area`,
		desc: `Here you will learn about stats, spells, skills, and abilities. Stats influence your skills and your skills influence your spells and abilities. Depending on your race and class, you will gain a small number of stats each time you gain a level. You will also be awarded a few stat points to allocate yourself along with some build points. Build Points are used to train your skills and abilities at a guild trainer. Guild trianers are only availble to guild members, and you can only be part of one guild. You will learn more about skills and abilities once you get to a guild trainer. `,
		zoneExits: 'northwest',
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: false,
			northwest: true,
		},
	},
	interactables: {
		names: ['mushrooms', 'leaves'],
		mushrooms: {
			name: 'mushrooms',
			desc: function () {
				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
			},
		},
	},
}
let startingAreaSouth = {
	npc: [],
	hostile: true,
	id: -7,
	x: 3,
	y: -1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: `South of the Starting Area`,
		desc: `Oh no, a blob! Don't worry, this monster is harmless and is only here to teach you combat! Firstly, you cannot attack a monster unless you are ENGAGED with it. Engaging is simple, and in most cases, hostile monsters will engage you automatically. If you wish to engage an enemy, you must ADVANCE, or 'ad', followed by the enemy name. Once engaged, both you and the enemy can deal damage to one another. But be careful, ranged enemies can attack you without being engaged! However, if you have the ranged skill you can do this too. Once you are engaged with an enemy, you need to ATTACK, or 'a' the enemy. Simply typing 'a' will attack the first monster you are engaged with. If there are multiple enemies you are engaged with, you can type 'a' followed by a number to indicate which monster in the room you wish to attack. Typing 'a' followed by the monster name will single out that monster and you will only attack the monster with that name. When you are engaged, you will not be able to move until you are no longer engaged. For that to happen, you need to either kill all the monsters you are engaged with, or an easier way is to simply RETREAT As far as defense goes, you will learn more about that when training your defensive skills. For now, and mostly throughout your journey, you will be using the RETREAT, or 're', command. Retreating will disengage you from all monsters in the room allowing you to perform non-combat actions again. If you retreat, the enemy will engage you again as soon as it can. If you're trying to run away, you'll probably want to use the RETREAT command followed by a direction. This will disengage you from the enemy while also moving you into another room creating more distance! This is very useful, but be careful because moving into another room might spawn another enemy for you to deal with. Go ahead and test out the commands you learned on this blob before heading to the southwest of the Starting Area.`,
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
	interactables: {
		names: ['mushrooms', 'leaves'],
		mushrooms: {
			name: 'mushrooms',
			desc: function () {
				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
			},
		},
	},
}
let startingAreaSouthwest = {
	npc: [],
	hostile: true,
	id: -8,
	x: 2,
	y: -1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: `Southwest of the Starting Area`,
		desc: `Here you will learn about some general game information. Monsters are encountered in hostile areas and will only have a chance of spawning when you enter that particular area, so moving from room to room will eventually cause a monster to spawn. Monsters will also have a chance to drop a variety of items from weapons and armor to quest items. Another way to obtain items is from a shop. These will typically be found in towns and cities. You will be able to buy and sell once you find one. `,
		zoneExits: 'northeast',
		zoneExitsBool: {
			north: false,
			northeast: true,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
	interactables: {
		names: ['mushrooms', 'leaves'],
		mushrooms: {
			name: 'mushrooms',
			desc: function () {
				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
			},
		},
	},
}
let startingAreaWest = {
	npc: [],
	hostile: false,
	id: -8,
	x: 2,
	y: 0,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: `West of the Starting Area`,
		desc: `A little tunnel of trees connecting the starting area glade to the main glade`,
		zoneExits: 'east west',
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: true,
			southeast: false,
			south: false,
			southwest: false,
			west: true,
			northwest: false,
		},
	},
	interactables: {
		names: ['mushrooms', 'leaves'],
		mushrooms: {
			name: 'mushrooms',
			desc: function () {
				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
			},
		},
	},
}

let startingAreaUp = {
	npc: [joch, clyde],
	hostile: true,
	id: -9,
	x: 3,
	y: 0,
	z: 1,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: `Above the Starting Area`,
		desc: `Here you will learn about how shops work.`,
		zoneExits: 'down',
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: false,
			northwest: false,
			down: true,
		},
	},
	interactables: {
		names: ['mushrooms', 'leaves'],
		mushrooms: {
			name: 'mushrooms',
			desc: function () {
				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
			},
		},
	},
}
let startingAreaBelow = {
	npc: [lordGalvadane],
	hostile: true,
	id: -10,
	x: 3,
	y: 0,
	z: -1,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: `Underneath the starting area`,
		desc: `You find yourself in an underground, dirt cave. The sounds of a lightly crackling fire accompany the smell of roasting meat. an old man sits behind the fire, working something in his hands.`,
		zoneExits: 'up',
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: false,
			northwest: false,
			up: true,
		},
	},
	interactables: {
		names: ['mushrooms', 'leaves'],
		mushrooms: {
			name: 'mushrooms',
			desc: function () {
				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
			},
		},
	},
}

let centralGlade = {
	npc: [kasia],
	hostile: true,
	id: 0,
	x: 0,
	y: 0,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: `The Central Glade of Galvadia`,
		desc: `Between the town and castle walls, deep within the Galvadian forest, you find yourself standing in a massive glade. The surrounding trees tower high above you, and in the very middle stands the biggest tree youve ever seen. Roots extend from the base of the tree like giant tendrils. A massive trunk extends through the top of the forest canopy, the crown blossoms beyond the glade itself. The bits of light that make its way through cast soft spotlights around the glade. Despite the lack of direct light, the forest itself glows a comforting amber allowing you to see vividly.`,
		zoneExits: 'north northeast east southeast south southwest west northwest',
		zoneExitsBool: {
			north: true,
			northeast: true,
			east: true,
			southeast: true,
			south: true,
			southwest: true,
			west: true,
			northwest: true,
		},
	},
	interactables: {
		names: ['mushrooms', 'leaves'],
		mushrooms: {
			name: 'mushrooms',
			desc: function () {
				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
			},
		},
		leaves: {
			name: 'leaves',
			desc: function () {
				quickMessage(`Here lies a suspicious pile of leaves`)
			},
		},
	},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}

let westGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 1,
	x: -1,
	y: 0,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: 'Traveling to the west of the Glade',
		desc: 'Two giant trees standing opposite each other mark the end of the path leading to the glade. Heading away from the glade is a tunnel of trees extending out of sight. The branches intertwine to form an arc high above the forest path. To the west is the path back to town. To the east is the Glade of Galvadia - a massive glade the size of a small town resting inside the bowl of a very shallow crater. Though the Central Glade is a safe haven, the outskirts are known to have bandits and hostile creatures skittering about.',
		zoneExits: 'north east south west',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: true,
			southeast: false,
			south: true,
			southwest: false,
			west: true,
			northwest: false,
		},
	},
	interactables: {
		names: ['animals'],
		animals: {
			name: 'animals',
			desc: 'You see a packs of wild animals grazing in the glade',
		},
	},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let northwestGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 2,
	x: -1,
	y: 1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: 'Northwestern edge of the Glade',
		desc: 'Just ahead of you, a few deer are bounding around playfully. They stop briefly to look up and take note of your presence before going back to playing. Approaching them is tempting, but you think better of disrupting their play.',
		zoneExits: 'east southeast south southwest',
		zoneExitsBool: {
			east: true,
			southeast: true,
			south: true,
			southwest: true,
		},
	},
	interactables: {},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let northGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 3,
	x: 0,
	y: 1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: 'Traveling to the north side of the Glade',
		desc: 'Heading north, you start to notice that there are fewer people around. You again become aware of the natural sounds happening around you.',
		zoneExits: 'east southeast south southwest west',
		zoneExitsBool: {
			east: true,
			southeast: true,
			south: true,
			southwest: true,
			west: true,
		},
	},
	interactables: {},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let northeastGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 4,
	x: 1,
	y: 1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: 'Northeastern edge of the Glade',
		desc: 'NORTHEAST PART',
		zoneExits: 'west southwest south',
		zoneExitsBool: {
			west: true,
			southwest: true,
			south: true,
		},
	},
	interactables: {
		names: ['flower'],
		flower: {
			name: 'flower',
			desc: 'A bright, pretty flower stands out from among the rest. A perfect gift for someone who likes flowers',
		},
	},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let eastGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 5,
	x: 1,
	y: 0,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: 'Eastern side of the Glade',
		desc: 'In the vast openness of the glade, on this side lies an oasis of trees.',
		zoneExits: 'north east south southwest west northwest',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: true,
			southeast: false,
			south: true,
			southwest: true,
			west: true,
			northwest: true,
		},
	},
	interactables: {},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let southeastGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 6,
	x: 1,
	y: -1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: 'Southeastern edge of the Glade',
		desc: 'In the vast openness of the glade, on this side lies an oasis of trees.',
		zoneExits: 'north west northwest',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: true,
			northwest: true,
		},
	},
	interactables: {},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let southGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 7,
	x: 0,
	y: -1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: 'South Part of the Glade',
		desc: 'In the vast openness of the glade, on this side lies an oasis of trees.',
		zoneExits: 'north northeast east west northwest',
		zoneExitsBool: {
			north: true,
			northeast: true,
			east: true,
			southeast: false,
			south: false,
			southwest: false,
			west: true,
			northwest: true,
		},
	},
	interactables: {},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let southwestGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 8,
	x: -1,
	y: -1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: 'Southwestern Part of the Glade',
		desc: 'In the vast openness of the glade, on this side lies an oasis of trees.',
		zoneExits: 'north northeast east northwest',
		zoneExitsBool: {
			north: true,
			northeast: true,
			east: true,
			southeast: false,
			south: false,
			southwest: false,
			west: false,
			northwest: true,
		},
	},
	interactables: {},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let entranceToGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 9,
	x: -2,
	y: 0,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: galvadianGreen,
		areaName: 'Entrance to the Glade of Galvadia',
		desc: 'Two giant trees standing opposite each other mark the end of the path leading to the glade. Heading away from the glade is a tunnel of trees extending out of sight. The branches intertwine to form an arc high above the forest path. To the west is the path back to town. To the east is the Glade of Galvadia - a massive glade the size of a small town resting inside the bowl of a very shallow crater. Though the Central Glade is a safe haven, the outskirts are known to have bandits and hostile creatures skittering about.',
		zoneExits: 'northeast east southeast west',
		zoneExitsBool: {
			north: false,
			northeast: true,
			east: true,
			southeast: true,
			south: false,
			southwest: false,
			west: true,
			northwest: false,
		},
	},
	interactables: {
		names: 'animals',
		animals: {
			desc: 'You see a packs of wild animals grazing in the glade',
		},
	},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let outsideEntranceToGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 10,
	x: -3,
	y: 0,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'Approaching the Entrance to The Glade of Galvadia',
		desc: 'As you near the glade entrance, you notice how much larger the trees are here. With each step you take, You feel as though the forest can feel your presence. ',
		zoneExits: 'east southwest',
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: true,
			southeast: false,
			south: false,
			southwest: true,
			west: false,
			northwest: false,
		},
	},
	interactables: {
		names: 'animals',
		animals: {
			desc: 'You see a packs of wild animals grazing in the glade',
		},
	},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let pathNearingEntranceToGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 11,
	x: -4,
	y: -1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'Nearing the Entrance to the Glade of Galvadia',
		desc: '',
		zoneExits: 'northeast west',
		zoneExitsBool: {
			north: false,
			northeast: true,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: true,
			northwest: false,
		},
	},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let onPathToGladeOfGalvadia = {
	npc: [],
	hostile: true,
	id: 12,
	x: -5,
	y: -1,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'On the path to the Glade of Galvadia',
		desc: 'On the path to the Glade',
		zoneExits: 'east southwest',
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: true,
			southeast: false,
			south: false,
			southwest: true,
			west: false,
			northwest: false,
		},
	},
	monsters: {
		blob: {
			name: 'Blob',
			spawnChance: 2,
		},
	},
}
let wellWornPathToTheGlade = {
	npc: [],
	hostile: true,
	id: 13,
	x: -6,
	y: -2,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'On the well worn path between Galvadia and the glade',
		desc: `On the well worn path`,
		zoneExits: 'northeast west',
		zoneExitsBool: {
			north: false,
			northeast: true,
			east: false,
			southeast: false,
			south: false,
			southwest: true,
			west: true,
			northwest: false,
		},
	},
}
let bridgeOverTheRiver = {
	npc: [],
	hostile: true,
	id: 14,
	x: -7,
	y: -2,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'On the bridge overlooking the river',
		desc: `Going over the bridge crossing the river`,
		zoneExits: 'east southwest',
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: true,
			southeast: false,
			south: false,
			southwest: true,
			west: false,
			northwest: false,
		},
	},
}
let castlePathNearRiver = {
	npc: [],
	hostile: true,
	id: 15,
	x: -8,
	y: -3,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'By the edge of the river banks near the bridge',
		desc: `Steep banks near the river bridge`,
		zoneExits: 'northeast west',
		zoneExitsBool: {
			north: false,
			northeast: true,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: true,
			northwest: false,
		},
	},
}
let offTheCastlePath = {
	npc: [],
	hostile: true,
	id: 16,
	x: -9,
	y: -3,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'Just off the castle path',
		desc: `Castle path nearing the bridge`,
		zoneExits: 'east west',
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: true,
			southeast: false,
			south: false,
			southwest: false,
			west: true,
			northwest: false,
		},
	},
}
let castlePathGladeEast = {
	npc: [],
	hostile: true,
	id: 17,
	x: -10,
	y: -3,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'Split in the road toward the castle and the glade',
		desc: `Split in the road: To the north is the castle, to the east is the path to the glade, to the south is the town.`,
		zoneExits: 'north east south',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: true,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let nearingGalvadianTownGates = {
	npc: [],
	hostile: true,
	id: 18,
	x: -10,
	y: -4,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'Road nearing the town',
		desc: `Just outside the town gates. Walls are enormous, no view of the town from outside.`,
		zoneExits: 'north south',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}

let northTownGate = {
	npc: [],
	hostile: true,
	id: 19,
	x: -10,
	y: -5,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: dirtPath,
		areaName: 'Passing through the town gates',
		desc: `Many people travelling through the gates, to and from the castle. Citizens passing through on their way to the forest`,
		zoneExits: 'north south',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let northMostGalvadianTown = {
	npc: [],
	hostile: false,
	id: 21,
	x: -10,
	y: -6,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: `North of town near the gates `,
		desc: `Heavily guarded, busy shops before leaving the town.`,
		zoneExits: 'north south',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let galvadiaTownSquare = {
	//add this to the newLocation function
	npc: [],
	hostile: false,
	id: 22,
	x: -10,
	y: -7,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: 'Galvadia Town Square',
		desc: 'The town square is easily one of the more crowded areas within the walls. A large fountain is in the center of the square, allowing people to sit or take a drink. There are shopkeepers on every corner selling their wares, from food and potions to swords and armor. In front of the fountain is a large SIGN',
		sign: 'The sign reads: To the north is the exit leading to the castle and forest. To the east is the residential district. To the south is the guild district. To the west is ?.',
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let galvadiaSouthSquare = {
	//add this to the newLocation function
	npc: [],
	hostile: false,
	id: 30,
	x: -10,
	y: -8,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: 'South Square nearing a bridge',
		desc: 'Just a little farther to the south is the main bridge connecting the guild district to the town square. ',
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let galvadiaSouthBridge = {
	//add this to the newLocation function
	npc: [],
	hostile: false,
	id: 30,
	x: -10,
	y: -9,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: 'On the Galvadia South Bridge',
		desc: `Bridge is long and wide. Lots of people of all different classes standing, talking, and passing by.`,
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let galvadiaGuildPlazaEntrance = {
	//add this to the newLocation function
	npc: [],
	hostile: false,
	id: 30,
	x: -10,
	y: -9,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: 'Galvadia Guild Plaza',
		desc: 'Entering the guild district, buildings tower on all sides. During classes, the plaza is nearly empty, but the sounds of metal clanging and distant blasts can be heard.',
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let galvadiaGuildPlaza = {
	//add this to the newLocation function
	npc: [],
	hostile: false,
	id: 30,
	x: -10,
	y: -9,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: 'Galvadia Guild Plaza',
		desc: '',
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let galvadiaGuildRow = {
	//add this to the newLocation function
	npc: [],
	hostile: false,
	id: 30,
	x: -10,
	y: -9,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: 'Galvadia Guild Row',
		desc: '',
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let galvadiaSinistralsGuildEntrance = {
	//add this to the newLocation function
	npc: [],
	hostile: false,
	id: 30,
	x: -10,
	y: -9,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: `Sinistral's guild entrance`,
		desc: '',
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let galvadiaWarriorsGuildEntrance = {
	//add this to the newLocation function
	npc: [],
	hostile: false,
	id: 30,
	x: -10,
	y: -9,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: `Warrior's guild entrance`,
		desc: '',
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}
let galvadiaMagesGuildEntrance = {
	//add this to the newLocation function
	npc: [],
	hostile: false,
	id: 30,
	x: -10,
	y: -9,
	z: 0,
	gold: 0,
	descriptions: {
		areaNameClass: town,
		areaName: `Mage's guild entrance`,
		desc: '',
		zoneExits: 'north',
		zoneExitsBool: {
			north: true,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
	},
}

let allAreas = [
	0,
	startingAreaCenter,
	startingAreaEastSecretDown,
	startingAreaSoutheast,
	startingAreaSouth,
	startingAreaSouthwest,
	startingAreaWest,
	startingAreaUp,
	startingAreaBelow,
	centralGlade,
	westGladeOfGalvadia,
	northwestGladeOfGalvadia,
	northGladeOfGalvadia,
	northeastGladeOfGalvadia,
	eastGladeOfGalvadia,
	southeastGladeOfGalvadia,
	southGladeOfGalvadia,
	southwestGladeOfGalvadia,
	entranceToGladeOfGalvadia,
	outsideEntranceToGladeOfGalvadia,
	pathNearingEntranceToGladeOfGalvadia,
	onPathToGladeOfGalvadia,
	wellWornPathToTheGlade,
	bridgeOverTheRiver,
	castlePathNearRiver,
	offTheCastlePath,
	castlePathGladeEast,
	nearingGalvadianTownGates,
	northTownGate,
	northMostGalvadianTown,
]

function directionRefresher() {
	let directionsArray = Object.values(currentArea.descriptions.zoneExitsBool)
	let compiledDirections = []
	for (let i = 0; i < Object.keys(currentArea.descriptions.zoneExitsBool).length; i++) {
		if (directionsArray[i] == true) {
			compiledDirections = `${compiledDirections} ${Object.keys(currentArea.descriptions.zoneExitsBool)[i]}`
		}
	}
	compiledDirections = compiledDirections.slice(1, compiledDirections.length)
	currentArea.descriptions.zoneExits = compiledDirections
}

let AreaMaker = function (isPlayerHere, npc, hostile, id, x, y, z, gold, descriptions, interactables) {
	this.isPlayerHere = isPlayerHere
	this.npc = npc
	this.hostile = hostile
	this.id = id
	this.x = x
	this.y = y
	this.z = z // z being 0 is normal elevation. -1 would be going down and 1 would be going up
	this.gold = gold
	this.descriptions = descriptions
	this.interactables = interactables
	//this.descriptions.zoneExitsFunc = this.descriptions.zoneExitsFunc()
	this.descriptions.zoneExitsFunc()
	allAreas.push(this)
}

let centralTrainingRoom = new AreaMaker(
	true,
	[],
	false,
	areaIdGenerator(),
	-7,
	2,
	0,
	0,
	(descriptions = {
		areaNameClass: castleGrey,
		areaName: `Training Hall`,
		desc: `This is the central training room for castle defender prospects. Around the room, you see many others practicing their stances and strikes.`,
		zoneExitsBool: {},
		zoneExits: [],
		zoneExitsFunc: function () {
			let directionsArray = Object.values(this.zoneExitsBool)
			let compiledDirections = []
			for (let i = 0; i < Object.keys(this.zoneExitsBool).length; i++) {
				if (directionsArray[i] == true) {
					compiledDirections = `${compiledDirections} ${Object.keys(this.zoneExitsBool)[i]}`
				}
			}
			compiledDirections = compiledDirections.slice(1, compiledDirections.length)
			this.zoneExits = compiledDirections
		},
	})
)
centralTrainingRoom.questKeywords = ['l', 'northwest', 'nw']
centralTrainingRoom.questIsComplete1 = false
centralTrainingRoom.questIsComplete2 = false
centralTrainingRoom.questComplete = function (questWord) {
	if (questWord == currentArea.questKeywords.find(keyword => keyword == questWord) && centralTrainingRoom.questIsComplete1 == false) {
		currentArea.descriptions.zoneExitsBool.northwest = true
		currentArea.descriptions.zoneExitsFunc()
		centralTrainingRoom.questIsComplete1 = true
		setTimeout(() => {
			dialogue(`Great!`)
			setTimeout(() => {
				dialogue(`Using the LOOK command will refresh your view of the room, and you will also be able to see any changes made to the room from completing quests, slaying monsters and having their loot drop, or if you just want to get a clear look at the room again.`)
				setTimeout(() => {
					dialogue(`For your next task, head to the NORTHWEST (or just NW)`)
				}, 3000)
			}, 1000)
		}, 1000)
	}
	if (questWord == 'northwest' || (questWord == 'nw' && centralTrainingRoom.questIsComplete2 == false && centralTrainingRoom.questIsComplete1 == true)) {
		centralTrainingRoom.questIsComplete2 = true
		setTimeout(() => {
			dialogue(
				`As you can see, navigating is very easy. The directions you can travel will always be shown beside 'Exits:'. However, there are secrets scattered around the world. When discovered, some of these secrets might open up paths to different directions you would never have seen if you didn't discover them. Most secrets that open up a new path are discovered by inspecting objects from the room description. You'll get a chance to discover one of those areas soon enough. For now, go back to the Central Training Room.`
			)
		}, 1000)
	}
}

let northwestTrainingRoom = new AreaMaker(
	true,
	[],
	false,
	areaIdGenerator(),
	-8,
	3,
	0,
	0,
	(descriptions = {
		areaNameClass: castleGrey,
		areaName: `Northwest Training Room`,
		desc: `NORTHWEST TRAINING ROOM `,
		zoneExitsBool: {
			southeast: true,
		},
		zoneExits: [],
		zoneExitsFunc: function () {
			let directionsArray = Object.values(this.zoneExitsBool)
			let compiledDirections = []
			for (let i = 0; i < Object.keys(this.zoneExitsBool).length; i++) {
				if (directionsArray[i] == true) {
					compiledDirections = `${compiledDirections} ${Object.keys(this.zoneExitsBool)[i]}`
				}
			}
			compiledDirections = compiledDirections.slice(1, compiledDirections.length)
			this.zoneExits = compiledDirections
		},
	})
)
northwestTrainingRoom.questKeywords = ['southeast', 'se']
northwestTrainingRoom.questIsComplete1 = false
northwestTrainingRoom.questComplete = function (questWord, questWord2, questWord3) {
	console.log(questWord, questWord2, questWord3, ' QUEST WORDS')
	if (questWord == currentArea.questKeywords.find(keyword => keyword == questWord) && northwestTrainingRoom.questIsComplete1 == false) {
		northwestTrainingRoom.questIsComplete1 = true
		centralTrainingRoom.descriptions.zoneExitsBool.north = true
		centralTrainingRoom.descriptions.zoneExitsFunc()
		setTimeout(() => {
			dialogue(`TEST`)
		}, 1000)
	}
}

////////////////////////////////////////////////////////OLD STARTING AREA BELOW////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////OLD STARTING AREA BELOW////////////////////////////////////////////////////////////////////////////////////////

let startingAreaNorthwest = new AreaMaker(
	false,
	[],
	false,
	areaIdGenerator(allAreas), //this runs a function to generate its own ID
	2, //x
	1, //y
	0, //z
	0,
	(descriptions = {
		areaNameClass: galvadianGreen,
		areaName: 'Northwest Starting Area',
		desc: `You have entered the northwest section of the starting area! Next we will go over some simple commands. Just as you can type 'l' to look at the room you're currently in, you can also type 'l' and then any direction to look into the next room! This can be useful if you're avoiding monsters or just exploring and trying to figure out which direction you'd like to go. Typing 'stats' will give you an overview of all your primary stats, 'exp' will show all your information related to expierence points, skill points, and battle points, and skills will show a list of all your currently trained skills! Next, try going 'se' and then 'n'., `,
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: false,
			southeast: true,
			south: false,
			southwest: false,
			west: false,
			northwest: false,
		},
		zoneExits: [],
		zoneExitsFunc: function () {
			let directionsArray = Object.values(this.zoneExitsBool)
			let compiledDirections = []
			for (let i = 0; i < Object.keys(this.zoneExitsBool).length; i++) {
				if (directionsArray[i] == true) {
					compiledDirections = `${compiledDirections} ${Object.keys(this.zoneExitsBool)[i]}`
				}
			}
			compiledDirections = compiledDirections.slice(1, compiledDirections.length)
			this.zoneExits = compiledDirections
		},
	}),
	{
		names: ['mushrooms', 'leaves'],
		mushrooms: {
			name: 'mushrooms',
			desc: function () {
				quickMessage('You see a little spotted mushroom poking out from a patch of leaves. It appears to be looking at you.', 'descriptions')
			},
		},
	}
)
let startingAreaNorth = new AreaMaker(
	false,
	[],
	true,
	areaIdGenerator(allAreas), //this runs a function to generate its own ID
	3, //x
	1, //y
	0, //z
	0,
	(descriptions = {
		areaNameClass: galvadianGreen,
		areaName: 'North Starting Area',
		desc: `Now we will go over inventory and equipment. Type 'i' to take a look at your inventory. The top portion displays all your equipped weapons and armor, while the bottom portion will show you all the items in your backpack . To take something out of your backpack, type 'unpack' followed by the item name. Some item names can be shortened. For instance, if you have a 'rusted sword' in your backback, you could type 'unpack rusted', 'unpack sword', or 'unpack rusted sword'. If you have multiple items with the same name, make sure to type 'i' again to make sure you're holding the item you wish to use or equip. Type 'swap' if you want to move the item in your right hand to your left hand, and the item in your left hand to your right hand. To equip a piece of armor, make sure to hold it in your right hand and then type 'equip', 'don', or 'wear' followed by the name of the item. A sword will be automatically wielded when you're holding it in your right hand while a shield will be automatically wielded when you're holding it in your left hand. You can wield a weapon in your left and right hand once you learn the skill 'dual wielding', if your class allows. To free your hands up to be able to handle something else, type 'pack right', 'pack left', or just 'p left' or 'p right'. To remove a piece of armor, type 'remove' followed by the armor piece you wish to remove. Unequipping a sword is as easy as putting it away in your backpack. Next, you'll want to make your way to the Northeast Starting Area!`,
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: false,
			southeast: false,
			south: true,
			southwest: false,
			west: false,
			northwest: false,
		},
		zoneExits: [],
		zoneExitsFunc: function () {
			let directionsArray = Object.values(this.zoneExitsBool)
			let compiledDirections = []
			for (let i = 0; i < Object.keys(this.zoneExitsBool).length; i++) {
				if (directionsArray[i] == true) {
					compiledDirections = `${compiledDirections} ${Object.keys(this.zoneExitsBool)[i]}`
				}
			}
			compiledDirections = compiledDirections.slice(1, compiledDirections.length)
			this.zoneExits = compiledDirections
		},
	})
)
let startingAreaNortheast = new AreaMaker(
	false,
	[],
	true,
	areaIdGenerator(allAreas), //this runs a function to generate its own ID
	4, //x
	1, //y
	0, //z
	0,
	(descriptions = {
		areaNameClass: galvadianGreen,
		areaName: 'Northeast Starting Area',
		desc: `Next you'll be learning how to use consumable and magic items. Depending on the consumable, you'll want to use either the DRINK, EAT, or USE commands. EAT or DRINK is typically used for edibles, drinks, and potions while the USE command can be used for non-drinkables and non-edibles. USE is also more often used to interact with an area if that area has something to interact with. You will learn more about this in the next couple rooms. To use a magic item, type ACTIVATE followed by the item name. Once activated, use the TARGET command, or 't', followed by the name of the target. If you wish to attempt to target yourself, just type 't'. When in doubt, use the EXAMINE (or 'ex') command followed by the item name to find out more information about that item. You will often see if an item is edible, drinkable, activatable, or useable. To the east of the Starting Area, you will learn more about the EXAMINE command.`,
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: false,
			southeast: false,
			south: false,
			southwest: true,
			west: false,
			northwest: false,
		},
		zoneExits: [],
		zoneExitsFunc: function () {
			let directionsArray = Object.values(this.zoneExitsBool)
			let compiledDirections = []
			for (let i = 0; i < Object.keys(this.zoneExitsBool).length; i++) {
				if (directionsArray[i] == true) {
					compiledDirections = `${compiledDirections} ${Object.keys(this.zoneExitsBool)[i]}`
				}
			}
			compiledDirections = compiledDirections.slice(1, compiledDirections.length)
			this.zoneExits = compiledDirections
		},
	})
)
let startingAreaEast = new AreaMaker(
	false,
	[],
	true,
	areaIdGenerator(allAreas), //this runs a function to generate its own ID
	4, //x
	0, //y
	0, //z
	0,
	(descriptions = {
		areaNameClass: galvadianGreen,
		areaName: 'East of the Starting Area',
		desc: `Using the EXAMINE command, or 'ex', is useful for a variety of reasons. You can examine enemies, weapons, armor, and even people to learn more about them, though, some things may require you to have hightened perception to be able to see all of their properties (items) or strengths, weaknesses, or abilities (enemies). Sometimes rooms will contain interactable objects that aren't as apparent as monsters, items, or people. Examinable objects will never have a long list of words for you to examine such as, 'ex fallen tree trunk'. You would just type 'ex fallen', 'ex tree', or 'ex trunk'. Be careful of which word you use in case there are multiple objects with the same name that you can examine. Go ahead and try typing 'ex tree'. You will get a chance to practice all of these exmaining methods soon. Next you will want to head to the southeaast part of the Starting Area. `,
		zoneExitsBool: {
			north: false,
			northeast: false,
			east: false,
			southeast: false,
			south: false,
			southwest: false,
			west: true,
			northwest: false,
			up: false,
			down: false,
		},
		zoneExits: [],
		zoneExitsFunc: function () {
			let directionsArray = Object.values(this.zoneExitsBool)
			let compiledDirections = []
			for (let i = 0; i < Object.keys(this.zoneExitsBool).length; i++) {
				if (directionsArray[i] == true) {
					compiledDirections = `${compiledDirections} ${Object.keys(this.zoneExitsBool)[i]}`
				}
			}
			compiledDirections = compiledDirections.slice(1, compiledDirections.length)
			this.zoneExits = compiledDirections
		},
	}),
	{
		trees: {
			name: 'trees',
			desc: function () {
				quickMessage(`You look at the surrounding trees, and one 'fallen tree' catches your eye. Perhaps you should inspect it.`, 'grey')
			},
		},
		fallenTree: {
			name: 'fallen tree',
			desc: function () {
				quickMessage(`After taking a closer look at the fallen tree, you discover a hole in the ground beneath the trunk.`, 'grey')
				if (currentArea.descriptions.zoneExitsBool.down == false) {
					quickMessage(`You discover a secret way below!`)
				}
				let revert = currentArea.descriptions.zoneExits
				startingAreaEast.descriptions.zoneExitsBool.down = true
				startingAreaEast.descriptions.zoneExits += ' down'
				setTimeout(() => {
					startingAreaEast.descriptions.zoneExitsBool.down = false
					startingAreaEast.descriptions.zoneExits = revert
				}, 5000)
			},
		},
	}
)

let areaHandler = {
	get: (target, key) => {
		if (typeof target[key] === 'object' && target[key] !== null) {
			return new Proxy(target[key], handler)
		}
		return target[key]
	},
	set: (target, prop, value) => {
		target[prop] = value
		console.log(target, ' target')
		console.log(prop)
	},
}
let proxy = new Proxy(currentArea, areaHandler)

//KEEP THIS BELOW ALL AreaMaker rooms!!!

let questKeywords = allAreas.filter(area => {
	allAreas.find(area => area.questKeywords == currentArea.questKeywords)
	if (area.questKeywords != undefined) {
		return area.keywords
	}
})
////////////////////////////////////////////////////////OLD STARTING AREA////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////OLD STARTING AREA////////////////////////////////////////////////////////////////////////////////////////

// newLocationTest = function(x, y, z, special) {
// 	let newArea = allAreas.find()
// 	if (player.x == x && player.y == y && player.z == z) {
// 		currentArea =
// 	}
// }

///////////////////////////////////////////////////////////////////////////////////////////////
function updateScroll() {
	masterArea.scrollTop = masterArea.scrollHeight
}

newLocation = function (x, y, z, special) {
	proxy.isPlayerHere = false
	let newArea = allAreas.find(area => area.x == x && area.y == y && area.z == z)
	if (player.x === x && player.y === y && player.z === z) {
		currentArea = newArea
		additional.innerHTML = playerProxy.x + ', ' + playerProxy.y + ', ' + currentArea.descriptions.areaName + ' ' + currentArea.id
	}
	player.roomId = currentArea.id
	proxy.isPlayerHere = true
}

//Changes players x, y, or z coordinate if a move is possible and is made
//the locationCheck parameter below calls the newLocation function above

//Rolls to see if a monster will spawn
function roll() {
	let randomNum = Math.floor(Math.random() * 10) + 1
	if (currentArea.monsters != undefined && randomNum === currentArea.monsters.blob.spawnChance) {
		monsterGen(blob(currentArea))
		quickMessage('A Blob has entered the room!')
	}
}
function itemRoll() {
	armorGen(oldLegguards(currentArea))
	armorGen(oldMail(currentArea))
	armorGen(oldHelmet(currentArea))
	armorGen(oldShield(currentArea))
	weaponGen(rustedSword(currentArea))
	weaponGen(rustedClaymore(currentArea))
	consumableGen(smallPotion(currentArea))
}

//Spawns a monster if the roll === monster spawn chance
//setInterval(monsterSpawn, 5000);
//_________________________________________________________________________________________________________________________________________________________________________________________________________________
//paragraph elements
let monster1 = document.getElementById('monster1')
let monster2 = document.getElementById('monster2')
let monster3 = document.getElementById('monster3')

let dragonScale = 'Dragon Scale'
let dragonSword = 'Dragon Sword'
let dragonTooth = 'Dragon Tooth'
//ITEMS_________________ITEMS______________________ITEMS___________________ITEMS______________________ITEMS________________________ITEMS
pushItem.push(brightFlower())
//////////////////////////////////////////////////++QUEST ITEMS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++QUEST ITEMS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++QUEST ITEMS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++QUEST ITEMS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++QUEST ITEMS++//////////////////////////////////////////////////
function brightFlower() {
	let brightFlower = {
		id: function () {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: 4,
		name: 'Bright Yellow Flower',
		keywords: ['bright', 'yellow', 'flower', 'bright yellow flower'],
		type: { quest: true },
		desc: () => {
			quickMessage('A bright, pretty yellow flower', 'descriptions')
		},
	}
	return brightFlower
}
//////////////////////////////////////////////////++MISC ITEMS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++MISC ITEMS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++MISC ITEMS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++MISC ITEMS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++MISC ITEMS++//////////////////////////////////////////////////
function pieceOfBlob() {
	let pieceOfBlob = {
		id: function () {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'piece of blob',
		keywords: ['piece', 'blob', 'piece of blob'],
		gold: 10,
		desc: () => {
			quickMessage('The leftover material from a blob. Perhaps it has some use?', 'desciptions')
		},
	}
	return pieceOfBlob
}
//////////////////////////////////////////////////++WEAPONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++WEAPONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++WEAPONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++WEAPONS++//////////////////////////////////////////////////
//////////////////////////////////////////////////++WEAPONS++//////////////////////////////////////////////////
function steelSword() {
	let steelSword = {
		id: function () {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'steel sword',
		keywords: ['steel', 'sword', 'steel sword'],
		topDamage: randomNumberRange(7, 10),
		bottomDamage: randomNumberRange(3, 5),
	}
	return steelSword
}

function rustedSword(monsterLevelOrShopValue, isMonsterDrop) {
	//This funciton is executed when either a monster dies and drops loot, or when purchased from a shop
	let monsterLevel = monsterLevelOrShopValue //this is the level of the monster that drops this item
	let monsterSellValue = monsterLevel * 0.5 + 8 //this is the value of the item when obtained from a monster drop
	let vendorBuyValue = monsterLevelOrShopValue //this is the pre-set BUY price of the item
	let vendorSellValue = 1 + monsterLevelOrShopValue * 0.5 //this is the SELLBACK value - only this when purchased from a shop
	let rustedSword = {
		id: () => {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'rusted sword',
		keywords: ['rusted', 'sword', 'rusted sword'],
		topDamage: randomNumberRange(3, 5),
		bottomDamage: randomNumberRange(1, 3),
		mods: {
			str: 10,
			con: 0,
			slashingPen: 15,
			piercingPen: 10,
			bluntPen: 0,
		},
		type: {
			weapon: 'sword',
			oneHanded: true,
		},
		skillUsed: oneHanded,
		buyValue: vendorBuyValue,
		sellValue: isMonsterDrop == true ? monsterSellValue : vendorSellValue,
		desc: (itemId, bottomDamage, topDamage, itemName, mods) => {
			const description = `This sword is barely holding itself together. 
The blade is cracked and the hilt is wobbly. It might be good enough to slay a few blobs though.`
			weaponDescription(itemId, bottomDamage, topDamage, itemName, mods, description)
		},
		swing: (weapon, monster, damage) => rustedSwordSwing(expertise(weapon), playerSwingType(), playerWeaponName(weapon), atIntoOnto(), enemyName(monster), damageNumber(damage), playerPenetrationNameFunc(playerPenetrationName), damage),
	}
	return rustedSword
}

function rustedClaymore(monsterLevelOrShopValue, isMonsterDrop) {
	let monsterLevel = monsterLevelOrShopValue //this is the level of the monster that drops this item
	let monsterSellValue = monsterLevel * 0.5 + 8 //this is the value of the item when obtained from a monster drop
	let vendorBuyValue = monsterLevelOrShopValue //this is the pre-set BUY price of the item
	let vendorSellValue = 1 + monsterLevelOrShopValue * 0.5
	let rustedClaymore = {
		id: () => {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'rusted claymore',
		keywords: ['rusted', 'claymore', 'rusted claymore'],
		topDamage: randomNumberRange(8, 9),
		bottomDamage: randomNumberRange(3, 4),
		mods: {
			slashingPen: 100,
			piercingPen: 0,
			bluntPen: 0,
		},
		type: {
			weapon: 'sword',
			twoHanded: true,
			sword: true,
		},
		skillUsed: twoHanded,
		desc: (itemId, bottomDamage, topDamage, itemName, mods) => {
			const description = `A giant, rusted claymore.`
			weaponDescription(itemId, bottomDamage, topDamage, itemName, mods, description)
		},
		swing: (weapon, monster, damage) => rustedSwordSwing(expertise(weapon), playerSwingType(), playerWeaponName(weapon), atIntoOnto(), enemyName(monster), damageNumber(damage), playerPenetrationNameFunc(playerPenetrationName), damage),
	}
	return rustedClaymore
}
//////////////////////////////////////////////////++ARMOR++//////////////////////////////////////////////////
//////////////////////////////////////////////////++ARMOR++//////////////////////////////////////////////////
//////////////////////////////////////////////////++ARMOR++//////////////////////////////////////////////////
//////////////////////////////////////////////////++ARMOR++//////////////////////////////////////////////////
//////////////////////////////////////////////////++ARMOR++//////////////////////////////////////////////////
function oldHelmet(monsterLevelOrShopValue, isMonsterDrop) {
	//This funciton is executed when either a monster dies and drops loot, or when purchased from a shop
	let monsterLevel = monsterLevelOrShopValue //this is the level of the monster that drops this item
	let monsterSellValue = monsterLevel * 0.5 + 8 //this is the value of the item when obtained from a monster drop
	let vendorBuyValue = monsterLevelOrShopValue //this is the pre-set BUY price of the item
	let vendorSellValue = 1 + monsterLevelOrShopValue * 0.5 //this is the SELLBACK value - only this when purchased from a shop
	let oldHelmet = {
		id: () => {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'old helmet',
		keywords: ['old', 'helmet', 'helm', 'old helmet'],
		mods: {
			armor: 5,
		},
		type: {
			armor: 'head',
			head: true,
		},
		buyValue: vendorBuyValue,
		sellValue: isMonsterDrop == true ? monsterSellValue : vendorSellValue,
		slot: slot3,
		desc: (itemId, itemName, mods) => {
			const description = `Your nutsack would protect your head better than this thing.`
			armorDescription(itemId, itemName, mods, description)
		},
	}
	return oldHelmet
}
function oldMail() {
	let oldMail = {
		id: () => {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'old mail',
		keywords: ['old', 'mail', 'old mail'],
		mods: {
			armor: 5,
		},
		type: {
			armor: 'chest',
			chest: true,
		},
		slot: slot6,
		desc: (itemId, itemName, mods) => {
			const description = `This sword is barely holding itself together. The blade is cracked and the 
			hilt is wobbly. It might be good enough to slay a few blobs though.`
			armorDescription(itemId, itemName, mods, description)
		},
	}
	return oldMail
}
function oldShoulderguards() {
	let oldShoulderguards = {
		id: () => {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'old shoulderguards',
		keywords: ['old', 'shoulder', 'shoulderguards', 'old shoulderguards'],
		slashingArmor: 0,
		piercingArmor: 0,
		bluntArmor: 0,
		mods: {
			armor: 5,
		},
		type: {
			armor: true,
			shoulders: true,
		},
		slot: slot5,
		desc: (itemId, itemName, mods) => {
			const description = `This sword is barely holding itself together. The blade is cracked and the 
hilt is wobbly. It might be good enough to slay a few blobs though.`
			armorDescription(itemId, itemName, mods, description)
		},
	}
	return oldShoulderguards
}

function oldLegguards() {
	//do while for armor?
	let oldLegguards = {
		id: () => {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'old legguards',
		keywords: ['old', 'legs', 'legguards', 'old legguards'],
		mods: {
			armor: 50,
			slashingArmor: 2,
			piercingArmor: 0,
			bluntArmor: 10,
		},
		type: {
			armor: 'legs',
			legs: true,
		},
		slot: slot11,
		desc: (itemId, itemName, mods) => {
			const description = `A woman's unshaven legs provide more protection than this piece of junk.`
			armorDescription(itemId, itemName, mods, description)
		},
	}
	return oldLegguards
}
function oldShield() {
	let oldShield = {
		id: () => {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'old shield',
		keywords: ['old', 'shield', 'old shield'],
		mods: {
			armor: 50,
			slashingArmor: 20,
			piercingArmor: 20,
			bluntArmor: 20,
		},
		type: {
			armor: 'shield',
			shield: true,
		},
		slot: slot2,
		desc: (itemId, itemName, mods) => {
			const description = `This shield is about as sturdy as a dinner plate with a turd on it.`
			shieldDescription(itemId, itemName, mods, description)
		},
	}
	return oldShield
}
//////////////////////////////////////////////////++CONSUMABLES++//////////////////////////////////////////////////
//////////////////////////////////////////////////++CONSUMABLES++//////////////////////////////////////////////////
//////////////////////////////////////////////////++CONSUMABLES++//////////////////////////////////////////////////
//////////////////////////////////////////////////++CONSUMABLES++//////////////////////////////////////////////////
//////////////////////////////////////////////////++CONSUMABLES++//////////////////////////////////////////////////
function smallPotion() {
	let smallPotion = {
		id: function () {
			for (let i = 0; i < 50; i++) {
				if (!pushItem[i]) {
					return i
				}
			}
		},
		roomId: currentArea.id,
		name: 'small potion',
		keywords: ['small', 'potion', 'small potion', 'small pot'],
		type: drink,
		property: function () {
			var currentHealth = player.health
			var maxHealth = player.maxHealth
			var healthDifference = maxHealth - currentHealth
			if (healthDifference >= 20) {
				player.health = currentHealth + 20
				quickMessage(`you restore 20 hit points`)
			} else {
				player.health = currentHealth + healthDifference
				quickMessage(`you restore ${healthDifference} hit points`)
			}
			displayPlayerHealthFunc()
		},
	}
	return smallPotion
}
//_________________________________________________________________________________________________________________
function statDrink(secondCommand) {
	let selectedItem = pushItem.find(item => item.keywords.find(keyword => keyword == secondCommand))
	if (secondCommand == undefined) {
		quickMessage(`you must specify what you want to drink`)
	} else if (selectedItem == undefined) {
		quickMessage(`You do not have a ${secondCommand} to drink`)
	} else if (selectedItem.type != drink) {
		quickMessage(`It would be proposterous to try to drink a ${secondCommand}!`)
	} else if (selectedItem.roomId == backpack) {
		quickMessage(`you must first hold your ${selectedItem.name} before drinking it`)
	} else if (selectedItem.roomId == slot1 || selectedItem.roomId == slot2) {
		selectedItem.property()
		if (player.rightHand == selectedItem.name) {
			player.rightHand = empty
		} else {
			player.leftHand = empty
		}
		let removeThisItem = pushItem.findIndex(x => x.id == selectedItem.id)
		pushItem.splice(removeThisItem, 1)
	}
}
//item is in right hand, item type is armor
function donWearEquip(secondCommand) {
	let selectedItem = pushItem.find(item => item.keywords.find(keyword => keyword == secondCommand))
	let selectedSlot = selectedItem ? selectedItem.slot : undefined
	if (secondCommand == undefined) {
		quickMessage(`you must specify what you want to equip`)
	} else if (selectedItem == undefined) {
		quickMessage(`You do not have a ${secondCommand} to wear`)
	} else if (player[selectedSlot] != empty) {
		quickMessage(`You already have something equipped of that armor type`)
	} else if (!selectedItem.type.armor) {
		quickMessage(`It would be proposterous to wear a ${secondCommand}`)
	} else if (selectedItem.roomId == backpack) {
		quickMessage(`you must first wield your ${selectedItem.name} before equipping it`)
	} else if ((selectedItem.type.armor && selectedItem.roomId == slot1) || selectedItem.roomId == slot2) {
		quickMessage(`You equip your ${selectedItem.name}`)
		let rightOrLeft = selectedItem.roomId == slot1 ? true : false
		if (rightOrLeft) {
			player.rightHand = empty
		} else if (rightOrLeft == false) {
			player.leftHand = empty
		}
		selectedItem.roomId = selectedSlot
		player[selectedSlot] = selectedItem.name
		armorAddPlayerAttribute(selectedItem)
	}
}
function unequipRemove(secondCommand) {
	let selectedItem = pushItem.find(item => item.keywords.find(keyword => keyword == secondCommand))
	let selectedSlot = selectedItem ? selectedItem.slot : undefined
	if (secondCommand == undefined) {
		quickMessage(`you must specify what you want to unequip`)
	} else if (selectedItem == undefined) {
		quickMessage(`You do not have a ${secondCommand} to unequip`)
	} else if (player[selectedSlot] == empty) {
		quickMessage(`You do not have anything equipped in that slot to unequip`)
	} else if ((selectedItem.type == armor && selectedItem.roomId == selectedItem.slot) || selectedItem.roomId == selectedItem.slot) {
		itemRemoved(selectedItem, selectedSlot)
	}
}
function itemRemoved(selectedItem, selectedSlot) {
	if (player.rightHand == empty) {
		selectedItem.roomId = slot1
		player.rightHand = selectedItem.name
		player[selectedSlot] = empty
		armorRemovePlayerAttribute(selectedItem)
		quickMessage(`You remove your ${selectedItem.name} into your right hand`)
	} else if (player.leftHand == empty) {
		selectedItem.roomId = slot2
		player.leftHand = selectedItem.name
		player[selectedSlot] = empty
		armorRemovePlayerAttribute(selectedItem)
		quickMessage(`You remove your ${selectedItem.name} into your left hand`)
	} else {
		quickMessage(`Your hands are too full to carry anything else`)
	}
}
function weaponOrShieldAddPlayerAttribute(moddedWeaponOrShield) {
	if (!moddedWeaponOrShield.type.weapon == false || moddedWeaponOrShield.type == shield) {
		let moddedWeaponOrShieldMods = moddedWeaponOrShield.mods
		let moddedWeaponOrShieldKeys = Object.keys(moddedWeaponOrShieldMods)
		for (let i = 0; i < moddedWeaponOrShieldKeys.length; i++) {
			player[moddedWeaponOrShieldKeys[i]] = player[moddedWeaponOrShieldKeys[i]] + moddedWeaponOrShieldMods[moddedWeaponOrShieldKeys[i]]
		}
	}
}
function weaponOrShieldRemovePlayerAttribute(moddedWeaponOrShield) {
	if (!moddedWeaponOrShield.type.weapon == false || moddedWeaponOrShield.type == shield) {
		let moddedWeaponOrShieldMods = moddedWeaponOrShield.mods
		let moddedWeaponOrShieldKeys = Object.keys(moddedWeaponOrShieldMods)
		for (let i = 0; i < moddedWeaponOrShieldKeys.length; i++) {
			player[moddedWeaponOrShieldKeys[i]] = player[moddedWeaponOrShieldKeys[i]] - moddedWeaponOrShieldMods[moddedWeaponOrShieldKeys[i]]
		}
	}
}
function armorAddPlayerAttribute(moddedArmor) {
	if (moddedArmor.type.armor) {
		let moddedArmorMods = moddedArmor.mods
		let moddedArmorKeys = Object.keys(moddedArmorMods)
		for (let i = 0; i < moddedArmorKeys.length; i++) {
			player[moddedArmorKeys[i]] = player[moddedArmorKeys[i]] + moddedArmorMods[moddedArmorKeys[i]]
		}
	}
}
function armorRemovePlayerAttribute(moddedArmor) {
	if (moddedArmor.type.armor) {
		let moddedArmorMods = moddedArmor.mods
		let moddedArmorKeys = Object.keys(moddedArmorMods)
		for (let i = 0; i < moddedArmorKeys.length; i++) {
			player[moddedArmorKeys[i]] = player[moddedArmorKeys[i]] - moddedArmorMods[moddedArmorKeys[i]]
		}
	}
}

//MONSTERS
function testBlob(area) {
	let testBlob = {
		x: function () {
			3
		},
		y: function () {
			;-6
		},
		level: () => randomNumberRange(1, 1),
		str: () => 4 + this.level,
		dex: () => 0 + this.level,
		agi: () => 4 + this.level,
		int: () => 4 + this.level,
		wis: () => 4 + this.level,
		con: () => 1000 + this.level,
		hostile: true,
		combat: false,
		health: () => this.con * 3,
		monsterAttack: () => this.str + this.dex,
		accuracy: () => this.str + this.agi + this.dex,
		dodge: () => this.dex,
		monsterDamageCalc: function () {
			let hitRoll = Math.floor(Math.random() * 100) + 1
			let enemyHitChance = Math.ceil((this.accuracy / (this.accuracy + player.dodge)) * 100)
			let monsterBottomDamage = this.monsterAttack * 0.3 * (10 / (10 + player.armor))
			let monsterTopDamage = this.monsterAttack * 0.7 * (10 / (10 + player.armor))
			if (enemyHitChance >= hitRoll) {
				return randomNumberRange(monsterBottomDamage, monsterTopDamage)
			} else {
				return false
			}
		},
		factor: 1,
		experience: () => 10 * this.factor + this.level + (this.level - player.level),
		armor: 1,
		slashingArmor: 200,
		piercingArmor: 1,
		bluntArmor: 1,
		roomId: -7,
		randomItemDrops: Math.floor(Math.random() * 4) + 1,
		name: 'testblob',
		abilityName: 'Blob Toss',
		abilityDamage: Math.floor(Math.random() * 3 + 1),
		itemDrops: [],
		gold: function () {
			let goldRandom = randomSingleNumber(100)
			if (goldRandom <= 52) {
				gold = randomNumberRange(1, 4)
				return gold
			} else if (goldRandom <= 77 && goldRandom >= 53) {
				gold = randomNumberRange(4, 6)
				return gold
			} else if (goldRandom <= 92 && goldRandom >= 78) {
				gold = randomNumberRange(6, 8)
				return gold
			} else if (goldRandom >= 79) {
				gold = 8
				return gold
			}
		},
		itemDropsRoll: function () {
			if (1 == 1 /*randomSingleNumber(100) === randomNumberRange(4, 9)*/) {
				this.itemDrops.push(rustedSword())
			}
			if (1 == 1 /*randomSingleNumber(100) === randomNumberRange(50, 60)*/) {
				this.itemDrops.push(pieceOfBlob())
			} else {
			}
		},
		id: function () {
			for (let i = 0; i < 50; i++) {
				if (!pushMonster[i]) {
					return i
				}
			}
		},
	}
	return testBlob
}
function blob(area) {
	let blobLevel
	let blob = {
		x: function () {
			return currentArea.x
		},
		y: function () {
			return currentArea.y
		},
		level: () => {
			let level = randomNumberRange(1, 5)
			blobLevel = level
			return level
		},
		str: () => 4 + this.level,
		dex: () => 4 + this.level,
		agi: () => 4 + this.level,
		int: () => 4 + this.level,
		wis: () => 4 + this.level,
		con: () => 5 + this.level,
		hostile: true,
		combat: false,
		health: () => this.con * 3,
		monsterAttack: () => this.str + this.dex,
		accuracy: () => this.str + this.agi + this.dex,
		dodge: () => this.dex,
		monsterDamageCalc: function () {
			let hitRoll = Math.floor(Math.random() * 100) + 1
			let enemyHitChance = Math.ceil((this.accuracy / (this.accuracy + player.dodge)) * 100)
			let monsterBottomDamage = this.monsterAttack * 0.3 * (10 / (10 + player.armor))
			let monsterTopDamage = this.monsterAttack * 0.7 * (10 / (10 + player.armor))
			if (enemyHitChance >= hitRoll) {
				return randomNumberRange(monsterBottomDamage, monsterTopDamage)
			} else {
				return false
			}
		},
		factor: 1,
		experience: () => 10 * this.factor + this.level + (this.level - player.level),
		armor: 20,
		slashingArmor: 10,
		piercingArmor: 10,
		bluntArmor: 10,
		roomId: area.id,
		randomItemDrops: Math.floor(Math.random() * 4) + 1,
		name: 'blob',
		abilityName: 'Blob Toss',
		abilityDamage: Math.floor(Math.random() * 3 + 1),
		itemDrops: [],
		gold: function () {
			let goldRandom = randomSingleNumber(100)
			if (goldRandom <= 52) {
				gold = randomNumberRange(1, 4)
				return gold
			} else if (goldRandom <= 77 && goldRandom >= 53) {
				gold = randomNumberRange(4, 6)
				return gold
			} else if (goldRandom <= 92 && goldRandom >= 78) {
				gold = randomNumberRange(6, 8)
				return gold
			} else if (goldRandom >= 79) {
				gold = 8
				return gold
			}
		},
		itemDropsRoll: function () {
			if (1 == 1 /*randomSingleNumber(100) === randomNumberRange(4, 9)*/) {
				this.itemDrops.push(rustedSword(blobLevel, true))
			}
			if (1 == 1 /*randomSingleNumber(100) === randomNumberRange(50, 60)*/) {
				this.itemDrops.push(pieceOfBlob())
			} else {
			}
		},
		id: function () {
			for (let i = 0; i < 50; i++) {
				if (!pushMonster[i]) {
					return i
				}
			}
		},
		blobMove: function () {
			if (this.y == player.y + 1 && this.x == player.x + 1) {
				this.y = this.y - 1
				this.x = this.x - 1
				direction = 'northeast'
				quickMessage(`a ${this.name} slimes in from the ${direction}`)
				updateScroll()
			} else if (this.y == player.y - 1 && this.x == player.x + 1) {
				this.y = this.y + 1
				this.x = this.x - 1
				direction = 'southeast'
				quickMessage(`a ${this.name} slimes in from the ${direction}`)
				updateScroll()
			} else if (this.y == player.y - 1 && this.x == player.x - 1) {
				this.y = this.y + 1
				this.x = this.x + 1
				direction = 'southwest'
				quickMessage(`a ${this.name} slimes in from the ${direction}`)
				updateScroll()
			} else if (this.y == player.y + 1 && this.x == player.x - 1) {
				this.y = this.y - 1
				this.x = this.x + 1
				direction = 'northwest'
				quickMessage(`a ${this.name} slimes in from the ${direction}`)
				updateScroll()
			} else if (this.y == player.y + 1) {
				this.y = this.y - 1
				direction = 'north'
				quickMessage(`a ${this.name} slimes in from the ${direction}`)
				updateScroll()
			} else if (this.x == player.x + 1) {
				this.x = this.x - 1
				direction = 'east'
				quickMessage(`a ${this.name} slimes in from the ${direction}`)
				updateScroll()
			} else if (this.y == player.y - 1) {
				this.y = this.y + 1
				direction = 'south'
				quickMessage(`a ${this.name} slimes in from the ${direction}`)
				updateScroll()
			} else if (this.x == player.x - 1) {
				this.x = this.x + 1
				direction = 'west'
				quickMessage(`a ${this.name} slimes in from the ${direction}`)
				updateScroll()
			}
		},
		blobBehaviorInterval: undefined,
		behaviorInterval: false,
		blobBehavior: function () {
			this.blobBehaviorInterval = setInterval(() => {
				if (this.combat === false && this.roomId == player.roomId) {
					quickMessage(`${this.name} starts moving toward you...`)
					updateScroll()
					player.combat = true
					this.combat = player.combat
				} else if (this.combat == true && this.roomId == player.roomId) {
					this.combat = player.combat
					let monsterDamage = this.monsterDamageCalc()
					if (monsterDamage == false) {
						quickMessage(`${this.name} spits at you and misses!`)
						updateScroll()
					} else {
						quickMessage(`${this.name} ${this.id} spits on you for [${monsterDamage}] damage`)
						updateScroll()
						player.health = player.health - monsterDamage
						displayPlayerHealthFunc()
					}
				}
				this.blobMove()
				monsterLocation()
			}, 8000)
		},
	}
	console.log(blobLevel, 'blobs blobLevel')
	return blob
}

//randomNumberRange(3, 10) will return range of numbers between 3 and 9. what is returned is (min, max -1) technically
function randomNumberRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min + 1)
}
function randomSingleNumber(maxNumber) {
	return Math.floor(Math.random() * maxNumber) + 1
}
function monsterLocation(directionMonsterComesInFrom) {
	for (var i = 0; i < pushMonster.length; i++) {
		//Central Glade
		if (pushMonster[i].x === 0 && pushMonster[i].y === 0) {
			pushMonster[i].roomId = 0
		}
		if (pushMonster[i].x === -1 && pushMonster[i].y === 0) {
			pushMonster[i].roomId = 1
		}
		if (pushMonster[i].x === -1 && pushMonster[i].y === 1) {
			pushMonster[i].roomId = 2
		}
		if (pushMonster[i].x === 0 && pushMonster[i].y === 1) {
			pushMonster[i].roomId = 3
		}
		if (pushMonster[i].x === 1 && pushMonster[i].y === 1) {
			pushMonster[i].roomId = 4
		}
		if (pushMonster[i].x === 1 && pushMonster[i].y === 0) {
			pushMonster[i].roomId = 5
		}
		if (pushMonster[i].x === 1 && pushMonster[i].y === -1) {
			pushMonster[i].roomId = 6
		}
		if (pushMonster[i].x === 0 && pushMonster[i].y === -1) {
			pushMonster[i].roomId = 7
		}
		if (pushMonster[i].x === -1 && pushMonster[i].y === -1) {
			pushMonster[i].roomId = 8
			//West of the Glade
		}
		if (pushMonster[i].x === -2 && pushMonster[i].y === 0) {
			pushMonster[i].roomId = 9
		}
		if (pushMonster[i].x === -3 && pushMonster[i].y === 0) {
			pushMonster[i].roomId = 10
		}
		if (pushMonster[i].x === -4 && pushMonster[i].y === -1) {
			pushMonster[i].roomId = 11
		}
		if (pushMonster[i].x === -5 && pushMonster[i].y === -1) {
			pushMonster[i].roomId = 12
		}
		if (pushMonster[i].roomId == player.roomId) {
			updateScroll()
		}
	}
}

function dragon() {
	let dragon = {
		randomItemDrops: Math.floor(Math.random() * 10) + 1,
		name: 'Dragon',
		level: 99,
		abilityName: 'Fire breath',
		abilityDamage: Math.floor(Math.random() * 187) + 1,
		itemDrops: function () {
			if (dragon.randomItemDrops < 3) {
				return dragonTooth + ', ' + dragonScale
			} else if (dragon.randomItemDrops < 5) {
				return dragonTooth
			} else if (dragon.randomItemDrops <= 5) {
				return dragonScale
			} else if (dragon.randomItemDrops > 5) {
				return dragonSword
			}
		},
	}
	return dragon
}

function startBehavior() {
	for (let i = 0; i < pushMonster.length; i++) {
		if (pushMonster[i].behaviorInterval == false) {
			pushMonster[i].blobBehavior()
			pushMonster[i].behaviorInterval = true
		}
	}
}

//monster class mob generator
function monsterGen(monster) {
	if (pushMonster.length < 10) {
		this.x = monster.x()
		this.y = monster.y()
		this.level = monster.level()
		this.str = monster.str()
		this.dex = monster.dex()
		this.agi = monster.agi()
		this.int = monster.int()
		this.wis = monster.wis()
		this.con = monster.con()
		this.hostile = monster.hostile
		this.combat = monster.combat
		this.health = monster.health()
		this.monsterAttack = monster.monsterAttack()
		this.accuracy = monster.accuracy()
		this.dodge = monster.dodge()
		this.monsterDamageCalc = monster.monsterDamageCalc
		this.factor = monster.factor
		this.experience = monster.experience()
		this.armor = monster.armor
		this.slashingArmor = monster.slashingArmor
		this.piercingArmor = monster.piercingArmor
		this.bluntArmor = monster.bluntArmor
		this.roomId = monster.roomId
		this.randomItemDrops = monster.randomItemDrops
		this.name = monster.name
		this.abilityName = monster.abilityName
		this.abilityDamage = monster.abilityDamage
		this.itemDrops = monster.itemDrops
		this.gold = monster.gold()
		this.itemDropsRoll = monster.itemDropsRoll()
		this.id = monster.id()
		this.blobMove = monster.blobMove
		this.blobBehaviorInterval = monster.blobBehaviorInterval
		this.behaviorInterval = monster.behaviorInterval
		this.blobBehavior = monster.blobBehavior
		pushMonster.push(
			new Monster(
				this.x,
				this.y,
				this.level,
				this.str,
				this.dex,
				this.agi,
				this.int,
				this.wis,
				this.con,
				this.hostile,
				this.combat,
				this.health,
				this.monsterAttack,
				this.accuracy,
				this.dodge,
				this.monsterDamageCalc,
				this.factor,
				this.experience,
				this.armor,
				this.slashingArmor,
				this.piercingArmor,
				this.bluntArmor,
				this.roomId,
				this.randomItemDrops,
				this.name,
				this.abilityName,
				this.abilityDamage,
				this.itemDrops,
				this.gold,
				this.itemDropsRoll,
				this.id,
				this.blobMove,
				this.blobBehaviorInterval,
				this.behaviorInterval,
				this.blobBehavior
			)
		)
		startBehavior()
	}
}

class Monster {
	constructor(
		x,
		y,
		level,
		str,
		dex,
		agi,
		int,
		wis,
		con,
		hostile,
		combat,
		health,
		monsterAttack,
		accuracy,
		dodge,
		monsterDamageCalc,
		factor,
		experience,
		armor,
		slashingArmor,
		piercingArmor,
		bluntArmor,
		roomId,
		randomItemDrops,
		name,
		abilityName,
		abilityDamage,
		itemDrops,
		gold,
		itemDropsRoll,
		id,
		blobMove,
		blobBehaviorInterval,
		behaviorInterval,
		blobBehavior
	) {
		this.x = x
		this.y = y
		this.level = level
		this.str = str
		this.dex = dex
		this.agi = agi
		this.int = int
		this.wis = wis
		this.con = con
		this.hostile = hostile
		this.combat = combat
		this.health = health
		this.monsterAttack = monsterAttack
		this.accuracy = accuracy
		this.dodge = dodge
		this.monsterDamageCalc = monsterDamageCalc
		this.factor = factor
		this.experience = experience
		this.armor = armor
		this.slashingArmor = slashingArmor
		this.piercingArmor = piercingArmor
		this.bluntArmor = bluntArmor
		this.roomId = roomId
		this.randomItemDrops = randomItemDrops
		this.name = name
		this.abilityName = abilityName
		this.abilityDamage = abilityDamage
		this.itemDrops = itemDrops
		this.gold = gold
		this.itemDropsRoll = itemDropsRoll
		this.id = id
		this.blobMove = blobMove
		this.blobBehaviorInterval = blobBehaviorInterval
		this.behaviorInterval = behaviorInterval
		this.blobBehavior = blobBehavior
	}
}

function weaponGen(item) {
	this.id = item.id()
	this.roomId = item.roomId
	this.name = item.name
	this.keywords = item.keywords
	this.topDamage = item.topDamage
	this.bottomDamage = item.bottomDamage
	this.mods = item.mods
	this.type = item.type
	this.skillUsed = item.skillUsed
	this.buyValue = item.buyValue
	this.sellValue = item.sellValue
	this.desc = item.desc
	this.swing = item.swing
	pushItem.push(new Weapon(this.id, this.roomId, this.name, this.keywords, this.topDamage, this.bottomDamage, this.mods, this.type, this.skillUsed, this.buyValue, this.sellValue, this.desc, this.swing))
}
class Weapon {
	constructor(id, roomId, name, keywords, topDamage, bottomDamage, mods, type, skillUsed, buyValue, sellValue, desc, swing) {
		this.id = id
		this.roomId = roomId
		this.name = name
		this.keywords = keywords
		this.topDamage = topDamage
		this.bottomDamage = bottomDamage
		this.mods = mods
		this.type = type
		this.skillUsed = skillUsed
		this.buyValue = buyValue
		this.sellValue = sellValue
		this.desc = desc
		this.swing = swing
	}
}
function armorGen(armor) {
	this.id = armor.id()
	this.roomId = armor.roomId
	this.name = armor.name
	this.keywords = armor.keywords
	this.mods = armor.mods
	this.type = armor.type
	this.slot = armor.slot
	this.desc = armor.desc
	pushItem.push(new Armor(this.id, this.roomId, this.name, this.keywords, this.mods, this.type, this.slot, this.desc))
}
class Armor {
	constructor(id, roomId, name, keywords, mods, type, slot, desc) {
		this.id = id
		this.roomId = roomId
		this.name = name
		this.keywords = keywords
		this.mods = mods
		this.type = type
		this.slot = slot
		this.desc = desc
	}
}

function consumableGen(consumable) {
	this.id = consumable.id()
	this.roomId = consumable.roomId
	this.name = consumable.name
	this.keywords = consumable.keywords
	this.property = consumable.property
	this.type = consumable.type
	this.manaRestore = consumable.manaRestore
	this.strengthUp = consumable.strengthUp
	this.agilityUp = consumable.agilityUp
	this.dexterityUp = consumable.dexterityUp
	this.intelligenceUp = consumable.intelligenceUp
	this.wisdomUp = consumable.wisdomUp
	this.attackUp = consumable.attackUp
	this.armorUp = consumable.armorUp
	this.piercingArmorUp = consumable.piercingArmorUp
	this.slashingArmorUp = consumable.slashingArmorUp
	this.bluntArmorUp = consumable.bluntArmorUp
	pushItem.push(
		new Consumable(this.id, this.roomId, this.name, this.keywords, this.property, this.type, this.manaRestore, this.strengthUp, this.agilityUp, this.dexterityUp, this.intelligenceUp, this.wisdomUp, this.attackUp, this.armorUp, this.piercingArmorUp, this.slashingArmorUp, this.bluntArmorUp)
	)
}

class Consumable {
	constructor(id, roomId, name, keywords, property, type, manaRestore, strengthUp, agilityUp, dexterityUp, intelligenceUp, wisdomUp, attackUp, armorUp, piercingArmorUp, slashingArmorUp, bluntArmorUp) {
		this.id = id
		this.roomId = roomId
		this.name = name
		this.keywords = keywords
		this.property = property
		this.type = type
		this.manaRestore = manaRestore
		this.strengthUp = strengthUp
		this.dexterityUp = dexterityUp
		this.intelligenceUp = intelligenceUp
		this.wisdomUp = wisdomUp
		this.attackUp = attackUp
		this.armorUp = armorUp
		this.piercingArmorUp = piercingArmorUp
		this.slashingArmorUp = slashingArmorUp
		this.bluntArmorUp = bluntArmorUp
	}
}

function speak(secondCommand) {
	if (currentArea.npc) {
		const allNpcs = currentArea.npc.map(allNpc => allNpc)
		const findNpc = allNpcs.find(x => x.name == secondCommand)
		if (findNpc) {
			findNpc.speak()
		} else if (findNpc == undefined && secondCommand != undefined) {
			quickMessage(`you do not see anyone named ${secondCommand} to speak to`, 'descriptions')
		} else {
			quickMessage(`you must specify who you wish to talk to`, 'descriptions')
		}
	}
}

function showQuest(secondCommand) {
	if (currentArea.npc) {
		const allNpcs = currentArea.npc.map(allNpc => allNpc)
		const findNpc = allNpcs.find(x => x.name == secondCommand)
		if (findNpc) {
			findNpc.quest()
		} else if (findNpc == undefined && secondCommand != undefined) {
			quickMessage(`you do not see anyone named ${secondCommand} to speak to about a quest`, 'descriptions')
		} else {
			quickMessage(`you must specify who you wish to speak to abouta quest`, 'descriptions')
		}
	}
}
function offerQuest(secondCommand) {
	if (currentArea.npc) {
		const allNpcs = currentArea.npc.map(allNpc => allNpc)
		const findNpc = allNpcs.find(x => x.name == secondCommand)
		if (findNpc) {
			findNpc.offer()
		} else if (findNpc == undefined && secondCommand != undefined) {
			quickMessage(`you do not see anyone named ${secondCommand} to accept your quest offering`, 'descriptions')
		} else {
			quickMessage(`you must specify who you wish to offer your quest objective to`, 'descriptions')
		}
	}
	if (currentArea.offer != undefined) {
		currentArea.offer()
	}
}
//EXAMINE FUNCITON - for examining items in backpack, held, and equipped
function examine(secondCommand, thirdCommand) {
	let allItemsOnPerson = pushItem.filter(
		item =>
			item.roomId == 'right hand' ||
			item.roomId == 'left hand' ||
			item.roomId == 'right ring' ||
			item.roomId == 'left ring' ||
			item.roomId == 'head' ||
			item.roomId == 'necklace' ||
			item.roomId == 'shoulders' ||
			item.roomId == 'chest' ||
			item.roomId == 'back' ||
			item.roomId == 'arms' ||
			item.roomId == 'hands' ||
			item.roomId == 'waist' ||
			item.roomId == 'legs' ||
			item.roomId == 'feet' ||
			item.roomId == 'backpack'
	)
	let allItemsEquipped = allItemsOnPerson.filter(
		item =>
			item.roomId == 'right ring' ||
			item.roomId == 'left ring' ||
			item.roomId == 'head' ||
			item.roomId == 'necklace' ||
			item.roomId == 'shoulders' ||
			item.roomId == 'chest' ||
			item.roomId == 'back' ||
			item.roomId == 'arms' ||
			item.roomId == 'hands' ||
			item.roomId == 'waist' ||
			item.roomId == 'legs' ||
			item.roomId == 'feet'
	)
	let allItemsHeld = allItemsOnPerson.filter(item => item.roomId == 'right hand' || item.roomId == 'left hand')
	let rightHandItem = allItemsHeld.find(item => item.roomId == 'right hand')
	let leftHandItem = allItemsHeld.find(item => item.roomId == 'left hand')

	let equippedItemsMapped = allItemsEquipped.map(item => item.roomId)
	let heldItemsMapped = allItemsHeld.map(item => item.roomId)
	heldItemsMapped.sort((a, b) => (b.name > a.name ? 1 : -1))

	let targetItemsOnPerson = allItemsOnPerson.filter(item => item.keywords.find(keyword => keyword == secondCommand))
	targetItemsOnPerson.sort((a, b) => (a.name > b.name ? 1 : -1))

	let allItemsInBackpack = pushItem.filter(item => item.roomId == 'backpack') //Every item in backpack - not held or equipped
	allItemsInBackpack.sort((a, b) => (a.name > b.name ? 1 : -1))

	let targetItemsInBackpack = allItemsInBackpack.filter(item => item.keywords.find(keyword => keyword == secondCommand)) //array of items on person that matches the item's keyword
	targetItemsInBackpack.sort((a, b) => (a.name > b.name ? 1 : -1))

	if (secondCommand == undefined || /^\s*$/.test(secondCommand) == true) {
		quickMessage(`You must specify what you want to examine.`)
	} else if (secondCommand == 'left' && leftHandItem != undefined) {
		findAny(leftHandItem)
	} else if (secondCommand == 'right' && rightHandItem != undefined) {
		findAny(rightHandItem)
	} else if (secondCommand == 'left' && leftHandItem == undefined) {
		quickMessage(`You do not have anything in your left hand to examine.`)
	} else if (secondCommand == 'right' && rightHandItem == undefined) {
		quickMessage(`You do not have anything in your right hand to examine.`)
	} else if (isNaN(secondCommand) && secondCommand != undefined && targetItemsOnPerson[0] == undefined) {
		quickMessage(`You do not have a ${secondCommand} in your backpack to examine`) //add a way for it to say a or an ${secondCommand} depending on if it starts with a vowel or not
	} else if (!isNaN(secondCommand) && allItemsInBackpack[secondCommand - 1] == undefined) {
		quickMessage(`You do not have an item in that slot to examine.`)
	} else if (!isNaN(thirdCommand) && allItemsInBackpack[secondCommand - 1] == undefined) {
		quickMessage(`You do not have an item in that slot to examine.`)
	} else if (!isNaN(secondCommand) && allItemsInBackpack[secondCommand - 1] != undefined) {
		findAny(allItemsInBackpack[secondCommand - 1])
	} else if (targetItemsOnPerson[0] != undefined && targetItemsOnPerson[1] == undefined && isNaN(thirdCommand)) {
		findAny(targetItemsOnPerson[0])
	} else if (targetItemsOnPerson[0] != undefined && targetItemsOnPerson[1] != undefined) {
	} else if (!isNaN(thirdCommand) == true && thirdCommand != undefined && targetItemsInBackpack[thirdCommand - 1] != undefined) {
		findAny(targetItemsInBackpack[thirdCommand - 1])
	}
	if (targetItemsOnPerson[0] != undefined && targetItemsOnPerson[1] != undefined) {
		console.log(7)

		let itemEquipped
		let isItemEquipped
		targetItemsOnPerson.forEach(item => {
			if (equippedItemsMapped.includes(item.roomId)) {
				itemEquipped = item
				isItemEquipped = true
			} else if (heldItemsMapped.includes(item.roomId)) {
				itemEquipped = item
				isItemEquipped = true
			}
		})
		if (isItemEquipped == true) {
			findAny(itemEquipped)
		} else if (isItemEquipped == false) {
			quickMessage(`You must specify which ${targetItemsOnPerson[0].name} you want to examine.`)
		} else {
			quickMessage(`You must specify which ${targetItemsOnPerson[0].name} you want to examine.`)
		}
	}
}
// function findItemInRoom(secondCommand, thirdCommand) {
// 	let allItemsInBackpack = pushItem.filter(items => items.roomId == backpack)
// 	let itemInRightHand = pushItem.filter(item => item.roomId == rightHand)
// 	let itemInLeftHand = pushItem.filter(item => item.roomId == leftHand)

// 	let allItemsInRoom = pushItem.filter(items => items.roomId == currentArea.id)
// 	let allSpecifiedItemsInRoom = allItemsInRoom.filter(({ keywords }) => keywords.some(keyword => keyword == secondCommand))
// 	let itemObject = allItemsInRoom.find(({ keywords }) => keywords.some(x => x == secondCommand))
// 	if (thirdCommand != undefined && isNaN(thirdCommand) == false) {
// 		if (allSpecifiedItemsInRoom[thirdCommand - 1] != undefined) {
// 			if (allSpecifiedItemsInRoom[thirdCommand - 1].type.weapon) {
// 				findWeapon(allSpecifiedItemsInRoom[thirdCommand - 1])
// 			} else if (allSpecifiedItemsInRoom[thirdCommand - 1].type.armor) {
// 				findArmor(allSpecifiedItemsInRoom[thirdCommand - 1])
// 			}
// 		} else {
// 			quickMessage(`you do not own that number of ${itemObject.name}`)
// 		}
// 	} else if (itemObject != undefined) {
// 		if (allSpecifiedItemsInRoom[0].type.weapon) {
// 			findWeapon(allSpecifiedItemsInRoom[0])
// 		} else if (allSpecifiedItemsInRoom[0].type.armor) {
// 			findArmor(allSpecifiedItemsInRoom[0])
// 		}
// 	} else {
// 		return false
// 	}
// }

//INSPECT FUNCITON - for examining items equipped or in backpack
function findItemInBackpack(command, secondCommand, thirdCommand) {
	let allItemsInBackpack = pushItem.filter(items => items.roomId == backpack)
	let itemInRightHand = pushItem.filter(item => item.roomId == rightHand)
	let itemInLeftHand = pushItem.filter(item => item.roomId == leftHand)
	let allItemsInBackpackAndEquipped = pushItem.filter(items => {
		let nonNumId
		if (isNaN(items.roomId) == true) return items
	})

	let allSpecifiedItemsInRoom = allItemsInBackpack.filter(({ keywords }) => keywords.some(keyword => keyword == secondCommand))
	let itemObject = allItemsInRoom.find(({ keywords }) => keywords.some(x => x == secondCommand))
	if (thirdCommand != undefined && isNaN(thirdCommand) == false) {
		if (allSpecifiedItemsInRoom[thirdCommand - 1] != undefined) {
			if (allSpecifiedItemsInRoom[thirdCommand - 1].type.weapon) {
				findWeapon(allSpecifiedItemsInRoom[thirdCommand - 1])
			} else if (allSpecifiedItemsInRoom[thirdCommand - 1].type.armor) {
				findArmor(allSpecifiedItemsInRoom[thirdCommand - 1])
			}
		} else {
			quickMessage(`you do not own that number of ${itemObject.name}`)
		}
	} else if (itemObject != undefined) {
		if (allSpecifiedItemsInRoom[0].type.weapon) {
			findWeapon(allSpecifiedItemsInRoom[0])
		} else if (allSpecifiedItemsInRoom[0].type.armor) {
			findArmor(allSpecifiedItemsInRoom[0])
		}
	} else {
		return false
	}
}

//EXAMINE FUNCITON - for examining items on person
function findItemOnPerson(secondCommand, thirdCommand) {
	let allItemsInBackpack = pushItem.filter(items => items.roomId == backpack)
	let itemInRightHand = pushItem.filter(item => item.roomId == rightHand)
	let itemInLeftHand = pushItem.filter(item => item.roomId == leftHand)

	let allSpecifiedItemsInRoom = allItemsInBackpack.filter(({ keywords }) => keywords.some(keyword => keyword == secondCommand))
	let itemObject = allItemsInRoom.find(({ keywords }) => keywords.some(x => x == secondCommand))
	if (thirdCommand != undefined && isNaN(thirdCommand) == false) {
		if (allSpecifiedItemsInRoom[thirdCommand - 1] != undefined) {
			if (allSpecifiedItemsInRoom[thirdCommand - 1].type.weapon) {
				findWeapon(allSpecifiedItemsInRoom[thirdCommand - 1])
			} else if (allSpecifiedItemsInRoom[thirdCommand - 1].type.armor) {
				findArmor(allSpecifiedItemsInRoom[thirdCommand - 1])
			}
		} else {
			quickMessage(`you do not own that number of ${itemObject.name}`)
		}
	} else if (itemObject != undefined) {
		if (allSpecifiedItemsInRoom[0].type.weapon) {
			findWeapon(allSpecifiedItemsInRoom[0])
		} else if (allSpecifiedItemsInRoom[0].type.armor) {
			findArmor(allSpecifiedItemsInRoom[0])
		}
	} else {
		return false
	}
}

function findAny(item) {
	let isWeapon = item.type['weapon'] != undefined ? item : undefined
	let isArmor = item.type['armor'] != undefined ? item : undefined
	let isShield = item.type['shield'] != undefined ? item : undefined
	let isConsumable = item.type.weapon != undefined ? item : undefined
	let isQuest = item.type.weapon != undefined ? item : undefined
	if (isWeapon != undefined) {
		item.desc(item.roomId, item.bottomDamage, item.topDamage, item.name, item.mods)
	} else if (isArmor != undefined) {
		item.desc(item.roomId, item.name, item.mods)
	} else if (isShield != undefined) {
		item.desc(item.roomId, item.name, item.mods)
	} else if (isConsumable != undefined) {
		item.desc(/*consumable info*/)
	} else if (isQuest != undefined) {
		item.desc(/*quest info*/)
	}
}

function showItemDescription(item) {
	let itemValues = Object.values(item)
	let itemKeys = Object.keys(item)
	for (let i = 0; i < itemKeys.length; i++) {
		if (itemValues[i] != 0) {
			if (itemKeys[i] == 'armor') {
				let textDiv = document.createElement('div')
				let textNode = document.createTextNode(`${itemKeys[i]}: ${itemValues[i]}`)
				textDiv.appendChild(textNode)
				masterArea.appendChild(textDiv)
			} else {
				let textDiv = document.createElement('div')
				let textNode = document.createTextNode(`${itemKeys[i]}: ${itemValues[i]}`)
				textDiv.appendChild(textNode)
				masterArea.appendChild(textDiv)
			}
		}
	}
}
//INSPECT FUNCTION - for inspecting items only in your inventory or that you're wielding/wearing
function findItemInventory(secondCommand, thirdCommand) {
	let allInventory = pushItem.filter(allItems => isNaN(allItems.roomId))
	let allSpecifiedInventory = allInventory.filter(({ keywords }) => keywords.some(keyword => keyword == secondCommand))
	let targetItem = allSpecifiedInventory.find(target => target.roomId == 'right hand' || target.roomId == 'left hand' || target.keywords.find(keyword => keyword == secondCommand))
	let targetItemRightHand = allSpecifiedInventory.find(target => target.roomId == 'right hand')
	let targetItemLeftHand = allSpecifiedInventory.find(target => target.roomId == 'left hand')
	let targetItemInBackpack = allInventory.find(target => target.keywords.find(keyword => keyword == secondCommand))
	if (thirdCommand != undefined && !isNaN(thirdCommand)) {
		if (allSpecifiedInventory[thirdCommand - 1] != undefined) {
			return allSpecifiedInventory[thirdCommand - 1].desc(allSpecifiedInventory[thirdCommand - 1].bottomDamage, allSpecifiedInventory[thirdCommand - 1].topDamage, allSpecifiedInventory[thirdCommand - 1].roomId)
		} else if (thirdCommand == undefined && isNaN(thirdCommand) == true) {
			quickMessage(`you do not own that number of ${targetItem.name}`)
		}
	} else if (targetItemRightHand != undefined) {
		console.log('inspect right hand')
		return targetItemRightHand.desc(targetItemRightHand.id, targetItemRightHand.bottomDamage, targetItemRightHand.topDamage, targetItemRightHand.roomId)
	} else if (targetItemLeftHand != undefined) {
		console.log('inspect left hand')
		return targetItemLeftHand.desc(targetItemLeftHand.bottomDamage, targetItemLeftHand.topDamage, targetItemLeftHand.roomId)
	} else if (targetItemInBackpack != undefined) {
		console.log('inspect in backpack')
		return targetItemInBackpack.desc(targetItemInBackpack.bottomDamage, targetItemInBackpack.topDamage, targetItemInBackpack.roomId)
	}
}
// function inspect(secondCommand, thirdCommand) {
// 	let targetNPC = currentArea.npc.find(x => x.name == secondCommand)
// 	if (targetNPC != undefined && secondCommand == targetNPC.name) {
// 		console.log('works')
// 		targetNPC.desc()
// 	}
// 	let allKeys = currentArea.interactables != undefined ? Object.keys(currentArea.interactables) : undefined
// 	let oneWordInteractable = `${secondCommand}`
// 	let twoWordInteractable = `${secondCommand} ${thirdCommand}`
// 	console.log(twoWordInteractable)
// 	let currentAreaInteractables = currentArea.interactables
// 	if (allKeys != undefined && currentAreaInteractables[allKeys[0]] != undefined) {
// 		for (let i = 0; i < allKeys.length; i++) {
// 			if (currentArea.interactables[allKeys[i]].name == twoWordInteractable) {
// 				currentArea.interactables[allKeys[i]].desc()
// 			} else if (currentArea.interactables[allKeys[i]].name == oneWordInteractable) {
// 				currentArea.interactables[allKeys[i]].desc()
// 			}
// 		}
// 	} else {
// 		quickMessage(`You do not see ${secondCommand} to examine`)
// 	}
// }

//
const inspect = (secondCommand, thirdCommand) => {
	let allItemsInRoom = pushItem.filter(items => items.roomId == currentArea.id)
	let allSpecifiedItemsInRoom = allItemsInRoom.filter(items => items.keywords.find(keyword => keyword == secondCommand))
	let firstSpecifiedItem = allSpecifiedItemsInRoom[0] != undefined ? allSpecifiedItemsInRoom.find(item => item.keywords.find(keyword => keyword == secondCommand)) : undefined
	let specifiedByNumber = allSpecifiedItemsInRoom[1] != undefined ? allSpecifiedItemsInRoom.filter(item => item.keywords.filter(keyword => keyword == secondCommand))[thirdCommand - 1] : undefined
	//inspects object from the room description
	if (currentArea.interactables.names != undefined && currentArea.interactables.names.find(name => name == secondCommand)) {
		currentArea.interactables[secondCommand].desc()
	}
	//inspects NPC
	else if (currentArea.npc[0] != undefined && currentArea.npc.find(npc => npc.name == secondCommand)) {
		let npc = currentArea.npc.find(npc => npc.name == secondCommand)
		npc.desc()
		//inspects item on the ground
	} else if (secondCommand == undefined || /^\s*$/.test(secondCommand) == true) {
		quickMessage(`You must specify what you want to inspect.`)
	} else if (!isNaN(secondCommand) && allItemsInRoom[secondCommand - 1] == undefined) {
		quickMessage(`You do not see that number of item to inspect.`)
	} else if (!isNaN(secondCommand) && allItemsInRoom[secondCommand - 1] != undefined) {
		findAny(allItemsInRoom[secondCommand - 1])
	} else if (firstSpecifiedItem == undefined) {
		quickMessage(`You do not see a ${secondCommand} to inspect.`)
	} else if (allSpecifiedItemsInRoom == undefined) {
		quickMessage(`You do not see a ${secondCommand} to inspect`)
	} else if (!isNaN(thirdCommand) == true && allSpecifiedItemsInRoom[thirdCommand - 1] == undefined) {
		quickMessage(`You do not see that number of ${secondCommand} to inspect.`)
	} else if (firstSpecifiedItem != undefined && specifiedByNumber == undefined) {
		console.log('first')
		findAny(firstSpecifiedItem)
	} else if (specifiedByNumber != undefined && !isNaN(thirdCommand) == true) {
		console.log('second')
		findAny(specifiedByNumber)
	}

	// const groundItems;
	// const npcs;
	// const roomDescObject;
}

// function examine(secondCommand, thirdCommand) {
// 	if (findItemInRoom(secondCommand, thirdCommand) == false) {
// 		console.log('findItem() function ran')
// 		if (findInteractable(secondCommand, thirdCommand) == false) {
// 			console.log('findInteractable() function ran')
// 			if (findPeople(secondCommand) == false) {
// 				console.log('findPeople() function ran')
// 				quickMessage(secondCommand == undefined ? `you must specify something to examine` : `you do not see ${secondCommand} to examine`, 'descriptions')
// 			}
// 		}
// 	}
// }

function nineNodeMessage(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, damage) {
	let damageColor = function () {
		if (damage < 5) {
			return 'light-red'
		} else {
			return 'red'
		}
	}
	const messageDiv = document.createElement('div')
	const message1Node = document.createTextNode(m1)
	const message1Span = document.createElement('span')
	message1Span.appendChild(message1Node)
	const message2Node = document.createTextNode(m2)
	const message2Span = document.createElement('span')
	message2Span.classList.add('red')
	message2Span.appendChild(message2Node)
	const message3Node = document.createTextNode(m3)
	const message3Span = document.createElement('span')
	message3Span.classList.add('white')
	message3Span.appendChild(message3Node)
	const message4Node = document.createTextNode(m4)
	const message4Span = document.createElement('span')
	message4Span.classList.add('blue')
	message4Span.appendChild(message4Node)
	const message5Node = document.createTextNode(m5)
	const message5Span = document.createElement('span')
	message5Span.classList.add('white')
	message5Span.appendChild(message5Node)
	const message6Node = document.createTextNode(m6)
	const message6Span = document.createElement('span')
	message6Span.classList.add(damageColor())
	message6Span.appendChild(message6Node)
	const message7Node = document.createTextNode(m7)
	const message7Span = document.createElement('span')
	message7Span.classList.add('white')
	message7Span.appendChild(message7Node)
	const message8Node = document.createTextNode(m8)
	const message8Span = document.createElement('span')
	message8Span.classList.add('red')
	message8Span.appendChild(message8Node)
	const message9Node = document.createTextNode(m9)
	const message9Span = document.createElement('span')
	message9Span.classList.add('white')
	message9Span.appendChild(message9Node)
	messageDiv.appendChild(message1Span)
	messageDiv.appendChild(message2Span)
	messageDiv.appendChild(message3Span)
	messageDiv.appendChild(message4Span)
	messageDiv.appendChild(message5Span)
	messageDiv.appendChild(message6Span)
	messageDiv.appendChild(message7Span)
	messageDiv.appendChild(message8Span)
	messageDiv.appendChild(message9Span)
	masterArea.appendChild(messageDiv)
}

function colorText() {
	const span1 = document.createElement('span')
	const textNode = document.createTextNode('damage')
}
//CHEATS
//leveling up code
/*function nextLevel(level) {
    let exponent = 2.1
    let baseXP = 10
    return Math.floor(baseXP * (Math.pow(level, exponent)))
    }
    
    for (let i = 2; i < 102; i++) {
    console.log(nextLevel(i))
    }
*/
currentArea = centralTrainingRoom

monsterGen(testBlob(currentArea))
function gameStart() {
	areaCompiler(currentArea)
	dialogue(
		`Welcome! You start your adventure in the barracks of the Castle Training Halls where you will learn how to navigate through the lands of Galvadia. Before you can explore, you must complete a series of simple tasks in order to familiarize yourself with how to get around. First, take a look around the room by using the LOOK command (or just L).`
	)
}
gameStart()
