import * as React from "react"
import * as bs from "react-bootstrap"


import {LeftNavPanel} from "./LeftNavPanel";
import {RightContentContainer} from "./RightContentContainer";

import "./MainScreen.css"


export default class MainLayout extends React.Component<any, any> {

    render() {
        return (
            <bs.Container className={"Main"}>
                <bs.Row>
                    <bs.Col xs={3}>
                        <LeftNavPanel/>
                    </bs.Col>

                    <bs.Col>
                        <RightContentContainer/>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
        )

    }

}