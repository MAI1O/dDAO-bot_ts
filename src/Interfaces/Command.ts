import Client from '../Client'; //by default will search for index.ts
import {Message} from 'discord.js';

interface Run {
    (client: Client, message: Message, args: string[]);
}

export interface Command {
    name: string;
    description?: string; //question mark makes it optional
    aliases?: string[];
    run: Run;
}