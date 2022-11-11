import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { LoginComponent } from './pages/login/login.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedsComponent,
    LoginComponent,
    AvatarComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
