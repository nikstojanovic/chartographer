// TOOD: xAxis, yAxis
// TODO: add padding

const canvas = document.querySelector(".canvas-chart");
const canvasParent = canvas.parentNode;
const ctx = canvas.getContext("2d");

function outputsize() {
    ctx.canvas.width = canvasParent.offsetWidth;
    ctx.canvas.height = canvasParent.offsetHeight;
    draw(ctx);
}

new ResizeObserver(outputsize).observe(canvasParent);

function draw(context) {
    const xTicks = data.length;
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;

    const xAxisPX = canvasWidth / xTicks;

    const yMin = Math.min(...data);
    const yMax = Math.max(...data);
    const yAxisCoeff = canvasHeight / (yMin - yMax); // flipVertical: yMax - yMin

    for (i = 0; i < data.length; i++) {
        const x = xAxisPX * i;
        const y = yAxisCoeff * (data[i] - yMax); // flipVertical: - yMin
        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "red";
        context.moveTo(x, y);
        const x2 = xAxisPX * (i+1);
        const y2 = yAxisCoeff * (data[i+1] - yMax); // flipVertical: - yMin
        context.lineTo(x2, y2);
        context.stroke();
    }
}