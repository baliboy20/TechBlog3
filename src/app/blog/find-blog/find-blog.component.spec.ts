import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBlogComponent } from './find-blog.component';

describe('FindBlogComponent', () => {
  let component: FindBlogComponent;
  let fixture: ComponentFixture<FindBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
