import { Routes } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ProductComponent} from './products/product.component';
import { CustomersComponent } from './customers/customers.component';
import { IncomeComponent } from './income/income.component';
import { PromoteComponent} from './promote/promote.component';
import { HelpComponent} from './help/help.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'promote', component: PromoteComponent },
  { path: 'help', component: HelpComponent },
];
