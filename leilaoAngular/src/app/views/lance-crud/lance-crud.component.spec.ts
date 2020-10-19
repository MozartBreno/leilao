import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCrudComponent } from './lance-crud.component';

describe('ClienteCrudComponent', () => {
  let component: ClienteCrudComponent;
  let fixture: ComponentFixture<ClienteCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});