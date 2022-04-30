const { type } = require('express/lib/response');
const nedb = require('nedb');
class Restaurant {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }
    init() {
        this.db.insert({
            name: 'Tamago Nigiri',
            description: 'Japanese omelette ontop of sushi rice',
            ingredients: 'Cooked egg,sushi rice,nori',
            allergy: 'Contains Eggs',
            price: 3.50,
            type: 'lunch',
            special: false,
            hidden: false
        });
        console.log('db entry Tamago Nigiri inserted');
        this.db.insert({
            name: 'Pork Katsu Curry',
            description: 'Deep-fried breaded pork cutlet, potato, carrot',
            ingredients: 'Japanese curry,panko breadcrumbs,japanese rice, plain flour, pork loins, egg, potato, carrot, vegetable oil',
            allergy: 'Contains eggs,gluten and may contain nuts',
            price: 9.80,
            type: 'main',
            special: true,
            hidden: false

        });
        console.log('db entry Pork Katsu Curry inserted');
        this.db.insert({
            name: 'Oyako-Don',
            description: 'Shredded chicken, onions and egg seasoned with soy sauce, mirin, sake and dashi',
            ingredients: 'Japanese rice,skinless bonless chicken thighs,onion,dashi stock,soy sauce,mirin,brown sugar, eggs',
            allergy: 'Contains eggs,gluten',
            price: 8.5,
            type: 'lunch',
            special: true,
            hidden: false
        });
        console.log('db entry Oyako-Don inserted');
        this.db.insert({
            name: 'Chashu Don',
            description: 'Pork belly served ontop of hot steamy white rice topped with spring onions',
            ingredients: 'vegetable oil, onion, garlic cloves, ginger, spring onions, chashu pork belly',
            allergy: 'May contain peanuts',
            price: 8.5,
            type: 'lunch',
            special: false,
            hidden: false

        });
        console.log('db entry Chashu Don lunch inserted');
        this.db.insert({
            name: 'Chicken Katsu Curry ',
            description: 'Deep-fried breaded chicken cutlet, potato, carrot',
            ingredients: 'Japanese curry,panko breadcrumbs,japanese rice, plain flour, chicken fillets, egg, potato, carrot, vegetable oil',
            allergy: 'Contains Eggs',
            price: 10.0,
            type: 'main',
            special: true,
            hidden: false
        });
        console.log('db entry Chicken Katsu Curry inserted');
        this.db.insert({
            name: 'Ebi Prawn Katsu Curry ',
            description: 'Panko coated prawn with a drizzle of fruity katsu sauce, served with our rich aromatic curry, fukujinzuke pickles & rice.',
            ingredients: 'Japanese curry,panko breadcrumbs,japanese rice, plain flour, prawn, egg, potato, carrot, vegetable oil',
            allergy: 'Contains Eggs',
            price: 10.0,
            type: 'main',
            special: true,
            hidden: false
        });
        console.log('db entry Ebi Prawn Katsu Curry inserted');
        this.db.insert({
            name: 'Fried Chicken Udon ',
            description: 'Fried thick udon with slices of chicken',
            ingredients: 'Thick white noodles,beansprouts,mixed peppers,carrot,fresh chilli,onions,wok fried in Kikkoman soy',
            allergy: 'Contains Gluten',
            price: 10.0,
            type: 'lunch',
            special: false,
            hidden: false
        });
        console.log('db entry Fried Chicken Udon inserted');
        this.db.insert({
            name: 'Chicken Teriyaki ',
            description: 'Light batter Chicken grilled with sweet and sticky teriyaki sauce served with hot steamy rice.',
            ingredients: 'Chicken thighs,rice,terkiyaki sauce,steamed bok choi,garlic cloves,soy sauce',
            allergy: 'Contains Gluten',
            price: 11.0,
            type: 'main',
            special: false,
            hidden: false

        });
        console.log('db entry Teriyaki inserted');
        this.db.insert({
            name: 'Beef Teriyaki ',
            description: 'Light batter Beef grilled with sweet and sticky teriyaki sauce served with hot steamy rice.',
            ingredients: 'Beef,rice,terkiyaki sauce,steamed bok choi,garlic cloves,soy sauce',
            allergy: 'Contains Gluten',
            price: 11.0,
            type: 'main',
            special: false,
            hidden: false

        });
        console.log('db entry Beef Teriyaki inserted');
        this.db.insert({
            name: 'Beef Yakisoba ',
            description: 'Chinese-style noodles wok-fried with beef,beansprouts, cabbage, carrot, spring onion and a sweet & savoury sauce.',
            ingredients: 'Lean beef fillet,garlic cloves,onion,beansprouts, cabbage, carrot,yakisoba sauce',
            allergy: 'Contains Gluten',
            price: 10.0,
            type: 'main',
            special: false,
            hidden: false

        });
        console.log('db entry Beef Yakisoba inserted');
        this.db.insert({
            name: 'Chicken Yakisoba ',
            description: 'Chinese-style noodles wok-fried with chicken,beansprouts, cabbage, carrot, spring onion and a sweet & savoury sauce.',
            ingredients: 'Chicken breast,garlic cloves,onion,beansprouts, cabbage, carrot,yakisoba sauce',
            allergy: 'Contains Gluten',
            price: 10.0,
            type: 'main',
            special: false,
            hidden: false

        });
        console.log('db entry Chicken Yakisoba inserted');
        this.db.insert({
            name: 'Seafood Yakisoba ',
            description: 'Chinese-style noodles wok-fried with seafood,beansprouts, cabbage, carrot, spring onion and a sweet & savoury sauce.',
            ingredients: 'Prawn,crab sticks,squid,scallop,naruto,garlic cloves,onion,beansprouts, cabbage, carrot,yakisoba sauce',
            allergy: 'Contains Gluten',
            price: 10.50,
            type: 'main',
            special: false,
            hidden: false

        });
        console.log('db entry Seafood Yakisoba inserted');
        this.db.insert({
            name: 'Special Yakisoba ',
            description: 'Chinese-style noodles wok-fried with seafood,chicken,beansprouts, cabbage, carrot, spring onion and a sweet & savoury sauce.',
            ingredients: 'Chicken breast,Prawn,crab sticks,squid,scallop,naruto,garlic cloves,onion,beansprouts, cabbage, carrot,yakisoba sauce',
            allergy: 'Contains Gluten',
            price: 11.0,
            type: 'main',
            special: true,
            hidden: false

        });
        console.log('db entry Special Yakisoba inserted');
        this.db.insert({
            name: 'Beef Yakisoba ',
            description: 'Chinese-style noodles wok-fried with beef,beansprouts, cabbage, carrot, spring onion and a sweet & savoury sauce.',
            ingredients: 'Lean beef fillet,garlic cloves,onion,beansprouts, cabbage, carrot,yakisoba sauce',
            allergy: 'Contains Gluten',
            price: 10.0,
            type: 'lunch',
            special: false,
            hidden: false

        });
        console.log('db entry Beef Yakisoba  lunch inserted');
        this.db.insert({
            name: 'Special Yakisoba ',
            description: 'Chinese-style noodles wok-fried with seafood,chicken,beansprouts, cabbage, carrot, spring onion and a sweet & savoury sauce.',
            ingredients: 'Chicken breast,Prawn,crab sticks,squid,scallop,naruto,garlic cloves,onion,beansprouts, cabbage, carrot,yakisoba sauce',
            allergy: 'Contains Gluten',
            price: 11.0,
            type: 'lunch',
            special: true,
            hidden: false

        });
        console.log('db entry Special Yakisoba lunch inserted');
        this.db.insert({
            name: 'Pork Katsu Curry',
            description: 'Deep-fried breaded pork cutlet, potato, carrot',
            ingredients: 'Japanese curry,panko breadcrumbs,japanese rice, plain flour, pork loins, egg, potato, carrot, vegetable oil',
            allergy: 'Contains eggs,gluten and may contain nuts',
            price: 9.80,
            type: 'lunch',
            special: true,
            hidden: false

        });
        console.log('db entry Pork Katsu Curry Lunch inserted');
        this.db.insert({
            name: 'Amai Udon',
            description: 'Teppan Fried Udon with Prawns, Egg, Fried Tofu, Mixed Vegetables in a light Sweet Sauce garnished with crushed Peanuts',
            ingredients: 'Udon noodles, vegtable oil,firm tofu,corn flour,red onion, small leek,king prawns,beansprouts, amai sauce, egg, lime, chopped peanuts',
            allergy: 'Contains Nuts',
            price: 10.50,
            type: 'main',
            special: false,
            hidden: false

        });
        console.log('db entry Amai Udon inserted');
        this.db.insert({
            name: 'Beef Curry Udon',
            description: 'A delicious light Curry Soup packed full of Fresh Vegetables, thinly sliced Beef & Udon Noodles, finished with Spring Onions & Egg',
            ingredients: 'beef, udon noodles, onion, carrot, scallion, unsalted butter, flour, curry powder, beef stock, soy sauce, mirin, vegetable oil, egg',
            allergy: 'Contains eggs',
            price: 10.9,
            type: 'main',
            special: true,
            hidden: false

        });
        console.log('db entry Beef Curry Udon inserted');
        this.db.insert({
            name: 'Tonkotsu Ramen',
            description: 'The classic ramen - our rich tonkotsu pork broth, chashu pork belly, marinated kikurage mushrooms, spring onions & nori seaweed (optional)',
            ingredients: 'pig trotters,chicken, vegetable oil, onion, garlic cloves, ginger, spring onions,callions, kikurage mushrooms, chashu pork belly',
            allergy: 'May contain peanuts',
            price: 10.9,
            type: 'main',
            special: true,
            hidden: false

        });
        console.log('db entry Tonkotsu Ramen inserted');
        this.db.insert({
            name: 'Tantanmen',
            description: 'A spicy sesame based ramen with a choice of spicy ground pork. Topped with spring onion ribbons, pak choi, chilli oil & angel hair chilli.',
            ingredients: 'ground pork, vegetable oil, onion, garlic cloves, ginger, spring onions,callions, kikurage mushrooms',
            allergy: 'May contain peanuts',
            price: 10.9,
            type: 'main',
            special: false,
            hidden: false

        });
        console.log('db entry Tantanmen inserted');
        this.db.insert({
            name: 'Chashu Don',
            description: 'Pork belly served ontop of hot steamy white rice topped with spring onions',
            ingredients: 'vegetable oil, onion, garlic cloves, ginger, spring onions, chashu pork belly',
            allergy: 'May contain peanuts',
            price: 8.5,
            type: 'main',
            special: false,
            hidden: false

        });
        console.log('db entry Chashu Don inserted');
        this.db.insert({
            name: 'Black Tonkotsu Ramen',
            description: 'The classic ramen with a twist- our rich tonkotsu pork broth with black garlic oil, chashu pork belly, marinated kikurage mushrooms, spring onions & nori seaweed (optional)',
            ingredients: 'Black garlic oil,vegetable oil, onion, garlic cloves, ginger, spring onions, chashu pork belly',
            allergy: 'May contain peanuts',
            price: 11,
            type: 'lunch',
            special: false,
            hidden: false

        });
        console.log('db entry Black Tonkotsu Ramen lunch inserted');
        this.db.insert({
            name: 'Chicken Karaage Yakisoba ',
            description: 'Chinese-style noodles wok-fried with fried chicken,beansprouts, cabbage, carrot, spring onion and a sweet & savoury sauce.',
            ingredients: 'Fried Chicken,garlic cloves,onion,beansprouts, cabbage, carrot,yakisoba sauce',
            allergy: 'Contains Gluten',
            price: 11.0,
            type: 'lunch',
            special: false,
            hidden: false

        });
        console.log('db entry Chicken Karaage Yakisoba lunch inserted');
        this.db.insert({
            name: 'Karraage-Don',
            description: 'A rice bowl with our juicy karaage chicken drizzled in a choice of a sweet bulldog or our OG spicy sauce, topped with kewpie mayo, spring onions & sesame',
            ingredients: 'Japanese rice,fried skinless bonless chicken thighs,onion,dashi stock,soy sauce,mirin,brown sugar, eggs',
            allergy: 'Contains eggs,gluten',
            price: 9.5,
            type: 'main',
            special: false,
            hidden: false
        });
        console.log('db entry Oyako-Don inserted');


    }







    //this function will return all entries from the database
    getAllEntries() {
        //this will return a Promise object, which could be resolved or rejected
        return new Promise((resolve, reject) => {
            //to retrieve the data will use the find() function of the database 
            //error is the first callback function; err stands for error, and entries stands for data.
            this.db.find({})
                .sort({ name: 1 })
                .exec(function (err, entries) {
                    //If there is an error, it will reject the Promise.
                    if (err) {
                        reject(err);
                        //If there isn't an error, resolve the promise and return the information.
                    } else {
                        resolve(entries);
                        //to view how the returned data would display like
                        console.log('function all() returns: ', entries);
                    }
                })
        })
    }

    addDish(name, description, ingredients, allergy, price, type, special, hidden) {
        var entry = {
            name: name,
            description: description,
            ingredients: ingredients,
            allergy: allergy,
            price: price,
            type: type,
            special: special,
            hidden: hidden,
            published: new Date().toISOString().split('T')[0]
        }
        console.log('entry created', entry);
        this.db.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        })
    }

    remove(query, options, cb) {
        this.db.remove(query, options, cb);
      }





   
}



const restaurant = new Restaurant('./db/dish.db');
//restaurant.init();

module.exports = restaurant;