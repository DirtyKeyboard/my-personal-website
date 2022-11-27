const button = document.getElementById('button');
button.addEventListener('click', function() {
    alert('You clicked the button! Press W for surpise!');
    console.log('button');
});

document.addEventListener('keydown', function(e)
{
    if (e.key === "w")
    {
        alert("The power of W compells you");
        const element = document.createElement("div");
        const par = document.createElement("p");
        element.textContent = "You clicked the element creator!";
        document.body.append(element);
    }
});