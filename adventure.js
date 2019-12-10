var title = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2"); 
var button3 = document.getElementById("button3"); 
var inventoryItem = document.getElementById("inventoryItem");
var gamecontainer = document.getElementById("game-container");
var shovel = false;
var sponge = document.getElementById("sponge")


function StartGame(){
	title.innerHTML = "The Furious Wizard";
	description.innerHTML = "Je bent net ontsnapt bij de tovenaarsgevangenis en bent nu op de vlucht. Je hebt veel tovenaar afgeschud maar 1 tovenaar zit nog achter je aan. je hebt zometeen keuzes om te ontsnappen maar kies wel de juiste ander word het je dood."
	button1.innerHTML ="Start het spel"
	button1.setAttribute("onclick","level1()")
	button2.innerHTML ="Help"
	button2.setAttribute("onclick","help()")
	button3.innerHTML = "Credits"
	button3.setAttribute("onclick","Credits()")
	inventoryItem.style.display ="none"
	gamecontainer.style.background = 'url("boze-tovenaar.gif")'
	gamecontainer.style.backgroundSize = "1200px"
	sponge.style.display = "none"
}

function help(){
	title.innerHTML = "HELP"
	description.innerHTML = "Klik op start het spel als je het spel wilt spelen"
	button1.innerHTML = "Terug naar Start"
	button1.setAttribute("onclick","StartGame()")
	button1.style.display = "inline"
	button2.style.display = "none"
	button3.style.display = "none"
	sponge.style.display = "none"
}

function Credits(){
	title.innerHTML = "Credits"
	description.innerHTML = "Dit spel is ontworpen en gedesigned door Thijmen Stegenga"
	button1.innerHTML ="Terug naar Start"
	button1.setAttribute("onclick","StartGame()")
	button1.style.display = "inline"
	button2.style.display = "none"
	button3.style.display = "none"
	sponge.style.display = "none"
}


function level1(){
	title.innerHTML = "Het strand"
	description.innerHTML = "Je bent net ontsnapt uit de tovenaarsgevangenis en bent aangekomen op het strand <br>waar wil je naartoe?"
	description.style.color = "black"
	gamecontainer.style.background = 'url("game_background_4.png")'
	gamecontainer.style.backgroundSize = "cover"
	button1.innerHTML = "Je gaat de zee in"
	button1.setAttribute("onclick","Zee()")
	button2.innerHTML = "je loopt op het strand naar links"
	button2.setAttribute("onclick","StrandL()")
	button3.innerHTML = "je gaat naar het bos"
	button3.setAttribute("onclick","Bos()")
	button1.style.display = "inline-block"
	button2.style.display = "inline-block"
	button3.style.display = "inline-block"
	sponge.style.display = "none"
}

function Zee(){
	title.innerHTML = "zwemmen in de zee"
	description.innerHTML = "Je bent de zee ingezwommen en ziet opeens een gezonken stad onder water liggen"
	description.style.color = "black"
	gamecontainer.style.background = 'url("1_game_background.png")'
	gamecontainer.style.backgroundSize = "1250px"
	button1.innerHTML = "Je zwemt door om te overleven"
	button1.setAttribute("onclick","Swim()")
	button2.innerHTML = "Je duikt naar de bodem om te bekijken wat er ligt"
 	button2.setAttribute("onclick","Death()")
 	button3.innerHTML = "Je zwemt terug"
 	button3.setAttribute("onclick","level1()")
 	sponge.style.display = "none"
}

function StrandL(){
	title.innerHTML = "Het verlaten strand"
	description.innerHTML = "je bent aangekomen bij een verlaten strandbar en ziet een overheerlijke schaal met fruit en cocktails staan maar je weet niet hoelang ze daar al staan <br> Wat doe je?"
	description.style.color = "black"
	gamecontainer.style.background = 'url("game_background_3.png")'
	gamecontainer.style.backgroundSize = "1250px"
	button1.innerHTML = "je eet de fruitshaal op en proeft alle smaken van de cocktails"
	button1.setAttribute("onclick","Death()")
	button2.innerHTML = "je loopt het bos in"
	button2.setAttribute("onclick","Bos()")
	button3.innerHTML = "je gaat de zee in"
	button3.setAttribute("onclick","Zee()")
	sponge.style.display = "none"

}

function Bos(){
	title.innerHTML = "Het Sprookjesbos"
	description.innerHTML = "Je bent het bos in gegaan en je ziet een pad en huisje staan wat ga je doen?"
	description.style.color = "black"
	gamecontainer.style.background = 'url("huisje-pad.jpg")'
	gamecontainer.style.backgroundSize = "1200px"
	button1.innerHTML = "Je gaat naar het huis toe"
	button1.setAttribute("onclick","huisje()")
	button2.innerHTML = "je loopt verder op het pad"
	button2.setAttribute("onclick","pad()")
	button3.innerHTML = "Je gaat terug"
	button3.setAttribute("onclick", "level1()")
	sponge.style.display = "none"
}

function huisje(){
	title.innerHTML = "level 3"
	description.innerHTML = "je gaat het huisje in en kijkt goed om je heen wat ga je doen of valt je op?"
	description.style.color = "black"
	gamecontainer.style.background = 'url("inside-house-shovel.png")'
	gamecontainer.style.backgroundSize = "1200px"
	button1.innerHTML = "Ga terug"
	button1.setAttribute("onclick","Bos()")
	button2.innerHTML = "je gaat via de achterkant eruit "
	button2.setAttribute("onclick","Back()")
	button3.innerHTML = "pak de schep op"
	button3.setAttribute("onclick","Getshovel()")
	sponge.style.display = "none"
}

function Getshovel(){
	shovel = true
	inventoryItem.style.display = "inline"
	inventoryItem.setAttribute("src", "shovel121.png")
	gamecontainer.style.background = 'url("inside-house-noshovel.png")'
	gamecontainer.style.backgroundSize = "1200px"
	sponge.style.display = "none"
	button3.style.display = "none"
}

function pad(){
	title.innerHTML = "Het keuzepad"
	description.innerHTML = "de tovenaar staat bij de splitsing te wachten kies de juiste weg om hem te ontkomen"
	description.style.color = "black"
	gamecontainer.style.background = 'url("wegsplitsingSage.jpg")'
	gamecontainer.style.backgroundSize = "2550px"
	button1.innerHTML = "je gaat terug"
	button1.setAttribute("onclick","Bos()")
	button2.innerHTML = "je gaat naar links op het pad"
	button2.setAttribute("onclick","spookhuis()")
	button3.innerHTML = "je gaat naar rechts op het pad"
	button3.setAttribute("onclick","Death()")
	sponge.style.display = "none"
}

function Back(){
	title.innerHTML = "Achtertuin"
	description.innerHTML = "Je ziet een groot gat"
	gamecontainer.style.background = 'url("achtertuin1.jpg")'
	gamecontainer.style.backgroundSize = "1400px"
	button1.innerHTML = "je gaat terug"
	button1.setAttribute("onclick","huisje()")
	button2.innerHTML = "je graaft de stenen op"
	button2.setAttribute("onclick","kobe()")
	button3.innerHTML = "je klimt over het hek heen"
	button3.setAttribute("onclick","Death()")
	button3.style.display = "inline-block"
	sponge.style.display = "none"
}

function kobe(){
	if(shovel == false){
		description.innerHTML = "je hebt hier een schep voor nodig"
	}else{
		win();
	}
}


function Death(){
	title.innerHTML = "You Died"
	description.innerHTML = " you couldn't stay alive noobie"
	gamecontainer.style.background = 'url("gameover.gif")'
	gamecontainer.style.backgroundSize = "1200px"
	button1.innerHTML  = "Ga verder waar je gebleven bent"
	button1.setAttribute("onclick","Jump()")
	button3.innerHTML = "Ga terug naar het begin om het opnieuw te spelen"
	button3.setAttribute("onclick","StartGame()")
	button2.style.display = "none"
	sponge.style.display = "none"
}

function Jump(){
	title.innerHTML = "You Can't Cheat"
	gamecontainer.style.backgroundSize = "1250px"
	button1.innerHTML = "restart the game"
	button1.setAttribute("onclick","StartGame()")
	button2.style.display = "none"
	button3.style.display = "none"
	sponge.style.display = "inline-block"
	gamecontainer.style.background = url(sponge)
	document.getElementById("inventoryItem").setAttribute("autoplay","true")
}

function win(){
	title.innerHTML = "You Won"
	description.innerHTML = "You won the game congrats! <br> klik op restart game om het spel opnieuw te spelen"
	gamecontainer.style.background = 'url("win1.gif")'
	gamecontainer.style.backgroundSize = "1250px"
	button1.innerHTML = "restart the game"
	button1.setAttribute("onclick","StartGame()")
	button2.innerHTML = "Credits"
	button2.setAttribute("onclick"," Credits()")
	button3.innerHTML = "Help"
	button3.setAttribute("onclick","help()")
	inventoryItem.style.display ="none"
}

function Swim(){
	title.innerHTML = "Schatkist"
	description.innerHTML = "je hebt de schatkist gevonden congrats"
	gamecontainer.style.background = 'url("goudkistisland.jpg")'
	gamecontainer.style.backgroundSize = "1200px"
	button1.innerHTML = "Stel je goud veilig"
	button1.setAttribute("onclick","win()")
	button2.innerHTML = "je zwemt nog verder door"
	button2.setAttribute("onclick","onderwater()")
	button3.innerHTML = "je gaat terug"
	button3.setAttribute("onclick","Zee()")
}

function onderwater(){
	title.innerHTML = "City"
	description.innerHTML = "Je ziet een hele mooie onderwaterstad maar wat ga je doen om te overleven"
	gamecontainer.style.background = 'url("underwater1.jpg.png")'
	gamecontainer.style.backgroundSize = "1300px"
	button1.innerHTML = "je kijkt hier rond"
	button1.setAttribute("onclick","Death()")
	button2.innerHTML = "je probeert verder te zwemmen"
	button2.setAttribute("onclick","Death()")
	button3.innerHTML = "je gaat terug"
	button3.setAttribute("onclick","Swim()")
}

function spookhuis(){
	title.innerHTML = "Spookhuis"
	description.innerHTML = "Je ziet een verlaten huis wat ga je doen?"
	gamecontainer.style.background = 'url("spookhuis1.jpg")'
	gamecontainer.style.backgroundSize = "1250px"
	button1.innerHTML = "Je gaat het verlaten huis naarbinnen"
	button1.setAttribute("onclick","insidespook()")
	button2.innerHTML = "je gaat terug"
	button2.setAttribute("onclick","pad()")
	button3.innerHTML = "je loopt door"
	button3.setAttribute("onclick","Death()")
}

function insidespook(){
	title.innerHTML = "Kamer 13"
	description.innerHTML = "Je bent een kamer in gegaan maar de deurklink is kapot gegaan en je hoort de tovenaar het huis betreden wat doe je?"
	gamecontainer.style.background = 'url("inside-spook.jpg")'
	gamecontainer.style.backgroundSize = "1350px"
	button1.innerHTML = "Je springt uit het raam"
	button1.setAttribute("onclick","Death()")
	button2.innerHTML = "je gaat terug"
	button2.setAttribute("onclick","spookhuis()")
	button3.innerHTML = "je wacht tot de tovenaar je kamer binnenkomt"
	button3.setAttribute("onclick","Death()")
}


StartGame();





