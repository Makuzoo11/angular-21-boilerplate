import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

=======
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview.component';

<<<<<<< HEAD
const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);

const routes: Routes = [
    { path: '', component: SubNavComponent, outlet: 'subnav' },
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'accounts', loadChildren: accountsModule }
        ]
    }
];

=======
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
<<<<<<< HEAD
        RouterModule.forChild(routes)
=======
        AdminRoutingModule
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
    ],
    declarations: [
        SubNavComponent,
        LayoutComponent,
        OverviewComponent
<<<<<<< HEAD
    ],
    exports: [RouterModule]
=======
    ]
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
})
export class AdminModule { }