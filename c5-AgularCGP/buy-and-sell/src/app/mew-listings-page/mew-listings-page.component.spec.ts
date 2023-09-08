import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MewListingsPageComponent } from './mew-listings-page.component';

describe('MewListingsPageComponent', () => {
  let component: MewListingsPageComponent;
  let fixture: ComponentFixture<MewListingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MewListingsPageComponent]
    });
    fixture = TestBed.createComponent(MewListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
