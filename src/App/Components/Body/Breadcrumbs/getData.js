export default (get) => {
    let clickId
    return (id) => {
        // блокируем многократное нажатие
        // Пусть сработает только последний клик по кнопке
        if (clickId) {
            clearTimeout(clickId)
        }

        clickId = setTimeout(() => {
            get({userId: id})
        }, 400)
    }
}
