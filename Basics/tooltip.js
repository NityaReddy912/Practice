//All custom element need to extend HTMLElement
class Tooltip extends HTMLElement {
    constructor () {
        super();
        // this._tooltipContainer;
        this._tooltipIcon;
        this._tooltipVisible=false;
        this._tooltipText="Default text";
        this.attachShadow({
            mode:'open'
        });
        // const template=document.querySelector('#tooltip-template')
        // this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.innerHTML= `
        <style>
            div {
                font-weight:normal;
                background-color:black;
                color:pink;
                position:absolute;
                left:4rem;
                padding:0.15rem;
                border-radius: 3px;
                box-shadow: 1px 2px 3px pink;
            }
            :host{
                position:relative;
            }
            
            :host(.important){
                background:var(--color-primary, grey);
                padding: 0.15rem;
            }

            :host-context(p){
                font-weight:bold

            }



            .highlight{
                background-color:red;
            }

            ::slotted(.highlight){
                border-bottom : 1px dotted red;
            }

            .icon{
                background: black;
                color:pink;
                padding : 0.15rem 0.5rem;
                text-align:center;
                border-radius: 50%
            }
        </style>
        <slot>Default slot value</slot>
        <span class='icon'>?</span>
        `;//template is a part of this js
        // ::slotted(span a) the styling wont be applied for the anchor tag as it only applies to one level
        //host context takes the wrapper tag as arg
    }
        
        //To access the DOM
        connectedCallback() {
        if(this.hasAttribute('text'))
        {
            this._tooltipText=this.getAttribute('text');
        }
        this._tooltipIcon=this.shadowRoot.querySelector('span');
        // const tooltipIcon = document.createElement('span');
        // tooltipIcon.textContent='{?}';
        this._tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        this._tooltipIcon.addEventListener('mouseleave',this._hideTooltip.bind(this));
        // this.shadowRoot.appendChild(tooltipIcon);
        this._render();
        }

        attributeChangedCallback(name, oldvalue,newvalue){
            if(oldvalue===newvalue)
            {
                return;
            }
            if(name === 'text'){
                this._tooltipText=newvalue
            }
        }

        static get observedAttributes(){
            return ['text'];
        }

        disconnectedCallback(){
            this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip);
            this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip);

        }

        _render(){
            let tooltipContainer = this.shadowRoot.querySelector('div');
            if(this._tooltipVisible){
                tooltipContainer=document.createElement('div');
                tooltipContainer.textContent=this._tooltipText
                this.shadowRoot.appendChild(tooltipContainer);
            }
            else{
                this.shadowRoot.removeChild(tooltipContainer);

            }

        }



        //_ indicates it shouldn't be called from outside but only internally
        _showTooltip(){
            this._tooltipVisible = true;
            this._render();
            // this._tooltipContainer=document.createElement('div');
            // this._tooltipContainer.textContent=this._tooltipText
            // // this._tooltipContainer.style.backgroundColor='black';
            // // this._tooltipContainer.style.color='pink';
            // // this._tooltipContainer.style.position='absolute';
            // this.shadowRoot.appendChild(this._tooltipContainer);

        }
        _hideTooltip(){
            this._tooltipVisible = false;
            this._render();

            // this.shadowRoot.removeChild(this._tooltipContainer);
        }


        

        }
    


//doble words separated by -
customElements.define('my-tooltip', Tooltip);