Backend

1. How would you deploy this kind of app?

   I will use nginx proxy server combined with pm2 process manager and run the server in pm2 processs and point using nginx.
   Additionally can use docker and point nginx to docker port.

2. How would you handle caching of frequent API responses?

   For backend i user redis for caching by create a singleton class that can be user all over the application and whenever the source object update like bookings i will update cache and when listin i will first check cache and list if cache is available.

3. If you had more time, what strategies would you think about when building an API?

   I could use graphQL for better and lean apis
   I could add validations
   I could add better error handling
   I could add queue system using upstash to do heavy processes like sending email etc..
   I could use clustering to user evert cpu port.

Forntend

1. How would you deploy this kind of app?

   I will use nginx proxy server combined with pm2 process manager and run the server in pm2 processs and point using nginx.
   Additionally can use docker and point nginx to docker port.

2. How would you handle caching of frequent API responses?

Using libraries like react query.

3. If you had more time, what strategies would you think about when building an API?

I could use react-hook-form for validations
I could introduce redux store for caching
I could use better UI library like tailwind
I could add proxy server for backend for better security
I could handled loading states better
