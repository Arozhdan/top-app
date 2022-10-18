export enum ITopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface IPageAdvantage {
		title: string;
		description: string;
		_id: string;
}

export interface IHhData {
		count: number;
		juniorSalary: number;
		middleSalary: number;
		seniorSalary: number;
		updatedAt: Date;
		_id: string;
}

export interface IBlog {
		h1: string;
		metaTitle: string;
		metaDescription: string;
		views: number;
		_id: string;
}

export interface ISravnikus {
		metaTitle: string;
		metaDescription: string;
		qas: any[];
		_id: string;
}

export interface ILearningclub {
		metaTitle: string;
		metaDescription: string;
		qas: any[];
		_id: string;
}

export interface IPage {
		_id: string;
		tags: string[];
		secondCategory: string;
		alias: string;
		title: string;
		category: string;
		seoText: string;
		tagsTitle: string;
		metaTitle: string;
		metaDescription: string;
		firstCategory: ITopLevelCategory;
		advantages: IPageAdvantage[];
		createdAt: Date;
		updatedAt: Date;
		hh: IHhData;
		qas: any[];
		addresses: any[];
		categoryOn: string;
		blog: IBlog;
		sravnikus: ISravnikus;
		learningclub: ILearningclub;
}


