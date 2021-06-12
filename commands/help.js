exports.run = async(client, message) => {
    message.channel.send({
        embed: {
  title: 'Help',
  description: `
  **Prefix**
  The prefix For Music  is **cupcake**
  
  **cupcake play <songName>** 
  Play a song from youtube
  
  **cupcake pause**
  pause musicplayback
  
  **cupcake resume** 
  resume musicplayback
  
  **cupcake np** 
  Get now playing song's info
  
  **cupcake skip** 
  Skip to next song
  
  **cupcake stop** 
  Stop playing music
  
  **cupcake volume**<value> 
  adjust volume of the music
  
  **cupcake queue** -
  to see the full song queue

  **cupcake help-fun*
  fun things to do with the bot 
  
	**Owner -ᴋɪᴛ-ᴋᴀᴛᶜᵘᵗᵉ#0001 [a cute girl]**

   `,
color: 'GREEN'
 }
    })
}

