import svgCaptcha from 'svg-captcha';

class PublicController {
  constructor() { }
  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 6,
      noise: Math.floor(Math.random() * 5),
      ignoreChars: 'o0li1',
      color: true,
      width: 150,
      height: 50
    });
    ctx.body = {
      code: 200,
      data: newCaptcha.data
    }
  }
}

export default new PublicController()
