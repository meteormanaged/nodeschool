var cleanArgs = args => args.map(arg => arg.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));

var html = (strings, ...args) => strings.reduce( (p, c, i) => p + cleanArgs(args)[i - 1] + c );

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);