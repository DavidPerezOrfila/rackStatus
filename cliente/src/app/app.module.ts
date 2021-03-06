import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { RacksComponent } from './components/racks/racks.component';
import { EditarComponent } from './components/editar/editar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CrearComponent } from './components/crear/crear.component';

// Services
import { RackService } from './rack.service';

// Router
import { APP_Routes } from './app.routes';
import { KeyValuePipe } from './key-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RacksComponent,
    EditarComponent,
    NavbarComponent,
    CrearComponent,
    KeyValuePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_Routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [RackService],
  bootstrap: [AppComponent]
})
export class AppModule {}
