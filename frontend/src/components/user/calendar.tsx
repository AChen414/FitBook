import React from 'react';

import { 
  Inject, 
  ScheduleComponent, 
  Day, 
  Week, 
  WorkWeek, 
  Month, 
  Agenda, 
  CellClickEventArgs 
} from "@syncfusion/ej2-react-schedule";

import { 
  TreeViewComponent, 
  DragAndDropEventArgs 
} from '@syncfusion/ej2-react-navigations';

interface ICalendarProps {
  workouts?: { [key: string]: Object }[];
  calendarData?: { [key: string]: Object }[];
  currentUser?: String;
  editUser: (user: Object) => void;
}

class UserCalendar extends React.Component<ICalendarProps, {}> {
  public scheduleObj!: ScheduleComponent;

  public fields: Object = { dataSource: this.props.workouts, id: 'Id', text: 'Name' };

  public data: { [key: string]: Object }[] = [{
    Id: 3,
    Subject: 'Testing',
    StartTime: new Date(2020, 7, 19, 9, 0),
    EndTime: new Date(2020, 7, 19, 10, 0),
    IsAllDay: false
  }, {
    Id: 4,
    Subject: 'Vacation',
    StartTime: new Date(2020, 7, 20, 9, 0),
    EndTime: new Date(2020, 7, 20, 10, 0),
    IsAllDay: false
  }]; 

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
        // this line opens the event editor on drop
        this.scheduleObj.openEditor(eventData, "Add", true);
        
        // this line adds the dropped workout directly
        // this.scheduleObj.addEvent(eventData);
      }
    } 
  }

  // this.scheduleObj.eventSettings.properties.dataSource

  addEventToUserCalendar(){
    let updatedUser: Object = {
      calendarData: this.scheduleObj.eventSettings.dataSource,
      _id: this.props.currentUser
    }

    this.props.editUser(updatedUser);
  }

  public render() {
    // debugger
    return (
      <div>
        <button onClick={this.addEventToUserCalendar.bind(this)}>Save</button>
        <div className="scheduler-component">
          <ScheduleComponent
            height="550px"
            currentView="Month"
            eventSettings={{ dataSource: this.props.calendarData }}
            ref={schedule => this.scheduleObj = schedule as ScheduleComponent}
          >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
        <div className="treeview-title-container">Your Workouts:</div>
        <div className="treeview-component">
          <TreeViewComponent 
            fields={this.fields} 
            allowDragAndDrop={true}
            nodeDragStop={this.onTreeDragStop.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default UserCalendar;