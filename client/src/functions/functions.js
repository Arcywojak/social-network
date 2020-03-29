//@ show = false: HIDE OVERLAY
//@ show = true:  SHOW OVERLAY
export const toggleOverlay = (show=false) => { 
    let overlay = document.querySelector('.overlay');
    if(show){
        overlay.classList.remove('none')
        overlay.classList.add('anim-fade-in-overlay')
    } else {
        overlay.classList.add('reverse-anim-fade-in-overlay')

        setTimeout( () => {
            overlay.classList.add('none');
            overlay.classList.remove('anim-fade-in-overlay');
            overlay.classList.remove('reverse-anim-fade-in-overlay');
        }, 500)
    }
}

//@function to open login/register modal
//@ 2 params:
//@ first: what modal do we want to open ('REGISTER' or 'LOGIN')
//@ second: do we want to open or close modal (true: close modal, false: open modal)
//@ if you want to make use of "close" param, the first one does not matter
export const toggleAuth = (block='', close=false) => {


    
    let register = document.querySelector('.register');
    let login = document.querySelector('.login');
    if(close){
        toggleOverlay();
        login.classList.remove('anim-fade-in');
        login.classList.add('none');
        register.classList.remove('anim-fade-in');
        register.classList.add('none');
    } else {
        if(block === 'REGISTER'){
            toggleOverlay(true);
            login.classList.remove('anim-fade-in');
            login.classList.add('none'); 
            
            register.classList.remove('none');
            register.classList.add('anim-fade-in'); 
        } else {
            toggleOverlay(true);
            register.classList.remove('anim-fade-in');
            register.classList.add('none'); 
            
            login.classList.remove('none');
            login.classList.add('anim-fade-in');
        }
    } 
}

export const toggleCreateForm = (show=false) => {

    if(document.querySelector('.form-create-post')){

        let form = document.querySelector('.form-create-post')

        if(show){
            form.classList.remove('none');
            form.classList.add('anim-fade-in'); 
            toggleOverlay(show);
        } else {
            form.classList.add('none');
            form.classList.remove('anim-fade-in'); 
        }
    } 
}

export const togglePostAddedInformation = (show=false) => {

    if(document.querySelector('.post-added-information')){  
        let postAddedInformation = document.querySelector('.post-added-information');
        
        if(show){  
            postAddedInformation.classList.remove('none');
            postAddedInformation.classList.add('anim-fade-in');
            toggleOverlay(show);
        } else {
            postAddedInformation.classList.add('none');
            postAddedInformation.classList.remove('anim-fade-in');  
        }
    }
}

export const removeAll = () => {
    toggleAuth('', true);
    togglePostAddedInformation();
    toggleCreateForm();
    toggleOverlay();
}
