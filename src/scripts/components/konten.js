class detailContainer extends HTMLElement {
  connectedCallback() {
    this.id = this.getAttribute('id') || '';
    this.konten = this.getAttribute('konten') || '';
    this.detailTitle = this.getAttribute('title') || '';

    this.innerHTML = `
            <p class="detail-content-header">${this.detailTitle}:</p>
            <div id="${this.id}">
              ${this.konten}
            </div>
            
        `;
  }
}

customElements.define('detail-cont', detailContainer);