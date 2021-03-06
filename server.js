require('dotenv').config();
const express = require('express');
const axios = require('axios');
const errorPage = require('./routes/error');
const mainPage = require('./routes/main');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

/*app.get('/', (req,res)=>{
    let url = `https://api.spoonacular.com/recipes/random/?apiKey=${process.env.APIKEY}`;

    axios.get(url)
    .then((response) =>{
        let recipe = {
            title: response.data.recipes[0].title,
            summary: response.data.recipes[0].summary,
            instructions: response.data.recipes[0].instructions,
            imageUrl: response.data.recipes[0].image,
            ingredients: response.data.recipes[0].extendedIngredients
        }
        res.render('index', {dataFromSpoonacular: recipe});
    })
    .catch(error=> {
        console.log(error);
    });
});*/

app.use(mainPage);
app.use(errorPage);
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}.`);
})