import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AmazonComponent } from './amazon/amazon.component';
import { BoardsComponent } from './boards/boards.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { CounterComponent } from './counter/counter.component';
import { EbayComponent } from './ebay/ebay.component';
import { EventsComponent } from './events/events.component';
import { FacebookComponent } from './facebook/facebook.component';
import { FBMarketplaceComponent } from './fbmarketplace/fbmarketplace.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FilesComponent } from './files/files.component';
import { FindProfessionalsComponent } from './findprofessionals/findprofessionals.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendFeedComponent } from './friendFeed/friendFeed.component';
import { GamesComponent } from './games/games.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InstagramComponent } from './instagram/instagram.component';
import { InvitesComponent } from './invites/invites.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobProfileComponent } from './jobprofile/jobprofile.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { LinksComponent } from './links/links.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MessagesComponent } from './messages/messages.component';
import { NewsComponent } from './news/news.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PhotosComponent } from './photos/photos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostJobComponent } from './postjob/postjob.component';
import { ProfileComponent } from './profile/profile.component';
import { RadioComponent } from './radio/radio.component';
import { ReportsComponent } from './reports/reports.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { SportsComponent } from './sports/sports.component';
import { StocksComponent } from './stocks/stocks.component';
import { TasksComponent } from './tasks/tasks.component';
import { TwitterComponent } from './twitter/twitter.component';
import { VideosComponent } from './videos/videos.component';
import { WeatherComponent } from './weather/weather.component';
import { YouTubeComponent } from './youtube/youtube.component';

import { UserService } from './services/user.service';
import { CookieService } from './services/cookie.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonComponent,
    BoardsComponent,
    CalendarComponent,
    ConversationsComponent,
    CounterComponent,
    EbayComponent,
    EventsComponent,
    FacebookComponent,
    FBMarketplaceComponent,
    FetchDataComponent,
    FilesComponent,
    FindProfessionalsComponent,
    FriendsComponent,
    FriendFeedComponent,
    GamesComponent,
    HeaderComponent,
    HomeComponent,  
    InstagramComponent,
    InvitesComponent,
    JobsComponent,
    JobProfileComponent,
    LinkedinComponent,
    LinksComponent,
    LocationsComponent,
    LoginComponent,
    MarketplaceComponent,
    MessagesComponent,
    NewsComponent,
    NotificationsComponent,
    PhotosComponent,
    PortfolioComponent,
    PostJobComponent,
    ProfileComponent,
    RadioComponent,
    ReportsComponent,
    SearchComponent,
    SettingsComponent,
    SidebarComponent,
    Sidebar2Component,
    SportsComponent,
    StocksComponent,
    TasksComponent,
    TwitterComponent,
    VideosComponent,
    WeatherComponent,
    YouTubeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'amazon', component: AmazonComponent },
      { path: 'boards', component: BoardsComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'conversations', component: ConversationsComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'ebay', component: EbayComponent },
      { path: 'events', component: EventsComponent },
      { path: 'facebook', component: FacebookComponent },
      { path: 'fbmarketplace', component: FBMarketplaceComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'files', component: FilesComponent },
      { path: 'findprofessionals', component: FindProfessionalsComponent },
      { path: 'friends', component: FriendsComponent },
      { path: '', component: FriendFeedComponent },
      { path: 'games', component: GamesComponent },
      { path: 'invites', component: InvitesComponent },
      { path: 'instagram', component: InstagramComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'jobprofile', component: JobProfileComponent },
      { path: 'linkedin', component: LinkedinComponent },
      { path: 'links', component: LinksComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'login/:logout', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'marketplace', component: MarketplaceComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'news', component: NewsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'postjob', component: PostJobComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/:edit', component: ProfileComponent },
      { path: 'radio', component: RadioComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'sports', component: SportsComponent },
      { path: 'stocks', component: StocksComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'twitter', component: TwitterComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'youtube', component: YouTubeComponent }
    ])
  ],
  providers: [UserService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
