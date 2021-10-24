import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnChanges {
  isLoggedIn$ = new BehaviorSubject(false);
  menuHidden = true;


  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private credentialsService: CredentialsService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    /* this.isLoggedIn$.next(this.credentialsService.isAuthenticated());
    console.log('this.isLoggedIn', this.isLoggedIn$);
    this.cd.markForCheck(); */
  }

  ngOnChanges() {
    /* this.isLoggedIn.subscribe(data => {
      data = this.credentialsService.isAuthenticated();
    }); */
    this.isLoggedIn$.next(this.credentialsService.isAuthenticated());
    console.log('this.isLoggedIn', this.isLoggedIn$);
    this.cd.markForCheck();
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/home'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

}
