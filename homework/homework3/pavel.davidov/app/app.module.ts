import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD:homework/homework3/pavel.davidov/app/app.module.ts
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> project:project/src/app/app.module.ts


import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail-box/mail.component';
import { UsersService } from './users.service';
import { LettersService } from './letters.service';
import { LoggingService } from './logging.service';
import { AuthoriseService } from './authorise.service';
<<<<<<< HEAD:homework/homework3/pavel.davidov/app/app.module.ts
=======
import { AddUserComponent } from './add-user/add-user.component';
>>>>>>> project:project/src/app/app.module.ts



@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MailBoxComponent,
    MailComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD:homework/homework3/pavel.davidov/app/app.module.ts
    HttpClientModule
=======
    HttpClientModule,
    ReactiveFormsModule
>>>>>>> project:project/src/app/app.module.ts
  ],
  providers: [
    UsersService,
    LettersService,
    LoggingService,
    AuthoriseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }