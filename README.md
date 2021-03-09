# Description - Daily Appointment Calendar

This is an application utilizing JQuery and Bootstrap to build the entire html with javascript and save appointments to local storage with an event listener that will save the box according to which save button was clicked. At the bottom, there is a button where you can clear all local storage to create an empty calendar. The background color of the hour row will update to show whether it is in the future, in the present, or if that hour is in the past.


Included in this application are:
* Manipulating the DOM to create each row for hours 8-5 dynamically using moment.js
    * using a FOR loop to create each row and three boxes which contain the current hour, a textarea and a save button
    * using event delegation to save the text area and save it to local storage

*  LocalStorage saving
     * using local storage to save the last score and the name and then Getting local storage to display the top 5 high scores



Challenges I encountered
* Setting the correct local storage
     * The challenge was getting the correct text area to connect to the right save icon - I solved the problem by grabbing the id of the save icon, which was the same number from the original FOR loop as the text area, then added it to the text area that I wanted to save the text from; then upon refresh or re-load I would grab the local storage and bring it back into the correct text area 
*  Event listener listening correctly
     * I originally created the event lister at the row div for each row, but I couldn't tunnel into the save icon without adding a lot of code, so I ended up adding the event listner to the div which contained the icon only and that cleaned up my code and simplified everything
     
     
## Credits
Many thanks to the below individuals who provided input, suggestions, or played a "rubber ducky" role
* Chris Martinez
* Mim Armand
* Kat Poulos
* Mark Artim
* Ian Fletcher


Sources used for help:

* [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
* [W3 School](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
* [Mozilla Help Pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JQuery Documentation](https://api.jquery.com/)

If any additional issues are found, or if there are any suggestions for improvement, please send an email to site developer Jay Yousef at jay.yousef@gmail.com

---

## <ins>Installation</ins>
1.  Clone or download .zip file from Github to your local computer
2.  Open index.html via your preferred browser or code/text editor

### <ins>Cloning</ins>
1. From Github, select the "Code" button, choose either HTTPS or SSH as appropriate
2. Click the copy button <img src="./assets/images/copy-button.PNG"> to add it to your clipboard
3. In your preferred command line (terminal, bash, etc), navigate to the folder you'd like to download the repository into
4. Type `git clone [pasted url from clipboard]` and press enter
5. Access the content with your code editor by either typing `code .` in your command line or by using your editor's `File > Open Folder` in your code editor menu. If only viewing in a browser, simply double click index.html to open in your default browser


### <ins>Zip file</ins>
1. From Github, select the "Code" button, then select "Download ZIP"
2. Choose which folder to download the repository into via the dialog box that appears
3. After downloading, open the .zip file and select "Extract All" from the top of the window that appears
4. Access the content with your code editor by selecting `File > Open Folder` in your code editor menu. If only viewing in a browser, simply double click index.html to open in your default browser

[Link to Live Calendar Application](https://jayyousef.github.io/daily_calendar_jquery/)

---

These updates are covered under [GNU General Public License v3.0](./Assets/GNU_Public_License)

## Screenshot below:

<img src="./Assets/calendar_application_img.png>
