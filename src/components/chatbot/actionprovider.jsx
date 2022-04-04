class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    addMessageToState,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("What would you like to know?", {
      widget: "options",
    });
    this.addMessageToState(message);
  };

  backToMenu = () => {
    const message = this.createChatBotMessage(
      "What else would you like to know?",
      {
        widget: "options",
      }
    );
    this.addMessageToState(message);
  };

  okay = () => {
    const message = this.createChatBotMessage(
      "Ok, if you'd like to learn more, just say 'more'!"
    );
    this.addMessageToState(message);
  };

  sorry = () => {
    const message = this.createChatBotMessage(
      "Sorry my understanding is limited, please try again."
    );
    this.addMessageToState(message);
  };

  notInterested = () => {
    const message = this.createChatBotMessage(
      "I'm not interested in that kind of language. Try again."
    );
    this.addMessageToState(message);
  };

  handleEducation = () => {
    const message = this.createChatBotMessage(
      "Here's what you need to know about Naiad's education.",
      {
        widget: "education",
      }
    );

    this.addMessageToState(message);
  };

  handleExperience = () => {
    const message = this.createChatBotMessage(
      "Here's a little about Naiad's work experience.",
      {
        widget: "experience",
      }
    );

    this.addMessageToState(message);
  };

  handleSkills = () => {
    const message = this.createChatBotMessage(
      "Here's an overview of his skills.",
      {
        widget: "skills",
      }
    );

    this.addMessageToState(message);
  };

  handleWhy = () => {
    const message = this.createChatBotMessage("Here's why:", {
      widget: "why",
    });

    this.addMessageToState(message);
  };

  contact = () => {
    const message = this.createChatBotMessage(
      "Naiad can be reached by call or text at 416-846-1726 or at naiadbaksh@gmail.com - submit a query using the Let's Chat button above."
    );
    this.addMessageToState(message);
  };

  yesNo = () => {
    const message = this.createChatBotMessage({
      widget: "yesOrNo",
    });
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
