import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SerialsFacade } from './store/serials.facade';
import { SerialsService } from './services/serials.service';
import { SerialListComponent } from './components/serial-list/serial-list.component';
import { SelectComponent } from './components/select/select.component';
import { SerialItemComponent } from './components/serial-item/serial-item.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { serialsReducer } from './store/serials.reducer';
import { HttpClientModule } from '@angular/common/http';
import { SerialsEffects } from './store/serials.effects';

@NgModule({
  declarations: [
    AppComponent,
    SerialListComponent,
    SelectComponent,
    SerialItemComponent,
    TypeaheadComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(serialsReducer),
    EffectsModule.forRoot([SerialsEffects]),
    HttpClientModule,
  ],
  providers: [SerialsFacade, SerialsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
