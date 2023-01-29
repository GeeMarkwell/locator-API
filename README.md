------------------------------------------------------------------
-------------------------- FRONTEND ------------------------------

    TO START FRONTEND

1) Simply cd into `my-app` 

2) run `npm start`



    TO RUN TEST SUITS

1) Simply cd into `my-app` 

2) run `npm test`

3) IMPORTANT !

In the event tests are returning errors check `scripts` within `package.json` includes

    "test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!axios)/\"",

    otherwise replace with it included 
------------------------------------------------------------------
-------------------------- BACKEND -------------------------------

    TO RUN DOCKER

1) cd into 'server'

3) docker build -t "`anything`/`app`:`version` . " (recommended format) 

2) sudo docker run -p 8080:8080 --name `image name`  -d `anything`/`app`:`version` (this is what you put for Step 2 ) 


    TO START BACKEND SERVER

1) Simply cd into `server` 

2) run `npm start`



