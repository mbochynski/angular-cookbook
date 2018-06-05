import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { StorageService } from './shared/storage.service';
import { AuthService } from './auth/auth.service';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './auth/auth.guard';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AuthModule,
    ShoppingListModule,
    SharedModule,
  ],
  providers: [ShoppingListService, RecipeService, StorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
