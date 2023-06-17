# "myNews: ReactJS News Aggregator"

This is developed using ReactJS and NewsAPI, allows users to read news articles from various categories. It provides a user-friendly interface where users can explore and stay updated on the latest news. The project leverages the NewsAPI to fetch news data and displays it in an organized manner. With the ability to browse news by different categories, users can easily access articles related to their interests, such as business, entertainment, health, science, sports, and technology. The project aims to provide a convenient and efficient way for users to stay informed about current events and access news content from a wide range of categories.

Here are instructions for creating your own API and using the .env.local file, you can follow these steps:

This project allows you to read news of various categories. To get started, you'll need to create your own API key and configure it in the project.

## Setup

1. Create your own API key by signing up on the NewsAPI website (https://newsapi.org/) and obtaining an API key.

2. In the root directory of the project, create a new file named `.env.local`.

3. Open the `.env.local` file and add the following line:

     REACT_APP_NEWS_API_KEY = YOUR_API_KEY
   
5. Replace `YOUR_API_KEY` with the API key you obtained from NewsAPI.

6. Save the `.env.local` file.

7. Start the development server by running the following command:

  1. npm i
  2. npm run start

## Available Scripts:

In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
