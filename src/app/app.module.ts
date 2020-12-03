import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { async } from 'rxjs/internal/scheduler/async';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports:[
    ClarityModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: init_app, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
