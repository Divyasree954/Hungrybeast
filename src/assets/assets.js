import bgimg from './menu.jpg'
import beverage from './beverage.jpg'
import chefSpecial from './chefSpecial.jpg'
import Chicken_Biryani_headers from './Chicken-Biryani-header.jpg'
import chicken_fried_rice from './chicken-fried-rice.jpg'
import chicken_pizza from './chicken-pizza.jpg'
import chickennoodles from './chickennoodles.jpg'
import cold_coffee from './cold-coffee.jpg'
import familypack from './familypack.jpeg'
import familypackbiryani from './familypackbiryani.jpg'
import gralic_stater from './gralic_stater.webp'
import header_img from './header_img.jpg'
import header from './header.webp'
import ice_cream from './ice_cream.jpg'
import icecreamdessert from './icecreamdessert.webp'
import mainCourse from './mainCourse.jpg'
import mango_milkshake from './mango-milkshake.jpg'
import milkshake from './milkshake.jpg'
import momos_full_menu from './momos_full_menu.jpg'
import momos from './momos.jpg'
import nonvegstarter from './NonVegStarter.jpg'
import pizzas from './Pizzas.jpg'
import schezwan from './schezwan-chicken-fried-rice.jpg'
import starter from './starter.jpg'
import veg_starter_panner from './veg_starter_panner.jpg'
// import logo from './hglogo 1.png'
import menu_bg from './menu_bg.jpg'
import chaithra from './chaithra.jpg'
import cm from './cm.jpg'
import cmenu from './cmenu.jpg'
import arpana from './arpana.jpeg'
import lakshmi from './lakshmi.jpg'
import marrappa from './marrappa.jpeg'
import linkedin from './linkedin.jpg'
import facebook from './facebook.jpg'
import youtube from './youtube.jpg'
import twitter from './twitter.jpg'
import location from './location.jpg'
import logo from './hblogo.png'



export const assets={
    bgimg,
    Chicken_Biryani_headers,familypack,
    header_img,header,menu_bg,chaithra,cm,cmenu
}

export const menu_list = [
    {
        menu_image: starter,
        menu_name: "Veg Starters"
    },
    {
        menu_image: nonvegstarter,
        menu_name: "Non-Veg Starters"
    },
    {
        menu_image: mainCourse,
        menu_name: "Main Course"
    },
    {
        menu_image: chefSpecial,
        menu_name: "Chef Special"
    },
    {
        menu_image: chicken_fried_rice,
        menu_name: "Fried Rice"
    },
    {
        menu_image: pizzas,
        menu_name: "Pizza"
    },
    {
        menu_image:momos,
        menu_name: "Momos"
    },
    {
        menu_image: beverage,
        menu_name: "Beverages"
    },
    {
        menu_image:icecreamdessert,
        menu_name: "Ice Creams"
    },
    {
        menu_image:milkshake,
        menu_name: "Milk Shakes"
    }
]

export const MenuData=[
    {
        _id:"1",
        title:"Veg Starters",
        image:veg_starter_panner,
        items: [
            { name: "Gobi Manchurian", price: 60 },
            { name: "Chilly Gobi", price: 65 },
            { name: "Paneer Manchurian", price: 99 },
            { name: "Paneer Chilli", price: 99 },
            { name: "Paneer 65", price: 99 },
            { name: "Egg Manchurian", price: 70 },
            { name: "Gobi 65", price: 70 },
            { name: "Egg 65", price: 80 },
            { name: "Double Omelet", price: 40 }
          ]
        
    },
    {
        _id:"2",
        title:"Non-Veg Starters", 
        image:gralic_stater,
        items: [
            { name: "Chicken 65", price: 99 },
            { name: "Chilli Chicken", price: 99 },
            { name: "Chicken Manchuria", price: 99 },
            { name: "Dragon Chicken", price: 120 },
            { name: "Chicken Lollypop", price: 140 },
            { name: "Chicken Curry", price: 150 },
            { name: "Pepper Chicken", price: 150 },
            { name: "Garlic Chicken", price: 150 },
            { name: "Lemon Chicken", price: 150 }
          ]
    },
    {
        _id:"3",
        title:"Chef Special",
        image:schezwan,
        items: [
            { name: "Cilantro Chicken Rice", price: 99 },
            { name: "Cilantro Chicken", price: 160 },
            { name: "Schezwan Chicken Rice", price: 99 },
            { name: "Schezwan Chicken", price: 160 }
          ]
    },
    {
        _id:"4",
        title:"Main Course",
        image:familypackbiryani,
        items: [
            { name: "Chicken Biryani", price: 79 },
            { name: "Spl Chicken Biryani", price: 99 },
            { name: "Family Pack Biryani", price: 499 },
            { name: "Egg Biryani", price: 80 },
            { name: "Biryani Rice", price: 50 },
            { name: "Parota Chicken Curry", price: 80 }
          ]
    },
    {
        _id:"5",
        title:"Fried Rice",
        image:chickennoodles,
        items: [
            { name: "Gobi Rice", price: 70 },
            { name: "Egg Rice", price: 70 },
            { name: "Ghee Rice", price: 70 },
            { name: "Veg Fried Rice", price: 70 },
            { name: "Chicken Fried Rice", price: 99 },
            { name: "Paneer Rice", price: 99 },
            { name: "Veg Noodles", price: 99 },
            { name: "Egg Noodles", price: 99 },
            { name: "Chicken Noodles", price: 120 },
            { name: "Chilli Noodles", price: 120 }
          ]
    },
    {
        _id:"6",
        title:"Pizza",
        image:chicken_pizza,
        items: [
            { name: "Chicken Pizza", price: 170 },
            { name: "Paneer Pizza", price: 150 },
            { name: "Veg Pizza", price: 130 },
            { name: "Tomato Pizza", price: 120 },
            { name: "Onion Pizza", price: 120 }
          ]
    },
    {
        _id:"7",
        title:"Momos",
        image:momos_full_menu,
        items: [
            { name: "Paneer Steam Go Fry", price: 115 },
            { name: "Chicken Steam Go Fry", price: 115 }
          ]
    },
    {
        _id:"8",
        title:"Beverages",
        image:cold_coffee,
        items: [
            { name: "Fresh Lime Soda", price: 35 },
            { name: "Soft Drinks", price: 50 },
            { name: "Blue Corace", price: 50 },
            { name: "Mint Corace", price: 50 },
            { name: "Raspberry Mojito", price: 55 },
            { name: "Green Mojito", price: 55 },
            { name: "Cold Coffee", price: 50 },
            { name: "Lassi", price: 50 },
            { name: "Mango Lassi", price: 75 },
            { name: "Strawberry Lassi", price: 75 }
          ]
    },
    {
        _id:"9",
        title:"Ice Creams",
        image:mango_milkshake,
        items: [
            { name: "Chocolate", price: 70 },
            { name: "Mango", price: 70 },
            { name: "Vanilla", price: 70 },
            { name: "Strawberry", price: 75 },
            { name: "Butterscotch", price: 75 },
            { name: "Black Currant", price: 80 },
            { name: "Fruit & Nuts", price: 85 },
            { name: "Badam", price: 85 },
            { name: "Belgium Chocolate", price: 80 }
          ]
    },
    {
        _id:"10",
        title:"Milk Shakes",
        image:ice_cream,
        items: [
            { name: "Chocolate", price: 50 },
            { name: "Mango", price: 55 },
            { name: "Vanilla", price: 55 },
            { name: "Strawberry", price: 55 },
            { name: "Butterscotch", price: 60 },
            { name: "Black Currant", price: 60 },
            { name: "Fruit & Nuts", price: 60 },
            { name: "Badam", price: 65 },
            { name: "Belgium Chocolate", price: 60 }
          ]
    }
]

export const team = {
    arpana,lakshmi,marrappa,linkedin,twitter,facebook,youtube,location,logo,
}