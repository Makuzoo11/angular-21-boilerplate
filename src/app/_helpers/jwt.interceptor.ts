import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
=======
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AccountService } from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
<<<<<<< HEAD
        const account = this.accountService.accountValue;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (account?.jwtToken && isApiUrl) {
=======
        // add auth header with jwt if account is logged in and request is to the api url
        const account = this.accountService.accountValue;
        const isLoggedIn = account && account.jwtToken;
        const isApiUrl = request.url.startsWith(environment.apiUrl);

        if (isLoggedIn && isApiUrl) {
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${account.jwtToken}` }
            });
        }
<<<<<<< HEAD
=======

>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
        return next.handle(request);
    }
}