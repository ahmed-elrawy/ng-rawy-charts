import { TestBed } from '@angular/core/testing';

import { RawyGanttChartService } from './rawy-gantt-chart.service';

describe('RawyGanttChartService', () => {
  let service: RawyGanttChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawyGanttChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
