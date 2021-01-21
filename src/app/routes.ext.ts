

import { RouteConfig } from '@orxe-extension/route-helper';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentCustomComponent } from './component-custom/component-custom.component';
import { ComponentDComponent } from './component-d/component-d.component';
import { ComponentEComponent } from './component-e/component-e.component';
import { ComponentGComponent } from './component-g/component-g.component';
export enum Page {
  DEFAULT = 'default',
  PATH_A = 'path_a',
  PATH_B = 'path_b',
  PATH_C = 'path_c',
  PATH_D = 'path_d',
  PATH_E = 'path_e',
  PATH_F = 'path_f',
  PATH_G = 'path_g',
  PATH_H = 'path_h',
  PATH_I = 'path_i',
  CUSTOM = 'custom'
}

export const extensionRoute: RouteConfig[] = [
  {
    path: '',
    pageType: Page.DEFAULT,
    angular: {
    component:AppComponent
    }
  },
  {
    path: 'path_a',
    pageType: Page.PATH_A,
    angular: {
      component:ComponentAComponent,
      data: { title: 'title.ComponentAComponent' },
      children:[
        {
        path: '',
        pageType: Page.DEFAULT,
        pathMatch: 'full',
        redirectTo: 'path_b'
      },
      {
        path: 'path_b',
        pageType: Page.PATH_B,
        component: ComponentBComponent,
        data: { title: 'title.ComponentBComponent' },
        children:[
          {
            path: 'path_c',
            pageType: Page.PATH_C,
            component: ComponentCComponent,
            data: { title: 'title.ComponentCComponent' },
            children:[
              {
                path: 'custom',
                pageType: Page.CUSTOM,
                component: ComponentCustomComponent,
                data: { title: 'title.ComponentCustomComponent' }
              }
            ]
          },

        ]
      }
    ]
    },
  },
  {
    path: 'newpath_D',
    pageType: Page.PATH_D,
    angular: {
      component: ComponentDComponent,
      data: { title: 'title.newComponentDComponent' },
    },
  },
  {
    path: 'custom',
    pageType: Page.CUSTOM,
    angular: {
      component: ComponentCustomComponent,
      data: { title: 'title.ComponentCustomComponent' },
      children:[
        {
          path: 'path_e',
          pageType: Page.PATH_E,
          component: ComponentEComponent,
          data: { title: 'title.ComponentEComponent' }
        }
      ]
    }
  },
  {
    path: 'custom',
    pageType: Page.CUSTOM,
    angular: {
      component: ComponentCustomComponent,
      data: { title: 'title.ComponentCustomComponent' },
      children:[
        {
          path: 'path_e',
          pageType: Page.PATH_E,
          component: ComponentEComponent,
          data: { title: 'title.ComponentEComponent' }
        }
      ]
    }
  }
];