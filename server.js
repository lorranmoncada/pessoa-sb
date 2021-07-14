  
const express = require('express');
const app = express();
const nomeApp = 'sb-pessoa';

const outputPath = `${__dirname}/dist/${nomeApp}`;

app.use(express.static(outputPath));

app.get('/*', (req, res) => {
res.sendFile(`${outputPath}/index.html`);
});

app.listen(process.env.PORT)