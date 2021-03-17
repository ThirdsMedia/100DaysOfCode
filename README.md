## Mission Statement
This challenge is part of a larger challenge taken on by ThirdsMedia as a whole. We will all be taking on our own personal 100 day challenges in order to grow our [start up company](https://thirdsmedia.com) in the first 100 days.  

**Commitment:** *I will code daily for the next 100 days in order to create a working Mobile application in React*

|  Start Date   | End Date     |
| ------------- | ------------ |
| Feb 2, 2021 | May 13, 2021 |

## Goals

- Code daily
- Complete a fully functioning mobile application written in React. 
- Get ThirdsMedia established in the Twitter development community. 

### DJ's personal goals for this project

- To overcome my fear of front end development.
- To create a fully functioning application and actually see a project through to completion. 

# Code Log
### Day 1: February, 2 2021 - Tuesday

**Today's Progress**: Set up React project. Started creating a basic dummy list of items. 

**Thoughts:** I could definitely improve my dexterity with Sublime and keybindings. Also, I. HATE. CSS. This is definitely where I will struggle the most. 

**Link to work:** [React App](https://github.com/ThirdsMedia/100DaysOfCode/tree/main/src)

### Day 2: February, 3 2021 - Wednesday

**Today's Progress**: Decided to go head first into more CSS stuff. Also, in order to make frontend dev seem less daunting. I created a search text input, an item and unit input with a button, and started to create a form that could be used for login/registration/etc. Then I started to style those components and combine them. Progress is still slow, but it's only day two. 

**Thoughts:** CSS is quickly getting easier. I decided to come up with all the different styles of button, text input, header, etc I would need in this app and create all of them as their own tiny components and then style them individually. Perhaps this is exactly what React is for, or perhaps I'm making my components too small? We shall see.

**Issues:** Nothing too glaring. Just need to get better at CSS. 

**Link to work:** [React App](https://github.com/ThirdsMedia/100DaysOfCode/tree/day2)

### Day 3: February, 5 2021 - Thursday

**Today's Progress**: More CSS. More googling. More fumbling. The main file was getting messy so I finally separated most of the components into separate files.

**Thoughts:** I'll still separate each individual element (different button types, text box types, etc) into separate functions so I can style them individually without getting too CSS-blind, I'll just do it in separate files to avoid a mess. I find myself wondering if there is some magical React powerhouse library that all the cool kids are using which prevents them from spending multiple hours in CSS just to achieve what I have so far. 

**Issues:** The amount of hours per Earth day are less then they should be. 

**Link to work:** [React App](https://github.com/ThirdsMedia/100DaysOfCode/tree/day3/src)


### Day 4: February, 6 2021 - Technically Saturday...

**Today's Progress**: Learned about Material UI and where to look for all the components: https://material-ui.com/getting-started/installation/

**Thoughts:** Sleepy. 

**Issues:** Sleepy.

**Link to work:** [React App](https://github.com/ThirdsMedia/100DaysOfCode/tree/day4/src)

### Day 5: February, 7 2021 - Sunday

**Today's Progress**: Spent time playing around with Material UI components. Specifically TextField, Container, Button, and CssBaseline to create a basic Registration form. I also learned a bit about customizing these components.

**Thoughts:** Material UI is definitely going to make things a lot easier for me. My plan is to spend the next few days (at least) just creating the UIs for everything. Major forms, inputs, buttons, etc. The functionality will be taken care of later, and I'm already fairly comfortable wiring everything together and making it work. I'm learning that I have a hard time implementing things if I don't see actual examples. This hour was spent copying a lot of demo code I found online and then tweaking it to see what does what vs. reading and understanding the documentation and then implementing it. Learning style? Or bad habit?

**Issues:** Too much retyping what I'm seeing online. I need to get better at reading the Docs and just understanding without having to see explicit examples. 

**Link to work:** [React App](https://github.com/ThirdsMedia/100DaysOfCode/tree/day5/src)

### Day 6: February, 7 2021 - Sunday

**Today's Progress**: Continued the path of Material UI, and created a nice looking sign in page. Then I copied it to another file and added another field to create a sign up page. 

**Thoughts:** Some more styling needs to be done, but I'm close to finishing the front end for the sign in and sign up page. I'm excited, because once done with those I can take what I've learned and much more easily apply it to the next things I'll be working on. 

**Issues:** Can't figure out how to change the border color of TextField when highlighted. I keep attempting to edit it with the classes field of TextField but I'm not sure that's the way. Both the Remember Me checkbox and the highlighted TextField are the same color when activated, so maybe that color is changed higher up then the actual components. 

**Link to work:** [Sign In and Sign Up pages](https://github.com/ThirdsMedia/100DaysOfCode/tree/day6/src)

### Day 7: February, 7 2021 - Monday

**Today's Progress**: I believe I've completed styling the SignIn and SignUp pages to my satisfaction. Next I'll move on to a brand new component!

**Thoughts:** I created a comment about figuring out how to move all makeStyles() stuff to either App.js and pass it to the rest of the application via ThemeProvider, or separating it into it's own file entirely. Once that's figured out I've pretty much cleaned everything up how I'd like it and figured out my best practices for styling. 

**Issues:** Unrelated to coding, but I still haven't figure out how to convert a 1 hour mp4 into a 1 minute timelapse video on linux. The VLC method doesn't seem to work...

**Link to work:** [Sign In and Sign Up pages](https://github.com/ThirdsMedia/100DaysOfCode/tree/day7/src)

### Day 8: February, 10 2021 - Tuesday night/Wednesday morning

**Today's Progress**: Not as much as I'd like it to be. I spent a lot of time researching why separating the makeStyles function into it's own file can cause issues. Then, when I didn't find a solution, I decided to stop worrying about that for now and decided to begin working on the <Search /> component. I've imported the Material UI components I believe I'll need, and will get started on the new component tommorrow. 

**Thoughts:** Sometimes I get too caught up in details. It's almost to the first ten day mark and I'm not sure if I'm behind or ahead. I've created the user interfaces for the sign in and sign up page and that's about it. I'm hoping that it's one of those "exponential progress" sort of things. I still have the Search and items page, the Contact us page (which will be easy), the Multi-step form for inputting ingredients and measurements, and the Profile page. Not to mention the Home page itself, and navigation. Then once that's all done, I need to make it actually do stuff. Not too worried, but I can't fall into a false sense of security. 

**Issues:** Separating makeStyles into it's own file and then importing it to the files that need it works on the first hot-reload, but then the changes evaporate after reloading again. It has something to do with how CSS prioritizes things, but the recommendation I found here: https://stackoverflow.com/questions/56929702/material-ui-v4-makestyles-exported-from-a-single-file-doesnt-retain-the-styles/56941531#56941531 doesn't seem to work. For now, it's a minor issue that doesn't need too much more attention at the moment. Just move forward.

**Link to work:** [Beginning the Search page](https://github.com/ThirdsMedia/100DaysOfCode/tree/day8/src)

### Day 9: February, 11 2021 - Wednesday night/Thursday morning

**Today's Progress**: Started on the search page. Created a basic app bar with a hamburger icon. I also created a nice looking search bar with an adornment icon. To finish off I added a Card component underneath the search bar with some text in it as a placeholder for tommorrow. 

**Thoughts:** Today felt rather productive. I also didn't have to google as much and instead spent more time looking through the Material UI API then I did looking for snippets on Stack Overflow. It felt good to just flow and not run into an real issues. Just spent the time coding steadily. 

**Issues:** I miss sneaking out at night to go find trouble over the train tracks. Cheers Jeff. 

**Link to work:** [Search page and app bar](https://github.com/ThirdsMedia/100DaysOfCode/tree/day9/src)

### Day 10: February, 11 2021 - Thursday 

**Today's Progress**: Created a CardList and CardItem component and separated them into files. Then I added them to the Search component page. I also created a Header file as well. 

**Thoughts:** Coding during the day feels much different then coding at 2 in the morning. I am still flowing through the code pretty well, though I'm not 100% sure I'm using the <Box /> component correctly. I believe I understand it's purpose but I wonder if I'm using it too much, or in arbitrary places. Looking forward to having a more free evening after work. 

**Issues:** Couldn't get the Avatar logo and the Typography header to align right. They are both centered, just not centered together. 

**Link to work:** [Search page and app bar](https://github.com/ThirdsMedia/100DaysOfCode/tree/day10/src)

### Day 11: February, 12 2021 - Friday 

**Today's Progress**: Woof. Create an alphabet-based side navigation panelusing Grid containers. Also got rid of the <Header /> component and moved the top logo into <MainBar />. 

**Thoughts:** Had fun with this one because I had absolutely no clue how to create a side panel that goes horizontal and is independent of the main Container. Did need to do some googling, but also spent time with trial-and-error which was fun. 

**Issues:** Couldn't figure out how to get the side nav to fit the screen. Some of it goes beyond the bottom of the fold and since it's in fixed position I can't see the last letters. 

**Link to work:** [Search page and SideNav](https://github.com/ThirdsMedia/100DaysOfCode/tree/day11/src)

### Day 12: February, 14 2021 - Sunday

**Today's Progress**: Nothing. Tried different Grid patterns but pretty much made everything worse. 

**Thoughts:** Hated this hour. Didn't get anything done, felt lost, and scrambled around the internet looking for answers to questions I didn't know how to ask properly. Almost feel like I should revert back a day and keep editing that code instead. 

**Issues:** Can't figure out how to space or center anything in Grid properly. My containers are going off the page. Can't get anything aligned right in the AppBar. Can't even figure out what the hex color code is for the dark theme in createMuiTheme....

**Link to work:** [Epic failure](https://github.com/ThirdsMedia/100DaysOfCode/tree/day12/src)

### Day 13: February, 14 2021 - Sunday

**Today's Progress**: Fixed much of the spacing, positioning, sizing, and organization. Temporarily got rid of the SideNav component until I actually need it.

**Thoughts:** It's important to take a step back, go for a walk, read, nap, whatever. I was feeling rather frustrated earlier and resorted to frantically googling for solutions without understanding what the problem was. The problem was that I wasn't considering where and how I'd use the components such as a custom <Search /> component, etc. Once I came back to the issue I realized a). My project's organization was starting to get convoluted, and b). I wasn't using the <Grid /> component properly. Come to think of it I still might not be....

**Issues:** Still haven't figured out how to use Grid quite right. I need to get the <MainBar /> component and the list of <CardItem /> components to automatically be spaced properly, so if I enable the <Search /> component in the <MainBar /> it won't overlap the list of <CardItem /> components, and instead push it out of the way like a proper grid should. 

**Link to work:** [Product List](https://github.com/ThirdsMedia/100DaysOfCode/tree/day13/src)

### Day 14: February, 15 2021 - Monday

**Today's Progress**: Not as much as I'd hoped. I spaced the ProductList containers better, but never figured out why the pictures aren't showing up in CardMedia. 

**Thoughts:** Meh. Tired today. I think I'm beginning to understand how to manipulate containers and grids better, but I haven't understood enough to know what I understand.... if that makes sense. I'll get there. I need to make sure not to get caught on one thing for too long. It's ok to move on without fully understanding. Perhaps I'll learn things elsewhere that I can apply retrospectively.

**Issues:** Failed to figure out why the image src isn't loading in CardMedia even though it was before. Once I figure that out I can move on to styling the CardItem components better, and then the frontend for the ProductList will be done. 

**Link to work:** [Product List](https://github.com/ThirdsMedia/100DaysOfCode/tree/day14/src)

### Day 15: February, 16 2021 - Tuesday

**Today's Progress**: Took a break from the project I was working around to mess around on an example Landing page with React and Material UI. Followed along in a video just to get a bit more practice in Material UI and general design stuff. 

**Thoughts:** I'm still very slow at designing stuff. I'm hoping that spending another week or so on this will help me speed up a bit. It's hard to not feel like I'm running out of time. In five days I'll only be a fifth of the way done so I still have plenty of time to turn this into a fully working app. 

**Issues:** Nothing really. Just having func

**Link to work:** [Example Landing Page](https://github.com/ThirdsMedia/100DaysOfCode/tree/day15/src)

### Day 16: February, 16 2021 - Wednesday

**Today's Progress**: Extended my break to continue the landing page practice. Learned some more about styling and transitions. 

**Thoughts:** It's amazing how coding a long with a 30 minute video actually ends up taking hours. Also, I'm starting to realize that it's ok to copy-paste a snippet of code such as a <Card /> design you like or some component that you want in your App and just edit it to fit your needs. I too frequently have the mentality of a back end developer. 

**Issues:** Again, not much. 

**Link to work:** [Example Landing Page](https://github.com/ThirdsMedia/100DaysOfCode/tree/day16/src)

### Day 17: February, 18 2021 - Thursday

**Today's Progress**: Took some time to learn how to use window.addEventListener and window.pageYOffset in order to animate Collapse when scrolling. 

**Thoughts:** I've been very successful so far, but I find that right around two weeks is when I started loosing some steam. Taking a break from the main app was helpful, but it still feels harder to get started then it did on the first week. I suppose that's normal.

**Issues:** Getting images to load was harder then I thought. Turns out you have to import your image, and you can't just pass it to a src="" element without importing it first. require() didn't seem to work either. 

**Link to work:** [Example Landing Page](https://github.com/ThirdsMedia/100DaysOfCode/tree/day17/src)

### Day 18: February, 19 2021 - Friday

**Today's Progress**: Create a Profile page and started the makings of an EditProfile component. Added a QRCode component which redirects to https://thirdsmedia.com.

**Thoughts:** Had fun today, despite distractions. Once I've gotten everything looking good for the Profile and EditProfile components I'm going to either create the Favorites page, or edit the Landing page I created a few days ago to fit this current project and then start on Navigation so I can wire these together. 

**Issues:** Getting distracted by everything. I created a Profile.js to start the profile page and immediately started tweaking the MainBar component, then realized I don't even need that right now so I removed it from Profile.js. I spent a half hour doing this. Need to focus more. 

**Link to work:** [Profile Page](https://github.com/ThirdsMedia/100DaysOfCode/tree/day18/src)

### Day 19: February, 20 2021 - Saturday

**Today's Progress**: Continued on the Profile page to add some more info, an Edit Profile button (which does nothing so far) and some other styling and layout stuff. Also separated the EditProfile button. This is where the Edit Profile button will navigate to.

**Thoughts:** I don't know if I'm not doing research properly, but I sort of feel like I'm still flailing when it comes to layout stuff. Container, Box, Grid, div... Not 100% sure when to use what. I tend to just try stuff and see what happens on the screen. Also, today is actually Saturday, and I'm doing Saturday at 2 am, instead of counting this as yesterday since I already did Friday on Friday.... Confusing I know. I'm tired as fuck.

**Issues:** Not understanding layouts properly. 

**Link to work:** [Profile Page](https://github.com/ThirdsMedia/100DaysOfCode/tree/day19/src)

### Day 20: February, 21 2021 - Sunday

**Today's Progress**: Practically completed the Profile component. Added a Tabs area below, added Breadcrumb links to Social media, finished the layout and styling as far as I can tell. 

**Thoughts:** Something of a slow start there but I guess that's what a 16 hour shift the day before will do to your Sunday. I think next I need to work on the EditProfile component, then the CardList and individual Cards. Then start working on Navigation to begin to tie everything together. Getting exciting now. 

**Issues:** Brain fog. 

**Link to work:** [Component](https://github.com/ThirdsMedia/100DaysOfCode/tree/day20/src)

### Day 21: February, 22 2021 - Monday

**Today's Progress**: Started and almost finished the EditProfile component. Well, the style and layout portions. Still no logic in any of these yet. 

**Thoughts:** Was super sleepy but managed to pick up momentum part way through this. I also noticed that I tend to do my best work after my timer for the hour goes off and I "finish" and commit everything. Then I get an itch to tweak a few more things and end up doing another whole hour without screen recording it lol. Can't say anything super specific that I learned. Mostly still just getting comfortable/picking up speed with Material UI and it's components. It's technically Monday but it's still Sunday for me because I haven't gone to sleep yet. Just getting it done early since tommorrow is another double shift. 

**Issues:** Still need to figure out how to either edit MuiThemes to pass to ThemeProvider better. I know it isn't hard, but I have it set to type: 'dark' right now and I want the background colors to be darker

**Link to work:** [EditProfile Component](https://github.com/ThirdsMedia/100DaysOfCode/tree/day21/src)

### Day 22: February, 23 2021 - Tuesday

**Today's Progress**: Made a bunch of little style touches on the EditProfile, Profile, CardList, and Products components. Got the Card items looking better and sized better. Learned about the importance of zIndex: 1, position: 'sticky', and why the latter won't work without top: 0 in CSS. Solved a lot of problems with that little bit of knowledge.

**Thoughts:** Had a hard time getting started but as usual found a flow state. I learned about why postion: 'sticky' didn't seem to do anything before. It requires top: 0, as well otherwise it does nothing. To use position: 'sticky' you need to give it coordinates of some sort, so if I wanted to have it stick somewhere besides the type I'd have to look into what coordinates it takes. At this point I'm starting to get close to having the major components all designed. As far as I can tell I have to design the component you navigate to once you click on a card from the list, the Build component, and I need to fix up the Landing page and import it into this project. Then I need to work on navigation and the Drawer navigator. Once all that is complete I just need to actually implement all the code logic, link to a database such as Firebase, and make the final touches. 

**Issues:** I need to figure out how to separate the card.ingredients.name objects by comma, while leaving the last comma off. Shouldn't be too hard just requires a bit of logic. 

**Link to work:** [Products Component](https://github.com/ThirdsMedia/100DaysOfCode/tree/day22/src)

### Day 23: February, 24 2021 - Wednesday

**Today's Progress**: Started on an ItemSheet component. This is the component that would get navigated to when clicking on a Card in the CardList component. Still need to get all the data displayed but the overall layout is looking ok. Learned a bit about process.env.PUBLIC_URL and how to use it to include urls for images. 

**Thoughts:** Did quite a bit of googling. Overall though I still think I'm getting faster at creating new components and shaping them into what I want them to be. Though I still tend to just flail/google/refer to old code when trying to figure out how CSS stuff works. 

**To Do:**
* Fix images
	* Move the assets folder in 100DaysOfCode/public. 
	* Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
* Finish individual components
	* Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	* Finish the ItemSheet component
	* Create a Contact component
* Start implementing Navigation to wire everything together
* Make any final style touches and clean up the project structure
* Re-deploy on gh-pages. The front-end should be complete

**Issues:** Still haven't gained a strong understanding of flexbox. Probably because I'm not trying. Most other CSS stuff is trivial but figuring out when to use what for centering or moving things to certain portions of the screen is still a weakness of mine. 

**Link to work:** [ItemSheet](https://github.com/ThirdsMedia/100DaysOfCode/tree/day23/src)

### Day 24: February, 25 2021 - Thursday

**Today's Progress**: Finished the ItemSheet component (the design portion). Added a QRCode toggler using useState. 

**Thoughts:** Awesome flow-state coding day. Just hammered away at the ItemSheet component until it was done without really any hitches. One thing I've learned about myself: I tend to underestimate what is left to be done in a project. Maybe it's because I only look at the larger portions without really thinking about the smaller details. For example, I missed a few things in the To Do list below because my brain didn't log them as significant, and thus assumes they will just be done without thinking about how. I imagine after doing more of these projects I'll develop a more detail-oriented way of thinking. 

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [ ] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] About component
	- [ ] The Build form (which facilitates entering data to the database)
		- [ ] Information component
		- [ ] Ingredients component
		- [ ] Instructions component
		- [ ] Camera/CameraRoll to choose or take a picture of the item you are building
- [ ] Start implementing Navigation 
	- [ ] Navigation drawer
	- [ ] Wire all component together
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Can't figure out how to space or move items to the other side of the AppBar component. Time moves too fast. General anxiety.

**Link to work:** [ItemSheet](https://github.com/ThirdsMedia/100DaysOfCode/tree/day24/src)

### Day 25: February, 28 2021 - Sunday

**Today's Progress**: Incorporated and re-styled the LandingPage component from day16. 

**Thoughts:** Oops! Missed a few days. Life happens I guess. I integrated the landing page and made it fit the App's theme. Not much else except did some research on the best way to navigate in React. I'm wondering how weird things will get when I use React Web navigation and then try to convert it to a mobile app in Capacitor. We shall see I suppose...

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] About component
	- [ ] The Build form (which facilitates entering data to the database)
		- [ ] Information component
		- [ ] Ingredients component
		- [ ] Instructions component
		- [ ] Camera/CameraRoll to choose or take a picture of the item you are building
- [ ] Start implementing Navigation 
	- [ ] Navigation drawer
	- [ ] Wire all component together
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Unsure of the right way to implement navigation in React web, even though the rest of this project is supposed to be converted to React Native anyway. 

**Link to work:** [Current](https://github.com/ThirdsMedia/100DaysOfCode/tree/day25/src)

### Day 26: February, 28 2021 - Sunday

**Today's Progress**: Added basic React router navigation.

**Thoughts:** Gh-pages sucks.

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] About component
	- [ ] The Build form (which facilitates entering data to the database)
		- [ ] Information component
		- [ ] Ingredients component
		- [ ] Instructions component
		- [ ] Camera/CameraRoll to choose or take a picture of the item you are building
- [ ] Start implementing Navigation 
	- [ ] Navigation drawer
	- [x] Wire all component together
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Gh-pages sucks

**Link to work:** [Current](https://github.com/ThirdsMedia/100DaysOfCode/tree/day26/src)

### Day 27: March 1, 2021 - Monday

**Today's Progress**: Re-styled the MainBar component and removed the Search component. It was small enough to just add straight into the Products component. Began the Create component as well.

**Thoughts:** I'm still behind, so I have to do 2 hours tommorrow to catch up. No big deal though because I actually have a day off this week. This project keeps becoming bigger as I chip away at the to do list. Also, I changed my mind and decided that the Create form should have everything on one page only, except for the Camera component. 

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A forgot password component
	- [ ] About component
	- [ ] The Build form (which facilitates entering data to the database)
		- [ ] Create component
		- [ ] Camera/CameraRoll to choose or take a picture of the item you are building
		- [ ] Review component
- [ ] Start implementing Navigation 
	- [ ] Navigation drawer
	- [x] Wire all component together
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Sleepy. Also the background image resizes after the page loads. Also, um... hmmm...

**Link to work:** [Create](https://github.com/ThirdsMedia/100DaysOfCode/tree/day27/src)

### Day 28: March 2, 2021 - Tuesday

**Today's Progress**: Added a Stepper component to the Create form. Renamed it to Wizard and added it into a separate folder. Added InfoOutlined Icon to the MainBar. 

**Thoughts:** Met with the ThirdsMedia team to discuss how best to structure this build form. This form will need to handle a lot of semi-complex data structures, and will need to make calls to external APIs in order to facillitate data entry for users. Since the volume of potential information to be added to this form is so high it needs to refer to data that is (hopefully) public or accessible via certain APIs to help with autofilling information. The CreationWizard is by far the most important and complex piece of this App. 

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] The CreationWizard 
		- [ ] Wizard (where the Stepper is)
		- [ ] BasicInfo
		- [ ] BaseSpirit and Ingredients
		- [ ] Instructions
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Start implementing Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Figuring out how to organize the spacing for the forms. 

**Link to work:** [Create](https://github.com/ThirdsMedia/100DaysOfCode/tree/day28/src)

### Day 29: March 2, 2021 - Tuesday

**Today's Progress**: Fixed up the stepper so the individual Form components are displayed next to the steps. Fixed the styling of the Stepper. Added a Scroll component to have it scroll down the page with the Stepper. Isn't fully working yet. Also added functionality to the InfoOutlined Icon so that when you click it an overlapping Container pops up with help text describing how to use the form. Still needs styling work. 

**Thoughts:** That was fun. Some of the most action-heavy stuff I've created thus far. I'm wondering if this will still transition to a mobile app well or not...

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] The CreationWizard 
		- [ ] Wizard (where the Stepper is)
		- [ ] BasicInfo
		- [ ] BaseSpirit and Ingredients
		- [ ] Instructions
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Start implementing Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Getting the page to scroll with the Stepper isn't working exactly as specified. 

**Link to work:** [Create](https://github.com/ThirdsMedia/100DaysOfCode/tree/day29/src)

### Day 30: March 4, 2021 - Thursday

**Today's Progress**: Added all the forms into the CreationWizard and reorganized the project's directory structure. 

**Thoughts:** I really need to stop procrastinating emulating this app in Android Studio. I'd hate to get further and realize that I need to rewrite a bunch of code. Also, I can feel this mountain getting a bit steeper. I knew this would come and that it wouldn't be all smooth easy sailing, and now here we are on day 30. It's becoming easier to want to put off coding for a day. It's becoming harder to decide which piece of code to write next. I'm naturally moving into a phase where I can't just create visual components anymore and I need to start thinking about flow and user interaction, and how I will implement the backend to work with the frontend components I've created. I'm sure this is normal.

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] The CreationWizard 
		- [] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [ ] BaseSpirit and Ingredients
		- [ ] Instructions
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Start implementing Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Procrastination and de-motivation. Unsure of which thing to tackle next.

**Link to work:** [Create](https://github.com/ThirdsMedia/100DaysOfCode/tree/day30/src)

### Day 31: March 4, 2021 - Thursday

**Today's Progress**: Finished the workflow of CreationWizard. Fixed small design bugs. Added Grid layouts. Cleaned up styling.

**Thoughts:** Strangely productive for just having heard some pretty serious news unrelated to this project. Nailed down most of the UI functionality for the CreationWizard. Love to type more but gotta run.

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [ ] BaseSpirit and Ingredients
		- [ ] Instructions
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Start implementing Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** IRL probs

**Link to work:** [CreationWizard](https://github.com/ThirdsMedia/100DaysOfCode/tree/day31/src)

### Day 32: March 5, 2021 - Friday

**Today's Progress**: Figured out how to style the Ingredients Component. Added a Slider for finer control and cleaner interface. 

**Thoughts:** Way to go me! I just fixed a UI issue that I've had when it comes to this form forever. Thank you Slider component for making life amazing! I'm almost done designing the CreationWizard, however my guess is that the hardest part is yet to come. Once I add functionality to the + Icon I wonder what sort of issues will arise with saving the data to an object in the backend. No need to worry about it now I guess. Next I need to wire in the Review component and fix the Help text boxes so they are centered and don't look like shite. Also maybe add a Glass and Method TextField in the Instructions component, but I'm not sure on that yet. 

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [ ] Instructions
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Nothing. I'm awesome. 

**Link to work:** [CreationWizard](https://github.com/ThirdsMedia/100DaysOfCode/tree/day32/src)

### Day 33: March 6, 2021 - Saturday

**Today's Progress**: Not much. Styled the Help box a bit. Needs more work. Refer to this resource for styling the Box: https://material-ui.com/system/basics/#all-inclusive

**Thoughts:** Can't focus. Too tired. Major brain fog and all that. At least I found that resource above which should get me through styling the Help text box. That's all....

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [ ] Instructions
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Everything. I suck.

**Link to work:** [CreationWizard](https://github.com/ThirdsMedia/100DaysOfCode/tree/day33/src)

### Day 34: March 8, 2021 - Monday

**Today's Progress**: Tested app in capacitor. Added functionality to the Instructions and BaseSpirit component in CreationWizard.

**Thoughts:** This was a good jump back in after skipping a day on Sunday. I still need to do another hour today to make up lost time. I also still need to add some navigation stuff to the LandingPage so I can actually navigate to important components in Capacitor.

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] LandingPage
		- [ ] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Failed to show the app in Capacitor. 

**Solutions:** Need to make the ImageCards clickable on the LandingPage, and then re-build the project before trying Capacitor again.

**Link to work:** [CreationWizard](https://github.com/ThirdsMedia/100DaysOfCode/tree/day34/src)

### Day 35: March 8, 2021 - Monday

**Today's Progress**: Successfully got the App to work in AndroidStudio with Capacitor. Separated IngredientInput component from the Ingredients component for readability and portability. Added Switch to toggle whether or not the IngredientInput has a unit measurement. 

**Thoughts:** The app isn't perfect on mobile. It seems like anywhere I specify width manually messes up the page on mobile. Which also means anywhere I use Container does the same thing so I may have to avoid that component and do other things slightly more manually. 

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] LandingPage
		- [ ] Make the Create and Discover cards switch to vertical column alignment when the page width gets smaller so mobile will work.
		- [x] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** A lot of the Buttons that use state don't change their state right away and I have to click them many times before it works, which is really weird.

**Solutions:** Not sure yet, must have something to do with all the conditionals. 

**Link to work:** [CreationWizard](https://github.com/ThirdsMedia/100DaysOfCode/tree/day35/src)

### Day 36: March 9, 2021 - Tuesday

**Today's Progress**: Added logic to add additional inputs to the Ingredients component. Added a secondary ExpandMoreIcon to the Wizard component.

**Thoughts:** Things are starting to get hairy. Adding the above functionality makes the scrolling not perfect (which is a minor issue and should be fine on mobile), but also it adds a huge layer of complexity. Pushing data into an object (one that gets created once the Wizard begins) shouldn't be too much of an issue. Once you get to the review stage you can then populate the ItemSheet component with the data. I think the issues will come about when you have to backtrack on the CreationWizard and the Stepper wipes the whole component clean. I'm sure there's a simple fix to that though. 

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] LandingPage
		- [ ] Make the Create and Discover cards switch to vertical column alignment when the page width gets smaller so mobile will work.
		- [x] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [ ] Add a Step at the beginning of the Stepper which asks you if you are building a Cocktail or a Mix/Syrup/Infusion. Then based on your response it decides what the next steps will be. 
		- [ ] Instead of having a button in the Instructions component to help you select a picture just change the review ItemSheet to have a blank photo instead of the current one behind the ExpandMoreIcon. Don't allow anything to continue until a picture is selected and then display the rest of the ItemSheet
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Too many thoughts about different ways the Wizard could flow.

**Solutions:** Spend some time picturing how you'd want to use the Wizard. Also, remember that this is a 100DaysOfCode challenge and if the Wizard isn't perfect you should move on to other more menial tasks and components to get them out of the way. You can always come back later or just get everything else done and move on to the Backend. There's still a lot to do. 

**Link to work:** [CreationWizard](https://github.com/ThirdsMedia/100DaysOfCode/tree/day36/src)

### Day 37: March 10, 2021 - Wednesday

**Today's Progress**: Added the option to choose what type of recipe you are building to the CreationWizard

**Thoughts:** Woah. So much logic. I added a prompt which asks what type of recipe you are going to be building, but I fear I've made the thing way too confusing and convoluted. I still know where I'm at... mostly, but if this thing got any more complicated I think I'd need to refactor. I'm afraid to see what happens when I leave this thing and come back tommorrow...

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] LandingPage
		- [ ] Make the Create and Discover cards switch to vertical column alignment when the page width gets smaller so mobile will work.
		- [x] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [x] Add a Step at the beginning of the Stepper which asks you if you are building a Cocktail or a Mix/Syrup/Infusion. Then based on your response it decides what the next steps will be. 
		- [ ] Instead of having a button in the Instructions component to help you select a picture just change the review ItemSheet to have a blank photo instead of the current one behind the ExpandMoreIcon. Don't allow anything to continue until a picture is selected and then display the rest of the ItemSheet
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** CreationWizard becoming too big and confusing. 

**Solutions:** I separated stuff into different functions, but now the state variables are being passed around everywhere. I think I need a break so I can come back fresh.

**Link to work:** [CreationWizard](https://github.com/ThirdsMedia/100DaysOfCode/tree/day37/src)

### Day 38: March 11, 2021 - Thursday

**Today's Progress**: Removed the option that was added on Day 37. Way too much conditional logic and other code mess. 

**Thoughts:** Well I guess sometimes you just do the wrong thing. I completely removed the feature from yesterday as it added WAY too much repetetive code and all kinds of state variables being passed around. I can add that feature later if it becomes necessary, but I'm sure there is a better way to implement that functionality.

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] LandingPage
		- [ ] Make the Create and Discover cards switch to vertical column alignment when the page width gets smaller so mobile will work.
		- [x] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [ ] Instead of having a button in the Instructions component to help you select a picture just change the review ItemSheet to have a blank photo instead of the current one behind the ExpandMoreIcon. Don't allow anything to continue until a picture is selected and then display the rest of the ItemSheet
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Completely backtracked from yesterday.

**Solutions:** Put more thought into what you NEED to implement right now vs. what you don't. There is only 60 days left. 

**Link to work:** [CreationWizard](https://github.com/ThirdsMedia/100DaysOfCode/tree/day38/src)

### Day 39: March 12, 2021 - Friday

**Today's Progress**: Took a break from the app to work on some Go code.

**Thoughts:** Not much to it. I could get into the design mindset today so I decided writing Go code is still coding.

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] LandingPage
		- [ ] Make the Create and Discover cards switch to vertical column alignment when the page width gets smaller so mobile will work.
		- [x] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [ ] Instead of having a button in the Instructions component to help you select a picture just change the review ItemSheet to have a blank photo instead of the current one behind the ExpandMoreIcon. Don't allow anything to continue until a picture is selected and then display the rest of the ItemSheet
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [ ] Navigation 
	- [ ] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Lack of motivation.

**Solutions:** Allow yourself a zero day.

**Link to work:** [Beacon Server](https://github.com/djIsLucid/Beacon)

### Day 41: March 14, 2021 - Sunday

**Today's Progress**: Added an Avatar section to the AppDrawer. Changed the InfoIcon button in the CreationWizard to be a right Drawer. 

**Thoughts:** The InfoDrawer idea I think is way better and can be implemented anywhere in the App where there is an info button. I can't figure out how to get long text to wrap inside of the Drawer (or anywhere) for that matter. I don't get why. Maybe it's because I'm sourcing the text from somewhere else so it's outside of the styling? I don't know. 

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [ ] Create a Contact component
	- [ ] A ForgotPassword component
	- [ ] About component
	- [ ] LandingPage
		- [ ] Make the Create and Discover cards switch to vertical column alignment when the page width gets smaller so mobile will work.
		- [x] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [ ] Instead of having a button in the Instructions component to help you select a picture just change the review ItemSheet to have a blank photo instead of the current one behind the ExpandMoreIcon. Don't allow anything to continue until a picture is selected and then display the rest of the ItemSheet
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [x] Navigation 
	- [x] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Can't get text wrapping to work inside the Help component. 

**Solutions:** Look more closely at it to see if it's just a styling issue. Check out the ItemSheet component to see if there is some style thing that makes it work there but not in the InfoDrawer. Google. Punch things. Whine. 

**Link to work:** [InfoDrawer](https://github.com/ThirdsMedia/100DaysOfCode/tree/day41/src/CreationWizard)

### Day 42: March 15, 2021 - Monday

**Today's Progress**: Created a ForgotPassword page and a Contact page. Fixed text in InfoDrawer component.

**Thoughts:** Not a lot of intensive coding today, just mainly got a few things created that didn't require effort but needed to be done. I should be set to be done with the frontend design portion by day 50.

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [x] Create a Contact component
	- [x] A ForgotPassword component
	- [ ] About component
	- [ ] LandingPage
		- [ ] Make the Create and Discover cards switch to vertical column alignment when the page width gets smaller so mobile will work.
		- [x] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [ ] Instead of having a button in the Instructions component to help you select a picture just change the review ItemSheet to have a blank photo instead of the current one behind the ExpandMoreIcon. Don't allow anything to continue until a picture is selected and then display the rest of the ItemSheet
		- [ ] CameraRoll to choose a picture
		- [ ] Review component
- [x] Navigation 
	- [x] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** The way I have navigation set up is still bugging me. Everything works fine I just wonder if efficiency could be improved.

**Solutions:** Try adding the Drawer navigator into App.js and having each button render a component instead of using hrefs. Look into how to navigation using onClick={} instead of href.

**Link to work:** [Contact](https://github.com/ThirdsMedia/100DaysOfCode/tree/day42/src/Contact.js)

### Day 43: March 16, 2021 - Tuesday

**Today's Progress**: Finished Contact page. Added to AppDrawer. 

**Thoughts:** Had to do an abbreviated session, but I still feel good about what I accomplished. Only a few more things to do on the frontend side. 

**Front-end To Do:**
- [ ] Fix images
	- [ ] Move the assets folder in 100DaysOfCode/public. 
	- [ ] Go through all components and remove Image imports and replace them with absolute urls like in LandingPage/Header and ItemSheet. 
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [x] Create a Contact component
	- [ ] A ForgotPassword component
		- [ ] turn this into a Stepper component to go through the process so you don't have to create multiple pages
	- [ ] About component
	- [ ] LandingPage
		- [ ] Make the Create and Discover cards switch to vertical column alignment when the page width gets smaller so mobile will work.
		- [x] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [ ] Instead of having a button in the Instructions component to help you select a picture just change the review ItemSheet to have a blank photo instead of the current one behind the ExpandMoreIcon. Don't allow anything to continue until a picture is selected and then display the rest of the ItemSheet
		- [ ] CameraRoll to choose a picture
		- [ ] Add props to decided whether the ItemSheet component is a review version or a display version. Change name to Cocktail.js
	- [ ] The Discover Page
		- [ ] Add search filter options
- [x] Navigation 
	- [x] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Nothing major. Just not as full of a session as I'd like

**Solutions:** Shit happens bro.

**Link to work:** [Contact](https://github.com/ThirdsMedia/100DaysOfCode/tree/day43/src/Contact.js)

### Day 44: March 17, 2021 - Wednesday

**Today's Progress**: Added stepper to ForgotPassword. Restructured App directories. Removed unnecessary files. 

**Thoughts:** Wrapping this up is getting hard. Not because it's complicated, but because that thing that always happens to me with projects is happening. I'm getting bored of the design aspect and just want the shit to be done. Keep moving forward. 

**Front-end To Do:**
- [ ] Finish individual components
	- [x] Include the LandingPage component into the project, and fix it up so that it fits the theme. 
	- [x] Finish the ItemSheet component
	- [x] Create a Contact component
	- [ ] A ForgotPassword component
		- [x] turn this into a Stepper component to go through the process so you don't have to create multiple pages
		- [ ] Once you've passed the submit code part, make it display a button and redirect. 
	- [ ] About component
	- [ ] LandingPage
		- [ ] Make the Create and Discover cards switch to vertical column alignment when the page width gets smaller so mobile will work.
		- [x] Add navigation to the Products and CreationWizard components
	- [ ] The CreationWizard 
		- [x] Wizard (where the Stepper is)
		- [x] BasicInfo
		- [x] BaseSpirit and Ingredients
		- [x] Instructions
		- [ ] Instead of having a button in the Instructions component to help you select a picture just change the review ItemSheet to have a blank photo instead of the current one behind the ExpandMoreIcon. Don't allow anything to continue until a picture is selected and then display the rest of the ItemSheet
		- [ ] CameraRoll to choose a picture
		- [ ] Add props to decided whether the ItemSheet component is a review version or a display version.
	- [ ] The Discover Page
		- [ ] Add search filter options
- [x] Navigation 
	- [x] Navigation drawer
	- [x] Make everything accessible without having to edit App.js
- [ ] Make any final style touches and clean up the project structure
- [ ] Re-deploy on gh-pages. The front-end should be complete

**Issues:** Lack of motivation.

**Solutions:** That kind of thing happens at the halfway point. Maybe code something in Go instead of this App. Or maybe just suck it up and push through. You have six days to complete the UI.

**Link to work:** [ForgotPassword](https://github.com/ThirdsMedia/100DaysOfCode/tree/day44/src/Auth/ForgotPassword.js)

