import React from 'react';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule";


class UserCalendar extends React.Component{
    constructor() {
        super(...arguments);
        this.data = [
          {
            Id: 2,
            Subject: "Workout A",
            StartTime: new Date(2020, 6, 11, 10, 0),
            EndTime: new Date(2020, 6, 11, 12, 30),
          },
          {
            Id: 3,
            Subject: "Workout A",
            StartTime: new Date(2020, 6, 14, 10, 0),
            EndTime: new Date(2020, 6, 14, 12, 30),
          },
          {
            Id: 4,
            Subject: "Workout A",
            StartTime: new Date(2020, 6, 17, 10, 0),
            EndTime: new Date(2020, 6, 17, 12, 30),
          },
          {
            Id: 5,
            Subject: "Workout A",
            StartTime: new Date(2020, 6, 20, 10, 0),
            EndTime: new Date(2020, 6, 20, 12, 30),
          },

        ];
    }

    render () {
        return (
          //   <ScheduleComponent currentView="Month" eventSettings={{ dataSource: this.data }}>
          //  <ScheduleComponent height='550px' currentView="Month"eventSettings={{ dataSource: this.data }}>
          <ScheduleComponent
            height="550px"
            currentView="Month"
            eventSettings={{ dataSource: this.data }}
          >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        );
    }
}

export default UserCalendar