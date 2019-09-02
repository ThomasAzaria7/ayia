export class AyiaProduct{

    public name:string;
    public description:string;
    public displayImg:string;
    public otherImgs:[''];
    public code:string;
    public cost:any;
    public quantity:number;
    public price:any;
    public currency:string;
    public tax:string;

    constructor(title:string, productDes:string, displayImg:string, photo:[''],
    productCode:string, cost:number,quantity:number,price:number, currency:string,tax:string){
        this.name = title;
        this.description=productDes;
        this.displayImg=displayImg;
        this.otherImgs=photo;
        this.code= productCode;
        this.cost= cost;
        this.quantity= quantity;
        this.price = price;
        this.currency =currency;
        this.tax =tax;


    }
}
