import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WINDOW_PROVIDERS } from './services/window/window.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TwoWayBindingExampleDirective } from './twowaybindingexample.directive';
import { BlogServicesModule } from './modules/blog-services/blog-services.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    TwoWayBindingExampleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BlogServicesModule.forRoot({ mock: true })
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
