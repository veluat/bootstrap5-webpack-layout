import '../scss/styles.scss'
import {Collapse, Modal} from 'bootstrap'

document.addEventListener('DOMContentLoaded', function () {
  const modalElement = document.getElementById('callModal')
  if (modalElement) {
    new Modal(modalElement)
  }

  const collapseElement = document.getElementById('navbarNav')
  if (collapseElement) {
    new Collapse(collapseElement, {toggle: false})
  }

  const toggler = document.getElementById('menuToggle')
  const fullscreenMenu = document.getElementById('fullscreenMenu')
  const closeMenuButton = document.getElementById('closeMenu')
  const video = document.getElementById('backgroundVideo')
  const image = document.getElementById('backgroundImage')
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link')

  function toggleMenu() {
    fullscreenMenu.classList.toggle('show')
  }

  if (toggler && fullscreenMenu) {
    toggler.addEventListener('click', toggleMenu)
  }

  if (closeMenuButton && fullscreenMenu) {
    closeMenuButton.addEventListener('click', toggleMenu)
  }

  function checkVideoPlayback() {
    if (video && image) {
      if (window.innerWidth < 768) {
        video.style.display = 'none'
        image.style.display = 'block'
      } else {
        video.style.display = 'block'
        image.style.display = 'none'
      }
    }
  }

  checkVideoPlayback()
  window.addEventListener('resize', checkVideoPlayback)

  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'))
        this.classList.add('active')
      })
    })
  }
})