import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    AuthModule,
    HomeModule,
    ShellModule,
    AboutModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
