// handlers

const startMessage = async (message: string) => {
    // do something with the message

    return true
}

const helpMessage = async (message: string) => {
    // do something with the message
    
    return true
}

const summaryMessage = async (message: string) => {
    // do something with the message

    return true
}


const isStart = (message: string) => message === "start"
const isHelp = (message: string) => message === "help"
const isSummary = (message: string) => message === "summary"

type SupportedMessages = "start" | "help" | "summary"

type MessageHandlers = Record<SupportedMessages, {
    isType: (message: string) => boolean, // check if the message correspond with this type
    handler: (message: string) => Promise<boolean> // message handleer
}>

const messageHandlers: MessageHandlers = {
    start: {
        isType: isStart,
        handler: startMessage
    },
    help: {
        isType: isHelp,
        handler: helpMessage  
    },
    summary: {
        isType: isSummary,
        handler: summaryMessage
    }
}

const getMessageType = (message: string): SupportedMessages | 'unsupported' => {
    const type = Object.keys(messageHandlers).find((key =>
    messageHandlers[key].isType(message)
    ));

    if (type) {
        return type as SupportedMessages
    }

    return "unsupported";
} 

export const processMessage = async (message: string) => {
    const messageType = getMessageType(message);

    if (message === "unsupported") {
        return "not supported"
    }

    return messageHandlers[messageType].handler(message);
}
