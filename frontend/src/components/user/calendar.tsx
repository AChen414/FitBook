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
}

class UserCalendar extends React.Component<ICalendarProps, {}> {
  public scheduleObj!: ScheduleComponent;

  private treeViewData: {[key: string]: Object}[] = [
      { Id: 1, Name: 'Chest' },
      { Id: 2, Name: 'Back' }
    ];

  // public fields: Object = { dataSource: this.treeViewData, id: 'Id', text: 'Name' };
  public fields: Object = { dataSource: this.props.workouts, id: 'Id', text: 'Name' };

  onTreeDragStop(args?: DragAndDropEventArgs): void {
    if (args) {
      let cellData: CellClickEventArgs = this.scheduleObj.getCellDetails(args.target);
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

  public render () {
    return (
      <div>
        <div className="scheduler-component">
          <ScheduleComponent
            height="550px"
            currentView="Month"
            // eventSettings={{ dataSource: this.data }}
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
