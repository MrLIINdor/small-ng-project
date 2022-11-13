import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IStoreNasa } from 'src/app/server/modals/store';
import { StoreService } from 'src/app/server/store.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  store$: Observable<IStoreNasa[]>
  loading = false

  constructor(private storeNasa: StoreService){}

  ngOnInit(): void {
    this.loading = true
    this.store$ = this.storeNasa.getAll().pipe(
      tap(()=> this.loading = false)
    )
  }

}
