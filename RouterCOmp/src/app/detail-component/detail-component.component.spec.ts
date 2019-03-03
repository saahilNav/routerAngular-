import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCOmponentComponent } from './detail-component.component';

describe('DetailCOmponentComponent', () => {
  let component: DetailCOmponentComponent;
  let fixture: ComponentFixture<DetailCOmponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCOmponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCOmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
