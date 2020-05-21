To start using React routes
STEP 1

yarn add react-router-dom

or

npm install react-router-dom

Next
// Step 1. Import react-router functions from node modules

import { BrowserRouter as Router, Route } from 'react-router-dom';

Next

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
<Router>
<Route path="/" component={Home} />
</Router>),
document.getElementById('root')
);

Router is where we will declare how React Router will be used.

Route has two components: path and component

The Route component is in charge of saying: "when the URL matches this specified path, render this specified component".

**_ Add More Routes _**

**_ About and Login _**

Add functions for each route

const About = () => {
return (

<div>
<h1>This is my about component!</h1>
</div>
);
};

const Login = () => {
return (

<div>
<form>
<div>
<input type="text" name="username" placeholder="Username" />
<label htmlFor="username">Username</label>
</div>
<div>
<input type="password" name="password" placeholder="Password" />
<label htmlFor="password">Password</label>
</div>
<input type="submit" value="Login" />
</form>
</div>
);
};

NEXT
Now add those routes to our router.

ReactDOM.render((
<Router>

<div>
<Route path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/login" component={Login} />
</div>
</Router>),
document.getElementById('root')
);

STEP 3 Remove constant home rendering.
Change first route div to the following

<Route exact path="/" component={Home} />

** Step 4 Using render **
Instead of writing functions and passing as props you can use render and return JSX

<Route path="/" render={() => <h1>Home!</h1>} />

** Step 5 NavLinks/Link **

This allows users to trigger routes without writing it into the address bar.
