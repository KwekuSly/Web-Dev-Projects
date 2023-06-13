import Thyme from '../Images/thyme.png'
import Milk from '../Images/milk.png'
import Onion from '../Images/onion.png'
import Parsely from '../Images/parsley.png'
import Pepper from '../Images/pepper.png'
import Garlic from '../Images/garlic.png'


 export const heroData = [
    {id : 1, name : 'Spices', decp : 'Thyme', price : '10.00', imageSrc : Thyme},
    {id : 2, name : 'Spices', decp : 'Parsley', price : '15.00', imageSrc : Parsely},
    {id : 3, name : 'Vegetables', decp : 'Pepper', price : '9.00', imageSrc : Pepper},
    {id : 4, name : 'Vegetables', decp : 'Garlic', price : '10.00', imageSrc : Garlic},
]

export const categories = [
{id: 1, name: "Dairy Products", urlParamName: "diaryProducts"},

{id: 2, name: "Fruits and Vegetabbles", urlParamName: "fruitsVeggies"},

{id: 3, name: "Meat and Seafood", urlParamName: "meatSeafood"},

{id: 4, name: "Grains and Bread", urlParamName: "grainsBread"},

{id: 5, name: "Canned and Packaged Goods", urlParamName: "canPackaged"},

{id: 6, name: "Spices", urlParamName: "spices"},

{id: 7, name: "Frozen Foods", urlParamName: "frozenFoods"},
]