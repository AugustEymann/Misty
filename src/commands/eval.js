const clean = text => {
	if (typeof(text) === "string")
	  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
}

module.exports = {
	name: 'eval',
	description: 'Devs Only',
	run(message, args) {
        if (message.author.id === '82173389657079808') {
			try {
				const code = args.join(' ');
				let evaled = eval(code);
		   
				if (typeof evaled !== "string")
				  evaled = require("util").inspect(evaled);
		   
				message.channel.send(clean(evaled), {code:'xl'});
			  } catch (err) {
				message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
			  }
		}
	},
};