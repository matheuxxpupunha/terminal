const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/execute', (req, res) => {
    const command = req.body.command;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send(stderr);
        }
        res.send(stdout);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});