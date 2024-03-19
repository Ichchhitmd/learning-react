import LogicImg from "./app/logicimg"
const person = {

    name: "Shrijan",
    theme: {
        backgroundColor: 'red',
        color: 'purple',
        width: '250px'

    }
}

export default function Logic() {
    return (
        <div>


            <div style={person.theme}>
                <h1>{person.name}</h1>\
                <LogicImg />

            </div>
        </div>
    )
}