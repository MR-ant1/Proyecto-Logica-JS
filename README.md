# Empanadas Challenge
This is a recreation of a meet between geekshubs academy students, were they have to distribute "Empanadillas" in groups of three to take advantage of a 3X1 discount to save as money as possible. This is solved through a function explained below.

### TABLE OF CONTENTS :open_file_folder: 
- [Empanadas Challenge](#empanadas-challenge)
    - [TABLE OF CONTENTS :open\_file\_folder:](#table-of-contents-open_file_folder)
    - [STACK :wrench:](#stack-wrench)
    - [FEATURES :bulb:](#features-bulb)
    - [WHERE TO TRY AND VISUALIZE IT :mag:](#where-to-try-and-visualize-it-mag)
    - [DATABASE DESING :computer:](#database-desing-computer)
    - [AUTHOR :pencil2:](#author-pencil2)
    - [POTENTIAL IMPROVEMENTS :heavy\_check\_mark:](#potential-improvements-heavy_check_mark)
    - [ACKNOWLEDGMENTS :raised\_hands:](#acknowledgments-raised_hands)

### STACK :wrench:
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge" alt="js"/>



### FEATURES :bulb:

-Introduce any amount of empanadillas to be bought. The function throws the cheapest price for the asked combination or an error if some requirements aren't corrects.
-Calculate any others weighted average by only changing a few values on the function

### WHERE TO TRY AND VISUALIZE IT :mag: 

Find the repository of this proyect on this link:

https://github.com/MR-ant1/Proyecto-Logica-JS.git

To run and visualize it online, click the next link down below:

https://mr-ant1.github.io/Proyecto-Logica-JS/
### DATABASE DESING :computer:

After a detailed and analyzed reading of logical problem's instruccions and taking as a help the input-output examples, a formula could be extracted to make the function work.

![Screenshot](img/functionScreenshot.png)
(Screenshot showing the implemented fusion)


Like is showed in the screenshot, this function use a weighted average formula which calculates the relative value for each type of product. The number of any type of Empanada is multiplied by its cost, (this is what agregates a relative value for each product) and then after adding three values, the total of money is divided by 3 to get a minimal cost considering what each product will cost anyway in any combination according to its standard price. 

This method loses some decimals in the process, so at the end of function, a Math.ceil property is used over the total result, to round the cheapest price decimals to next integer and get an integer result.
In the middle part of code, is where the three conditions (less than 40 empanadas, total of empanadas divisible by 3 and no negative parameters) analyze if the input parameters in final console log are correct to apply propperly the 3X1 discount

### AUTHOR :pencil2:
- Antonio Rodrigo - Full Stack Developer student

- <a href="https://github.com/MR-ant1">GitHub - <a href="https://www.linkedin.com/in/antonio-rodrigo-camacho-306b60205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbZw124AlRu2kGWtATXloag%3D%3D">Linkedin</a>

### POTENTIAL IMPROVEMENTS :heavy_check_mark: 

After many tries of reformulate the function and implementing a bucle which combines al prices between them, the final method used to calculate the cheapest price has been by weighted average that use each kind of Empanada's relative cost (basing on each price) as a way to "avoid" bucle and get the mixed Empanadas discounts with no matter which combinations.

### ACKNOWLEDGMENTS :raised_hands:

Big shout out to GeeksHubs for giving me the chance to learn about all this amazing world of "developing"
More and better proyects are coming nearly thanks to them!

[def]: #Acknowledgments-

:arrow_up: [Table-of-contents](#table-of-contents-open_file_folder)