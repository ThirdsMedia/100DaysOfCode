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

