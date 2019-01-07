// First we need to import our routine json object
// Eventually this will be taken from a database, but for now we will just take our sampleRoutine.json

const sampleRoutine = require('./sampleRoutine.json');

let workoutDay = 0;

let startRoutine = (routine) => {
  // We start by setting the workout day to 0 and for the current workout
  // This should be done by zeroing the cooresponding row in an sql table for this user and workout combo
  // for now to test we'll just do nothing and work backwards to see what needs to be initialized here
  workoutDay = 0;
}

let startWorkout = (routine, workoutDay) => {
  // Now we need to create the exercise list for today by going through the routine lifts.
  // for each lift object in the lift array, check if liftDayRepetition[workoutDay] === 1
  // if so add the lift
  // if not don't add the lift, easy peasy
  // tricky part: if workoutDay >= liftDayRepetition.length then take the remainder and apply test
  return todaysLifts = routine.lifts.filter(lift => {
    let repetition = lift.liftDayRepetition;
    return repetition[workoutDay % repetition.length] === 1
  });
};

// Basically we know that we need a DB for workouts 
// Each row needs: UserID, RoutineID, LiftID, WorkoutDay, Set, Reps, Weight

let startLift = (lift, workoutDay) => {
  if (workoutDay === 0) {
    // tell the user to input the desired weight or something
  } else {
    // calculate next weight based on progression
    // get last workout from db GET workoutday - 1
    // going to fake it for now
    let lastWeight = 235;
    let lastReps = [5, 5, 7];
    if (lastReps[lastReps.length-1] < lift.sets[lift.sets.length-1]) {
      return calculateDeload(lift.progressionPattern, lastWeight);
    } else {
      return calculateProgression(lift.progressionPattern, lastWeight);
    }
  }
}

let roundToWeight = (inputWeight, desiredDenomination) => {
  return Math.trunc(inputWeight / desiredDenomination)*desiredDenomination;
}

let calculateDeload = (progression, lastWeight) => {
  let exactDeloadAmount = lastWeight*progression.deloadPercent/100;
  return roundToWeight(Math.floor(lastWeight - exactDeloadAmount), 2.5);
}

let calculateProgression = (progression, lastWeight) => {
  let newWeight = lastWeight;
  switch(progression.type) {
    case 'linear':
      newWeight = roundToWeight(lastWeight + progression.add, 2.5);
      break;
    case 'reps':
      newWeight = lastWeight;
      // should do something to tell user to increase reps
      break;
  }
  return newWeight;
}

// How to load: Add a simple function to tell the user which plates to load
// Assumes only 45,25,10,5,2.5,1.25 Available
// Should have an equipment DB which stores the different equipment names, bar weights, plate weights, etc

let calculatePlates = (weight, equipmentType = 'Barbell') => {
  switch (equipmentType) {
    case 'Barbell':
      let barWeight = 45;
      let plates = [45, 25, 10, 5, 2.5, 1.25];

  }
}

let calculateHowManyOfThisPlate = (leftOverWeight, plateWeights) => {
  let i = 0;
  let numberPlates = [];
  leftOverWeight = leftOverWeight/2; //because both sides of bar must balance
  while (leftOverWeight > 0) {
    if (i > plateWeights.length - 1) {
      break;
    }
    numberPlates.push(Math.trunc(leftOverWeight / plateWeights[i]));
    leftOverWeight = leftOverWeight % plateWeights[i];
    i++;
  }
  return numberPlates.map((num) => (num*2));
}

console.log(calculateHowManyOfThisPlate(82.5,[45, 25, 10, 5, 2.5, 1.25]))

// let lifts = startWorkout(sampleRoutine,3);
// console.log(startLift(lifts[0],4))