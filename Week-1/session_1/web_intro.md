# 1. What is a protocol stack, and how is it used in web development?

##### The protocol stack is a set of communication protocols used to transmit data over a network. In the context of secure web applications, the protocol stack is often used to establish secure communication between a web application and a client.

#
##### One example of a protocol stack used in secure web applications is the Secure Sockets Layer (SSL) protocol stack, which is used to establish a secure communication channel between a web server and a client. SSL uses several protocols including Transport Layer Security (TLS), which encrypts data transmitted between the web server and client, and provides authentication and integrity checks.
#
##### Other protocol stacks used in secure web applications include HTTP Secure (HTTPS), which is a combination of the Hypertext Transfer Protocol (HTTP) and SSL/TLS, and the Transmission Control Protocol/Internet Protocol (TCP/IP) stack, which is used to ensure the reliable transmission and delivery of data over a network.
#
##### In summary, the application of protocol stack to secure web applications involves using a set of communication protocols to establish secure connections and protect data transmitted over a network.
#
#
#

# 2. What are the different types of web servers, and how do they differ in terms of functionality and performance?
#### Web Server: 
Web server is a program which processes the network requests of the users and serves them with files that create web pages. This exchange takes place using Hypertext Transfer Protocol (HTTP).
Basically, web servers are computers used to store HTTP files which makes a website and when a client requests a certain website, it delivers the requested website to the client. For example, you want to open Facebook on your laptop and enter the URL in the search bar of google. Now, the laptop will send an HTTP request to view the facebook webpage to another computer known as the webserver. This computer (webserver) contains all the files (usually in HTTP format) which make up the website like text, images, gif files, etc. After processing the request, the webserver will send the requested website-related files to your computer and then you can reach the website.
Different websites can be stored on the same or different web servers but that doesn’t affect the actual website that you are seeing in your computer. The web server can be any software or hardware but is usually a software running on a computer. One web server can handle multiple users at any given time which is a necessity otherwise there had to be a web server for each user and considering the current world population, is nearly close to impossible. A web server is never disconnected from the internet because if it was, then it won’t be able to receive any requests, and therefore cannot process them.

- Apache
- Nginx
- Microsoft IIS
- Lighttpd
- Jigsaw
#
#
# 3.What is web hosting, and what are the different types of hosting services available for websites?

##### Web hosting is a service that allows you to publish your website on the internet. It involves storing all your website files on a server and providing a way for people to access those files through a web browser. Think of it like renting a space on the internet.
- Free Hosting
- Virtual/Shared Hosting
- Dedicated Hosting
- Co-location Hosting


# 4.What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?

##### Scaling alters the size of a system. In the scaling process, we either compress or expand the system to meet the expected needs. The scaling operation can be achieved by adding resources to meet the smaller expectation in the current system, by adding a new system to the existing one, or both. 
#
#
# 1. Vertical Scaling: 
##### When new resources are added to the existing system to meet the expectation, it is known as vertical scaling. 
##### Consider a rack of servers and resources that comprises the existing system. (as shown in the figure). Now when the existing system fails to meet the expected needs, and the expected needs can be met by just adding resources, this is considered vertical scaling. Vertical scaling is based on the idea of adding more power(CPU, RAM) to existing systems, basically adding more resources.
##### Vertical scaling is not only easy but also cheaper than Horizontal Scaling. It also requires less time to be fixed. 

# 2.Horizontal Scaling:
##### When new server racks are added to the existing system to meet the higher expectation, it is known as horizontal scaling. 
##### Consider a rack of servers and resources that comprises the existing system. (as shown in the figure). Now when the existing system fails to meet the expected needs, and the expected needs cannot be met by just adding resources, we need to add completely new servers. This is considered horizontal scaling. Horizontal scaling is based on the idea of adding more machines to our pool of resources. Horizontal scaling is difficult and also costlier than Vertical Scaling. It also requires more time to be fixed. 
#
#
# 5.What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?


##### SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, and as a consequence, search engines rank them better.

- Use of semantic tag
- Use relevent keywords
- Prescribed domains
- Mobile friendly
- Optimize Content
- Meta Tags and Descriptions