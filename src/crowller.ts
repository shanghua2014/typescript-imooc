// ts直接引入js，无法识别js文件，需要 .d.ts 的翻译文件
import superagent from 'superagent';
import cheerio from 'cheerio';

class Crowller {
	private secret = 'x3b174jsx';
	private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;

	constructor() {
		this.getRawHtml();
	}

	async getRawHtml() {
		const result = await superagent.get(this.url);
		this.getCourseInfo(result.text);
	}

	getCourseInfo(html: string) {
		interface Course {
			title: string;
			count: number;
		}

		const $ = cheerio.load(html);
		const courseInfos: Course[] = [];

		$('.course-item').map((index, element) => {
			const descs = $(element).find('.course-desc');
			const title = descs.eq(0).text();
			const count = parseInt(descs.eq(1).text().split('：')[1]);
			courseInfos.push({
				title,
				count
			});
		});
		const result = {
			time: new Date().getTime(),
			data: courseInfos
		};
		console.log(result);
	}
}

const crowller = new Crowller();
