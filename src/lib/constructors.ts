export class Word {
	en: string;
	vn: string;
	lvl: number = 0;

	constructor(en: string, vn: string, lvl: number = 0) {
		this.en = en;
		this.vn = vn;
		this.lvl = lvl;
	}

	levelUp = () => {
		this.lvl += 1;
	};

	reset = () => {
		this.lvl = 0;
	};
}
