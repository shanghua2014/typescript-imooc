import fs from 'fs';
import cheerio from 'cheerio';
import Analyzer from './crowller';

interface Course {
	title: string;
	count: number;
}
interface CourseResult {
	time: number;
	data: Course[];
}
interface Content {
	[propName: number]: Course[];
}

// 继承 Analyzer是为了规定类里必有一个 analyze 方法
export default class DellAnalyzer implements Analyzer {
	private static instance: DellAnalyzer;

	// 单例
	static getInstance() {
		if (!DellAnalyzer.instance) {
			DellAnalyzer.instance = new DellAnalyzer();
		}
		return DellAnalyzer.instance;
	}

	private getCourseInfo(html: string) {
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
		return {
			time: new Date().getTime(),
			data: courseInfos
		};
	}
	private generateJsonContent(courseInfo: CourseResult, filePath: string) {
		let fileContent: Content = {};
		if (fs.existsSync(filePath)) {
			fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
		}
		fileContent[courseInfo.time] = courseInfo.data;
		return fileContent;
	}

	public analyze(html: string, filePath: string) {
		const courseInfo = this.getCourseInfo(html);
		const fileContent = this.generateJsonContent(courseInfo, filePath);
		return JSON.stringify(fileContent);
	}
}
