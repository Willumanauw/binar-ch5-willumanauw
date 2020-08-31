const tiers = ['mobile', 'basic', 'standard', 'premium']

const features = [
    `<button type="button" class="btn btn-primary btn-sm btn-block">Watch</button>`,
    `<button type="button" class="btn btn-primary btn-sm btn-block">Watch on TV</button>`,
    `<button type="button" class="btn btn-primary btn-sm btn-block">Watch HD</button>`,
    `<button type="button" class="btn btn-primary btn-sm btn-block">Watch Ultra HD</button>`
   ]
   
 
//it contains card element in HTML. you may improve the function
function userCard(email, tier, imageURL) {
    
 let featureButtons = '';
 if (tier >= 0) { //mobile
   featureButtons += features[0]
 }
 if (tier >= 1) { //basic
   featureButtons += features[1]
 }
 if (tier >= 2) { //standard
   featureButtons += features[2]
 }
 if (tier >= 3) { //premium
   featureButtons += features[3]
 }

 return `<div class="card text-center mx-1" style="width: 16rem;">
 <div class="card-body">
   <img src=${imageURL} width="120" height="120" style="border-radius: 50%; margin-bottom: 2rem;">
   <h5 class="card-title">${email}</h5>
   <h6 class="card-subtitle my-2 text-muted">${tiers[tier]} user</h6>
   ${featureButtons}
 </div>
 </div>`
}
 
function createUserCard(email, tier, imageURL) {
 //your code here, improve the function
 //select & manipulate HTML here
 //akses elemen HTML yang jadi wadah output
     let output = document.getElementById("userCards");

      //akses elemen HTML yang jadi input
     let emailInput = document.getElementById("inlineFormInputName").value;
     let tierOption = document.getElementById("inlineFormCustomSelect").value;
     let imageUrlInput = document.getElementById("inlineFormInputImage").value;

    //  console.log(emailInput);
    //  console.log(tierOption);
    //  console.log(imageUrlInput);
    
     
     //manipulasi elemen HTML dengan innerHTML
     output.innerHTML += userCard(emailInput, tierOption, imageUrlInput);
}
 
// you may improve the addEventListener function
document.getElementById("createButton").addEventListener("click", createUserCard)
