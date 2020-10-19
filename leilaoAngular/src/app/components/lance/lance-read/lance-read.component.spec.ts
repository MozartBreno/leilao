import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceReadComponent } from './lance-read.component';

describe('ClienteReadComponent', () => {
  let component: LanceReadComponent;
  let fixture: ComponentFixture<LanceReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanceReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanceReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
