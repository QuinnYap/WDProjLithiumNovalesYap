# Li23 Novales & Li30 Yap: CS3 Project Proposal 
## Teyvat's Seven: _Genshin Impact and its World Building_
Note: "Teyvat's Seven" is the main title of the webpage.

**Logo:**

![Logo](./Assets/MilestoneAssets/tseven.png "The Website logo")

## Description
This website is a fan-made collection of pages discussing the lore about the seven nations of Teyvat, the main world in Genshin Impact. This includes important characters and events in the nation, the main element of the nation, a brief overview of the history, and the enemies you can find there as well. There are also fun quizzes you can answer about certain aspects of the lore or of a certain nation, just to tickle your brain, or for die-hard Genshin enthusiasts.

## Website Outline and Wireframes

**Homepage:** 
This webpage is the main page, which lets the user navigate to four other pages, _About_, _Nations_, _Quizzes_, and _Sources_. There will also be a _Theme_ toggle that has buttons you can press. These buttons represent different times of the day, and you can press them to change the theme of the website. Javascript will be used to implement this.
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/Homepage.png" />

**About:** 
This webpage will display a description of Genshin Impact, the game developers, when it was made, and its latest update. It will also display a short introduction of the company who made the game.
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/About.png" />

**Nations:**
This webpage displays a menu that allows users to navigate to the different sub-webpages of the seven regions in Teyvat. This means that there will be _seven more_ sub-webpages showing these nations. To enumerate, these are the seven regions of Teyvat: Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan, and Snezhaya. For all nation sub-webpages, a general format is described below.
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/Nations.png" />

_General Format for each Region Sub-Webpage:_ 
Each region sub-webpage will contain a photo gallery of playable characters important to the nation, and a short description of their backstory, importance, and main weapon when you click on the picture. It will also contain a brief history of the region, and its state at the time that the traveller and Paimon arrive. Since each nation all have signature elements, a description of the main element and its uses will also be in the sub-webpage. The map of the area will be shown, and there will be waypoints that you can click that show a description of an important event that happened in the location of the waypoint. These click-to-reveal information bits will be implemented using Javascript.
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Nations.png" />

**Quizzes & Trivia:** 
This webpage will contain links to sub-webpages containing quizzes and trivia about the following categories: Genshin Impact/Teyvat, Nation, and Characters. There will be quiz sub-webpages and trivia sub-webpages for each category as well.
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Quizzes.png" />


_Trivia Sub-webpages_
These webpages will just give fun facts about the category that the user chooses from the main page.
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Quizzes (2).png" />

_Quiz Sub-webpages: Teyvat General Info & Character Info_
For the answer-check mechanic, Javascript will be used. The user will put their answers in a box or select from options presented on the screen, and when submitted, will be automatically checked for the correct answer. The tally of scores will also be counted via JS code. After the user finishes answering the second quiz, the webpage will have a button near the lower right portion of the page that will ask if they would like to proceed to the next type of quiz, which is the Guess the Character Quiz. If the user chooses to press the button, they will be redirected to a new page with the next qiuz for them to answer. If the user chooses not to, nothing happens and they can exit the page at will using the Back button at the upper portion of the page. 
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Quizzes (3).png" />

_Fill in The Blanks Questions:_
These webpages on either the Character or Teyvat quiz where the Fill in the Blanks questions are located in a separate webpage which can be accessed after the multiple choice questions are answered. [INSERT EXPLANATION HERE]

Format:
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Quizzes(4).png" />
Appearance When Answered:
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Quizzes(5).png" />

_Quiz Sub-webpages: Guess the Charcater_
The Guess the Character Quiz, unlike the other two, will be implemented using an HTML form to collect the answer from the user. The user will be guided with visual and text clues that will help them guess the answer that they will then input into the answer box of the HTML form, and then press the Submit button chich would appear to be on the right side of the text answer button, that is also a part of our implementation of HTML forms, implemented using (input type="text") and (<button>). The user input will then be identified by Javascript to automatically check for the correct answer. The tally of scores will also be gathered using JS code.
Format:
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Quizzes (7).png" />
Appearance When Answered:
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Quizzes (8).png" />
Congratulations Screen:
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Quizzes (9).png" />

**Sources:** 
This webpage will contain links to the credible reference sources to be used for collecting various genshin impact-related information.
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/Sources.png" />

_The Fatui Secret Password Webpage:_

Where to Find:
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Nations (2).png" />
The link to the "secret" webpage will only be located in the Snezhnaya Nation Sub-webpage.

Appearance:
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Nations (3).png" />
Appearance when Password is Entered:
<img width="1920" height="1080" alt="Homepage" src="./Assets/Comsci Wireframe/SWP - Nations (4).png" />

Type of Form: Password