function filterArticles() {
    console.log("filterArticles called");

    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const opinionArticles = document.querySelectorAll(".opinion");
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const recipeArticles = document.querySelectorAll(".recipe");
    const showUpdate = document.getElementById("updateCheckbox").checked;
    const updateArticles = document.querySelectorAll(".update");



    opinionArticles.forEach(function(article) {
        if (showOpinion) {
            article.style.display = "";      // show normally
        } 
        else{
            article.style.display = "none";  // hide
        }
        
    });

    recipeArticles.forEach(function(article) {
        if (showRecipe) {
            article.style.display = "";      // show normally
        } 
        else{
            article.style.display = "none";  // hide
        }
        
    });
    updateArticles.forEach(function(article) {
        if (showUpdate) {
            article.style.display = "";      // show normally
        } 
        else{
            article.style.display = "none";  // hide
        }
        
    });
}


function showFilter(){
    console.log("showFilter called");

    const filterContentElement = document.getElementById("filterContent")
    const newContentElement = document.getElementById("newContent")

    newContentElement.style.display = "none";
    filterContentElement.style.display = "block";
}

function showAddNew(){
    console.log("showAddNew called");

    const filterContentElement = document.getElementById("filterContent")
    const newContentElement = document.getElementById("newContent")

    filterContentElement.style.display = "none";
    newContentElement.style.display = "block";
}

function addNewArticle(){
    console.log("")

    let title = document.getElementById("inputHeader").value;
    let content = document.getElementById("inputArticle").value;
    
    let type;
    if(document.getElementById("opinionRadio").checked)
        type = "opinion"
    else if(document.getElementById("recipeRadio").checked)
        type = "recipe"
    else if(document.getElementById("lifeRadio").checked)
        type = "update"


    // get article list container
    const articleList = document.getElementById("articleList");

    // create article element
    const article = document.createElement("article");
    article.classList.add(type);

    // create marker/colored label
    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = type.charAt(0).toUpperCase() + type.slice(1);

    // title of article
    const h2 = document.createElement("h2");
    h2.textContent = title;

    // create article text
    const p = document.createElement("p");
    p.textContent = content;

    // create read more link
    const readMoreP = document.createElement("p");
    const link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    readMoreP.appendChild(link);

    // assemble article
    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(readMoreP);

    // add to page
    articleList.prepend(article); // adds to top (like newest first)

    // re-run filter so checkboxes apply
    filterArticles();

    // clear form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
}