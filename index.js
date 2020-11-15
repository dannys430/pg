const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const claimModalButtons = document.querySelectorAll('[data-claim-button]')
const overlay = document.getElementById('overlay')

window.addEventListener('load', () => {
  if (localStorage.getItem('modalStatus') != 'shown') { // only show modal if claim button hasn't been clicked yet

    setTimeout(function() {
      const modal = document.getElementById('modal')
      const overlay = document.getElementById('overlay')
      modal.classList.add('active')
      overlay.classList.add('active')
    }, 5000)  // show modal 5 seconds after page loads
    
  }
})

// closing the modal and refreshing will continue to show modal again (it will only stop showing upon refresh if claim button is clicked)
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModalX(modal)
  })
})

claimModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    localStorage.setItem('modalStatus','shown')   // set modalStatus to shown if claim button is clicked
    const modal = button.closest('.modal')
    closeModalClaim(modal)
  })
})

// closes modal if x button is clicked
function closeModalX(modal) {
  if(modal == null) return
  modal.classList.add('hidden')
  overlay.classList.remove('active')
}

// slides modal down and away if claim button is clicked
function closeModalClaim(modal) {
  if(modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
