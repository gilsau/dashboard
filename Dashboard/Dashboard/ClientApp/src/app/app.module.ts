import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FilesComponent } from './files/files.component';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InvitesComponent } from './invites/invites.component';
import { LinksComponent } from './links/links.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MessagesComponent } from './messages/messages.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NewsComponent } from './news/news.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PhotosComponent } from './photos/photos.component';
import { ProfileComponent } from './profile/profile.component';
import { RadioComponent } from './radio/radio.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { SportsComponent } from './sports/sports.component';
import { StocksComponent } from './stocks/stocks.component';
import { VideosComponent } from './videos/videos.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    ConversationsComponent,
    CounterComponent,
    FetchDataComponent,
    FilesComponent,
    FriendsComponent,
    GamesComponent,
    HeaderComponent,
    HomeComponent,
    InvitesComponent,
    LinksComponent,
    LocationsComponent,
    LoginComponent,
    MarketplaceComponent,
    MessagesComponent,
    NavMenuComponent,
    NewsComponent,
    NotificationsComponent,
    PhotosComponent,
    ProfileComponent,
    RadioComponent,
    ReportsComponent,
    SettingsComponent,
    SportsComponent,
    StocksComponent,
    VideosComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'boards', component: BoardsComponent },
      { path: 'conversations', component: ConversationsComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'files', component: FilesComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'games', component: GamesComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'invites', component: InvitesComponent },
      { path: 'links', component: LinksComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'login/:logout', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'marketplace', component: MarketplaceComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'news', component: NewsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'radio', component: RadioComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'sports', component: SportsComponent },
      { path: 'stocks', component: StocksComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'weather', component: WeatherComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
