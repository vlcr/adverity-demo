This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Comments from the author

  * Data transformation was done in a most readable way, so I could be easly understood and further modified by developers. In case of performance issues it could be changed to complex **reduce** function to avoid additional looping over the array. But it will impact readability.
  * In Real-life solution you may want to go for a single service to handle fetch requests for easier user authentication handling (if the API requires it).
  * The console ERROR about findDOMNode is coming from Semantic UI lib and the Issue is already raised on GitHub: https://github.com/Semantic-Org/Semantic-UI-React/issues/3819 I could have switched to another component's lib, but I believe that's not the point here. Thanks for understanding.
  * The console WARNING about componentWillReceiveProps lifecycle method is coming from Recharts charting library. Same as above, issue was already raised to the authors: https://github.com/recharts/recharts/issues/2260 and could be fixed by changing to different charting lib.
  * Testing was done rather to showcase that it should be done in a project, then to actually cover the solution.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**



