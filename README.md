# Prosjekt 2

##Introduction
Our web page is a virtual museum with multiple options and customizations. In the header, the user can navigate between the different masterpieces and save a favourite. In the footer one can choose the theme of the page, the song and save a combination of these. Here you can also change the poetry displayed.

##TypeScript and React
For this project we chose, as the requirement stated, Typescript to implement our React-based web page. Typescript, described as a superset of JavaScript, offers additional functionality such as checking for errors while compiling instead of catching them during runtime. One feature we took advantage of is static typing which means that variable types are declared in the code. This makes it easier to catch mistakes related to types continuously while writing the code. We also used the interface functionality to declare types separate of the function.

##Props, state and context
Initially, we found the use of context to pass props and states between components to be a challenge. However, when we did manage to use it, it solved many of our problems. In React, states and props are sent from parent to child. This means that components in different parts of the component tree need to use context for passing props. In this project, we used context to solve this for passing input from the radiobuttons related to changing theme and song. We also used context for changing the main foto. Since the buttons for all of these cases exist in different parts of the page than where the action was executed, it allowed us to avoid so-called prop drilling where props and state have to be passed down through multiple components.


Originally we had separated the page into three different main components - header, middlepage and lower page. This worked fine when we only used contexts to pass props and state, but we wanted to try out and use the parent-child relation to achieve this. To make this possible we wrapped both lower and middle page as a united component so that the use of a function in the footer component was reachable in the text component (a child of middlepage).

##Text and AJAX
To get the text on to our page, we took use of React Hooks to fetch data from an API through a useEffect hook. 

There is an issue regarding the loading of new text after selecting poetry with the radiobuttons. After consulting with a studass we concluded that this is because the call to the poetry DB has a long delay. This might result in a delay in the change of text (the call to poetry DB took 12s when tested). 

##Sound
The sound was implemented by adding the mp3 files and having a simple script that calls for the different songs.

##Storage
We used local storage for the choice of favourite art, and it is therefore saved even when the page is refreshed. This is achieved by making getters and setters that fetch the saved option from the browser’s local storage.

Session storage was used for changes of the parametrized styling parts of the page. These are not saved between sessions but allow for saving of a favourite combination during one session.  

##Responsive design
While our SVG elements are sized and placed based on viewport, we found that the use of media-queries and scalable objects gave sufficient responsive design. We spent a lot of time working out the design with cross platform testing in the inspector window in Chrome. We focused on the Iphone 5/SE (an extreme case of narrow screen), Ipad and Google Chrome and adapted the styling to fit all these platforms. We used media-queries and a flexible layout to set a threshold for repositioning elements on the page. This means that when the page reaches a certain size, the page will automatically reorder different components so that they all fit.

##Testing
We have made two snapshot tests, one for the header and one for the footer, which we have used. These tests make it easy to spot if one change in the code affects other parts and components. We struggled with making them both run, but when we realized that the components tested needed to be wrapped in the context provider so that the test could reach the states and props here, it was easily fixed.

##Git
With little experience with git (and GitLab that we used) across the group we found it a bit challenging to begin with but this quickly improved. We started out with a common dev branch, branching out of master, but then adapted to work on separate branches. When working on specific features we tried to have a common practice of naming the branch after the feature (like /origin/feat/layout).

#Media disclaimer

Our SVG elements are made up of elements that we got from the web. We then combined them and added our own animations.

Page url:
https://www.flaticon.com/?fbclid=IwAR3syBdYC1RDrGg_KFRlBg5VJq0B4oHA3NHQm40_stE2g5eKdXx6pz4iHpM



