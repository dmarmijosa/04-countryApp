import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `td:hover{
    cursor:pointer;
  }`
})
export class CountryTableComponent {
  @Input() country:Country[]=[];
  
}
