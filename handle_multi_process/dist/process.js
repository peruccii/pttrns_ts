"use strict";
// handlers
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processMessage = void 0;
const startMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    // do something with the message
    console.log("start", message);
    return true;
});
const helpMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    // do something with the message
    console.log("help", message);
    return true;
});
const summaryMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    // do something with the message
    console.log("summary", message);
    return true;
});
const isStart = (message) => message === "start";
const isHelp = (message) => message === "help";
const isSummary = (message) => message === "summary";
const messageHandlers = {
    start: {
        isType: isStart,
        handler: startMessage,
    },
    help: {
        isType: isHelp,
        handler: helpMessage,
    },
    summary: {
        isType: isSummary,
        handler: summaryMessage,
    },
};
const getMessageType = (message) => {
    const type = Object.keys(messageHandlers).find((key) => messageHandlers[key].isType(message));
    if (type) {
        return type;
    }
    return "unsupported";
};
const processMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const messageType = getMessageType(message);
    if (message === "unsupported") {
        return "not supported";
    }
    return messageHandlers[messageType].handler(message);
});
exports.processMessage = processMessage;
