import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightUserBlockComponent } from './right-user-block.component';

describe('RightUserBlockComponent', () => {
  let component: RightUserBlockComponent;
  let fixture: ComponentFixture<RightUserBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightUserBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightUserBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
