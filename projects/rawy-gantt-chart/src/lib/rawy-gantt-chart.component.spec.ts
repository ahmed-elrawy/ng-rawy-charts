import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawyGanttChartComponent } from './rawy-gantt-chart.component';

describe('RawyGanttChartComponent', () => {
  let component: RawyGanttChartComponent;
  let fixture: ComponentFixture<RawyGanttChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawyGanttChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawyGanttChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
