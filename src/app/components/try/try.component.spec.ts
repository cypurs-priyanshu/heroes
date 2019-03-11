import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { trycomponent } from './try.component';

describe('trycomponent', () => {
  let component: trycomponent;
  let fixture: ComponentFixture<trycomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ trycomponent ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(trycomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
