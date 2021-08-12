let data0 = {
    photo: 'images/1.png',
    title: 'Inside the Forest',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis explicabo illo molestias debitis! Recusandae accusamus, numquam, eos sunt sequi culpa impedit, aperiam voluptatem obcaecati tempore sed distinctio porro ea quaerat.'
  };

  let data1 = {
    photo: 'images/2.png',
    title: 'Lucky Leaves',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis explicabo illo molestias debitis! Recusandae accusamus, numquam, eos sunt sequi culpa impedit, aperiam voluptatem obcaecati tempore sed distinctio porro ea quaerat.'
  };

  let data2 = {
    photo: 'images/3.png',
    title: 'Rainbow',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis explicabo illo molestias debitis! Recusandae accusamus, numquam, eos sunt sequi culpa impedit, aperiam voluptatem obcaecati tempore sed distinctio porro ea quaerat.'
  };

  let data3 = {
    photo: 'images/4.png',
    title: 'Happy Flowers',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis explicabo illo molestias debitis! Recusandae accusamus, numquam, eos sunt sequi culpa impedit, aperiam voluptatem obcaecati tempore sed distinctio porro ea quaerat.'
  };

  let data4 = {
    photo: 'images/5.png',
    title: 'Forest Lake',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis explicabo illo molestias debitis! Recusandae accusamus, numquam, eos sunt sequi culpa impedit, aperiam voluptatem obcaecati tempore sed distinctio porro ea quaerat.'
  };

  let data5 = {
    photo: 'images/6.png',
    title: 'Beauty in Nature',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis explicabo illo molestias debitis! Recusandae accusamus, numquam, eos sunt sequi culpa impedit, aperiam voluptatem obcaecati tempore sed distinctio porro ea quaerat.'
  };

  let data6 = {
    photo: 'images/7.png',
    title: 'Butterflies',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis explicabo illo molestias debitis! Recusandae accusamus, numquam, eos sunt sequi culpa impedit, aperiam voluptatem obcaecati tempore sed distinctio porro ea quaerat.'
  };

  let data7 = {
    photo: 'images/8.png',
    title: 'Towards the Sun...',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis explicabo illo molestias debitis! Recusandae accusamus, numquam, eos sunt sequi culpa impedit, aperiam voluptatem obcaecati tempore sed distinctio porro ea quaerat.'
  };

  let currentPhoto = 0;

  let imagesData = [data0, data1, data2, data3, data4, data5, data6, data7];

  data0.photoNumber = 0;
  data1.photoNumber = 1;
  data2.photoNumber = 2;
  data3.photoNumber = 3;
  data4.photoNumber = 4;
  data5.photoNumber = 5;
  data6.photoNumber = 6;
  data7.photoNumber = 7;

  console.log(data7);

// ezeket elorehoztam a jobb atlathatosag kedveert
 
  let smallPhotos = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png'];
  console.log(smallPhotos);

  smallPhotos.forEach ((smallPhoto, index) => {
	$('.thumbnails').append(`<div class="thumbnailPhoto visible"><img src = "${smallPhoto}" data-number ="${index}"></div>`);
	console.log(smallPhoto,index);
  });

  let smallPhotosTitles = ['Inside the Forest', 'Lucky Leaves', 'Rainbow', 'Happy Flowers', 'Forest Lake', 'Beauty in Nature', 'Butterflies', 'Towards the Sun...']
  console.log(smallPhotosTitles);

  smallPhotosTitles.forEach ((smallPhotoTitle, index) => {
	$('.title').append(`<div class="thumbnailTitles" data-number="${index}"><p>${smallPhotoTitle} </p></div>`);
	console.log(smallPhotoTitle,index);
  });

  let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    };
	
// uj fuggveny, ami kijeloli az aktiv thumbnail kepet
// eloszor leszedem mindrol az activeThumbnailPhoto osztalty, majd rateszem arra ez egyre, ami eppen aktiv
  let activateThumbnailPhoto = (photoNumber) => {
	  $('.thumbnailPhoto').removeClass('activeThumbnailPhoto');
	  $('.thumbnailPhoto:eq(' + (photoNumber) + ')').addClass('activeThumbnailPhoto');
  };
  

  // a loadphoto-k utan mindenhol meghivom az activateThumbnailPhoto fuggvenyt is
  loadPhoto(currentPhoto);
  activateThumbnailPhoto(currentPhoto); //

  console.log(imagesData.length);

$('#rightArrow').click(() => {
   if( currentPhoto < imagesData.length-1){ 
  currentPhoto++;} 
  else {
    currentPhoto = -1;
    currentPhoto++;
  };
  loadPhoto(currentPhoto);
  activateThumbnailPhoto(currentPhoto); //
  console.log(currentPhoto);
});




console.log(imagesData.length-1);

$('#leftArrow').click(() => {
    if(currentPhoto > 0) { 
    currentPhoto--;}
  else {
    currentPhoto = 8;
    currentPhoto--;
  };
    loadPhoto(currentPhoto);
	activateThumbnailPhoto(currentPhoto); //
    console.log(currentPhoto);
  });




$('.thumbnailPhoto').click((event) => {
  let indexClicked = $(event.target).attr('data-number');
  let numberIndex = parseInt(indexClicked);
  console.log(numberIndex);
  loadPhoto(numberIndex);
  activateThumbnailPhoto(numberIndex); //

  $('#rightArrow').click(() => {
    if( numberIndex < imagesData.length-1){ 
  numberIndex++;} 
  else {
    numberIndex = -1;
    numberIndex++;
  };
  loadPhoto(numberIndex);
  activateThumbnailPhoto(numberIndex); //
  console.log(numberIndex);
  });

  $('#leftArrow').click(() => {
    if(numberIndex > 0) { 
    numberIndex--;}
  else {
    numberIndex = 8;
    numberIndex--;
  };
    loadPhoto(numberIndex);
	activateThumbnailPhoto(numberIndex); //
    console.log(numberIndex);
  });

  
});


$('.thumbnailPhoto').mouseover ((event2) => {
  let photoHovered = $(event2.target).attr('data-number');
  let number2Index = parseInt(photoHovered);
  console.log(number2Index);
  // eloszor lathatatlanna teszem az osszes leirast, majd a number2index-est lathatova valtoztatom
  $('.thumbnailTitles').show().css('visibility','hidden');
  $('.thumbnailTitles:eq(' + number2Index + ')').css('visibility','visible');
});

$('.thumbnailPhoto').mouseleave ((event3) => {
  let photoHovered2 = $(event3.target).attr('data-number');
  let number3Index = parseInt(photoHovered2);
  console.log(number3Index);
  $('.thumbnailTitles').hide();
});











