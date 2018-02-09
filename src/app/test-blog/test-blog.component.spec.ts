import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBlogComponent } from './test-blog.component';

describe('TestBlogComponent', () => {
  let component: TestBlogComponent;
  let fixture: ComponentFixture<TestBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
