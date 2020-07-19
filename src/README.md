##Application Description##

    The idea is to be able to create a menu weekly. Store the data on a server, incase we need to reuse it. 

    1. We need to work on forms. 

    2. Create menu tab, Form either needs to be changed back to old way. Or keep on with redux, yes it's a pain. 
        but need something that works. Right now it prints the data, and if I use axios and useEffect, I can send the data to firebase. 
        Problem is editing the data, so we have a couple options. 
            
            (a): We can dispatch the data to firebase, and then fetch it from there. 
                This could be really helpfull, but we will have more learning or at least me. On dealing with requests. 
                I send data to server, we fetch it from server to print on screen. When we edit it changes it on server, therefore 
                changes on screen. 

            (b): We can do what we are currently doing right now, which is mainly do to lack of knowledge. Using redux to learn redux, incase I ever need it. As well as hooks. Doing it this way, brings its challenges as well. Which is the current problem. 
            Data prints, but can't figure out how to edit it and reprint it. I could do it just fine with hooks, which you can find in the repo on the master branch. month/weekly/weekly.js file. 
    
    3.  Auth: The idea, is. Maybe creating different accounts. Each with their own data. For the practice of creating an all around app. The plan was to let one of my co workers use it and tell us how it went. Why we are adding auth to the app, signup, login, session storage etc. Creating basic signin with google auth at the moment. Setting up resiter form. 

        (a): Currently working on the nav bar, so show differently based on is a person is logged in. 

    4. Data Storage: Aside from storing the data we input for the menus. We talked about different options for keeping it as well. Making a collections of data so that later we can choose how to manipulate it. Give each entre, side, second side, oter and id. 
    So if for example we decide we are out of ideas and want to reuse something. I can search in the app, "hmm, when was the last time we did cordon bleu, is it too soon? ' 

    5. Search bar in the app. So we can search the app for previoues meals, mealtypes. To show dates of those meals, or specific meal types like (entre, side, etc). 



    #####Recap###

        Right now the important things to work on, 1, 2, 3. Everything else was just talk and things that when we discussed would be "New versions, or Updates to current app". It was set up this way to help me learn different things. The programmin, as well as how it looks in certain live enviroments.  


    ############Links to work on ##################


    1.Form Submit, add data. 
        There paths, are what make the form work. Can submit, we pull the dispatch from he reducer. Add the form data to the reducer, bring it to the weekly folder with mapStateToProps. 

                src\components\ServiceForm\ServiceForm.js
                src\components\Month\Weekly\Weekly.js
                src\store\reducers\menuReducer.js
                src\store\utils\mealService.utility.js
                src\containers\newWeek\newWeek.js