# Weather Finder Challenge

We have a new client that needs to easily see the current weather conditions in various cities around the world. Our team has quickly built an MVP app and now needs your help to improve it.

Please see the following points where we think we need to improve:

- Files and folders structure
- Component size
- Testing
- Error handling
- Logic coupling

Here are some bonus points:

- Don't use classes
- Use react hooks / custom hooks
- Use local storage to store the last search between sessions
- Use react context
- Use Error Boundaries
- Use Typescript

# Project features and fixes.

**1-** I installed Typescript and add the tsconfig.json file which contains typescript configurations.  
**2-** I moved the image to an assets folder inside src/images  
**3-** The sources should be in the project and not consumed from a link, to avoid security and availability problems.  
**4-** I divided the logic of the index.js file between the App component and the Home page and transform the components from Class to Functional.  
**5-** Create the following folder structure:

```
└── src/
     ├── api/ /*fetch apis*/
     ├── assets/
     	├── images/ /*just images in this case*/
     ├──components/
     ├── context/ /*Context API config for each entity*/
     	├──entity/
     		├──context/
     		├──provider/
     		├──reducer/
     ├── hooks/ /*custom hooks*/
     ├── models/ /*types and interfaces*/
     ├── pages/
     ├── utils/
```

**6-** Create the class component for the ErrorBoundary (it doesn't allow functionals) and wrap the home with this boundary so that it catches any error from it.  
**7-** Each component has its style file and unit test.  
**8-** Create a custom hook to unify the logic of getting the weather from the context.  
**9-** Use React Context API for global state management (in this case only the weather).  
**10-** Use localStorage to save the last saved search, so that when entering another tab, the data is already preloaded if a search has already been carried out.  
**11-** Add new enviroment variable    **REACT_APP_OPENWEATHERMAP_URL_BASE** with the next value for dev: http://api.openweathermap.org/data/2.5/


App Demo in the following Link: https://weather-sp-challenge.netlify.app/
