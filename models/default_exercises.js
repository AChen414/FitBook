const Exercise = require('./Exercise');

const defaultExercises = [
    new Exercise({ user: "", title: "Bench Press", category: "Chest", equipment: "Barbell", notes: "" }),
    new Exercise({ user: "", title: "Squat", category: "Legs", equipment: "Barbell", notes: "" }),
    new Exercise({ user: "", title: "Deadlift", category: "Full-Body", equipment: "Barbell", notes: "" }),
    new Exercise({ user: "", title: "Shoulder Press", category: "Shoulders", equipment: "Barbell", notes: "" }),
    new Exercise({ user: "", title: "Incline Bench Press", category: "Chest", equipment: "Barbell", notes: "" }),
    new Exercise({ user: "", title: "Dumbell Curls", category: "Arms", equipment: "Dumbells", notes: "" }),
    new Exercise({ user: "", title: "Lat Pulldowns", category: "Back", equipment: "Machine", notes: "" }),
    new Exercise({ user: "", title: "Skull Crushers", category: "Arms", equipment: "Barbell", notes: "" }),
    new Exercise({ user: "", title: "Pushups", category: "Chest", equipment: "None", notes: "" })
]

module.exports = defaultExercises;