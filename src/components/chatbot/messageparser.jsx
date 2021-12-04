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
    } else if (lowercase.includes("skills")) {
      setTimeout(this.actionProvider.handleSkills(), 1000);
    } else if (lowercase.includes("education")) {
      setTimeout(this.actionProvider.handleEducation(), 1000);
    } else if (lowercase.includes("experience")) {
      setTimeout(this.actionProvider.handleExperience(), 1000);
    } else if (lowercase.includes("interview")) {
      setTimeout(this.actionProvider.handleInterview(), 1000);
    }
  }
}

export default MessageParser;
