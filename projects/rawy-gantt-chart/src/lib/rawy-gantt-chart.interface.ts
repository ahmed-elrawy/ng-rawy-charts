export interface GanntTask {
    id?:number;
    label:string;
    description:string;
    start:string;
    end: string;
    color?:string;
    isHidden?:boolean;
    active?:boolean;
    width?:number
    offset?:number
    subTasks?: GanntTask[]
  
}