const form = document.querySelector('.container__form');
const select = document.querySelector('.container__select');
const inputName = document.querySelector('.form__input');
const btnSubmit = document.querySelector('.btn__form');
const imgFull = document.querySelector('.container__box--btn');
const showIMG = document.querySelector('.container__box--img');


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(select.value,form.sexo.value,inputName.value)
    geraAvatar(select.value,form.sexo,inputName.value)

})


function geraAvatar(style,sexo,name) {
    imgFull.href = '';
    const resolve = fetch(`https://avatars.dicebear.com/api/${style}/${sexo}/${name}.svg`).then(resultado => {
        showIMG.src = resultado.url;
        imgFull.href = resultado.url;
    })

}