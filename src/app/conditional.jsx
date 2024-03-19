export default function Conditional({ item, isHere }) {


    return (
        <li>
            {item} {isHere ? '✔' : "❌"}
        </li>
    )

}


