import { catchError, of } from 'rxjs';

import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService) {
<<<<<<< HEAD
    return () => accountService.refreshToken()
        .pipe(
            // catch error to start app on success or failure
            catchError(() => of())
        );
=======
  return () => accountService.refreshToken()
    .pipe(
      // catch error to start app on success or failure
      catchError(() => of())
    );
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
}