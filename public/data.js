export const futureTimeInMs = 48 * 24 * 60 * 60 * 1000; // first digit indicates days 

export const nowInMs = new Date().getTime(); // now

export const date = nowInMs + futureTimeInMs; // 48 days from now

