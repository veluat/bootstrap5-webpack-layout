import '../scss/styles.scss'
import 'bootstrap'

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.getElementById('menuToggle')
  const fullscreenMenu = document.getElementById('fullscreenMenu')
  const closeMenuButton = document.getElementById('closeMenu')
  const video = document.getElementById('backgroundVideo')
  const image = document.getElementById('backgroundImage')
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link')

  // Функция для переключения меню
  function toggleMenu() {
    fullscreenMenu.classList.toggle('show')
  }

  // Обработчики для кнопок меню
  toggler.addEventListener('click', toggleMenu)
  closeMenuButton.addEventListener('click', toggleMenu)

  // Проверка воспроизведения видео
  function checkVideoPlayback() {
    if (window.innerWidth < 768) {
      video.style.display = 'none'
      image.style.display = 'block'
    } else {
      video.style.display = 'block'
      image.style.display = 'none'
    }
  }

  // Инициализация проверки видео
  checkVideoPlayback()
  window.addEventListener('resize', checkVideoPlayback)

  // Обработчик навигационных ссылок
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(nav => nav.classList.remove('active'))
      this.classList.add('active')
    })
  })
})