import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'content',
    component:ContentComponent
  },

  {
    path: 'content/:id',
    component:ContentComponent
  },

  {
    path: '',
    component:AllCharactersComponent
  },
  {
    path:'comics',
    component:ComicsComponent
  },
  {
    path:'series',
    component:SeriesComponent
  },
  {
    path:'AllCharacters',
    component:AllCharactersComponent
  },
  {
    path:'Events',
    component:EventsComponent
  },
  {
    path: '**', redirectTo: ''
  }, // Rota coringa

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
