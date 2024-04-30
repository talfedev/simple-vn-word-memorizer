export class Word {
	id: string;
	en: string;
	vn: string;
	lvl: number = 0;

	constructor(en: string, vn: string, lvl: number = 0, id?: string) {
		this.id = id || 'no ID';
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
