This repository demonstrates a bug in React Router v6 when using nested routes in conjunction with a wildcard (*) route parameter. The issue arises when trying to render components based on nested paths after navigating to a sub-route under a wildcard route.  The problem seems to be related to how the wildcard (*) route matches and handles subsequent navigation.  The solution provided addresses this by using a more specific route definition.  This issue may affect other applications similarly using nested routes with wildcard route parameters in React Router v6.