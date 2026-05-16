<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
=======
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'login.component.html', standalone: false })
export class LoginComponent implements OnInit {
    form!: FormGroup;
    submitting = false;
    submitted = false;
<<<<<<< HEAD
    returnUrl!: string;
=======
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
<<<<<<< HEAD
        private alertService: AlertService
=======
        private alertService: AlertService,
        private cdr: ChangeDetectorRef
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
<<<<<<< HEAD

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
=======
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
<<<<<<< HEAD

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
=======
        this.cdr.detectChanges();

        this.alertService.clear();

>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
        if (this.form.invalid) {
            return;
        }

        this.submitting = true;
<<<<<<< HEAD
        this.accountService.login(this.form.value.email, this.form.value.password)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                },
                error: (error: any) => {
                    this.alertService.error(error);
                    this.submitting = false;
=======
        this.cdr.detectChanges();

        this.accountService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                },
                error: error => {
                    setTimeout(() => {
                        this.alertService.error(error);
                        this.submitting = false;
                        this.cdr.detectChanges();
                    });
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
                }
            });
    }
}