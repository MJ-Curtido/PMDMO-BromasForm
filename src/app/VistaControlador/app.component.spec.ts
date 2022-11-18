import { TestBed } from '@angular/core/testing';
import { JokeListComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JokeListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(JokeListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Prueba2022'`, () => {
    const fixture = TestBed.createComponent(JokeListComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Prueba2022');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(JokeListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Prueba2022 app is running!');
  });
});
