const Fetcher = {
  getTribes() {
    fetch('http://localhost:3000/tribes')
      .then(response => response.json())
      .then(data => data.forEach(DOM.addTribe, DOM))
  }
}

const DOM = {
  addTribe(tribe) {
    const tr = document.createElement('tr')
    tr.innerHTML = this.innerTribeHTML(tribe)
    document.querySelector('#customers > tbody').appendChild(tr)
  },

  // ++++++++++++++++++++++++++++++++++++++++++

  inputTribeHTML(tribe) {
    const input = document.querySelector('#tribeName')
    const data = `
    <td>${tribe.name}</td>
    <td>${tribe.leader}</td>
    <td>${tribe.member}</td>
    `
    input.push(tribe.name)
  },

  // ___________________________________

  innerTribeHTML(tribe) {
    const html = `
        <td>${tribe.name}</td>
        <td>${tribe.leader}</td>
        <td>${tribe.member}</td>
      `
    return html
  }
}
Fetcher.getTribes()
