import { Component } from '@angular/core';
import { GanntTask } from 'rawy-gantt-chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks:GanntTask[] = [
    {
      id: 1,
      label: 'task 1',
      description: 'description for task 1',
      start: '2023/4/9',
      end: '2023/4/14',

      subTasks: [
        {
          id:1,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/9',
          end: '2023/4/10',
        },
        {
          id:2,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/9',
          end: '2023/4/12',
        },
        {
          id:3,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/10',
          end: '2023/4/14',
        },
        {
          id:4,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/13',
          end: '2023/4/14',
        },
        

        
      ]
    },
    {
      id: 2,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/4/7',
      end: '2023/4/10',

      subTasks: [
        { 
          id:1,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/6',
          end: '2023/4/8',
        },
        {
          id:2,
          description:'desc',
          label: 'sub task ',
          start: '2023/4/9',
          end: '2023/4/10',
        }

      ]
    },
    {
      id: 3,
      label: 'task 2',
      description: 'description for task 1',
      start: '2023/4/11',
      end: '2023/4/15',

      subTasks: [
        {
          id:1,
          description:'desc',
          label:'A',
          start: '2023/4/11',
          end: '2023/4/15',
        },

      ]
    },
  ]
}
