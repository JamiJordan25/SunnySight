// script.js
// Get all the images
image_array = [
  'Hawa Mahal - The Palace of Winds .jpg',
  'hmedabad, Gujarat, India.jpg',
  'Jaipur, Rajasthan, India.jpg',
  'Jaipur, Rajasthan, India_4.jpg',
  'Pune, Maharashtra, India.jpg',
  'Pushkar, Rajasthan, India.jpg',
  'Bannerghatta Biological Park, Bengaluru, India.jpg',
  'Kochi, Kerala, India.jpg',
  'Thrissur, India.jpg',
  'Varkala, Kerala, India.jpg',
  'Munroe Island, Kerala, India.jpg',
  'kerala_2.jpg',
  'Golconda Fort, Hyderabad, Telangana, India_3.jpg',
  'Kerala, India_1.jpg',
  'Golconda Fort, Hyderabad, Telangana, India_2.jpg',
  'Golconda Fort, Hyderabad, Telangana, India_1.jpg',
  'hyderabad, India_1.jpg',
  'Chail Wildlife Sanctuary, Shimla, India.jpg',
  'At the monkey temple in Jaipur,India_2.jpg',
  'Shimla, Himachal Pradesh, India_1.jpg',
  'nice.jpg',
  'Mall Road, Shimla, India_1.jpg',
  '65, Mall Rd, Mallital, Nainital, Uttarakhand 263002, India.jpg',
  'Mall Road, Nainital, India_1.jpg',
  'Vegas Mall, New Delhi, India.jpg',

]

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./images/${selected_image}`
}