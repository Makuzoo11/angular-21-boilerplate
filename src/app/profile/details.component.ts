import { Component } from '@angular/core';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'details.component.html', standalone: false })
export class DetailsComponent {
    constructor(private accountService: AccountService) { }

    get account() {
        return this.accountService.accountValue;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
