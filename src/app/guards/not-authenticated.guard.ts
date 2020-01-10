import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class NotAuthenticatedGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.authenticationService.isAuthenticated().then(isAuthenticated => {
            if (!isAuthenticated) {
                return true;
            }

            this.router.navigate(['auth']);
            return false;
        });

    }
}
