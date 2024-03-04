class Start extends Marking {
    constructor(center, directionVector, width, height) {
        super(center, directionVector, width, height);

        this.img = new Image();
        this.img.src = 'assets/car.png';
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.center.x, this.center.y);
        ctx.rotate(angle(this.directionVector) - Math.PI / 2);
        const imgRatio = this.img.height / this.img.width;
        const imgWidth = this.width / 3;  // one third of the road width
        const imgHeight = imgWidth * imgRatio;
        ctx.drawImage(
            this.img,
            -imgWidth / 2,
            -imgHeight / 2,
            imgWidth,
            imgHeight
        );

        ctx.restore();
    }
}