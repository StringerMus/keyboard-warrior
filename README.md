# Keyboard Warrior

Keyboard Warrior is a fun website that challenges visitors and their friends to test their speed in using a keyboard against themself or eachother. As Keyboard Warrior entertains users with a challenge, it also drives accuracy in typing in speed ensuring the correct punctiations and spelling are captured without the help of auto correct or predictive text. The main aim of the website is to entertain its users with a typing challenge and inadvertently improve typing skills.

Keyboard Warrior will attract a young audience, mainly secondary school students up to young adults. Keyboard Warrior is an interactive website with an entertaining challenge to for the user to beat themselves and others by recording the quickest against different challenge sentences.

[Visit website here](https://stringermus.github.io/keyboard-warrior/)

![responsive](media/responsive.png)

## Features
The website is a single page site, the page is essentially split into 5 sections but the main part of the web page will be the game area.

### Header
The header only contains the logo, since its a single page website there is not a need for a nav bar to take the user to other pages. The logo has a link to the website as it would be expected by users to take them back to the home page.

![header](media/header.png)


### Introduction
The introduction section gives the user the sites purpose by presenting the user with a challenge by challenging the visitor to type quickly. If the user needs further explanation on how the challenge works, there is a link to the rules section which takes the user further down the page.

![introduction](media/intro.png)

### Game-area
The game-area will be where users will spend most of the time on the site and where the javascript has been implemented. The game-area can be broken down into 4 more sections - the challenge, user input, time and replay.

#### The Challenge
The user is presented with the instruction to type the challenge sentence below, the challenge is an array of sentences that have been taken from idioms.

<li>
These senetences are always randomised whenever the page is loaded or the game is replayed, they also always appear in a random order so the challenge is not predictedable for the user to not bore easily.
</li> 
<br>
<li>The user will also not be able to copy the challenge as the selection text selection has been disabled for this section.
</li>

#### User Input
The input area has been created as form for a user to be able to use the input box and submit their entry. The entry needs to match the challenge - this includes spelling, punctuations and capitilisation.

<li>
Once the entry is submitted, the users entry is validated against the challenge that appears above the input box. If the users entry does not match the challenge, a message will appear informing the user if the entry matches or not.
<br>
<br>
<li>
Auto-fill has been disabled so it does distract the user with suggestions and users cannot also cheat if they had already submitted a challenge they had already done.
</li>
<br>
<br>
<li>
The input box locks after the the challenge has been submitted for users to be unable to try and submit again to ensure the user only has 1 attempt to submit a single challenge.
</li>
<br>
<br>
<li>
Focus has been added to the inbox for the input box to already selected ready to type to add convinience for users, notifying and prompting users to type.
</li>
<br>
<br>
<li>
The submit button has been hidden to have the user press 'Enter' to submit which will be quicker then clicking the button to ensure users are recording a more accurate time when they are ready to submit their entry.
</li>

#### Timer
The timer begins as soon as the users starts typing in the input box, the timer simply stops when the hit enter which will show the user the time it took for them to complete the challenge.
<li>
The start, stop and reset buttons have been hidden so they are only triggered by events.
</li>

#### Play Again
The Play Again feature only appears after the user has made a submission to be able to restart the game for the user to play again. Once this has been clicked the:
<li>the timer resets to zero which it start from once the next challenge is played;</li>
<li>the success/error messages are hidden again;</li> 
<li>the form is cleared and the input box is made active again;</li>
<li>the play again feature is hidden;</li>
<li>and the challenge array is re-shuffled for a new challenge.</li>

![game-area](media/game-area.png)

### Rules
The rules section is there for the user if needed to clarify further the objective of the challenge and how it works. It's a small section that has been split in 3 sections to help make it easy to understand.

There is a back to top feature to take the user back to the challenge if they had used the 'Rules' button at the top to arrive at the Rules section and are unaware they can scoll back up to the challenge.

![rules](media/rules.png)

### Footer
The page finishes off with the footer, and there is only logo at the bottom which is linked to the webpage and will always take the user back to the homepage when clicked.

![footer](media/footer.png)

# Credit

Logo and Favicon
https://www.freelogodesign.org/

Favicon html syntax
https://www.w3schools.com/howto/howto_html_favicon.asp#:~:text=To%20add%20a%20favicon%20to,is%20%22favicon.ico%22.

Web icons
https://fontawesome.com/