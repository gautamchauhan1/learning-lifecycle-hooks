import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeParentComponent } from './life-parent.component';

describe('LifeParentComponent', () => {
  let component: LifeParentComponent;
  let fixture: ComponentFixture<LifeParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeParentComponent]
    });
    fixture = TestBed.createComponent(LifeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
