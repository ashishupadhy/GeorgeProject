import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlHandlingStrategy} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Services', component: ServicesComponent },

  { path: 'Checklist', component: ChecklistComponent },

  { path: 'Testimonials', component: TestimonialsComponent  },

  { path: 'Contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    ChecklistComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
