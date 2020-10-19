import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceCreateComponent } from './lance-create.component';

describe('ClienteCreateComponent', () => {
  let component: LanceCreateComponent;
  let fixture: ComponentFixture<LanceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
