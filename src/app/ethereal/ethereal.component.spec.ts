import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtherealComponent } from './ethereal.component';

describe('EtherealComponent', () => {
  let component: EtherealComponent;
  let fixture: ComponentFixture<EtherealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtherealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtherealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
