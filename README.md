# The Study

## Introduction

The Study is a React app that seeks to condense free, quality sources of information into one easy-to-use website. Users can upload links to, and access, lectures, podcasts, literature, and more. 

Regular users can update/edit their own uploads and access the external links found in the resource descriptions. Admins can edit any uploads. All users have a homepage that makes uploads searchable by title, description, and upload media (video, audio, text, mixed). It also gives links to uploads by Dewey Decimal category (Language, Science, Tech, etc.). Users can access a page of their uploads, with full search functionality.

## Purpose and motivation for project 

Youtube is filled with junk videos and distractions. Libraries require you to live in a particular area and their loans are temporary. Books in the public domain are often spread across the internet. The Study resolves these issues by acting as a digital library for free, quality learning resources.

Personally, I have a disorganized mess of bookmarks that all lead to an interesting an engaging subject. However, this information is not accessible due to the lack of structure. I wanted my React app to solve this problem for me and others like me.

## How does this application work?  

- upload learning resources by selecting a format and category and entering a title, url, image url, and description
- view all resources, resources by category, or your own uploads and search by title and/or description. In addition filter by format
- navigate to external learning resources via the title/link on the resource card

## How was this application developed? 
The Study was developed using these technologies:  

 ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white) ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## How to install and run the application

*First, a note about authentication...*
This application uses mock authentication which is purely for demonstration purposes. Therefore the login code written here is completely insecure and would never be implemented in a professional application.  

1. Download and install the latest version of node.js from nodejs.org.  
2. Clone the repository to your local machine.  
3. Clone the companion JSON server repository to your local machine from https://github.com/conorgetty19/nss-capstone1-studyAPI
3. Open a terminal window and navigate to the server directory.  
4. Run the server using the command 'json-server database.json -p 8088 -w' and leave it running as long as the app is active. If that does not work, you can use npx to run json-server without installing it globally. This way, you will use the json-server version that is specified in your project's package.json file. In that case, you would use the command 'npx json-server database.json -p 8088 -w'. Either way, it can be closed with Ctrl+c. 
5. Open a second new terminal and navigate to the project directory.  
6. Install the dependencies by running the command 'npm install'  
7. Start the app using the command 'npm start' and a new browser window with the app will open. It can be closed with Ctrl+c in the terminal. 

## Testing the functionality of the app (non-linear steps)
1. Run the app and server as directed in the previous section. Click "Not a member yet?". Enter a username, email, and password. Check the admin status checkbox for the first account you make. Click register.
2. Upon registration, the user will be navigated to the homepage. You should see a list of eleven research categories that reflect the Dewey Decimal Classification (DDC). Below those categories, you should see a listing of all uploads currently in the database, as well as a search bar and format filter. If categories and/or uploads are not appearing, please ensure that the json server is running.
3. Try typing something into the search bar. Only uploads with a matching title and/or description should appear.
4. The format filter can be used in combination with the search bar. For example, you can search for text-only resources with a title and/or description including "car".
5. Next, select a research category link. After selection, the user will be navigated to a page listing all uploads within that category. There is also a search bar and format filter. Feel free to test these as well.
6. Click the description button to see a dropdown outlining the uploads content.
7. Click the link on an upload card to navigate to the learning resource. After clicking the link, the user should be navigated to an external website.
8. Once you have navigated back to the category page in The Study, click the "edit" button on a resource card. If you are logged into a non-admin account, the "edit" and "delete" buttons will only appear on resources uploaded by your account. After clicking the "edit" button, the user will be navigated to a form populated by the corresponding resource's data. If the data does not appear, verify that the JSON server is running as expected.
9. Alter the data in any field(s) you wish. Click submit. After a successful edit, the user will be navigated back to the corresponding category page.
10. On the category page, click the "delete" button on a resource card. The user will remain on the same page and the resource will disappear from view.
11. Navigate to the My Uploads page. Both admin and non-admin users should see a listing of all of their uploads with edit and delete buttons. If the listing did not render, check that the JSON server.
12. Next, navigate to the upload form. All fields are required. However, format and category are not currently enforced. Select a format and category. Enter a title, resource url, image url, and description.
13. Click the "submit" button. On successful submission, the user will be navigated to the category page where the resource is housed. If no category is selected, the user is navigated to the homepage.
14. Click "logout" and create a non-admin account as outlined in step 1.
15. Upon login, the non-admin user will only see "edit" and "delete" buttons on resource cards for uploads they submitted. To verify this, submit a new resource.
16. Next, navigate to the My Uploads page to verify the presence of your resource card. 
17. Feel free to test all other functionality as a non-admin. All other functionality should behave as described above.

## Project ERD

![TheStudyERD](https://github.com/conorgetty19/nss-capstone1-The-Study/assets/115668909/40436469-5ff5-4c0d-b3f5-3ef2231806fa)