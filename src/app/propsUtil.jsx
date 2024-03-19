export default function propsUtil(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imgId +
        size +
        '.jpeg'

    )

}

