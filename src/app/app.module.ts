import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightBlockComponent } from './right-block/right-block.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RightUserBlockComponent } from './right-user-block/right-user-block.component';
import { cardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RightBlockComponent,
    HomeComponentComponent,
    RightUserBlockComponent,
    cardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
