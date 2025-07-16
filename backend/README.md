# Life Insurance Recommendation Backend

A NestJS backend for life insurance recommendations, using PostgreSQL and TypeORM.

## Local Development

```sh
npm install
npm run start:dev
```

## Production Build

```sh
npm run build
npm run start:prod
```

## Deploy to AWS Elastic Beanstalk

1. Make sure you have the [EB CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html) installed.
2. Add a `Procfile` with:
   ```
   web: npm run start:prod
   ```
3. Initialize Elastic Beanstalk (first time only):
   ```sh
   eb init -p node.js life-insurance-backend
   ```
4. Create the environment (first time only):
   ```sh
   eb create backend-env
   ```
5. Deploy:
   ```sh
   eb deploy
   ```
6. Set environment variables in the AWS EB console:
   - `POSTGRES_HOST`
   - `POSTGRES_PORT`
   - `POSTGRES_USER`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DB`

## Environment Variables
- `POSTGRES_HOST` — Your RDS endpoint
- `POSTGRES_PORT` — Usually 5432
- `POSTGRES_USER` — Your DB username
- `POSTGRES_PASSWORD` — Your DB password
- `POSTGRES_DB` — Your DB name

**Note:** The current PostgreSQL database is deployed on AWS RDS.

## API

- `POST /recommendations` — Create a new recommendation (see DTO for required fields)

## Notes
- Make sure your RDS instance is accessible from your EB environment (VPC/subnet/security group).
- For production, set `synchronize: false` in TypeORM config and use migrations.

# Link to Live Deployed Version
[Live Deployed Version](http://backend-env.eba-m2yxwdmv.us-east-1.elasticbeanstalk.com/)
