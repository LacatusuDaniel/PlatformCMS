# PlatformCMS

For my senior thesys I realized a web application using Spring Boot for the server side and Angular, HTML and CSS for the user interface. This application works as a Content 
Management System platform.  The user interface is divided into two major components. The frontend part (the one that the visitor can access) and the backend part 
(the one that the application administrator can access in order to modify the content). On the frontend side are all the pages created and published in the menu area. 
There are two types of users in the application: visitors, those who can only view the content of the site and administrators, those who can change the content of the application 
and how the elements appear on the page.
The administrator has access to the following features: creating and editing a page, editing pages that appear in the menu, adding media ﬁles, editing or adding templates, 
managing and adding users.

The Code folder contains the Java code for the server side. The code is structured in microservices.
The Angular Dashboard folder contains the JavaScript code for the backend part of the application, where the admin can change the content of the pages.
The Angular Landing folder contains the JavaScript code for the frontend part of the application, where all the pages createad or modified are displayed for any user who accesses 
the link. 
