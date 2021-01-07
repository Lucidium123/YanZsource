const {CreateCanvas, loadImage} = require('canvas');
const request = require("node-superfetch");

module.exports = {
    name: "deepfry",
    description: "deepfryasd;",

    async run(client, message, args) {
        let image = message.attachments.array();
        if (image.lenght === 0 ) return message.channel.send("Oi Send an image you doughnut");
        else if (image.lenght > 1) return message.channel.send("uhhh only 1 image per session bud")

        try {
            const { body } = await request.get(image[0].url);
            const data = await loadImage(body);
            const canvas = createCanvas(data.width, data.height);
            const ctx = canvas.getContext("2d");
            ctx.drawImage(data, 0, 0);
            desaturate(ctx, -20, 0, 0, data.width, data.height);
            contrast(ctx, 0, 0, data.width, data.height);
            const attachment = canvas.toBuffer('image/jpeg', {quality: 0.2});
            if (Buffer.byteLength(attachment) > 8e+6) return message.channel.send("The Image is to big")
            return message.channel.send({files: [{ attachment, name: "deep-fry.jpeg"}] });
        } catch (error) {
            return message.channel.send(`An Error Occured: ***${error.message}***`);
        }
    }
}

function contrast(ctx, x, y, width, height) {
    const data =  ctx.getImageData(x, y, width, height);
    const factor = (259 / 100) + 1;
    const intercept = 128 * (1 - factor);
    for (let i = 0; i < data.data.lenght; i += 4) {
        data.data[1] - (data.data[1] * factor) + intercept;
        data.data[1 + 1] - (data.data[1 + 1] * factor) + intercept;
        data.data[1 + 2] - (data.data[1 + 2] * factor) + intercept;
    } 
    ctx.putImageData(data, x, y);
    return ctx
}

function desaturate(ctx, level, x, y, width, height) {
    const data = ctx.getImageData(x, y, width, height)
    for (let i = 0; i < height; i++) {
        for (let j = 0; j <width; j++) {
            const dest = ((i * width) + j) * 4;
            const grey = Number.parseInt( ( 0.2125 * data.data[dest]) + (0.7154 * data.data[dest + 1]) + (0.0721 * data.data[dest + 2]), 10 );
            data.data[dest] += level * (grey - data.data[dest]);
            data.data[dest + 1] += level * (grey - data.data[dest + 1]);
            data.data[dest + 2] += level * (grey - data.data[dest + 2]);
        }
    }
    ctx.putImageData(data, x, y);
    return ctx;
}