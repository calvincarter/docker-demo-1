Deploy app to Heroku by:

1. From your terminal, log into Container Registry:

```
$ heroku container:login
```

2. Clone repo, https://github.com/calvincarter/docker-demo-1.git


3. Navigate to the app’s directory and create a Heroku app:

```
$ heroku create
```

3. Build the image and push to Container Registry:

```
$ heroku container:push web
```

4. Then release the image to your app:
```
$ heroku container:release web
```

5. Now open the app in your browser:

```
$ heroku open
```