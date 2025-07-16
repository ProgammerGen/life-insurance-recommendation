# Life Insurance Recommendation Frontend

## Local Development

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run build
npm start
```

## Deploy to AWS Elastic Beanstalk

1. Make sure you have the [EB CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html) installed.
2. Add a `Procfile` with:
   ```
   web: npm run start
   ```
3. Initialize Elastic Beanstalk (first time only):
   ```sh
   eb init -p node.js frontend-app
4. Build your App
   ```sh
    npm run build
   ```
5. Create the environment (first time only):
   ```sh
   eb create frontend-env
   ```
6. Deploy:
   ```sh
   eb deploy
   ```
7. Set environment variables (e.g., `NEXT_PUBLIC_API_URL`) in the AWS EB console.

## Environment Variables
- `NEXT_PUBLIC_API_URL` — The base URL of your backend API (e.g., http://backend-env.eba-xxxxxx.us-east-1.elasticbeanstalk.com) In case running locally, set the url to http:localhost:3001

# Link to Live Deployed Version
[Live Deployed Version](http://life-insurance-frontend-env.eba-ywrmg3ih.us-east-1.elasticbeanstalk.com/)
