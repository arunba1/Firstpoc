import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavcompComponent } from './sidenavcomp.component';

describe('SidenavcompComponent', () => {
  let component: SidenavcompComponent;
  let fixture: ComponentFixture<SidenavcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavcompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
