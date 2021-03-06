import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RepoComponent } from './repo/repo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
// import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    RepoComponent,
    NotfoundComponent,
    HomepageComponent,
    UserComponent,
    HighlightDirective,
    // FormSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
