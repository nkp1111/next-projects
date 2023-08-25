# Student's Timetable planner

## Table of Contents

- [Links](#links)
- [Overview](#overview)
  - [Built With](#built-with)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Links

- [Live App](https://next-projects-sigma.vercel.app/)
- [GitHub](https://github.com/nkp1111/next-projects/tree/main/student-time-table-planner)

- Demo email: n@g and password: a for login on live app

## Overview

You have to implement an application to allow students to choose & register for multiple courses, view their timetable.

The application should take care of the following aspects:

- Classes can be of multiple subjects - DBMS, Operating System, DSA etc.
- Each class has a fixed time slot. (For simplicity consider every class happens once a week at the same time. Ex DBMS: Every Monday 5pm-6pm)
- Students can add a class to their timetable if the class’s time doesn’t clash with already booked classes’ time.
- Students can delete a class from their timetable.

![screenshot](./public/images/Screenshot%202023-08-24%20145505.png)

### Built With

- Next.js
- React.js
- Bootstrap
- Mongo DB
- Typescript

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/nkp1111/next-projects.git

# Go to project directory
$ cd student-time-table-planner

# Install dependencies
$ npm install

# Run the app
$ npm run dev
# or
yarn dev
# or
pnpm dev

```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## Acknowledgements

- bootstrap
- bcrypt
- date-fns
- jsonwebtoken
- mongoose
- react-big-calendar
- @mantine/notifications

## Contact

- Neeraj Parmar
- GitHub [nkp1111](https://github.com/nkp1111)
- Twitter [@nkp11111507](https://twitter.com/@nkp11111507)
