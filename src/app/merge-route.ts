
import { allRoutes } from "./routes";
import { extensionRoute } from "./routes.ext";

extensionRoute.forEach((extRoute) => {
  mergeInnerRoute(extRoute, allRoutes);
});

function mergeInnerRoute(extRoute: any, allroutes: any[]) {
  if (extRoute.pageType == "custom") {
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
      } else {
        Object.assign(route, extRoute);
      }
    } else {
      allroutes.push(extRoute);
    }
  }
}

function mergeRoutes(allroutes: any[], extRoutes: any[]) {
  extRoutes.forEach((extRoute) => {
    mergeInnerRoute(extRoute, allroutes);
  });
}

