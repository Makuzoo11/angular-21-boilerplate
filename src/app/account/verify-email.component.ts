import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { first } from 'rxjs';
=======
import { first } from 'rxjs/operators';
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76

import { AccountService, AlertService } from '@app/_services';

enum EmailStatus {
    Verifying,
    Failed
}

@Component({ templateUrl: 'verify-email.component.html', standalone: false })
export class VerifyEmailComponent implements OnInit {
    EmailStatus = EmailStatus;
    emailStatus = EmailStatus.Verifying;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        const token = this.route.snapshot.queryParams['token'];

        // remove token from url to prevent http referer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

        this.accountService.verifyEmail(token)
            .pipe(first())
            .subscribe({
                next: () => {
<<<<<<< HEAD
                    this.alertService.success('Verification successful, you can now login', { keepAfterRouteChange: true });
=======
                    this.alertService.success(
                        'Verification successful, you can now login',
                        { keepAfterRouteChange: true }
                    );
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: () => {
                    this.emailStatus = EmailStatus.Failed;
                }
            });
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
