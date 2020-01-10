import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import AddRecipe from "./AddRecipe";

const AllRecipes = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/posts")
        .then(res => {
            setPosts(res.data);
            console.log(posts)
        })
        .catch(err => console.log("sorry, an error has occurred while fetching recipes", err))
    }, []);

    return (
        <>
        <h1>Welcome to your Chef Portfolio</h1>
        <div>
            {posts.map(recipe => (
                <div key={recipe.id} className="recipes">
                    <p>{recipe.name}</p>
                    <p>{recipe.image_url}</p>
                    <p>{recipe.title}</p>
                    <p>{recipe.meal_type}</p>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                    <p>{recipe.chef_id}</p>
                    <hr/>
                </div>
            ))}
        </div>
        </>
    );
};

export default AllRecipes;