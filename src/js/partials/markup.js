export default function (arr) {
    return arr.map(el => {
        const markup = `
        <li class="item"><p>${el.name}</p></li>
        `;
        return markup;
    })
}