import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer = new Subject<string>();
  private debouncerSuscription = new Subscription();
  @Input() placeholder: string = '';
  @Input() initialValue: string = '';
  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();


  ngOnInit(): void {

    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  emitValue($event: string) {
    this.onValue.emit($event);
  }
  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  ngOnDestroy(): void {
    this.debouncerSuscription.unsubscribe();
  }
}
