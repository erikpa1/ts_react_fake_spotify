import * as React from "react"
import * as bs from "react-bootstrap"

import "./IconTextButton.css"

export class IconTextButton extends React.Component<any, any> {

    getImageStyle() {
        return {
            width: "20px"
        }
    }

    render() {
        return (
            <bs.Container className={"Backgroud"}>
                <bs.Row>

                    <bs.Col xs={1}>
                        <bs.Image src={this.props.icon} style={this.getImageStyle()}/>
                    </bs.Col>

                    <bs.Col className={"Text"}>
                        {this.props.lang}
                    </bs.Col>

                </bs.Row>


            </bs.Container>
        )
    }
}