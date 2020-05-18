import Analyzer from './crowller';

// 继承 Analyzer是为了规定类里必有一个 analyze 方法
export default class DellAnalyzer implements Analyzer {
	public analyze(html: string, filePath: string) {
		return html;
	}
}
