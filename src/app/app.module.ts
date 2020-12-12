import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { async } from 'rxjs/internal/scheduler/async';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// tslint:disable-next-line: typedef
export function init_app(){
  return async () => {
    await delay(10000);
  };
}

// tslint:disable-next-line: typedef
function delay(ms: number){
  return new Promise(resolve => setTimeout(resolve, ms));
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HighlightComponent,
    AdvertisementComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule,
    NgbModule
  ],

  providers: [
    {provide: APP_INITIALIZER, useFactory: init_app, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
