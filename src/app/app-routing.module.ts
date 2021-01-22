import './merge-route';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MicroAppRouteConverter } from '@orxe-extension/route-helper';
import { allRoutes } from './routes';
import { extensionRoute } from './routes.ext';
console.log(extensionRoute);
console.log("allroutes",allRoutes);


@NgModule({
  imports: [
    RouterModule.forRoot(MicroAppRouteConverter.getRoutes(allRoutes), { initialNavigation: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

