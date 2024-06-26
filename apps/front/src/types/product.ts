export type ProductType = {
	id : number,
	categoryId : number,
	name: string;
	description?: string;
	picture?: string;
	price: string;
	qtyAvailable: number;
	qty?: number;
};
