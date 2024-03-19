class Confirmlink extends HTMLAnchorElement{
    connectedCallback(){
        this.addEventListener('click' , event=>{
            if(!confirm('Do you really wanna leave')){
                event.preventDefault();
            }
        })
    }
}

//third arg coz it's not generic but specific like link or p or anything
customElements.define('my-confirm-link' , Confirmlink , {extends: 'a'});

