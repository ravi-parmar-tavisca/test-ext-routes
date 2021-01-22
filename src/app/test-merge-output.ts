

import { RouteConfig } from '@orxe-extension/route-helper';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentCustomComponent } from './component-custom/component-custom.component';
import { ComponentDComponent } from './component-d/component-d.component';
import { ComponentEComponent } from './component-e/component-e.component';
import { ComponentGComponent } from './component-g/component-g.component';
import { ComponentHComponent } from './component-h/component-h.component';
import { ComponentIComponent } from './component-i/component-i.component';
import { ComponentJComponent } from './component-j/component-j.component';
import { ComponentKComponent } from './component-k/component-k.component';
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
    PATH_J = 'path_j',
    PATH_K = 'path_k',
    CUSTOM = 'custom'
}

export const allRoutes: RouteConfig[] = [
    {
        path: '',
        pageType: Page.DEFAULT,
        angular: {
            component: AppComponent
        }
    },
    {
        path: 'path_a',
        pageType: Page.PATH_A,
        angular: {
            component: ComponentBComponent,
            data: { title: 'title.ComponentAComponent' },
            children: [
                {
                    path: '',
                    pageType: Page.DEFAULT,
                    pathMatch: 'full',
                    redirectTo: 'path_b'
                },
                {
                    path: 'newpath_b',
                    pageType: Page.PATH_B,
                    component: ComponentBComponent,
                    data: { title: 'title.newComponentBComponent' },
                    children: [
                        {
                            path: 'path_c',
                            pageType: Page.PATH_C,
                            component: ComponentCComponent,

                            data: { title: 'title.ComponentCComponent' },
                            children: [
                                {
                                    path: 'path_g',
                                    pageType: Page.PATH_G,
                                    component: ComponentGComponent,
                                    data: { title: 'title.ComponentGComponent' }
                                },
                                {
                                    path: 'path_h',
                                    pageType: Page.PATH_H,
                                    component: ComponentHComponent,
                                    data: { title: 'title.ComponentHComponent' }
                                },
                            ]


                        },
                        {
                            path: 'path_i',
                            pageType: Page.PATH_I,
                            component: ComponentIComponent,
                            data: { title: 'title.ComponentIComponent' }

                        }

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
            children: [
                {
                    path: 'newpath_j',
                    pageType: Page.PATH_J,
                    component: ComponentJComponent,
                    data: { title: 'title.newComponentJComponent' },
                    children: [
                        {
                            path: 'path_k',
                            pageType: Page.PATH_K,
                            component: ComponentKComponent,
                            data: { title: 'title.ComponentKComponent' }
                        },
                        {
                            path: 'custom',
                            pageType: Page.CUSTOM,
                            component: ComponentCustomComponent,
                            data: { title: 'title.ComponentCustomComponent' }
                        },
                    ]
                },

            ]
        },
    },
    {
        path: 'custom',
        pageType: Page.CUSTOM,
        angular: {
            component: ComponentCustomComponent,
            data: { title: 'title.ComponentCustomComponent' },
            children: [
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
        }
    }
];
];