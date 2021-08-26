import { routesModdul, RoutesItem } from './router'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import NotFind from '../components/error/NotFind'

export default function RouterView(props: RouteComponentProps) {

  const getRoutes = (routesModdul: RoutesItem[]) => {
    let routes: RoutesItem[] = []
    routesModdul.forEach(r => {
      routes.push(r)
      if (r.children?.length) {
        routes = [...routes, ...getRoutes(r.children)]
      }
    })
    return routes
  }

  return (
    <Switch>
      {getRoutes(routesModdul).map((r) =>
        <Route
          exact
          key={r.path}
          path={r.path}
          component={r.component}
        />
      )}
      <Route component={NotFind} />
    </Switch>
  )
}