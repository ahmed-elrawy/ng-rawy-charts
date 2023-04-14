# NgRawyCharts

ng-rawy-charts is a very simple Angular charts component 

![rawy-charts screenshot](https://github.com/ahmed-elrawy/ng-rawy-charts/blob/main/assets/images/rawy-gannt.png)

## Features

1. Dynamic work for each day.
2. Expandable sub tasks.
3. Multiple color-coded task statuses per task.
5. Tooltips with additional info for the bars and statuses on timeline.

## Installation

Run `npm install ng-rawy-charts` or download zip from github / clone repo.

## Usage

Include the module in your component as:

`import { RawyGanttChartModule } from 'ng-rawy-charts';`

Add the component in your HTML with the following inputs:

```HTML
<rawy-gantt-chart
 [dayStart]="'2023/1/1'"
 [dayEnd]="'2023/7/1'"
 [beforeStartDay]="3"
 [afterEndDay]="3"
 [tasks]="tasks"
 [cellWidth]="120">
</rawy-gantt-chart>
```

Your tasks array should look like the following:

```TS
import { GanntTask } from 'ng-rawy-charts';

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
```
