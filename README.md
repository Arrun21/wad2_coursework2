<h1>Instructions on how to run the site</h1>
1.Clone the repository
<br>
git clone https://github.com/Arrun21/wad2_coursework2.git    
or download the zip file
<br>
2.Create the .env file 
<br>
3.Add the following to the .env file <br>
ACCESS_TOKEN_SECRET=Stringforuseforcw2passwordforstaffusers
<br>
4.Type 'npm install' in the terminal <br>  
5.Run the applicaton by typing the following:<br>
node index
<br>
6.Now can view the website in the browser by following this url:<br>
http://localhost:3000
<br>
7.To access staff functions user must enter this into the url:<br>
http://localhost:3000/login
<br>
8.Log In details:<br>
Email: admin@gmail.com<br>
Password: 12345678


<h1>List of features that have been implemented</h1>
<h3>About Us</h3>
<p>Displays information about the restaurant with navbar that allows users to navigate to different pages</p>
<h3>Lunch Menu</h3>
<p>Displays all the relevant information for each dish in the lunch menu in a grid format</p>
<h3>Main Menu</h3>
<p>Displays all the relevant dish name,description,ingredients,allergy and price in a grid format</p>
<h3>Contact Us</h3>
<p>Displays information that allows users to contact the restaurant and opening times, as well as a interactive map that provides the location of the restaurant</p>
<h3>Register</h3>
<p>Allows staff to create new users that will then be authorised to access the staff function</p>
<h3>Log In</h3>
<p>Allows staff to log in to their account that grants them staff authorisation</p>
<h3>Staff Home</h3>
<p>Displays all the dishes in a table format with edit and delete buttons next to each dish,a search bar is also provided to allow staff to easily search for a specific dish this makes the process of editing and deleting dishes much faster for the staff.This page also provides a add button next to the search bar that allows staff to add new dishes.Nav bar that allows staff to return to staffhome,create new user or logout</p>
<h3>Staff Add</h3>
<p>Allows staff to enter new details for a dish that is going to be added into either the lunch or main menu</p>
<h3>Staff Edit</h3>
<p>Allows staff to edit a specific dish and update the changes</p>
<h3>Delete</h3>
<p>Allows staff to remove a specific dish from the application</p>
<h3>Logout</h3>
<p>Logs out the current staff from the application ,the user would not have authorisation to access staff functions now</p>

<h1>Justification for any changes from development plan</h1>

Decided to remove welcome page as the specification does not specify it is needed changed landing page to about us page<br>
Removed menu page as it is easier for the users to choose lunch menu or main menu from nav bar this is more efficient<br>
Changed format for lunch and main menu page to make it more similar to how restaurants have their dishes placed on a menu<br>
Included navigation to login and register page and staff home, add and edit to make interaction more smooth<br>
Removed login with fb, google or apple and forgot password and remember me as I did not see the need for these functions anymore after talking to lecturer<br>
Changed the layout of staffhome to make it more pleasant for staff as before it looked the same as staff add and edit<br>
Changed the function of the star , now by clicking on the star it makes the dish unavailable compared to before<br>
Removed the cancel button as I did not see the need for a cancel button<br>
Changed the layout of mobile views according to the changes I made for desktop view

<h1>Link to a live version of my site</h1>
https://guarded-ocean-98266.herokuapp.com/