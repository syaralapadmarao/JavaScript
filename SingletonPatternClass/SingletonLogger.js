class Logger {
    constructor() {
        if(Logger.instance == null){
            Logger.instance  = this;
        }
        return Logger.instance;
    }

    log(message) {
        console.log("Message is", message);
    }
}

const logger = new Logger();
Object.freeze(logger);
export default logger;
