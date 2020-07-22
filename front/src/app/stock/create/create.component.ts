import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Tournevis', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    price: new FormControl(1.0, Validators.required),
    qty: new FormControl(100, Validators.required),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
    const article: Article = this.f.value as Article;
    this.articleService.add(article);
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
