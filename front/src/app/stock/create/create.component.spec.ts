import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Location } from '@angular/common';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';
import { StockComponent } from '../stock.component';
import { Router, Route, ActivatedRoute } from '@angular/router';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let articleService: ArticleService;

  let location: Location;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', redirectTo: 'stock/create', pathMatch: 'full' },
          {
            path: 'stock',
            component: StockComponent,
          },
          {
            path: 'stock/create',
            component: CreateComponent,
          },
        ]),
      ],
      declarations: [CreateComponent],
    }).compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    articleService = TestBed.inject(ArticleService);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    router.initialNavigation();
    route = TestBed.inject(ActivatedRoute);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', fakeAsync(() => {
    spyOn(articleService, 'add');

    component.submit();
    tick();

    expect(articleService.add).toHaveBeenCalledWith(component.f.value);
    // Limitation : work only with absolute path.
    expect(location.path()).toEqual('/stock');
  }));
});
