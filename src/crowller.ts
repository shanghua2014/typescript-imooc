// ts直接引入js，无法识别js文件，需要 .d.ts 的翻译文件
import superagent from 'superagent';

class Crowller {
	private secret = 'x3b174jsx';
	private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
	private rawHtml = '';

	constructor() {
		this.getRawHtml();
	}

	async getRawHtml() {
		const result = await superagent.get(this.url);
		this.rawHtml = result.text;
		console.log(this.rawHtml);
	}
}

const crowller = new Crowller();
