let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;

// check if runner is adult and registered early and give them a race number above 1000
if (age > 18 && registeredEarly ){
  raceNumber += 1000;
}

// for adult runners tell their run time
if (age > 18 && registeredEarly){
  console.log(`You're gonna race at 9:30 am and your race number is ${raceNumber}`);
} else if (age > 18 && !registeredEarly){
  console.log(`You're gonna race at 11:00 am and your race number is ${raceNumber}`);
}

// for youth runners tell them to run at 12:30 pm
if (age < 18){
  console.log(`You're gonna race at 12:30 pm, your race number is ${raceNumber}`);
} else { // for 18 year olds tell them to see registration desk
  console.log('see the registration desk');
}
