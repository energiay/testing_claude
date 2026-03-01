function hexToRgba(hex, alpha = 0.2) {
    // Убираем # если есть
    hex = hex.replace('#', '');

    // Берем только первые 6 символов (игнорируем альфа-канал из hex)
    hex = hex.substring(0, 6);

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getStyle(val, gradient, opacity) {
    const colors = gradient.split(":")

    let fontColor = "#1A73E8"
    if (colors[0]) {
        fontColor = colors[0]
    }

    const progress = {
        width: val + "%",
        backgroundColor: hexToRgba(fontColor, opacity),
    }

    const value = {
        border: "1px solid " + hexToRgba(fontColor, opacity),
        left: "calc(" + val + "% - 15px)",
    }

    let hoverColor = "#E3F2FF33"
    if (colors[1]) {
        hoverColor = colors[1]
    }

    const hover = {
        '--hover-bg-color': hexToRgba(hoverColor)
    }

    return {
        progress,
        value,
        hover,
    }
}
