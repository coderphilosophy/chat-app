import { PrismaClient } from "@prisma/client/extension";

declare global{
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;


/*
NOTES:-
var prisma: PrismaClient | undefined

In TypeScript, this declares a global variable prisma with the type PrismaClient | undefined. By declaring it globally, we ensure that this variable is accessible from anywhere in our codebase.


const client = globalThis.prisma || new PrismaClient()

This line initializes the Prisma client. It checks if globalThis.prisma is already defined. If it is, it assigns its value to the client variable. If not, it instantiates a new PrismaClient and assigns it to client.


if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;

Here, we're conditionally setting globalThis.prisma to the client variable if the NODE_ENV environment variable is not set to 'production'. This is commonly used to ensure that the Prisma client is only instantiated in development or testing environments, not in production, to prevent unnecessary overhead.
*/