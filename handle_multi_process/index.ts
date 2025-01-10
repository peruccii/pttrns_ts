import { processMessage } from './process'

const messages = ["start", "help", "summary"];

const run = async () => {
    for (const message of messages) {
        await processMessage(message)
    }
}

run()
