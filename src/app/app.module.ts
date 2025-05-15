import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { XMenModule } from 'src/pages/x-men/x-men.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LoginModule } from 'src/pages/login/login.module';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    LoginModule,
    XMenModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
