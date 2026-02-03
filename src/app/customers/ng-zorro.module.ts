import { NgModule} from '@angular/core';

import { NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';

@NgModule({
  exports:[
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzPaginationModule
  ]
})
export class NgZorroModule {

}
