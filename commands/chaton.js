module.exports = {
    name: 'chaton',
    description: 'Test Command.',
    execute(message) {
      message.channel.send('I <3 cats !!!');
    }
  };