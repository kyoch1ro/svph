import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { UserModule } from 'app/user/user.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './shared/nav/nav.component';
import { FootComponent } from './shared/foot/foot.component';
import { FeaturedNavigationComponent } from './shared/featured-navigation/featured-navigation.component';
import { FeaturedContentComponent } from './shared/featured-content/featured-content.component'


@NgModule({
  imports: [
    SharedModule,
    UserModule
  ],
  declarations: [MainComponent, NavComponent, FootComponent, FeaturedNavigationComponent, FeaturedContentComponent]
})
export class HomeModule { }
