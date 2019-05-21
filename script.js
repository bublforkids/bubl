class IconLink {
    constructor(iconElement) {
        this.iconElement = iconElement;

        this.iconData = this.iconElement.dataset.icon;

        this.bubbles = document.querySelectorAll(`.kidbubble[data-icon="${this.iconData}"]`);

        this.bubbles = Array.from(this.bubbles).map(bubble => {
            return new IconBubble(bubble);
        })

        this.iconElement.addEventListener('click', () => {
            this.selectIcon();
        })
    }

    selectIcon() {

        const icons = document.querySelectorAll('.icon');
        const activeicons = document.querySelectorAll('.active-icon');

        if (activeicons.length === 3) {
            icons.forEach(icon => {
                icon.classList.remove('active-icon');
            })
        }

        const bubbles = document.querySelectorAll('.kidbubble');

        bubbles.forEach(bubble => {
            bubble.style.display = 'none';
        })

        this.iconElement.classList.add('active-icon');

        this.bubbles.forEach(bubble => bubble.selectBubble());
    }
}

class IconBubble {
    constructor(bubbleElement) {

        this.bubbleElement = bubbleElement;
    }

    selectBubble(){

        this.bubbleElement.style.display = 'flex';
    }
}



const icons = document.querySelectorAll('.icon').forEach(icon => {
    return new IconLink(icon);
});