import { ContentChildren, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentCotacaoComponent } from './components/content-cotacao/content-cotacao.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'cotacao-dolar',
    component: ContentCotacaoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
