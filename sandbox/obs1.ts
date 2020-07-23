import { Observable, interval, of, from, timer } from "rxjs";

const obs1 = new Observable<string>((observe) => {
  setTimeout(() => {
    observe.next("titi");
  }, 1000);
  setTimeout(() => {
    observe.next("toto");
    observe.complete();
  }, 2000);
});

console.log("start");
// obs1.subscribe({
//   next: (data) => console.log("data", data),
//   complete: () => console.log("complete"),
// });

const obs2 = new Observable<number>((observe) => {
  let i = 0;
  setInterval(() => {
    observe.next(i);
    i++;
  }, 1000);
});

// obs2.subscribe(console.log);

// interval(1000).subscribe(console.log);

timer(2000).subscribe(console.log);
