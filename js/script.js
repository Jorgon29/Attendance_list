async function fetchWaifu(){
  var baseUrl = 'https://api.waifu.im/search';
  const parameter = document.querySelector('.search-input').value.toLowerCase();
  try {
    let params = {
      included_tags: parameter
    };
    let queryParams = new URLSearchParams();
    for (const key in params) {
      if (Array.isArray(params[key])) {
        params[key].forEach(value => {
        queryParams.append(key, value);
        });
      } else {
        queryParams.set(key, params[key]);
      }
    }
    let response = await fetch(`${baseUrl}?${queryParams.toString()}`);
    let result = await response.json();
    console.log(result);
    console.log('after result await-response');
    let list = document.querySelector('.waifu-list');
    let item = document.createElement('li');
    let img = document.createElement('img');
    console.log('Elements created');
    img.src = result['images'][0]['url'];
    item.classList.add('list-item');
    item.appendChild(img);
    list.appendChild(item);
    console.log('Anadidos');
  } catch (error) {
    alert("An error ocurred while retrieving the images" + error);
  }


}
