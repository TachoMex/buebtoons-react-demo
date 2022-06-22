import { Fragment } from "react"
import WebtoonList from "./WebtoonList"
import WebtoonSummary from "./WebtoonSummary"

const Menu = props => {
    return (
        <Fragment>
            <WebtoonSummary/>
            <WebtoonList/>
        </Fragment>
    )
}

export default Menu