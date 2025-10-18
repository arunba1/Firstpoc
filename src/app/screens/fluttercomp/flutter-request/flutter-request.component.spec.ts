import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterRequestComponent } from './flutter-request.component';

describe('FlutterRequestComponent', () => {
  let component: FlutterRequestComponent;
  let fixture: ComponentFixture<FlutterRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlutterRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlutterRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
