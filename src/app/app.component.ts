import { Component, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
       // Client only code.
       console.log("Client Side Code")
       localStorage.setItem("name","Rohit")
    }
    if (isPlatformServer(this.platformId)) {
      // Server only code.
      localStorage.setItem("name","Rohit")
      console.log("Server Side Code")
    }
  }
}

