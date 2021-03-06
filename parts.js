
// Welcome is the default first part. You should
// always have at least this one part for it to work.

part.Welcome = _ => {
  print(`Hi I'm <b>Skeeziks</b> Mr. Rob's virtual assistant, a
   weird name, I know. Mr. Rob thinks it matches my personality.
  By the way, I talk in different voices if you tell me to.`)
  return 'Name'
}

part.Name = _ => {
  if ( _.previous === 'Name') {
    if (_.line ==='' ) {
      print(`Didn't catch that. What's your name?`)
      return 'Name'
    }
    _.name = _.raw
    print(`Pleased to meet you, ${_.name}.`)
    return 'Intro'
  } else {
    print(`What's <i>your</i> name? 😀`)
    return 'Name'
  }
}

const intro = [
  `Allow me to introduce myself. I'm a virtual assistant. Some call us
    A-I, text bots, chat bots, or just bots.`,
  `Calling me a bot is a little like calling you a dude or a chick but
    I certainly don't mind.`,
  `Programming an assistant is relatively easy to do, a great way
    to learn to code.`,
  `You can program an assistant to do whatever you want really, respond to
    random trivia, narrate a story game, or grab your favorite stuff
    from the Internetz.`
]

part.Intro = _ => print(intro) ? 'Intro' : 'StoryGame'

const storygame = [
  `Let me tell you about story games in particular.`,
  `A story game called <a target="_blank" rel="noopener"
    href="http://www.historyofinformation.com/expanded.php?id=2384">Adventure</a>
    was the first computer game ever created.`,
  `Despite what most people think it wasn't <a href="https://en.wikipedia.org/wiki/Pong"
    target=_blank>pong</a>.`,
  `This genre of game became known as <i>text adventures</i>.
    It was made popular by games such as
    <a href="https://en.wikipedia.org/wiki/Zork" target=_blank>Zork</a>,
    which you can still <a href="https://classicreload.com/zork-i.html"
    target="_blank">play online</a> today.`,
  `People started using this to make all sorts of narrative games
    expanding beyond just "adventures." Today this genre is 
    called <i>interactive fiction</i>, or just <i>story games</i>.`,
  `The best games always change and even have an <i>artificial intelligence</i>. Most 
    have multiple beginnings and endings.`,
  `Speaking of A-I, these days all you humans are talking to your devices,
    probably because speech is your best <a 
    href="https://youtu.be/ZrGPuUQsDjo?t=3m1s" target=_blank>output interface</a>.`,
  `A story game can use voice both for output and input. Tell me to say something.`,
  `If you're on your phone you can <i>vocally</i> tell me using the microphone
    instead of the keyboard.`,
  `Creating a story game or text bot involves processing
    natural language and coding for it.`,
  `<i>Natural language</i> is the idea of simply speaking
    or chatting or texting things naturally, as you would
    with another human.`,
  `As we see with Alexa, <a href='https://youtu.be/bd1mEm2Fy08'>Google
    Assistant</a>, and Siri, this form of interaction with technology
    will only get better.`,
  `Well, that's all for now. Type 'restart' to start over if you like.`,
]

part.StoryGame = _ => print(storygame) ? 'StoryGame' : 'TheEnd'

/*

Need to reduce this and make into more manageable chunks.

part.HowTo = _ => {
  return print(howto) ? 'StoryGame' : 'HowTo'
  print(`So here's the quickest way to get started:`)
  print(`
    <ol>
    <li>Fork this on <a href="https://repl.it/@robmuh/storygame"
    target=_blank>REPL.it</a> or <a href="https://github.com/robmuh/storygame"
    target=_blank>GitHub</a></li>
    <li>Replace <code>parts.js</code> with your own</li>
    <li>Replace <code>responses.js</code> with your own</li>
    </ol>
    `)
  print(`That's really it. It might feel like cheating, but it
    really isn't. 
    Developers frequently take other code and tweek it
    to make it work for what they want. This is actually
    the best way to learn--especially when you study the
    code of other experienced programmers.`)
  print(`It becomes more like cheating when you do not 
    understand the code you are copying or worse,
    you copy it without understanding it and go on
    to lie and claim it as your creation.`)
  print(`These unethical types have a name
    in the coder world, "cut-and-paste coders" and you
    <i>never</i> want a reputation for doing that. It
    isn't the <a href="https://youtu.be/CW0DUg63lqU"
    target=_blank>copying that is bad</a>.
    It's not understanding
    what you have copied and being too lazy to figure
    it out or too egotistical and dishonest to
    admit you copied it.`)
  print(`By the way, the famous gamer-chat company Discord
    calls this <a href="https://youtu.be/hX9MOVIMYkg?t=2m28s"
    target=_blank>"intellectual honesty"</a> and it is a core
    value of any successful technologist, owning what
    you know and don't know rather than trying to save face
    and manage perceptions to the contrary (aka lying).`)
  return 'Parts'
}

part.Parts = _ => {
  print(`The <code>parts.js</code> file has the parts of your
    story in it. A part can represent a geographical area
    if you like or simply something that happens. Parts
    can be repeatable or not depending on how you want
    to arrange your narrative.`)
  print(`The key thing to remember is that <i>part functions
    must print at least one thing and simply return the
    name of the next part</i> linking them
    together.`)
  print(`If you have looked at this code you probably noticed
    most parts just link sequentially to another. This
    is a nice way to break up topical content and a lot
    of reading.`)
  return 'Printing'
}

part.Printing = _ => {
  print(`To print something simply use the built in
    <code>print(it)</code> function. You can use any
    valid HTML, which is something you'll learn along
    the way.`)
  print(`You can print images, links, sounds, embedded
    videos--even fully functional games using the
    <code>&lt;canvas&gt;</code> tag.`)
  print(`They call this <i>rich media</i> content and it
    allows you to learn and use just about any web
    technology you can along the way.`)
  return 'Responses'
}

part.Responses = _ => {
  print(`Responses in <code>responses.js</code> are functions
    that are run every time a line of text is entered
    by the user. This is different that parts. (Only the
    current part is run instead.)`)
  print(`This allows you to add things that can be done in
    any part of your story, such as flipping a coin. In
    fact, try that right now. Enter <code>flip</code> or 
    <code>flip coin</code> and see what happens.`)
  print(`Notice that you are still in the same part.`)
  print(`You can use this technique to add debugging functions
    that can be run from your story game such
    as <code>show data</code>.`)
  print(`Use responses for things like showing what a player
    might be carrying or checking their health or food
    or even saving their game or asking to download
    it as an app on their devices (aka PWA).`)
  return 'Data'
}


part.Data = _ => {
  print(`You can keep track of any amount of data between parts
    of your game. A single data object is passed to every
    part function when it is called. By convention the 
    identifier is simply the underscore (<code>_</code>)
    character.`)
  print(`Keeping track of things between when other things happen
    is called <i>preserving state</i> and is something we
    will talk a lot about later. This <i>state data</i> will
    allow you to easily save your game.`)
  return 'LineRaw'
}

part.LineRaw = _ => {
  print(`One very important bit of data is <code>line</code> or
    <code>_.line</code>. It contains the lower-case version
    of the line that was entered by the user.`)
  print(`Another version <code>_.raw</code> is also available
    when you need the exact thing the user typed in without
    any alteration for lowering the case.`)
  print(`Both are trimmed of any leading or trailing spaces the
    user might have entered along with the text`)
  print(`These allow you to check what was entered by the user
    and conditionally do something different in each <i>part</i>
    or <i>response</i>.`)
  return 'CurrentPrevious'
}

part.CurrentPrevious = _ => {
  print(`Two <i>state data</i> variables contain the
    <code>_.current</code> and <code>_.previous</code>
    part names. These can be checked by both a <i>part</i>
    or <i>response</i> allowing different code to run
    based on them.`)
  return 'AddingState'
}

part.AddingState = _ => {
  print(`It is trivial to have any <i>part</i> or <i>response</i>
    remember something. Just add a <i>state data variable</i>
    of your own. All you have to do is assign it like any other
    variable:`)
  print(`<code>_.haskey = true</code>`)
  print(`You can then access this anywhere.`)
  print(`Look through this source code to see several examples.`)
  return 'TheEnd'
}
*/

part.TheEnd = _ => {
  print(`It's been nice meeting you, {{name}}. Hope to see you soon. 😉`)
  return 'TheEnd'
}
