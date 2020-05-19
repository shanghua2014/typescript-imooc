// ts直接引入js，无法识别js文件，需要 .d.ts 的翻译文件
import superagent from 'superagent';
import path from 'path';
import fs from 'fs';
import DellAnalyzer from './dellAnalyzer';

export default interface Analyzer {
	analyze: (html: string, filePath: string) => string;
}

class Crowller {
	private filePath = path.resolve(__dirname, '../data/course.json');

	private async getRawHtml() {
		const result = await superagent.get(this.url);
		return result.text;
	}

	private writeFile(content: string) {
		fs.writeFileSync(this.filePath, content);
	}

	private async initSpiderProcess() {
		// 获取页面内容
		const html = await this.getRawHtml();

		// 获取html元素
		// const courseInfo = this.getCourseInfo(html);
		// 保存数据
		// const fileContent = this.generateJsonContent(courseInfo);

		// 处理页面内容
		const fileContent = analyze.analyze(html, this.filePath);
		this.writeFile(fileContent);
	}
	constructor(private url: string, private analyze: Analyzer) {
		this.initSpiderProcess();
	}
}
const secret = 'x3b174jsx';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

const analyze = DellAnalyzer.getInstance();
new Crowller(url, analyze);
