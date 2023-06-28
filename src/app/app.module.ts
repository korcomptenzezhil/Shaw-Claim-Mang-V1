import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InitiateClaimComponent } from './initiate-claim/initiate-claim.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { ClaimDuesComponent } from './dashboard/claim-dues/claim-dues.component';
import { OdItemsComponent } from './dashboard/od-items/od-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { loginReducer } from './ngrx/store/reducers/login.reducer';
import { AuthGaurd } from './mockApis/authgaurd';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    InitiateClaimComponent,
    DashboardComponent,
    ReportsComponent,
    WorkQueueComponent,
    BodyComponent,
    FooterComponent,
    SettingsComponent,
    ClaimDuesComponent,
    OdItemsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ login: loginReducer }), // Add the login reducer to the store
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
  providers: [AuthGaurd], // Add AuthGuard as a provider
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
