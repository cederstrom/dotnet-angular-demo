import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CounterComponent } from './counter.component';
import { InjectionToken } from '@angular/core';

describe('CounterComponent', () => {
  const baseUrl = "http://mocked/";
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: "BASE_URL", useValue: baseUrl },
      ],
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should display a title', async () => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Counter');
  });

  describe("when clicking increment button", () => {
    let countElement;

    beforeEach(() => {
      countElement = fixture.nativeElement.querySelector('strong');
      expect(countElement.textContent).toEqual('0');

      const incrementButton = fixture.nativeElement.querySelector('button');
      incrementButton.click();
      fixture.detectChanges();
    });

    describe("UI", () => {
      test("shall update counter", () => {
        expect(countElement.textContent).toBe('1');
      });
    });

    describe("server", () => {
      let httpMock: HttpTestingController;

      beforeEach(() => {
        httpMock = TestBed.get(HttpTestingController);
      });

      afterEach(() => {
        httpMock.verify();
      });

      test("shall have been called with new counter value", () => {
        const mock = httpMock.expectOne(`${baseUrl}api/counter`);
        expect(mock.request.method).toEqual("PUT");
        expect(mock.request.body).toEqual({ count: 1 });
      });
    });

  });

});
