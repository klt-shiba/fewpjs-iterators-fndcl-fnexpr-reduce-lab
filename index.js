const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


let totalBatteries = batteryBatches.reduce((a, b) => {
    return b + a 
}, 0 )

// Code your solution here


let hogwarts_houses = {
    "Slytherin": [],
    "Gryffindor": [],
    "Hufflepuff": [],
    "Ravenclaw": []
  }
  
  /*
  
  Assume sorting_hat.assign() returns a String ("Slytherin", "Gryffindor",
  "Hufflepuff", "Ravenclaw") based on the argument passed in.
  
  */
  
  incoming_students.reduce(function(houses, student) { 
      houses[sorting_hat.assign(student)].push(student)
    } , 
    hogwarts_houses
)