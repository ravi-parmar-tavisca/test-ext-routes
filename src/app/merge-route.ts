import { allRoutes } from './routes';
import { extensionRoute } from './routes.ext';
extensionRoute.forEach((extRoute) => {
  mergeInnerRoute(extRoute, allRoutes);
});
function mergeInnerRoute(extRoute: any, allroutes: any[]) {
  if (extRoute.pageType == 'custom') {
    allroutes.push(extRoute);
  } else {
    const route = allroutes.find((targetRoute) => {
      return extRoute.pageType === targetRoute.pageType;
    });
    if (route) {
      if (route.angular?.children || route.children) {
        let sourceRoutes = route.angular?.children ?? route.children;
        let targetRoutes = extRoute.angular?.children ?? extRoute.children;
        mergeRoutes(sourceRoutes, targetRoutes);
        route.path = extRoute.path;
        route.pageType = extRoute.pageType;
        // route.component = extRoute.angular?.component ?? extRoute?.component;
        if (route.data != undefined) {
          route.data.title = extRoute.data?.title ;
        }
        if (route.angular?.data != undefined) {
          route.angular.data.title = extRoute.angular?.data?.title ;
        }
        if (route.component != undefined) {
          route.component = extRoute?.component ;
        }
        if (route.angular?.component != undefined) {
          route.angular.component = extRoute.angular?.component ;
        }
      } else {
        Object.assign(route, extRoute);
      }
    } else {
      allroutes.push(extRoute);
    }
  }
}
function mergeRoutes(allroutes: any[], extRoutes: any[]) {
  extRoutes?.forEach((extRoute) => {
    mergeInnerRoute(extRoute, allroutes);
  });
}
