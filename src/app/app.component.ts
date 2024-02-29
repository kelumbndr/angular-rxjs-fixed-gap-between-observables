import { Component, OnInit, VERSION } from '@angular/core';
import { concatMap, Observable, Subject, take, timer } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  version = VERSION.major;
  private applicantSaveJobs: Subject<any> = new Subject();

  constructor() {}

  ngOnInit(): void {


    // Subscribe to applicantSaveJobs with delay between emissions
    this.applicantSaveJobs
      .pipe(concatMap((value) => timer(1000).pipe(take(1))))
      .subscribe((value) => {
        // Handle emitted values here
        console.log(value);
      });

    // Emitting observables
    this.applicantSaveJobs.next(new Observable());
    this.applicantSaveJobs.next(new Observable());
  }
}
