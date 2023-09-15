import *as components from "./components/Profile/Profile"
import Profile, { Attribute } from "./components/Profile/Profile";
import { data } from "./data";

class AppContainer extends HTMLElement {
    profiles: Profile[] = [];

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        console.log(data.images);
        

        data.images.forEach((s) => {
            const proimg = this.ownerDocument.createElement("my-profile") as Profile;
            proimg.setAttribute(Attribute.images, s.images);
            this.profiles.push(proimg);
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile);
            })
        }
    }
}

customElements.define("app-container",AppContainer);