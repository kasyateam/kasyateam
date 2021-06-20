var open = window.location.pathname

if (screen.width <= 850 && open == '/why-check'){
window.location.href = './k-feed'
}else if (screen.width <= 850 && open == '/feed'){
window.location.href = './main#feed'
}else if (screen.width <= 850 && open == '/update'){
window.location.href = './k-feed'
}else {
window.location.href = './device'
}
