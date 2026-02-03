import {Component} from '@angular/core';
import {
  NzTableComponent,
  NzTableFilterFn,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';

import {NgForOf} from '@angular/common';
import {NzTableModule} from 'ng-zorro-antd/table';
import {HttpClient} from '@angular/common/http';
import {OnInit} from '@angular/core';


interface DataItem {
  id: number;
  name: string;
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    NzTableComponent,
    NgForOf,
    NzTableModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {
  listOfColumns: ColumnItem[] = [
    {
      name: 'Id',
      sortOrder: null,
      sortFn: null,
      filterFn: null,
      filterMultiple: true,
      sortDirections: []
    },
    {
      name: 'Name',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      filterFn: (list: string[], item: DataItem) => {
        console.log('filter name fn')
        return list.some((name) => item.name.indexOf(name) !== -1);
      },
    },
    {
      name: 'Age',
      sortOrder: 'null',
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
      sortDirections: ['descend', 'ascend', null],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Address',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.address.length - b.address.length,
      filterMultiple: false,
      filterFn: (address: string, item: DataItem) => {
        console.log('filter address fn')
        return item.address.indexOf(address) !== -1;
      },
    }
  ];
  listOfData: DataItem[] = []

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.loadcustomers();
  }

  loadcustomers() {
    this.httpClient.get<any[]>('api/customers').subscribe(data => {
      this.listOfData = data;
    })
  }

  onDelete(id: number) {
    this.httpClient.delete('api/customers/' + id).subscribe(() => {
      this.loadcustomers();
    })
  }
}
