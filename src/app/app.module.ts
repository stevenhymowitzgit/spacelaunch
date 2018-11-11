import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceLaunchInfoComponent } from './space-launch-info/space-launch-info.component';
import { LaunchRocketService} from './services/rocket-launch-service';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpaceLaunchInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [LaunchRocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
