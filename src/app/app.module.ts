import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceLaunchInfoComponent } from './space-launch-info/space-launch-info.component';
import { LaunchRocketService} from './services/rocket-launch-service';

@NgModule({
  declarations: [
    AppComponent,
    SpaceLaunchInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LaunchRocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
