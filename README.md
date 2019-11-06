# dbtest

## Overview
Wrote this code within a few hours, it has tests written for it and passes all the tests on Deambroker's side :)

This is based on the challenge from Dreambroker at https://challenge.dreambroker.jobs/245768c7-b82f-4a77-abbc-d1214acf7163


## Stack

* Web API built using Express JS
* Functional Testing using Jest 
* API testing using Supertest 

## Live version

I have a live running version on Heroku hosted over at https://dreambroker-challenge-better.herokuapp.com/analyze


### To Test

The Express js application will accept `Post` request to route `/analyze` which contains a body with the attribute `text` the return will be a JSON containing `textLength`, `wordCount` & `characterCount`.

```
 curl --header "Content-Type: application/json" \
            --request POST \
            --data '{"text":"hello 2 times  "}' \
            https://dreambroker-challenge-better.herokuapp.com/analyze
```
