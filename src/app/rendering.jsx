import Conditional from "./conditional"

export default function Rendering() {
    return (
        <div>
            <h1>
                <li>
                    here are the items for kvr
                </li>
            </h1>
            <ul>
                <Conditional
                    isHere={true}
                    item="toop" />
                <Conditional
                    isHere={false}
                    item="momo" />
                <Conditional
                    isHere={false}
                    item="swapnil" />
            </ul>
        </div>


    )


}
