import { Component, Input } from '@angular/core';
import { GanntTask } from './rawy-gantt-chart.interface';

@Component({
  selector: 'rawy-gantt-chart',
  templateUrl:'./rawy-gantt-chart.component.html',
  styleUrls: ['./rawy-gantt-chart.component.scss']

})
export class RawyGanttChartComponent {

  @Input() dayStart='';
  @Input() dayEnd='';
  @Input() beforeStartDay = 3;
  @Input() afterEndDay = 3;
  @Input() cellWidth = 120; // 1 day is 120px
  @Input() tasks: GanntTask[]=[];
  dates: string[] = []
  todayIndex=0
  workingDays=0;
  todayWidth=0
  line:number=0


  ngOnInit(): void {
    this.prepareChart();
  }

  prepareChart() {
 
    const first = new Date(this.dayStart)
          first.setMonth( first.getMonth() - this.beforeStartDay)
          first.toLocaleDateString()
    const second= new Date(this.dayEnd)
          second.setMonth( second.getMonth() + this.afterEndDay) 
          second.toLocaleDateString()
    const d1 = new Date(this.formateDate([first])[0]);
    const d2 = new Date(this.formateDate([second])[0]);

    this.dates= this.getDatesInRange(d1, d2) 
    this.todayIndex= (this.dates.indexOf(this.formateDate([new Date()])[0])+1)
    this.todayWidth = this.todayIndex * this.cellWidth
    this.line = (this.dates.indexOf(this.formateDate([new Date()])[0])+1)*this.cellWidth -100
    this.workingDays = this.dates.length
    this.prepareTasks(this.tasks)
    for(let task of this.tasks) { //prepare subTasks
      this.prepareTasks(task.subTasks as GanntTask[])
    } 
    setTimeout(()=> {

      document.getElementById("timelineWrapper")!.scrollLeft += this.todayWidth -538
    },0)
  }

  prepareTasks(data:GanntTask[]) {
    
    data.map((task:GanntTask) => {

      let start = this.dates.indexOf(task.start)+1;
      let end = this.dates.indexOf(task.end)+1
      task.offset = (start* this.cellWidth )-this.cellWidth
      task.width = ((end - start +1) * this.cellWidth )
      let range = end - (this.todayIndex)
      let width = task.width /this.cellWidth
      let status = (range /width) * 100

      if(start  > this.todayIndex){task.color ='#ffffff8'}
      else if(status > 30 && (end- this.todayIndex >3)) { task.color ='#99E7D1'} 
      else if(status < 0 ) {task.color ='#FF375E'}
      else if(status == 0 ){task.color ='#00C48C'} 
      else if( end - this.todayIndex <3 || status < 30 && end != this.todayIndex){task.color ='#E1DD40'} 

    });
  }
  onTaskClick(clickedTask:GanntTask) {
    document.getElementById("timelineWrapper")!.scrollLeft = 0
    document.getElementById("timelineWrapper")!.scrollLeft += (clickedTask.offset as number)

    this.tasks.filter((task:GanntTask) => {
      if (task.id === clickedTask.id) {
        task.isHidden = !task.isHidden;
        clickedTask.active = !clickedTask.active;
      }
    });
  }





  getDatesInRange(startDate: Date, endDate: Date) {
    const date = new Date(startDate.getTime());
    const dates = [];
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    return this.formateDate(dates);
  }
  
  formateDate(dates: Date[]):Array<string>{
    let shortDates:Array<string> = []
    dates.forEach(value => {
      const year = value.getFullYear();
      const month = value.getMonth() + 1;
      const day = value.getDate();
      const withSlashes = [year, month, day].join('/');
      shortDates.push(withSlashes)

    })
    return shortDates
  }
 
  scroll(s:any){}

  updatedSize(size:any, index:any ,dr:string,childIndex?:number){
    // this.canResize(index)

    if(dr=='right'){
      
      if(size == 1){
         this.getTask(index, childIndex)['width']  += this.cellWidth;
         this.getTask(index, childIndex)['end'] =  this.incrementDate( this.getTask(index, childIndex)['end'],1)
      }else if(size == -1 &&  this.getTask(index, childIndex)['width']  >this.cellWidth) {
        if( !this.canResize(index) && !childIndex) return

        this.getTask(index, childIndex)['width'] += -this.cellWidth
         this.getTask(index, childIndex)['end']  =  this.incrementDate( this.getTask(index, childIndex)['end'],-1)
      }
    }else{
      if(size == 1 &&  this.getTask(index,childIndex)['width'] >this.cellWidth){
        
         this.getTask(index, childIndex)['offset'] += this.cellWidth;
         this.getTask(index, childIndex)['width']  -= this.cellWidth; 
         this.getTask(index, childIndex)['start']  =  this.incrementDate( this.getTask(index, childIndex)['start'],+1)
      } else if (size == -1){
         this.getTask(index, childIndex)['offset'] -= this.cellWidth;
         this.getTask(index, childIndex)['width']  += this.cellWidth;
         this.getTask(index, childIndex)['start']  =  this.incrementDate( this.getTask(index, childIndex)['start'],-1)
      }
    }
    this.prepareTasks(this.tasks)
  }

  incrementDate(date:string, inc:number){
   let  newDate =  this.dates.indexOf(date) + inc
   return  this.dates[newDate]
  }

  getTask(parentIndex:number, childIndex?:number){
    if( childIndex !=undefined && this.tasks[parentIndex].subTasks){
      
      return(this.tasks[parentIndex] as any).subTasks[childIndex] 

    }else {
      return this.tasks[parentIndex]
    }
  }

  canResize( index:number ) {
    let task= this.tasks[index].subTasks?.filter((e) => (this.dates.indexOf(e.end)+1) > this.dates.indexOf(this.tasks[index].end)) 
    return  !task?.length   
     
  }


}

