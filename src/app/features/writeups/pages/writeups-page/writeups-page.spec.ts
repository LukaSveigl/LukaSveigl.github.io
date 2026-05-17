import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteupsPage } from './writeups-page';

describe('WriteupsPage', () => {
  let component: WriteupsPage;
  let fixture: ComponentFixture<WriteupsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteupsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WriteupsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
