import { Component, Input } from '@angular/core';
import { IStoreNasa } from 'src/app/server/modals/store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})

export class CardComponent {
  @Input() dataNasa: IStoreNasa
  details = false
}  
