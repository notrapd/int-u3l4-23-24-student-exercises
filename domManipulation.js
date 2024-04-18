// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('mouseover', function() {

myName.innerHTML="My name is Wilbert Benitez-Saengdet!";  
myHobby.innerHTML="I like to read novels, webtoon, wuxia, manhwa and manhua"
myLocation.inneerHTML="I live in Queens"




});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener("keydown", function() {
image.src= "https://us-tuna-sounds-images.voicemod.net/7a600a8f-8d98-4280-8dab-444ec32758e1-1664754807128.jpg"

});



  

// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener("mouseover", function(){
  image.src= "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg"
})

// BONUS
// 7. Try using different event types for your buttons.
