# NOTES

React routing, a method of navigating through website pages based on url links.

## First steps: After installation

- We need too import browser router

```JS
import { BrowserRouter } from "react-router-dom"
```

- We need to wrap our root component in a browser router component that allows us to use the benefits of it

```JS
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

```

- In our App.jsx we need to import some components from react router

```JS
import { Link, Route, Routes } from "react-router-dom"
```

- These will help us set up navigation through pages

- Firstly we need to set up a Routes component which will contain all our routes

- And in Routes we use route to create our routes by hardcoding a path and giving the component to render

```Js
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productsPage" element={<ProductsPage />} />
    </Routes>
```

- here we have multiple routes starting with the first which has the path="/" this is our home page. /categories and /productPage are routes the components that match the path. These components will be rendered without re-rendering the page when accessed from the path.

- Now to access these paths we have another route element named link

```JS
<nav>
    <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/categories">Categories</Link>
        </li>
        <li>
        <Link to="/productsPage/">Products</Link>
        </li>
    </ul>
</nav>
```

- In react router the Link component replaces our good old anchor tag and renders for us the component with the specified path

- Coming back to route we also have 3 other methods

```JS
<Route path="/productsPage/:id" element={<Product />} />
<Route path="/productsPage/new" element={<NewProduct />} />
<Route path="*" element={<NotFound />} />

```

- Product page :id is a way to dynamically generate paths, inside ProductPage component we have a couple of Link components. Now when we access a link inside the ProductPage component because they have a number after the usual path for product page the route with id will be selected.

- The Product component is going to render but we don t know which product we have selected so to render that we can import a react router hook names useParams to get parameters from the path

```JS

import { useParams } from "react-router-dom"

const Product = () => {
   const {id} = useParams()
  return (
    <div>Product {id}</div>
  )
}
export default Product

```

- Continuing on the subject of paths here we have hardcoded a new path with product page, this is done just to show that react router 6 now knows how interpret paths and to distinguish paths that actually have an id or not and the fact that the route under the one with id is hardcoded

```JS
<Route path="/productsPage/:id" element={<Product />} />
<Route path="/productsPage/new" element={<NewProduct />} />
<Route path="*" element={<NotFound />} />

```

- Our last Route component is for rendering errors the path="\*" and the star works kind of like regex validation, if any path introduced does not match the ones in the router the one with star will match and send us to the error path

## Nested Routes

- Here we need to declare a parent route witch takes the main path, the routes inside the main path wil bee the sub paths to the main path.

- The sub paths don't need slashes anymore, that will cause errors

- Also to be able to access the the main path only without any of the sub paths we need to ma a route that leads us to the main path by writing index in the route

```JS

<Route path="/productsPage" element={<ProductLayout/>}>
  <Route index element={<ProductsPage />} />
  <Route path=":id" element={<Product />} />
  <Route path="new" element={<NewProduct />} />
</Route>

```

- The sub paths can be accessed by the url, if we want them to have access by click we could just have write them in one of our components. If we want them to appear in multiple components we could make a new component containing the sub paths and pass it to the Parent route as an element.

```JS
<>
  <Link to="/productsPage/1">Product nr 1</Link>
  <br />
  <Link to="/productsPage/2">Product nr 2</Link>
  <br />
  <Link to="/productsPage/new">New Product</Link>
  <Outlet/>
</>
```

- one important is the Outlet component without it our index path would show only these links and would not render the index.

- Outlet allows us to render the index and the layout when we access the index from which we can navigate

## More on nesting

- instead of nesting in a route we can use our element attribute for passing our path by making a component for them and in it pass our previous nesting

```JS
const ProductsRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<ProductLayout/>}>
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<Product />} />
            <Route path="new" element={<NewProduct />} />
        </Route>
    </Routes>
    </>
  )
}
```

- The path inside this main route needs to contain a /* after because that mathes all our side paths

```JS
  <Route path="/productsPage/*" element={<ProductsRoutes/>}/>
```

- What is very interesting here is that now we have a separate component that we can use in multiple places and at the same time we also have the layout that makes our sub paths accessible 

```JS
  <Outlet context={{logic: "SomeFunction"}}/>
```

- And with out Outlet component that is made to figure out what component from he layout to render we can also pass down logic into each sub path component to use if needed

## UseRoutes hook

- This is an alternative way to render routes using a js object. It s a normal object which contains exactly the same thing nesting Routes would, paths, elements children but they are nested in a object.

```JS
element = useRoutes([
  {
    path: "/",
    element: <ProductLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: ":id",
        element: <Product />,
      },
      {
        path: "new",
        element: <NewProduct />,
      },
    ],
  },
])


  return (
    <>
      {element}
    </>
```
## The Link tag atributes

- Replace attribute: removes current page from history. Use case: deleting login from history because we don t want to let the user go back to that

- reloadDocument: It reloads the entire page

- state: allows us to pass data down links


