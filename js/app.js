document.addEventListener('DOMContentLoaded',function(){
    const url = 'https://api.spoonacular.com/recipes/random?apiKey=f5cb061b72a14bcca37b16883a4290f8';

    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data.recipes);
        const recipe = data.recipes;
        const length = recipe[0].extendedIngredients.length;
        const ingredients = recipe[0].extendedIngredients;

        const title = recipe[0].title;
        const image = recipe[0].image;
        const summary = recipe[0].summary;
        const instructions = recipe[0].instructions;


        console.log(title);
        let html =`
        <img src="${image}">
        Title: ${title}
        Ingredients: ${ingredients}
        Summary: ${summary}
        Instructions: ${instructions}
        `;
        document.body.innerHTML = html;
    })
});


//Title
// extendedIngredients[] ->name -> amount -> units -> measures (in metrics) -> amount -> unitShort
//imageg
//summary
//instructions