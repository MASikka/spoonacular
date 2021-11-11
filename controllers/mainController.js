const axios = require('axios');
exports.getMainPage = (req, res) => {
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
    
    
};