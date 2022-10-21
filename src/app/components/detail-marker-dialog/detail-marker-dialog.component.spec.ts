import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMarkerDialogComponent } from './detail-marker-dialog.component';

describe('DetailMarkerDialogComponent', () => {
  let component: DetailMarkerDialogComponent;
  let fixture: ComponentFixture<DetailMarkerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMarkerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMarkerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
