import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Samsung Tv', weight: 42000, symbol: 'Paid'},
  {position: 2, name: 'Dell Laptop', weight: 92000, symbol: 'Paid'},
  {position: 3, name: 'iphone 13', weight: 68000, symbol: 'Due'},
  {position: 4, name: 'Hp Laptop', weight: 70000, symbol: 'Paid'},
  {position: 5, name: 'Samsung S20', weight: 82000, symbol: 'Due'},
  {position: 6, name: 'Redmi 10pro', weight: 20000, symbol: 'paid'},
  {position: 7, name: 'Oneplus 10T', weight: 46999, symbol: 'paid'},
  {position: 8, name: 'Asus Laptop', weight: 65999, symbol: 'Due'},
  {position: 9, name: 'xiaomi Tv', weight: 30000, symbol: 'paid'},
  {position: 10, name: 'Sony Camera', weight: 89999, symbol: 'paid'},
  {position: 11, name: 'Vivo', weight: 25899, symbol: 'paid'},
  {position: 12, name: 'LG', weight: 23000, symbol: 'Due'},
  {position: 13, name: 'Canon', weight:60600, symbol: 'Apaid'},
  {position: 14, name: 'Oppo', weight: 28000, symbol: 'Due'},
  {position: 15, name: 'Dell Laptop', weight: 56000, symbol: 'paid'},
  {position: 16, name: 'Poco', weight: 32000, symbol: 'paid'},
  {position: 17, name: 'JBL headphone', weight: 6000, symbol: 'paid'},
  {position: 18, name: 'iphone 14pro', weight: 90000, symbol: 'Due'},
  {position: 19, name: 'Hp Laptop', weight: 45000, symbol: 'paid'},
  {position: 20, name: 'Asus tab', weight: 22000, symbol: 'paid'},
];