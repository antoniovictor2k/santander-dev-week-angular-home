import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';

import { SvgComponentsModule } from './modules/svg-components.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		CardBoxComponent,
		CarouselItemsComponent,
		AmountBoxComponent,
  FooterComponent,

	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SvgComponentsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatIconModule,
		SlickCarouselModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
