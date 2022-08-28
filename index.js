// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//     console.log(`Wrapped ${gift} and added a bow!`);
// }
// wrapGift(gifts[0]);
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

// for (let age =30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

// const names = ["Mpenda dunda", "Cake matron","Gate crusher", "party animal"]


function writeCards(names, event) {
	let message = [];
	for (let i = 0; i < names.length; i++) {
		message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
	}
	return message;
}
writeCards

console.logwriteCards(["Ada", "Brendan", "Ali"], "birthday");
function countDown(number) {
	while (number >= 0) {
		console.log(number);
		number--;
	}
}
