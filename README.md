# Rogerio Barber 💈

Rogerio Barber is a web app that allows users to book services of barbershops. Users can browse different barbershops, see their ratings, prices, and availability, and make an appointment with a few clicks, in a beautiful UI designed to have the best UX possible.

Feel free to see it live below:
### [🔗 Rogerio Barber 💈](https://rogerio-barber.vercel.app/)

## Tech Stack 🚀

This project is built with the following technologies:

- [Next.js](https://nextjs.org/): A React framework for building fast and scalable web apps with server-side rendering, static site generation, and API routes.
- [Prisma](https://www.prisma.io/): A next-generation ORM for Node.js and TypeScript that simplifies database access and management.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework that provides a set of customizable classes for styling elements.
- [Supabase](https://supabase.com/): A platform that provides authentication, cloud storage, hosting, and other services for web and mobile apps.
- [NextAuth](https://next-auth.js.org/): A library that provides authentication for Next.js apps using various providers and strategies.
- [Bun](https://bun.sh): A runtime, package manager and much more, used in this case to get faster packages installation than NPM.

## Features ✨

Some of the features of this app are:

- User authentication with NextAuth using Google as a social login option.
- Barbershop listing and filtering with Prisma and Next.js API routes.
- Barbershop details with Prisma and Next.js API routes.
- Booking system with Prisma and Next.js API routes.

## How to run 🏃‍♂️

To run this project locally, you need to have Node.js, bun (can also be npm), and a PostgreSQL database installed on your machine. Then, follow these steps:

1. Clone this repository and navigate to the project folder.
2. Install the dependencies with `bun install`.
3. Create a `.env` file in the root directory and add the following environment variables:
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

NEXT_AUTH_SECRET="secrethere"
```
4. Run `bunx prisma migrate dev` to apply the database migrations and create the tables.
5. Run `bunx prisma db seed` to populate the database with some sample data.
6. Run `bun run dev` to start the development server.
7. Open `http://localhost:3000` in your browser and enjoy the app. 😊

## How to contribute 🤝

This project is open for contributions. If you want to add a feature, fix a bug, or improve the code quality, feel free to submit a pull request. You can also open an issue if you find any problems or have any suggestions. 🙏

## License 📄

This project is licensed under the MIT License.
