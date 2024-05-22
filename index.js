const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to V𝕀ꋊΛꌦ#1010
  const date = new Date();
  const options = {
    timeZone: 'Asia/Calcutta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1196842511612788736') // make your bot in discord.com/developers and paste the application ID here
    .setType('STREAMING')
    .setURL('https://jailbridkurd.carrd.co/') //Must be a youtube video link 
    .setState('Welcome, my brother!')
    .setName('405 & PetyaDecryptor')
    .setDetails(`Developed Node, Javascript, Html, Css, Python`) //[${formatTime()}] and this for showing time of stream.
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1191857497791803493/1242803759898427412/0f0c5e49b34f1f796f78fbe31907f40b.jpg?ex=664f2ab2&is=664dd932&hm=c9edc05fe878e373e9925183f64f7dd69aa736c20c323b139f92d03b2a244757&') //You can put links in tenor or discord and etc. 
    .setAssetsLargeText('Sixur-405') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1191857497791803493/1242803727811739658/8874a7c21b0e88f8ebf573f95cd593c3.gif?ex=664f2aaa&is=664dd92a&hm=51696a21e67a8960956376557de39f8c1f5e91fbd926e27ef79fbb441bd1b372&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('DM me') //Text when you hover the Small image
    .addButton('JOIN SERVER!', 'https://discord.com/invite/6Eykwbh74m')
    .addButton('SUBSCRIBE US!', 'https://discord.com/invite/6uUfSfHgPz');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Join Our Funteristic Community`; //[${newTime}] set this for time 
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);



// put your token in secrets
