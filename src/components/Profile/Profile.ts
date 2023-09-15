export enum Attribute {
    "images" = "images",

}

class Profile extends HTMLElement{
    images?: number;

    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            images: null,
        }
        return Object.keys(attrs); 
    }
    
    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case Attribute.images:
                this.images = newValue ? Number(newValue): undefined;
            break;

            default: 
           (this as any)[propName] = newValue;
            break;
        }
        
        this.render();
    }

    
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    
    
    render(){

        
        
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <link rel="stylesheet" href="components/Profile/Profile.css">  
            <img style={backgroundColor: ${this.images === 0 ? 'white' : 'black'}}</img>
      
            
            </section>
            `
        }
    }
}

customElements.define("my-profile",Profile);
export default Profile;