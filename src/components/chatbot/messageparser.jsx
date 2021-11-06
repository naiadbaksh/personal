class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (
      lowercase.includes("sure") ||
      lowercase.includes("yes") ||
      lowercase.includes("why not")
    ) {
      setTimeout(this.actionProvider.greet(), 1000);
    } else if (lowercase.includes("more")) {
      setTimeout(this.actionProvider.greet(), 1000);
    } else if (lowercase.includes("no")) {
      setTimeout(this.actionProvider.okay(), 1000);
    } else if (lowercase.includes("contact")) {
      setTimeout(this.actionProvider.contact(), 1000);
    }
  }
}

export default MessageParser;
