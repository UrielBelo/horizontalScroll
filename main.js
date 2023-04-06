const $pages = document.getElementById('pages')
const $pointsButton = document.getElementById('pointsButton')
const $homepageButton = document.getElementById('homepageButton')
const $noticiasButton = document.getElementById('noticiasButton')
const $contatosButton = document.getElementById('contatosButton')

let floatingActive = false

$pointsButton.addEventListener('mousedown', () => {
    const radius = 80
    const floatingButtons = [...document.getElementsByClassName('floating')]

    if(!floatingActive){
        floatingActive = true
        let angleCounter = -1
        for(fb of floatingButtons){
            fb.classList.remove('floatingInactive')
            fb.classList.add('floatingActive')

            angleCounter++
            const angle = angleCounter / (floatingButtons.length - 1) * Math.PI
            const xPosition = (radius - Math.cos(angle) * radius) - 75
            const yPosition = (radius - Math.sin(angle) * radius) - 75
            fb.style.left = xPosition + 'px'
            fb.style.top = yPosition + 'px'
        }
    }else{
        floatingActive = false
        for(fb of floatingButtons){
            fb.classList.remove('floatingActive')
            fb.classList.add('floatingInactive')    

            fb.style.left = null
            fb.style.top = null
        }
    }
})
$homepageButton.addEventListener('mousedown', () => {
    $pages.scroll($pages.offsetWidth * 0, 0)
})
$noticiasButton.addEventListener('mousedown', () => {
    $pages.scroll($pages.offsetWidth * 1, 0)
})
$contatosButton.addEventListener('mousedown', () => {
    $pages.scroll($pages.offsetWidth * 2, 0)
})