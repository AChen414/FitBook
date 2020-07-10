# [FitBook](http://fitness-book.herokuapp.com/)
Fitbook is a fitness tracking web app that allows you to create and track custom workouts and share them amongst your friends and followers. A user can create workouts by adding exercises from an extensive list from our database, or even add their own. Users can then add these workouts to a calendar and share them amongst other users.

# Features
 * User authentication
     * Login
     * Sign up
 * Exercise
     * Search function 
     * Ability to create an exercise
     * View and edit details of an exercise
 * Workouts 
     * Create a custom workouts comprised of exercises
     * View, add, update, and delete exercises from a workout
 * User Profile
     * Ability to view, add, update, and delete workouts on a calendar
     * Set and update goals
     * Add profile pictures, follow other users, and share workouts

# Technologies
 MERN Stack project (MongoDB, Express, React/Redux, and Node.js)
 * Backend
     * MongoDB
     * Express
     * Node.js
 * Frontend
     * React
     * Redux
     * Axios
 * Other 
     * Bootstrap
     * Syncfusion

# Code Snips
 * We had to implement a workaround in our route to return the correct data to our frontend because originally our backend was sending back unneeded information to the frontend

 [Unneeded Info](https://puu.sh/G5MT8/723b7c18bc.jpg)
    
```javascript
router.get('/:id', (req, res) => {
    Workout.findById(req.params.id) 
        .then(workout => {
            let result = { 
                _id: workout._doc._id.toString(),
                user: workout._doc.user.toString(),
                title: workout._doc.title,
                notes: workout._doc.notes,
                exercises: workout._doc.exercises
            }
            res.json(result)      
        })
        .catch(err => res.status(404).json({ noworkoutfound: 'No workout found with that ID'}))
})
```
