# [FitBook](http://fitness-book.herokuapp.com/)
Fitbook is a fitness tracking web app that allows you to create and track custom workouts and share them amongst your friends and followers. A user can create workouts by adding exercises from an extensive list from our database, or even add their own. Users can then add these workouts to a calendar and share them amongst other users.

![fb](https://user-images.githubusercontent.com/59374267/98974767-22286b00-24ca-11eb-8ab1-ebe978096e14.jpeg)



## Creators
* [Andrew Chen](https://github.com/AChen414)
* [Yuk Chan](https://github.com/YukC92)
* [Kenneth Liang](https://github.com/kenneth-liang)
* [Gordy Bullen](https://github.com/gordybullen)

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

 ![Unneeded Info](https://puu.sh/G5MT8/723b7c18bc.jpg)
    
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
* Able to add and delete exercises from the workout form by clicking on the exercise 

```javascript
addExercise(exerciseId) {
    return () => {
        let currentExercises = this.state.exercises;
        currentExercises.push(exerciseId);
        this.setState({ exercises: currentExercises });
    };
};

removeExercise(exerciseId) {
    return (e) => {
        e.preventDefault();
        let prevExercises = this.state.exercises;
        let currentExercises = prevExercises.filter( ele => (ele !== exerciseId))
        this.setState({ exercises: currentExercises })
    }
}
```

# Calendar 

### Using Syncfusion React library, a modern UI Components library, we built our dynamic calendar from the ground up to be lightweight, responsive, modular and touch friendly.

* Adding Syncfusion Scheduler package 

```bat 
npm install @syncfusion/ej2-react-schedule --save
```

* Populating the Calendar with User Workouts is done by binding the event data to its assiged dataSource property either with valid JSON data or else with remote URL, from where the data will be fetched.

```javascript 
    public fields: Object = { dataSource: this.props.workouts, id: 'Id', text: 'Name' };

    addEventsToUserCalendar(){
        let updatedUser: Object = {
        calendarData: this.scheduleObj.eventSettings.dataSource,
        _id: this.props.currentUser
        }
        this.props.editUser(updatedUser);
    }

    <ScheduleComponent
        height="550px"
        currentView="Month"
        eventSettings={{ dataSource: this.props.calendarData }}
        ref={schedule => this.scheduleObj = schedule as ScheduleComponent}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>

```

* Workouts can be rescheduled to any time by dragging and dropping them onto the desired location. 

```javascript
  onTreeDragStop(args?: DragAndDropEventArgs): void {
    if (args) {
      let cellData: CellClickEventArgs = this.scheduleObj.getCellDetails(args.target);
      if (cellData) {
        let eventData: {[key: string]: Object} = {
          Subject: args.draggedNodeData.text,
          StartTime: cellData.startTime,
          EndTime: cellData.endTime,
          IsAllDay: cellData.isAllDay
        };
        this.scheduleObj.openEditor(eventData, "Add", true);
      }
    } 
  }

```

# Future Features
* Social interactions between users
    * Sharing workouts and exercises
    * Live chat between users
    * Upload videos of workouts
* Live workout set/rep tracker
