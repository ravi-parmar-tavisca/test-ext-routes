import { allRoutes } from './routes';
import { extensionRoute } from './routes.ext';

extensionRoute.forEach((extRoute) => {
  if (extRoute.pageType == 'custom') {
    allRoutes.push(extRoute);
  } else {
    const route = allRoutes.find(
      ({ pageType }) => pageType === extRoute.pageType
    );
    if (route) {
      if (route.angular.children) {
        mergeRoutes(route.angular.children, extRoute.angular.children);
      } else {
        Object.assign(route, extRoute);
      }
    } else {
      allRoutes.push(extRoute);
    }
  }
});

function mergeRoutes(allroutes: any[], extRoutes: any[]) {
  extRoutes.forEach((extRoute) => {
    if (extRoute.pageType == 'custom') {
      allroutes.push(extRoute);
    } else {
      let route = allroutes.find((targetElement) => {
        return extRoute.pageType === targetElement.pageType;
      });
      if (route) {
        if (route.angular?.children) {
          mergeRoutes(route.angular?.children, extRoute.angular?.children);
        } else {
          Object.assign(route, extRoute);
        }
      } else {
        allroutes.push(extRoute);
      }
    }
  });
}
