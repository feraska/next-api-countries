export interface item {
    name: {
      common:string,
      nativeName:{
        prop:{
          common:string
        }
      }
    }
    languages: {
      prop:string
    }
    subregion:string,
    region:string,
    capital:string[],
    population:number,
    borders:string[],
    currencies: {
      prop:{
        name:string
      }
    }
    flags: {
        svg: string,
        png: string
      },
}