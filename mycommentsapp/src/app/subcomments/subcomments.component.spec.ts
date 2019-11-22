import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcommentsComponent } from './subcomments.component';

describe('SubcommentsComponent', () => {
  let component: SubcommentsComponent;
  let fixture: ComponentFixture<SubcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
