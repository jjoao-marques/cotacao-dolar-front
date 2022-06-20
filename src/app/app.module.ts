import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






//MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentCotacaoComponent } from './components/content-cotacao/content-cotacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentCotacaoComponent,
    HomeComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
