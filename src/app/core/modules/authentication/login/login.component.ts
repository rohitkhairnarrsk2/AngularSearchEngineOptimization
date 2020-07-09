import { Component, OnInit, Inject, PLATFORM_ID, AfterContentInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterContentInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
       // Client only code.
       console.log("Login Client Side Code")
       localStorage.setItem("name","Rohit")
    }
    if (isPlatformServer(this.platformId)) {
      // Server only code.
      console.log("Login Server Side Code")
    }
  }
  ngAfterContentInit() {
    if (isPlatformBrowser(this.platformId)) {
       // Client only code.
       console.log(" ngAfterContentInit Login Client Side Code")
       localStorage.setItem("name","Rohit")
    }
    if (isPlatformServer(this.platformId)) {
      // Server only code.
      console.log("ngAfterContentInit Login Server Side Code")
    }
  }
}
