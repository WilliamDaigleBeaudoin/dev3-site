import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';  
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListeMemeComponent } from './liste-meme/liste-meme.component';
import { MemeService } from './meme.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditMemeComponent } from './edit-meme/edit-meme.component';
import { StatsComponent } from './stats/stats.component';
import { TotalParTagComponent } from './total-par-tag/total-par-tag.component';
import { MoyenneClickThemeComponent } from './moyenne-click-theme/moyenne-click-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListeMemeComponent,
    EditMemeComponent,
    StatsComponent,
    TotalParTagComponent,
    MoyenneClickThemeComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [MemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
