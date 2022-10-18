export interface IProductCharacteristic {
		name: string;
		value: string;
}
export interface IReview {
	_id: string;
	name: string;
	title: string;
	desciption: string;
	rating: number;
	createdAt: Date;
}

export interface IBlog {
		text: string;
		_id: string;
		bigImage: string;
}

export interface IProduct {
		_id: string;
		categories: string[];
		tags: string[];
		title: string;
		image: string;
		description: string;
		link: string;
		price: number;
		credit: number;
		oldPrice: number;
		characteristics: IProductCharacteristic[];
		advantages: string;
		initialRating: number;
		createdAt: Date;
		updatedAt: Date;
		__v: number;
		html: string;
		blog: IBlog;
		companyId: string;
		clicks: number;
		reviews: IReview[];
		reviewCount: number;
		reviewAvg?: number;
}

