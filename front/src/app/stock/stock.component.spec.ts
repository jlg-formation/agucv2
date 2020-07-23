import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetModule } from '../widget/widget.module';
import { StockComponent } from './stock.component';
import { a1 } from '../mock/data';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WidgetModule],
      declarations: [StockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle', () => {
    component.toggle(a1);
    component.toggle(a1);
    expect(component).toBeTruthy();
  });

  it('should remove', () => {
    component.remove();
    expect(component).toBeTruthy();
  });

  it('should refresh', () => {
    component.refresh();
    expect(component).toBeTruthy();
  });
});
