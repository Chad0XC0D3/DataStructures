// 1
const jedi = [];
// 2
jedi[0] = `Luke`;
console.log(jedi);
// 3
jedi.push(`Obi-Wan Kenob`);
console.log(jedi);
// 4
jedi.unshift(`Yoda`);
console.log(jedi);
// 5
console.log(jedi[1]);
// 6
let obiWan = jedi.pop();
console.log(jedi);
console.log(obiWan);
// 7
let yoda = jedi.shift();
console.log(jedi);
console.log(yoda);
// 8
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
console.log(sithLords);
// 9
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
console.log(imperialOfficers);
// 10
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
// 11
console.log(starWarsVillains.slice(0,2));
// 12
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};
// 13
console.log(droids[`astromech`]);
// 14
console.log(droids.protocol);
// 15
droids.assassin = "IG-11";
console.log(droids);

// BONUS
// 1
console.log(starWarsVillains[0].slice(6,7));
// 2
console.log(sithLords.slice(-2, -1));
// 3
const starWarsMovies = [{
    episodeOne: "The Phantom Menace",
    episodeTwo: "Attack of the Clones", 
    episodeThree: "Revenge of the Sith"
},{
    episodeFour:"A New Hope",
    episodeFive:"The Empire Strikes Back",
    episodeSix: "Return of the Jedi"
}, {
    episodeSeven: "The Force Awakens",
    episodeEight: "The Last Jedi", 
    episodeNine: "The Rise of Skywalker" 
}];
starWarsMovies.splice(1,0,"Solo","Rogue One");
console.log(starWarsMovies);