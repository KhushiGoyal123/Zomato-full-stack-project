FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .


ENV MONGO_URL=mongodb+srv://khushi:952147@zomato-master.87q6j.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=442475581325-68u17ldqb8m32gffs123npo8hr4tglp1.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=dfT2lftVa4_PyjRg2huZM61B
ENV AWS_S3_ACCESS_KEY=AKIAZNZKGC7OMQ4DB3UR
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN__DOMAIN=sandboxbb8594fc63a24267bb244d1487d290c7.mailgun.org
ENV MAILGUN__API__KEY=f70090b98d473d0a4826aee3182567b3-2ac825a1-d6825786
ENV RZR_PAY_ID=rzp_test_6OXJHUGAZB5W4i
ENV RZR_PAY_SECRET=7FsK8lsgF3ibIwakNsIuVZiN
ENV NODE_ENV=production
ENV PORT=4000

RUN npm run build


CMD ["npm", "run", "start"]